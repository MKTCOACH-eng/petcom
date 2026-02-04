'use client';

import { useState, useEffect } from 'react';
import Button from '@/shared/components/Button';
import { Heart } from 'lucide-react';

export default function HeroVideo() {
  // El video está temporalmente deshabilitado, así que marcamos como cargado
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Background image with gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-petcom-coral/20 to-petcom-yellow/20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Video for desktop - temporalmente deshabilitado por error de carga */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => console.log('Error loading video')}
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/Hero_video/202602040234.mp4" type="video/mp4" />
        </video> */}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-slide-in">
            <Heart className="w-5 h-5 text-petcom-coral fill-petcom-coral" />
            <span className="text-white text-sm font-medium">Pet Store Premium</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Todo para tu mascota.
            <br />
            <span className="text-petcom-yellow">Ahora con inteligencia.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
            Productos, servicios y recomendaciones pensadas para su bienestar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg hover:scale-105 transition-transform bg-petcom-yellow text-white hover:bg-yellow-500">
              Suscríbete
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-petcom-coral"
            >
              Explorar la tienda
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
