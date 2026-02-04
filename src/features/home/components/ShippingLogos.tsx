'use client';

import Image from 'next/image';

export default function ShippingLogos() {
  // Placeholder shipping companies
  const shippingCompanies = [
    { name: 'DHL', logo: '/logos/dhl.svg' },
    { name: 'FedEx', logo: '/logos/fedex.svg' },
    { name: 'UPS', logo: '/logos/ups.svg' },
    { name: 'Estafeta', logo: '/logos/estafeta.svg' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enviamos con las mejores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las paqueterías más confiables para garantizar que tu pedido llegue seguro y a tiempo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {shippingCompanies.map((company, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-16 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                {/* Placeholder - usuario debe añadir logos reales */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-gray-700">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '99%', label: 'Entregas a tiempo' },
            { value: '50K+', label: 'Pedidos enviados' },
            { value: '24/7', label: 'Soporte' },
            { value: '5⭐', label: 'Calificación' },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <p className="text-3xl md:text-4xl font-bold text-petcom-coral mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
