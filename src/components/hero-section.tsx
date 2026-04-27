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
    }, 5000);
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
          </div>
        ))}

        {/* Gradient overlay — top to bottom, locked for legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.75) 100%)'
          }}
        />
      </div>

      {/* Content — anchored lower-left */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="pl-[8%] pb-[8%] lg:pb-[11%]">

          {/* H1 — pure white, regular weight, subtle text-shadow for legibility */}
          <h1
            className="text-white font-prata font-normal leading-tight text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem]"
            style={{ color: '#FFFFFF', textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
          >
            You've been to Stanley.{' '}
            <span className="whitespace-nowrap">Now stay.</span>
          </h1>

          {/* Subhead — italic, regular weight, ~58% of H1 size, 1.75rem below H1 */}
          <p
            className="text-white font-prata italic font-normal leading-relaxed mt-7
                       text-[1.25rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.875rem]"
            style={{ maxWidth: '520px', color: '#FFFFFF', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
          >
            One of the last coastal land releases in Stanley. A limited release of residential lots within the township, in one of Australia's most tightly held coastal villages.
          </p>

          {/* CTA Buttons — 2.5rem below subhead */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            {/* Primary: dark green bg, white text */}
            <Button
              onClick={() => scrollToSection("#lots")}
              className="rounded-2xl px-6 py-3 text-base font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
            >
              View Available Lots
            </Button>
            {/* Secondary ghost: transparent bg, white border + text; hover inverts */}
            <Button
              onClick={() => scrollToSection("#lifestyle")}
              className="rounded-2xl px-6 py-3 text-base font-medium bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-forest-green transition"
            >
              Explore Lifestyle
            </Button>
          </div>

          {/* Price micro-line — white at 75% opacity, ~1.5rem below buttons */}
          <p
            className="mt-6 text-sm font-normal"
            style={{ color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em' }}
          >
            Land from $245,000
          </p>

        </div>
      </div>

      {/* Scroll Indicator — bottom-right */}
      <div className="absolute bottom-8 right-8 z-10 animate-bounce">
        <ChevronDown size={32} color="#8B7040" />
      </div>

    </section>
  );
}
