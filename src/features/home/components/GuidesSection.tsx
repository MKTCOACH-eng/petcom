'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getSupabase } from '@/shared/lib/supabase';

type GuideItem = {
  title: string;
  body?: string;
  image_url?: string;
  slug?: string;
};

export default function GuidesSection() {
  const [items, setItems] = useState<GuideItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const supabase = getSupabase();
        const { data } = await supabase
          .from('cms_blocks')
          .select('title, body, image_url, slug')
          .ilike('slug', 'guia-%')
          .limit(6);
        setItems(data || []);
      } catch {
        setItems([
          { title: 'Cómo elegir el mejor alimento', slug: 'guia-alimento' },
          { title: 'Higiene diaria sin estrés', slug: 'guia-higiene' },
          { title: 'Juguetes según edad y energía', slug: 'guia-juguetes' },
        ]);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Guías para cuidar mejor a tu mascota</h2>
        <p className="text-gray-600 mt-2">Contenido claro con imágenes grandes y CTAs a productos</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Cargando guías…</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((g, idx) => (
            <Link
              key={g.slug || `${g.title}-${idx}`}
              href={`/blog/${g.slug || 'guia'}`}
              className="group rounded-2xl overflow-hidden border bg-white"
            >
              <div className="relative aspect-[4/3]">
                {g.image_url ? (
                  <Image src={g.image_url} alt={g.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-petcom-coral transition-colors">
                  {g.title}
                </h3>
                {g.body && (
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{g.body}</p>
                )}
                <div className="mt-3">
                  <span className="inline-block px-4 py-2 rounded-xl bg-petcom-yellow text-white text-sm">
                    Ver productos relacionados
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}