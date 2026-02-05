'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getSupabase } from '@/shared/lib/supabase';

type StoryItem = {
  title: string;
  quote?: string;
  image_url?: string;
  owner?: string;
  slug?: string;
};

export default function RealStories() {
  const [items, setItems] = useState<StoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const supabase = getSupabase();
        const { data } = await supabase
          .from('cms_blocks')
          .select('title, body, image_url, slug')
          .ilike('slug', 'historia-%')
          .limit(6);
        const mapped = (data || []).map((d: any) => ({
          title: d.title,
          quote: d.body,
          image_url: d.image_url,
          slug: d.slug,
        }));
        setItems(mapped);
      } catch {
        setItems([
          { title: 'Luna logró vencer su ansiedad', quote: 'Con juegos diarios y alimentación correcta', slug: 'historia-luna' },
          { title: 'Max bajó de peso saludablemente', quote: 'Plan a medida y juguetes activos', slug: 'historia-max' },
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
        <h2 className="text-2xl md:text-3xl font-bold">Historias reales</h2>
        <p className="text-gray-600 mt-2">Resultados visibles con fotos de mascotas reales</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Cargando historias…</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <div key={s.slug || `${s.title}-${idx}`} className="rounded-2xl overflow-hidden border bg-white">
              <div className="relative aspect-[4/3]">
                {s.image_url ? (
                  <Image src={s.image_url} alt={s.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                {s.quote && (
                  <p className="text-sm text-gray-600 mt-1">“{s.quote}”</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}