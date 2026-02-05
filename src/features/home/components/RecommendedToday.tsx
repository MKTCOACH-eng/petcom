'use client';

import { useEffect, useState } from 'react';
import { ProductGrid } from '@/features/products/components';
import { ProductService } from '@/features/products/services/productService';
import type { ProductWithCategory } from '@/shared/types';

export default function RecommendedToday() {
  const [items, setItems] = useState<ProductWithCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const { data } = await ProductService.getProducts(
          { species: 'todas' },
          { pageSize: 4, sortBy: 'created_at', sortOrder: 'desc' }
        );
        setItems(data);
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

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