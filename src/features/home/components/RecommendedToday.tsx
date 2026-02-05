'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductGrid } from '@/features/products/components';
import { ProductService } from '@/features/products/services/productService';
import type { ProductWithCategory } from '@/shared/types';

export default function RecommendedToday() {
  const [items, setItems] = useState<ProductWithCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const SAMPLE_RECOMMENDED: ProductWithCategory[] = [
    {
      id: 'rec-1',
      name: 'Snack funcional piel sana',
      slug: 'snack-piel-sana',
      description: null,
      short_description: 'Con omega 3 y biotina.',
      price: 199,
      compare_at_price: null,
      category_id: null,
      species: 'perros',
      stock: 20,
      sku: null,
      image_url: 'https://images.unsplash.com/photo-1619983081558-0e2bd9732a71?q=80&w=1280&auto=format&fit=crop',
      images: [],
      brand: 'PETCOM',
      weight_kg: null,
      tags: ['snacks', 'piel'],
      meta_title: null,
      meta_description: null,
      is_active: true,
      is_featured: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      category_name: 'Premios',
      category_slug: 'premios-snacks',
    },
    {
      id: 'rec-2',
      name: 'Arena aglomerante sin fragancia',
      slug: 'arena-aglomerante-sin-fragancia',
      description: null,
      short_description: 'Control de olores y fácil limpieza.',
      price: 249,
      compare_at_price: null,
      category_id: null,
      species: 'gatos',
      stock: 15,
      sku: null,
      image_url: 'https://images.unsplash.com/photo-1517341721418-9b2fb121d9a2?q=80&w=1280&auto=format&fit=crop',
      images: [],
      brand: 'PETCOM',
      weight_kg: null,
      tags: ['arena', 'higiene'],
      meta_title: null,
      meta_description: null,
      is_active: true,
      is_featured: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      category_name: 'Arena & Higiene',
      category_slug: 'arena-higiene',
    },
  ];

  useEffect(() => {
    const run = async () => {
      const isDemo = searchParams.get('demo') === '1';
      if (isDemo) {
        setItems(SAMPLE_RECOMMENDED);
        setLoading(false);
        return;
      }
      try {
        const { data } = await ProductService.getProducts(
          { species: 'todas' },
          { pageSize: 4, sortBy: 'created_at', sortOrder: 'desc' }
        );
        setItems(data && data.length > 0 ? data : SAMPLE_RECOMMENDED);
      } catch {
        setItems(SAMPLE_RECOMMENDED);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [searchParams]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Recomendado para hoy</h2>
        <p className="text-gray-600 mt-2">Sugerencias suaves según lo más nuevo y popular</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Cargando sugerencias…</div>
      ) : (
        <ProductGrid products={items} emptyMessage="Pronto verás recomendaciones aquí" />
      )}
    </section>
  );
}