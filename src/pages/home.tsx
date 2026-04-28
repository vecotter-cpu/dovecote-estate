import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OpportunitySection from "@/components/opportunity-section";
import ScarcitySection from "@/components/scarcity-section";
import NewsSection from "@/components/news-section";
import LotsSection from "@/components/lots-section";
import HomesSection from "@/components/homes-section";
import MarinaSection from "@/components/marina-section";
import LifestyleSection from "@/components/lifestyle-section";
import LocationSection from "@/components/location-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    document.title = "Dovecote Estate Stanley Tasmania | Residential Land & House Packages From $254,000";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A limited release of serviced residential land in Stanley, Tasmania. From $254,000. Walk to beaches, The Nut and the golf club. One of the last coastal land releases in the township.');
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--mist-white)' }}>
      <Navigation />

      <div>
        <HeroSection />
        <OpportunitySection />
        <ScarcitySection />
        <NewsSection />
        <LotsSection />
        <HomesSection />
        <LifestyleSection />
        <MarinaSection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
