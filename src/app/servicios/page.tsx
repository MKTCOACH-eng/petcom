export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Servicios · PETCOM',
};

import { getSupabase } from '@/shared/lib/supabase';

export default async function Page() {
  let title = 'Servicios';
  let body = 'Muy pronto: servicios para el bienestar de tu mascota.';
  try {
    const supabase = getSupabase();
    const { data } = await supabase.from('cms_blocks').select('title, body').eq('slug', 'servicios').single();
    if (data?.title) title = data.title as string;
    if (data?.body) body = data.body as string;
  } catch {}

  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
      <p className="text-gray-600">{body}</p>
    </main>
  );
}