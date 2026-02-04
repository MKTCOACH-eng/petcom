import HeroVideo from '@/features/home/components/HeroVideo';
import TrustBar from '@/features/home/components/TrustBar';
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
      
      {/* Shipping Companies Logos */}
      <ShippingLogos />
      
      {/* Email Subscription */}
      <EmailSubscription />
      
      {/* Chatbot Widget - Floating */}
      <ChatbotWidget />
    </main>
  );
}
