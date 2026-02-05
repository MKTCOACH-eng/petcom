/** @type {import('next').NextConfig} */
const nextConfig = {
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
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;