import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import UniversitiesSection from '@/components/UniversitiesSection';
import FeaturesSection from '@/components/FeaturesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import MobileAppSection from '@/components/MobileAppSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <UniversitiesSection />
        <FeaturesSection />
        <IntegrationsSection />
        <MobileAppSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
