'use client';

export default function PetcomScore() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-2xl bg-gradient-to-r from-petcom-purple/15 to-petcom-blue/10 border border-gray-100 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-white shadow flex items-center justify-center">
            <div className="text-3xl font-bold text-green-600">92/100</div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">Petcom Score</h3>
            <p className="text-gray-700 mt-2">
              Evaluación propia basada en calidad, ingredientes, reseñas y adecuación para mascotas similares.
            </p>
            <p className="text-gray-600 mt-1">
              Te ayuda a decidir rápido con confianza. Único en el mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}