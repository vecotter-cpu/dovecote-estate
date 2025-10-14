import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "/assets/Photo_6553672_DJI_72_jpg_5716447_0_20201220144554_photo_original_1751955954945.JPG",
    "/assets/Photo_6553680_DJI_80_jpg_4880146_0_20201220161210_photo_original_1751955954946.JPG", 
    "/assets/Photo_6553681_DJI_81_jpg_5378036_0_20201220161216_photo_original_1751955954947.JPG"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative aspect-[4/5] md:aspect-[16/9] lg:h-screen overflow-hidden w-full">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt={`Dovecote Estate Stanley Tasmania aerial view ${index + 1} - premium coastal residential land subdivision near The Nut and beaches`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-[#2E3A2F]/25"></div>
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="hero relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4" style={{ transform: 'translateY(10vh)' }}>
          <h1 className="text-white text-center font-prata text-5xl md:text-6xl leading-tight">
            Premium Coastal Land & House Packages in Stanley, Tasmania
          </h1>
          <p className="text-white text-center mt-4 max-w-2xl mx-auto text-lg md:text-xl font-inter">
            Discover your coastal sanctuary in Stanley, where heritage, growth and natural beauty meet. Land from $254K and home packages from $645K.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("#lots")}
              className="rounded-2xl px-6 py-3 text-base font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
            >
              View Available Lots
            </Button>
            <Button
              onClick={() => scrollToSection("#lifestyle")}
              className="rounded-2xl px-6 py-3 text-base font-medium border border-forest-green text-forest-green bg-white hover:bg-forest-green/5 transition"
            >
              Explore Lifestyle
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} color="#8B7040" />
      </div>
    </section>
  );
}
