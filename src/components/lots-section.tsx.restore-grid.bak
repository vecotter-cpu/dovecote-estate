import { MOCK_LOTS } from "@/lib/queryClient";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import type { Lot } from "@shared/schema";

const GALLERY_IMAGES = [
  {
    src: "/assets/Screen_Shot_2025-07-08_at_4.22.25_pm_1751955897100.png",
    alt: "Aerial view of Dovecote Estate Stanley showing numbered lots with coastal backdrop",
  },
  {
    src: "/assets/Screen_Shot_2025-07-08_at_4.22.11_pm_1751955897101.png",
    alt: "Stanley township with Golf Club and supermarket locations highlighted",
  },
  {
    src: "/assets/Screen_Shot_2025-07-08_at_4.21.57_pm_1751955897101.png",
    alt: "Coastal subdivision with ocean views and beach access",
  },
  {
    src: "/assets/Screen_Shot_2025-07-08_at_4.21.50_pm_1751955897102.png",
    alt: "Stanley Nut landmark with subdivision in foreground",
  },
  {
    src: "/assets/Screen_Shot_2025-07-08_at_4.21.39_pm_1751955897102.png",
    alt: "Subdivision development with established Stanley community",
  },
  {
    src: "/assets/Screen_Shot_2025-07-08_at_4.21.33_pm_1751955897102.png",
    alt: "Beachfront location with numbered residential lots",
  }
];

export default function LotsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: lots, isLoading, error } = useQuery<Lot[]>({
    queryKey: ["/api/lots"],
  });
  const lotsData = (Array.isArray(lots) && lots.length ? lots : MOCK_LOTS);

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

  // Gallery autoplay functionality
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

  if (isLoading) {
    return (
      <section id="lots-intro-1" className="hidden py-24 md:py-32 bg-smoke-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-forest-green mb-6" style={{ fontFamily: 'Prata, serif' }}>Available Lots</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Choose from our selection of premium residential lots, each offering unique advantages and stunning coastal proximity.
            </p>
          </div>
          
          {/* Project Gallery Carousel */}
          <div className="mb-20">
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden bg-slate-100">
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
          
          {/* Skeleton loader */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card data-testid="lot-card" key={index} className="bg-mist-white animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-gray-200 rounded mb-4 w-1/2"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="lots-intro-2" className="hidden py-24 md:py-32 bg-smoke-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-forest-green mb-6" style={{ fontFamily: 'Prata, serif' }}>Available Lots</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Lots are being updated. Please check back shortly or{" "}
              <button 
                onClick={() => scrollToSection("#contact")}
                className="text-forest-green underline hover:no-underline"
              >
                enquire now
              </button>
              {" "}for a current schedule.
            </p>
          </div>
          
          {/* Project Gallery Carousel */}
          <div className="mb-20">
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden bg-slate-100">
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
        </div>
      </section>
    );
  }

  return (
    <section id="lots" className="py-24 md:py-32 bg-smoke-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-forest-green mb-6" style={{ fontFamily: 'Prata, serif' }}>Available Lots</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose from our selection of premium residential lots, each offering unique advantages and stunning coastal proximity.
          </p>
        </div>
        
        {/* Project Gallery Carousel */}
        <div className="mb-20">
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden bg-slate-100">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Array.isArray(lots) && lots.length ? lots : MOCK_LOTS).map((lot) => (
            <Card key={lot.id} className="bg-mist-white hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-xl text-forest-green mb-2">{lot.name}</CardTitle>
                <p className="text-gray-600 mb-3">{lot.size}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Exceptional lifestyle opportunity in Stanley's most exclusive coastal subdivision.
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-caramel">
                    ${Number(lot.price ?? 0).toLocaleString()}
                  </span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-2 flex-grow">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-0.5 flex-shrink-0" size={16} color="#8B7040" />
                    <span>Panoramic coastal setting with fresh sea air</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-0.5 flex-shrink-0" size={16} color="#8B7040" />
                    <span>Moments from the beach, wharf, and Stanley township</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-0.5 flex-shrink-0" size={16} color="#8B7040" />
                    <span>Easy walk to cafés, restaurants, and the golf course</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-0.5 flex-shrink-0" size={16} color="#8B7040" />
                    <span>Fully serviced with NBN, power, water & sealed roads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-0.5 flex-shrink-0" size={16} color="#8B7040" />
                    <span>Premium lifestyle in Tasmania's most exclusive coastal community</span>
                  </li>
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
        
        <div className="text-center mt-16">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="rounded-2xl px-8 py-4 text-lg font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
          >
            View All Available Lots
          </Button>
        </div>
      </div>
    </section>
  );
}
