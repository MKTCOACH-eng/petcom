'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Dog, Cat, Bird, Fish, Rabbit } from 'lucide-react';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const categories = {
  perros: {
    icon: Dog,
    label: 'Perros',
    subcategories: [
      { name: 'Alimento Seco', slug: 'alimento-seco' },
      { name: 'Alimento Húmedo', slug: 'alimento-humedo' },
      { name: 'Dietas Especiales', slug: 'dietas-especiales' },
      { name: 'Premios & Snacks', slug: 'premios-snacks' },
      { name: 'Suplementos', slug: 'suplementos' },
      { name: 'Higiene & Cuidado', slug: 'higiene-cuidado' },
      { name: 'Juguetes', slug: 'juguetes' },
      { name: 'Camas & Descanso', slug: 'camas-descanso' },
      { name: 'Accesorios', slug: 'accesorios' },
      { name: 'Transportadoras', slug: 'transportadoras' },
    ],
  },
  gatos: {
    icon: Cat,
    label: 'Gatos',
    subcategories: [
      { name: 'Alimento Seco', slug: 'alimento-seco' },
      { name: 'Alimento Húmedo', slug: 'alimento-humedo' },
      { name: 'Dietas Especiales', slug: 'dietas-especiales' },
      { name: 'Arena & Higiene', slug: 'arena-higiene' },
      { name: 'Premios', slug: 'premios' },
      { name: 'Rascadores', slug: 'rascadores' },
      { name: 'Juguetes', slug: 'juguetes' },
      { name: 'Camas', slug: 'camas' },
      { name: 'Accesorios', slug: 'accesorios' },
      { name: 'Transportadoras', slug: 'transportadoras' },
    ],
  },
  pequenas: {
    icon: Rabbit,
    label: 'Pequeñas Mascotas',
    subcategories: [
      { name: 'Alimento', slug: 'alimento' },
      { name: 'Heno & Snacks', slug: 'heno-snacks' },
      { name: 'Jaulas', slug: 'jaulas' },
      { name: 'Higiene', slug: 'higiene' },
      { name: 'Juguetes', slug: 'juguetes' },
      { name: 'Accesorios', slug: 'accesorios' },
    ],
  },
  aves: {
    icon: Bird,
    label: 'Aves',
    subcategories: [
      { name: 'Alimento', slug: 'alimento' },
      { name: 'Snacks', slug: 'snacks' },
      { name: 'Jaulas', slug: 'jaulas' },
      { name: 'Higiene', slug: 'higiene' },
      { name: 'Accesorios', slug: 'accesorios' },
    ],
  },
  peces: {
    icon: Fish,
    label: 'Peces',
    subcategories: [
      { name: 'Alimento', slug: 'alimento' },
      { name: 'Acuarios', slug: 'acuarios' },
      { name: 'Filtros', slug: 'filtros' },
      { name: 'Decoración', slug: 'decoracion' },
      { name: 'Cuidado del Agua', slug: 'cuidado-agua' },
    ],
  },
};

export function Navigation({ mobile = false, onClose }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  if (mobile) {
    return (
      <nav className="space-y-2">
        {Object.entries(categories).map(([key, category]) => {
          const Icon = category.icon;
          const isOpen = openDropdown === key;

          return (
            <div key={key} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => setOpenDropdown(isOpen ? null : key)}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-petcom-coral" />
                  <span className="font-medium text-gray-900">{category.label}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pl-7 pb-3 space-y-2">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/productos/${key}/${sub.slug}`}
                      onClick={handleLinkClick}
                      className="block py-2 text-sm text-gray-600 hover:text-petcom-coral transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Servicios Link */}
        <Link
          href="/servicios"
          onClick={handleLinkClick}
          className="block py-3 font-medium text-gray-900 hover:text-petcom-coral transition-colors"
        >
          Servicios
        </Link>
      </nav>
    );
  }

  // Desktop Navigation
  return (
    <nav className="flex items-center space-x-6">
      {Object.entries(categories).map(([key, category]) => {
        const Icon = category.icon;

        return (
          <div
            key={key}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(key)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center space-x-1 py-2 font-medium text-gray-700 hover:text-petcom-coral transition-colors group">
              <Icon className="w-4 h-4" />
              <span>{category.label}</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>

            {/* Dropdown Menu */}
            {openDropdown === key && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/productos/${key}/${sub.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-petcom-coral/5 hover:text-petcom-coral transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Servicios Link */}
      <Link
        href="/servicios"
        className="font-medium text-gray-700 hover:text-petcom-coral transition-colors"
      >
        Servicios
      </Link>
    </nav>
  );
}
