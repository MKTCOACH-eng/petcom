import HeroVideo from '@/features/home/components/HeroVideo';
import TrustBar from '@/features/home/components/TrustBar';
import CategoryShowcase from '@/features/home/components/CategoryShowcase';
import FeaturedProducts from '@/features/home/components/FeaturedProducts';
import RecommendedToday from '@/features/home/components/RecommendedToday';
import PetcomScore from '@/features/home/components/PetcomScore';
import GuidesSection from '@/features/home/components/GuidesSection';
import RealStories from '@/features/home/components/RealStories';
import { Suspense } from 'react';
import ShippingLogos from '@/features/home/components/ShippingLogos';
import EmailSubscription from '@/features/home/components/EmailSubscription';
import ChatbotWidget from '@/features/chatbot/components/ChatbotWidget';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Video */}
      <HeroVideo />
      
      {/* Trust Bar - Sticky */}
      <TrustBar />
      
      {/* Category Showcase - Visual Tiles */}
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">Cargando categorías…</div>}>
        <CategoryShowcase />
      </Suspense>

      {/* Petcom Score - Diferencial */}
      <PetcomScore />

      {/* Featured Products */}
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">Cargando productos…</div>}>
        <FeaturedProducts />
      </Suspense>

      {/* Recommended Today */}
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">Cargando recomendaciones…</div>}>
        <RecommendedToday />
      </Suspense>

      {/* Guides Section */}
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">Cargando guías…</div>}>
        <GuidesSection />
      </Suspense>

      {/* Real Stories */}
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">Cargando historias…</div>}>
        <RealStories />
      </Suspense>
      
      {/* Shipping Companies Logos */}
      <ShippingLogos />
      
      {/* Email Subscription */}
      <EmailSubscription />
      
      {/* Chatbot Widget - Floating */}
      <ChatbotWidget />
    </main>
  );
}
