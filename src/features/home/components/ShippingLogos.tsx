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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Entregamos con las mejores paqueterías
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {shippingCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6"
            >
              <div className="relative w-full h-16 grayscale opacity-70">
                {/* Placeholder - usuario debe añadir logos reales */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-xl font-bold text-gray-500">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
