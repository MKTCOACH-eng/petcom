import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductGrid } from '@/features/products/components';
import { ProductService } from '@/features/products/services/productService';

export const dynamic = 'force-dynamic';

interface CategoryPageProps {
  params: {
    species: string;
    category: string;
  };
  searchParams: {
    page?: string;
    sort?: string;
  };
}

//

// Generate metadata
export async function generateMetadata(
  { params }: CategoryPageProps
): Promise<Metadata> {
  const categoryName = params.category.replace(/-/g, ' ');
  const speciesName = params.species.charAt(0).toUpperCase() + params.species.slice(1);

  return {
    title: `${categoryName} para ${speciesName} | PETCOM`,
    description: `Encuentra los mejores productos de ${categoryName} para ${speciesName}. Calidad premium a los mejores precios.`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const page = parseInt(searchParams.page || '1');
  const sortBy = (searchParams.sort as any) || 'created_at';

  try {
    // Fetch products for this category
    const result = await ProductService.getProducts(
      {
        species: params.species as any,
        // In a real implementation, we'd filter by category slug
        // For now, we filter by species
      },
      {
        page,
        pageSize: 20,
        sortBy,
        sortOrder: 'desc',
      }
    );

    const { data: products, pagination } = result;

    // Format category name for display
    const categoryName = params.category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const speciesName = params.species.charAt(0).toUpperCase() + params.species.slice(1);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="hover:text-petcom-coral transition-colors cursor-pointer">
                    {speciesName}
                  </span>
                  {' > '}
                  <span className="font-medium text-gray-900">{categoryName}</span>
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {categoryName}
                </h1>
                <p className="text-gray-600 mt-2">
                  {pagination.total} productos encontrados
                </p>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-gray-600">
                  Ordenar por:
                </label>
                <select
                  id="sort"
                  defaultValue={sortBy}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-petcom-yellow"
                  onChange={(e) => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('sort', e.target.value);
                    window.location.href = url.toString();
                  }}
                >
                  <option value="created_at">Más recientes</option>
                  <option value="price">Precio: Menor a Mayor</option>
                  <option value="name">Nombre: A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductGrid
            products={products}
            emptyMessage={`No hay productos disponibles en ${categoryName}`}
          />

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {/* Previous Button */}
              {page > 1 && (
                <a
                  href={`?page=${page - 1}${sortBy !== 'created_at' ? `&sort=${sortBy}` : ''}`}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Anterior
                </a>
              )}

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <a
                      key={pageNum}
                      href={`?page=${pageNum}${sortBy !== 'created_at' ? `&sort=${sortBy}` : ''}`}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                        pageNum === page
                          ? 'bg-petcom-coral text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </a>
                  );
                })}
              </div>

              {/* Next Button */}
              {page < pagination.totalPages && (
                <a
                  href={`?page=${page + 1}${sortBy !== 'created_at' ? `&sort=${sortBy}` : ''}`}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Siguiente
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading category page:', error);
    notFound();
  }
}
