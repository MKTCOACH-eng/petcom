import HeroVideo from '@/features/home/components/HeroVideo';
import TrustBar from '@/features/home/components/TrustBar';
import CategoryShowcase from '@/features/home/components/CategoryShowcase';
import FeaturedProducts from '@/features/home/components/FeaturedProducts';
import RecommendedToday from '@/features/home/components/RecommendedToday';
import PetcomScore from '@/features/home/components/PetcomScore';
import GuidesSection from '@/features/home/components/GuidesSection';
import RealStories from '@/features/home/components/RealStories';
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
      <CategoryShowcase />

      {/* Petcom Score - Diferencial */}
      <PetcomScore />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Recommended Today */}
      <RecommendedToday />

      {/* Guides Section */}
      <GuidesSection />

      {/* Real Stories */}
      <RealStories />
      
      {/* Shipping Companies Logos */}
      <ShippingLogos />
      
      {/* Email Subscription */}
      <EmailSubscription />
      
      {/* Chatbot Widget - Floating */}
      <ChatbotWidget />
    </main>
  );
}
