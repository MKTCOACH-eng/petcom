'use client';

import { useState } from 'react';
import { z } from 'zod';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import { supabase } from '@/shared/lib/supabase';
import { Mail, CheckCircle } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email('Por favor ingresa un email válido'),
});

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate email
      emailSchema.parse({ email });

      // Save to Supabase (tabla: email_subscriptions)
      const { error: supabaseError } = await supabase
        .from('email_subscriptions')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('Este email ya está registrado');
        } else {
          setError('Hubo un error. Intenta de nuevo.');
        }
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError('Hubo un error. Intenta de nuevo.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-petcom-coral/10 via-petcom-yellow/5 to-petcom-purple/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-petcom-yellow/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-petcom-yellow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recibe tips de cuidado para tu mascota
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Únete a nuestra comunidad y recibe consejos, ofertas exclusivas y novedades directamente en tu email
          </p>
        </div>

        {isSuccess ? (
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-petcom animate-slide-up">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ¡Gracias por suscribirte!
              </h3>
              <p className="text-gray-600">
                Revisa tu email para confirmar tu suscripción
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-2xl p-2 shadow-petcom-lg">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                className="flex-1 border-0 shadow-none focus:ring-0"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? 'Enviando...' : 'Suscribirme'}
              </Button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-red-500 text-center">{error}</p>
            )}
            <p className="mt-4 text-xs text-gray-500 text-center">
              Al suscribirte, aceptas recibir emails de PETCOM. Puedes darte de baja en cualquier momento.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
