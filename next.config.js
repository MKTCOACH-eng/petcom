/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para producción en Vercel
  output: 'standalone',
  
  // Configuración de imágenes para dominios externos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yxdamvwvnbkukcyzcemx.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Optimización de paquetes
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Configuración de TypeScript
  typescript: {
    // Ignorar errores de TypeScript durante el build (temporalmente)
    ignoreBuildErrors: false,
  },
  
  // Configuración de ESLint
  eslint: {
    // Ignorar errores de ESLint durante el build (temporalmente)
    ignoreDuringBuilds: false,
  },
  
  // Configuración de headers para CORS y seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;