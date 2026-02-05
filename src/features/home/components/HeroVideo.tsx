'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/shared/components/Button';
import { Heart } from 'lucide-react';

export default function HeroVideo() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const logoSrc =
    process.env.NEXT_PUBLIC_LOGO_URL ||
    'https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/logo%20blanco.png';

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-petcom-coral/20 to-petcom-yellow/20`}
          style={
            isVideoError
              ? {
                  backgroundImage:
                    'url(https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/petcom-images/WhatsApp%20Image%202026-02-04%20at%2021.28.59.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : undefined
          }
        />

        <video
          src="https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/Hero_video/202602040234.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          onCanPlay={() => {
            setIsVideoReady(true);
            setIsVideoError(false);
          }}
          onError={() => {
            setIsVideoError(true);
            setIsVideoReady(false);
          }}
          className={`hidden md:block w-full h-full object-cover transition-opacity duration-700 ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 animate-slide-in">
            <Image
              src={logoSrc}
              alt="PETCOM"
              width={288}
              height={96}
              className="mx-auto object-contain drop-shadow-md lg:scale-[1.2]"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Bienestar personalizado para tu mascota.
            <br />
            <span className="text-petcom-yellow">Selección curada con datos y expertos.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
            Una tienda que entiende a tu mascota y te recomienda lo mejor para su etapa, tamaño y estilo de vida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg hover:scale-105 transition-transform bg-petcom-yellow text-white hover:bg-yellow-500">
              Ver categorías
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-petcom-coral"
            >
              Explorar productos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
