import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OpportunitySection from "@/components/opportunity-section";
import LotsSection from "@/components/lots-section";
import HomesSection from "@/components/homes-section";
import MarinaSection from "@/components/marina-section";
import LifestyleSection from "@/components/lifestyle-section";
import LocationSection from "@/components/location-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Set page title and meta description for SEO - reinforces index.html meta tags
    document.title = "Dovecote Estate Stanley Tasmania | Residential Land & House Packages From $254k";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium residential land lots & JDR house packages in Stanley, Tasmania. From $254k. Ocean views, walk to beaches, The Nut, marina & golf club. Circular Head\'s premier coastal subdivision.');
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--mist-white)' }}>
      <Navigation />
      
      <div> {/* Navigation overlays content with transparent background */}
        {/* New section flow: Hero → Opportunity → Lots (with integrated gallery) → Packages → Lifestyle → Marina → Location */}
        <HeroSection />
        <OpportunitySection />
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
