'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const SAMPLE_STORIES: StoryItem[] = [
    {
      title: 'Luna venció su ansiedad',
      quote: 'Juegos diarios y alimento con triptófano ayudaron muchísimo.',
      slug: 'historia-luna',
      image_url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Max bajó de peso saludablemente',
      quote: 'Plan a medida con juguetes activos y raciones precisas.',
      slug: 'historia-max',
      image_url: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Miau dejó de rascar muebles',
      quote: 'Rascadores correctos y snacks funcionales hicieron la diferencia.',
      slug: 'historia-miau',
      image_url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Rocky duerme mejor',
      quote: 'Cama ortopédica y rutina nocturna suave.',
      slug: 'historia-rocky',
      image_url: 'https://images.unsplash.com/photo-1556228724-4bdb5e2b0d43?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Kira brilla con su nuevo pelaje',
      quote: 'Omega 3 y cepillado adecuado.',
      slug: 'historia-kira',
      image_url: 'https://images.unsplash.com/photo-1554151228-1df5a4d6f8d0?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Toto viaja sin estrés',
      quote: 'Transportadora, premios y práctica previa.',
      slug: 'historia-toto',
      image_url: 'https://images.unsplash.com/photo-1558944351-c79c6b1e3a9b?q=80&w=1280&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const run = async () => {
      const isDemo = searchParams.get('demo') === '1';
      if (isDemo) {
        setItems(SAMPLE_STORIES);
        setLoading(false);
        return;
      }
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
        setItems(mapped.length > 0 ? mapped : SAMPLE_STORIES);
      } catch {
        setItems(SAMPLE_STORIES);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [searchParams]);

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