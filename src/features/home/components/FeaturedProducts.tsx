'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductGrid } from '@/features/products/components';
import { ProductService } from '@/features/products/services/productService';
import type { ProductWithCategory } from '@/shared/types';

export default function FeaturedProducts() {
  const [items, setItems] = useState<ProductWithCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const SAMPLE_PRODUCTS: ProductWithCategory[] = [
    {
      id: 'sample-1',
      name: 'Alimento Premium Adulto 12kg',
      slug: 'alimento-premium-adulto-12kg',
      description: null,
      short_description: 'Ingredientes de alta calidad para adultos.',
      price: 1299,
      compare_at_price: 1499,
      category_id: null,
      species: 'perros',
      stock: 10,
      sku: null,
      image_url: 'https://images.unsplash.com/photo-1596495577886-d3879b3f6cc3?q=80&w=1280&auto=format&fit=crop',
      images: [],
      brand: 'PETCOM',
      weight_kg: 12,
      tags: ['adulto', 'premium'],
      meta_title: null,
      meta_description: null,
      is_active: true,
      is_featured: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      category_name: 'Alimento',
      category_slug: 'alimento-seco',
    },
    {
      id: 'sample-2',
      name: 'Rascador Deluxe',
      slug: 'rascador-deluxe',
      description: null,
      short_description: 'Para gatos activos, resistente y cómodo.',
      price: 899,
      compare_at_price: null,
      category_id: null,
      species: 'gatos',
      stock: 7,
      sku: null,
      image_url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1280&auto=format&fit=crop',
      images: [],
      brand: 'PETCOM',
      weight_kg: null,
      tags: ['hogar', 'juego'],
      meta_title: null,
      meta_description: null,
      is_active: true,
      is_featured: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      category_name: 'Accesorios',
      category_slug: 'rascadores',
    },
  ];

  useEffect(() => {
    const run = async () => {
      const isDemo = searchParams.get('demo') === '1';
      if (isDemo) {
        setItems(SAMPLE_PRODUCTS);
        setLoading(false);
        return;
      }
      try {
        const { data } = await ProductService.getProducts(
          { featured: true },
          { pageSize: 8 }
        );
        setItems(data && data.length > 0 ? data : SAMPLE_PRODUCTS);
      } catch {
        setItems(SAMPLE_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [searchParams]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Favoritos de nuestra comunidad</h2>
        <p className="text-gray-600 mt-2">Productos destacados por calidad y preferencia</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Cargando productos…</div>
      ) : (
        <ProductGrid products={items} emptyMessage="Pronto verás productos destacados aquí" />
      )}
    </section>
  );
}