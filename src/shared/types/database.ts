// Database types generated from Supabase schema

export type Species = 'perros' | 'gatos' | 'pequenas' | 'aves' | 'peces' | 'todas';

export interface Category {
  id: string;
  name: string;
  slug: string;
  species: Species;
  parent_id: string | null;
  description: string | null;
  image_url: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  price: number;
  compare_at_price: number | null;
  category_id: string | null;
  species: Species;
  stock: number;
  sku: string | null;
  image_url: string | null;
  images: string[];
  brand: string | null;
  weight_kg: number | null;
  tags: string[];
  meta_title: string | null;
  meta_description: string | null;
  is_active: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt: string | null;
  display_order: number;
  created_at: string;
}

// Extended types with relations
export interface ProductWithCategory extends Product {
  category_name: string | null;
  category_slug: string | null;
}

// DTOs (Data Transfer Objects)
export interface CreateProductDTO {
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  price: number;
  compare_at_price?: number;
  category_id?: string;
  species: Species;
  stock?: number;
  sku?: string;
  image_url?: string;
  images?: string[];
  brand?: string;
  weight_kg?: number;
  tags?: string[];
  is_featured?: boolean;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {
  id: string;
}

export interface ProductFilters {
  species?: Species;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  featured?: boolean;
  search?: string;
  tags?: string[];
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: 'price' | 'name' | 'created_at';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
