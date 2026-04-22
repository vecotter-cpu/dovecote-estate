import { MOCK_LOTS } from "@/lib/queryClient";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

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

const ALL_LOTS = [
  { lot: 1,  sqm: 635, price: 254000 },
  { lot: 2,  sqm: 678, price: 271200 },
  { lot: 3,  sqm: 677, price: 270800 },
  { lot: 4,  sqm: 676, price: 270400 },
  { lot: 5,  sqm: 675, price: 270000 },
  { lot: 6,  sqm: 622, price: 248800 },
  { lot: 7,  sqm: 755, price: 302000 },
  { lot: 8,  sqm: 730, price: 292000 },
  { lot: 9,  sqm: 730, price: 292000 },
  { lot: 10, sqm: 730, price: 292000 },
  { lot: 11, sqm: 730, price: 292000 },
  { lot: 12, sqm: 716, price: 286400 },
  { lot: 13, sqm: 776, price: 310400 },
  { lot: 14, sqm: 777, price: 310800 },
  { lot: 15, sqm: 777, price: 310800 },
  { lot: 16, sqm: 777, price: 310800 },
  { lot: 17, sqm: 777, price: 310800 },
  { lot: 18, sqm: 769, price: 307600 },
  { lot: 19, sqm: 733, price: 293200 },
  { lot: 20, sqm: 714, price: 285600 },
  { lot: 21, sqm: 714, price: 285600 },
  { lot: 22, sqm: 714, price: 285600 },
  { lot: 23, sqm: 714, price: 285600 },
  { lot: 24, sqm: 714, price: 285600 },
  { lot: 25, sqm: 714, price: 285600 },
];

export default function LotsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllLots, setShowAllLots] = useState(false);
  const lots = MOCK_LOTS;
  const isLoading = false;
  const error = null;

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const enquireLot = (lotNum: number) => {
    window.dispatchEvent(new CustomEvent('enquireLot', { detail: { lot: lotNum } }));
    scrollToSection('#contact');
  };

  const toggleAllLots = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !showAllLots;
    setShowAllLots(next);
    if (next) {
      // Small delay lets the CSS transition start before scroll
      setTimeout(() => scrollToSection('#all-lots'), 50);
    } else {
      scrollToSection('#lots-grid');
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
      <section id="lots-intro-2" className="py-24 md:py-32 bg-smoke-white">
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
        </div>
      </section>
    );
  }

  return (
    <section id="lots-grid" className="py-24 md:py-32 bg-smoke-white">
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
        
        {/* 3×2 grid: 5 lot cards + 1 navigation tile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Array.isArray(lots) && lots.length ? lots : MOCK_LOTS).map((lot) => (
            <Card key={lot.id} className="bg-mist-white hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="flex-shrink-0 pb-3">
                <CardTitle className="text-xl text-forest-green mb-1">{lot.name}</CardTitle>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-2xl font-bold text-caramel">
                    ${Number(lot.price ?? 0).toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 font-normal">{(lot as any).sqm}m²</span>
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  {lot.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pt-0">
                <ul className="text-sm text-gray-600 mb-6 space-y-2 flex-grow">
                  {((lot as any).features ?? []).map((feature: string, i: number) => (
                    <li key={i} className={`flex items-start ${i === 3 ? 'pt-2 border-t border-gray-100' : ''}`}>
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

          {/* 6th card — navigation tile / expand-collapse toggle */}
          <Card
            className="bg-mist-white hover:shadow-lg transition-shadow flex flex-col cursor-pointer border-dashed"
            onClick={toggleAllLots}
          >
            <CardHeader className="flex-shrink-0 pb-3">
              <CardTitle className="text-xl text-forest-green mb-1">Explore All 25 Lots</CardTitle>
              <p className="text-sm italic text-gray-600 leading-relaxed">
                Every lot, every size, every price. Fully serviced, titled and build-ready.
              </p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col pt-0">
              <p className="text-2xl font-bold text-caramel mb-6">
                25 residential landholdings from $248,800
              </p>
              <Button
                onClick={toggleAllLots}
                aria-expanded={showAllLots}
                aria-controls="all-lots"
                className="w-full rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-95 transition mt-auto"
              >
                {showAllLots ? 'Hide full release ▲' : 'View the full release →'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* All Available Lots reference table — hidden by default, revealed via toggle */}
        <div
          id="all-lots"
          aria-hidden={!showAllLots}
          className="scroll-mt-24 overflow-hidden"
          style={{
            maxHeight: showAllLots ? '9999px' : '0',
            opacity: showAllLots ? 1 : 0,
            marginTop: showAllLots ? '6rem' : '0',
            transition: 'max-height 400ms ease-in-out, opacity 400ms ease-in-out, margin-top 400ms ease-in-out',
          }}
        >
          <h2 className="text-forest-green mb-3" style={{ fontFamily: 'Prata, serif' }}>All Available Lots</h2>
          <p className="text-base italic text-gray-600 mb-10">
            All 25 lots are fully serviced, titled and build-ready. Enquire for site plans, lot positions, and private inspection.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-gray-200">
            <table className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
              <thead>
                <tr className="bg-[#f6f4f0] border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-forest-green">Lot</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Size</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Price</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">Enquire</th>
                </tr>
              </thead>
              <tbody>
                {ALL_LOTS.map((item, i) => (
                  <tr key={item.lot} className={`border-b border-gray-100 hover:bg-[#f9f8f5] transition-colors ${i % 2 === 0 ? '' : ''}`}>
                    <td className="px-6 py-4 font-bold text-forest-green text-base">Lot {item.lot}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{item.sqm}m²</td>
                    <td className="px-6 py-4 font-semibold text-caramel">${item.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => enquireLot(item.lot)}
                        className="text-sm text-forest-green hover:underline font-medium"
                      >
                        Enquire →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card list */}
          <div className="md:hidden space-y-3">
            {ALL_LOTS.map((item) => (
              <div key={item.lot} className="rounded-xl border border-gray-200 bg-mist-white px-5 py-4">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold text-forest-green text-base">Lot {item.lot}</span>
                  <span className="text-gray-500 text-sm">{item.sqm}m²</span>
                </div>
                <p className="font-semibold text-caramel mb-3">${item.price.toLocaleString()}</p>
                <Button
                  onClick={() => enquireLot(item.lot)}
                  className="w-full rounded-xl px-4 py-2 text-sm font-medium bg-forest-green text-white hover:opacity-95 transition"
                >
                  Enquire →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
