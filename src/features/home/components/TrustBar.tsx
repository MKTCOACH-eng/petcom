'use client';

import { Shield, Truck, Award } from 'lucide-react';

export default function TrustBar() {
  const features = [
    {
      icon: Shield,
      title: 'Pago Seguro',
      description: '100% protegido',
    },
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'En pedidos +$500',
    },
    {
      icon: Award,
      title: 'Garantía Total',
      description: 'Satisfacción garantizada',
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-petcom-blue/10 backdrop-blur-md border-b border-petcom-blue/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-petcom-blue/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-petcom-blue" />
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
