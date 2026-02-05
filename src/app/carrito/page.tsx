'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  qty: number;
};

export default function Page() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('petcom_cart');
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setLoading(false);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('petcom_cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  const subtotal = useMemo(() => items.reduce((acc, it) => acc + it.price * it.qty, 0), [items]);

  const updateQty = (id: string, qty: number) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Carrito</h1>
      {loading ? (
        <div className="text-gray-600">Cargando…</div>
      ) : items.length === 0 ? (
        <div className="text-gray-600">Tu carrito está vacío por ahora.</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(it => (
              <div key={it.id} className="flex items-center gap-4 p-4 border rounded-xl">
                {it.image && (
                  <Image src={it.image} alt={it.name} width={80} height={80} className="object-cover rounded-lg" />
                )}
                <div className="flex-1">
                  <div className="font-medium">{it.name}</div>
                  <div className="text-gray-600">${it.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(it.id, it.qty - 1)} className="px-3 py-2 rounded-lg border">-</button>
                  <input
                    type="number"
                    min={1}
                    value={it.qty}
                    onChange={e => updateQty(it.id, parseInt(e.target.value || '1'))}
                    className="w-16 text-center rounded-lg border"
                  />
                  <button onClick={() => updateQty(it.id, it.qty + 1)} className="px-3 py-2 rounded-lg border">+</button>
                </div>
                <button onClick={() => removeItem(it.id)} className="ml-4 px-3 py-2 rounded-lg border text-red-600">Quitar</button>
              </div>
            ))}
          </div>
          <div className="p-4 border rounded-xl h-fit">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="block mt-4 w-full text-center px-4 py-3 rounded-xl bg-petcom-yellow text-white">
              Pagar
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}