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

        {/* Gradient overlay: 40% black at bottom-left, clear by upper-middle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0) 70%)'
          }}
        />
      </div>

      {/* Content — anchored lower-left */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="pl-[8%] pb-[8%] lg:pb-[11%]">

          {/* H1 — single line on desktop; wraps only after "Stanley." */}
          <h1 className="text-white font-prata leading-tight text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem]">
            You've been to Stanley.{' '}
            <span className="whitespace-nowrap">Now stay.</span>
          </h1>

          {/* Subhead — italic, regular weight, max ~520px wide */}
          <p
            className="text-white font-prata italic font-normal text-lg md:text-xl leading-relaxed mt-6"
            style={{ maxWidth: '520px' }}
          >
            Twenty-five residential lots in one of Australia's most tightly held coastal villages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

          {/* Price line */}
          <p className="mt-4 text-sm font-normal tracking-widest" style={{ color: '#C4A96A' }}>
            Land from $254,000
          </p>

        </div>
      </div>

      {/* Scroll Indicator — bottom-right, clear of content block */}
      <div className="absolute bottom-8 right-8 z-10 animate-bounce">
        <ChevronDown size={32} color="#8B7040" />
      </div>

    </section>
  );
}
