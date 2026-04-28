import { MOCK_LOTS } from "@/lib/queryClient";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/lots/town-sites.png",
    alt: "Aerial view of Stanley township showing the location of Dovecote Estate in relation to the town centre, supermarket, and Stanley Golf Club.",
  },
  {
    src: "/images/lots/godfreys-beach-aerial.jpg",
    alt: "Aerial view of Dovecote Estate looking toward Godfrey's Beach, showing the six released lots.",
  },
  {
    src: "/images/lots/aerial-straight-back.jpg",
    alt: "Aerial view of Dovecote Estate from the rear, showing the six released lots within the township.",
  },
  {
    src: "/images/lots/aerial-golf-course.jpg",
    alt: "Aerial view of Dovecote Estate looking toward Stanley Golf Course and the coast.",
  },
  {
    src: "/images/lots/nut-aerial-back.jpg",
    alt: "Aerial view of Dovecote Estate with The Nut and Stanley township in the background.",
  },
];

export default function LotsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lots = MOCK_LOTS;

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let autoplayTimer: NodeJS.Timeout;
    let isPaused = false;

    const startAutoplay = () => {
      if (!isPaused) {
        autoplayTimer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
        }, 5000);
      }
    };

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }
    };

    startAutoplay();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
        stopAutoplay();
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
          startAutoplay();
        }, 3000);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
        stopAutoplay();
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
          startAutoplay();
        }, 3000);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      stopAutoplay();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="lots" className="py-24 md:py-32 bg-smoke-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-forest-green mb-6" style={{ fontFamily: 'Prata, serif' }}>Available Lots</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            A limited release of six residential lots, each positioned for a specific buyer. Every lot is fully serviced, titled, and build ready.
          </p>
        </div>

        {/* Project Gallery Carousel */}
        <div className="mb-20">
          <div className="relative group">
            <div className="overflow-rounded-2xl shadow-xl">
              <div className="aspect-[4/5] md:aspect-[16/9] w-full overflow-bg-slate-100">
                <img
                  src={GALLERY_IMAGES[currentSlide].src}
                  alt={GALLERY_IMAGES[currentSlide].alt}
                  className="h-full w-full object-cover transition-all duration-500"
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>

            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-white/70 text-forest-green hover:bg-white hover:text-forest-green shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-white/70 text-forest-green hover:bg-white hover:text-forest-green shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="flex justify-center mt-6 gap-2">
              {GALLERY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 ${
                    index === currentSlide
                      ? "bg-forest-green shadow-sm"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3×2 grid: 6 lot cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lots.map((lot) => (
            <Card key={lot.id} className="bg-mist-white hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="flex-shrink-0 pb-3">
                <CardTitle className="text-xl text-forest-green mb-1">{lot.name}</CardTitle>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-2xl font-bold text-caramel">
                    ${Number(lot.price ?? 0).toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 font-normal">{(lot as any).sqm}m²</span>
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {lot.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pt-0">
                <ul className="text-sm text-gray-600 mb-6 space-y-2 flex-grow">
                  {((lot as any).features ?? []).map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 mt-0.5 flex-shrink-0" size={16} color="#8B7040" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-95 transition mt-auto"
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
