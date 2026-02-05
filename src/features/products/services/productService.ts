import { getSupabase } from '@/shared/lib/supabase';
import type {
  Product,
  ProductWithCategory,
  ProductFilters,
  PaginationParams,
  PaginatedResponse,
  CreateProductDTO,
  UpdateProductDTO,
} from '@/shared/types';

export class ProductService {
  /**
   * Get all products with optional filters and pagination
   */
  static async getProducts(
    filters: ProductFilters = {},
    pagination: PaginationParams = {}
  ): Promise<PaginatedResponse<ProductWithCategory>> {
    const {
      species,
      category,
      minPrice,
      maxPrice,
      inStock,
      featured,
      search,
      tags,
    } = filters;

    const {
      page = 1,
      pageSize = 20,
      sortBy = 'created_at',
      sortOrder = 'desc',
    } = pagination;

    const supabase = getSupabase();
    let query = supabase
      .from('products_with_category')
      .select('*', { count: 'exact' });

    // Apply filters
    if (species && species !== 'todas') {
      query = query.eq('species', species);
    }

    if (category) {
      query = query.eq('category_slug', category);
    }

    if (minPrice !== undefined) {
      query = query.gte('price', minPrice);
    }

    if (maxPrice !== undefined) {
      query = query.lte('price', maxPrice);
    }

    if (inStock) {
      query = query.gt('stock', 0);
    }

    if (featured !== undefined) {
      query = query.eq('is_featured', featured);
    }

    if (search) {
      query = query.textSearch('search_vector', search, {
        type: 'websearch',
        config: 'spanish',
      });
    }

    if (tags && tags.length > 0) {
      query = query.contains('tags', tags);
    }

    // Only active products
    query = query.eq('is_active', true);

    // Sorting
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });

    // Pagination
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }

    return {
      data: data || [],
      pagination: {
        page,
        pageSize,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / pageSize),
      },
    };
  }

  /**
   * Get a single product by slug
   */
  static async getProductBySlug(slug: string): Promise<ProductWithCategory | null> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('products_with_category')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Product not found
      }
      console.error('Error fetching product:', error);
      throw new Error('Failed to fetch product');
    }

    return data;
  }

  /**
   * Get featured products
   */
  static async getFeaturedProducts(limit = 8): Promise<Product[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('featured_products')
      .select('*')
      .limit(limit);

    if (error) {
      console.error('Error fetching featured products:', error);
      throw new Error('Failed to fetch featured products');
    }

    return data || [];
  }

  /**
   * Get products by category
   */
  static async getProductsByCategory(
    categorySlug: string,
    pagination: PaginationParams = {}
  ): Promise<PaginatedResponse<ProductWithCategory>> {
    return this.getProducts({ category: categorySlug }, pagination);
  }

  /**
   * Get products by species
   */
  static async getProductsBySpecies(
    species: string,
    pagination: PaginationParams = {}
  ): Promise<PaginatedResponse<ProductWithCategory>> {
    return this.getProducts(
      { species: species as any },
      pagination
    );
  }

  /**
   * Search products
   */
  static async searchProducts(
    searchTerm: string,
    pagination: PaginationParams = {}
  ): Promise<PaginatedResponse<ProductWithCategory>> {
    return this.getProducts({ search: searchTerm }, pagination);
  }

  /**
   * Get related products (same category or species)
   */
  static async getRelatedProducts(
    productId: string,
    limit = 4
  ): Promise<Product[]> {
    // First get the product
    const supabase = getSupabase();
    const { data: product } = await supabase
      .from('products')
      .select('category_id, species')
      .eq('id', productId)
      .single();

    if (!product) return [];

    // Get related products
    let query = supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .neq('id', productId)
      .limit(limit);

    // Prefer same category, fallback to same species
    if (product.category_id) {
      query = query.eq('category_id', product.category_id);
    } else {
      query = query.eq('species', product.species);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching related products:', error);
      return [];
    }

    return data || [];
  }

  /**
   * Create a new product (admin only)
   */
  static async createProduct(productData: CreateProductDTO): Promise<Product> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('products')
      .insert(productData)
      .select()
      .single();

    if (error) {
      console.error('Error creating product:', error);
      throw new Error('Failed to create product');
    }

    return data;
  }

  /**
   * Update a product (admin only)
   */
  static async updateProduct(productData: UpdateProductDTO): Promise<Product> {
    const { id, ...updates } = productData;

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating product:', error);
      throw new Error('Failed to update product');
    }

    return data;
  }

  /**
   * Delete a product (soft delete - set is_active to false)
   */
  static async deleteProduct(productId: string): Promise<void> {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('products')
      .update({ is_active: false })
      .eq('id', productId);

    if (error) {
      console.error('Error deleting product:', error);
      throw new Error('Failed to delete product');
    }
  }
}
