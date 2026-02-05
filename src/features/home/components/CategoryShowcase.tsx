'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const iconsBucket = process.env.NEXT_PUBLIC_CATEGORY_ICONS_BUCKET || 'ICONOS';
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const base = `${supabaseUrl}/storage/v1/object/public/${iconsBucket}`;
  const slugIconMap: Record<string, string> = {
    'alimento-seco': `${base}/categories/alimento-seco.png`,
    'alimento-humedo': `${base}/categories/alimento-humedo.png`,
    'dietas-especiales': `${base}/categories/dietas-especiales.png`,
    'premios-snacks': `${base}/categories/premios-snacks.png`,
    'suplementos': `${base}/categories/suplementos.png`,
    'higiene-cuidado': `${base}/categories/higiene-cuidado.png`,
    'arena-higiene': `${base}/categories/arena-higiene.png`,
    'rascadores': `${base}/categories/rascadores.png`,
    'juguetes': `${base}/categories/juguetes.png`,
    'camas': `${base}/categories/camas.png`,
    'camas-descanso': `${base}/categories/camas-descanso.png`,
    'accesorios': `${base}/categories/accesorios.png`,
    'transportadoras': `${base}/categories/transportadoras.png`,
    'acuarios': `${base}/categories/acuarios.png`,
    'filtros': `${base}/categories/filtros.png`,
    'decoracion': `${base}/categories/decoracion.png`,
    'cuidado-agua': `${base}/categories/cuidado-agua.png`,
    'alimento': `${base}/categories/alimento.png`,
    // variantes por especie
    'alimento-seco-gatos': `${base}/categories/alimento-seco.png`,
    'alimento-humedo-gatos': `${base}/categories/alimento-humedo.png`,
    'juguetes-gatos': `${base}/categories/juguetes.png`,
  };

  const iconUrlFor = (cat: CategoryItem) => {
    if (cat.image_url) return cat.image_url;
    if (slugIconMap[cat.slug]) return slugIconMap[cat.slug];
    const candidates = [
      `${base}/categories/${cat.species}/${cat.slug}.png`,
      `${base}/${cat.species}/${cat.slug}.png`,
      `${base}/${cat.slug}.png`,
    ];
    return candidates[0];
  };

  const SAMPLE_CATEGORIES: CategoryItem[] = [
    { name: 'Alimento seco', slug: 'alimento-seco', species: 'perros' },
    { name: 'Alimento húmedo', slug: 'alimento-humedo', species: 'perros' },
    { name: 'Juguetes', slug: 'juguetes', species: 'perros' },
    { name: 'Higiene & cuidado', slug: 'higiene-cuidado', species: 'perros' },
    { name: 'Arena & higiene', slug: 'arena-higiene', species: 'gatos' },
    { name: 'Rascadores', slug: 'rascadores', species: 'gatos' },
    { name: 'Suplementos', slug: 'suplementos', species: 'perros' },
    { name: 'Accesorios', slug: 'accesorios', species: 'perros' },
  ];

  useEffect(() => {
    const run = async () => {
      const isDemo = searchParams.get('demo') === '1';
      if (isDemo) {
        setItems(SAMPLE_CATEGORIES);
        setLoading(false);
        return;
      }
      try {
        const supabase = getSupabase();
        const { data } = await supabase
          .from('categories')
          .select('name, slug, species, image_url')
          .limit(8);
        setItems(data && data.length > 0 ? data : SAMPLE_CATEGORIES);
      } catch {
        setItems(SAMPLE_CATEGORIES);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [searchParams]);

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
              className="group relative overflow-hidden rounded-2xl border bg-white hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square w-full flex items-center justify-center bg-gray-50">
                <Image
                  src={iconUrlFor(cat)}
                  alt={cat.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <div className="text-gray-900 font-semibold">{cat.name}</div>
                <div className="text-gray-500 text-sm capitalize">{cat.species}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}