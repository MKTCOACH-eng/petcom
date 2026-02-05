'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getSupabase } from '@/shared/lib/supabase';

type CategoryItem = {
  name: string;
  slug: string;
  species: string;
  image_url?: string;
};

export default function CategoryShowcase() {
  const [items, setItems] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const iconsBucket = process.env.NEXT_PUBLIC_CATEGORY_ICONS_BUCKET || 'ICONOS';
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const iconUrlFor = (cat: CategoryItem) => {
    if (cat.image_url) return cat.image_url;
    const base = `${supabaseUrl}/storage/v1/object/public/${iconsBucket}`;
    const candidates = [
      `${base}/categories/${cat.species}/${cat.slug}.png`,
      `${base}/${cat.species}/${cat.slug}.png`,
      `${base}/${cat.slug}.png`,
    ];
    return candidates[0];
  };

  useEffect(() => {
    const run = async () => {
      try {
        const supabase = getSupabase();
        const { data } = await supabase
          .from('categories')
          .select('name, slug, species, image_url')
          .limit(8);
        setItems(data || []);
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
        <h2 className="text-2xl md:text-3xl font-bold">Explora por categoría</h2>
        <p className="text-gray-600 mt-2">Encuentra rápido lo que necesita tu mascota</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Cargando categorías…</div>
      ) : items.length === 0 ? (
        <div className="text-center text-gray-600">Pronto verás categorías destacadas aquí</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((cat) => (
            <Link
              key={`${cat.species}-${cat.slug}`}
              href={`/productos/${cat.species}/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl border bg-white"
            >
              <div className="aspect-[4/5] w-full">
                <Image
                  src={iconUrlFor(cat)}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-semibold text-lg">{cat.name}</div>
                <div className="text-white/80 text-sm capitalize">{cat.species}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}