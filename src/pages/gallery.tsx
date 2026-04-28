import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const galleryImages = [
  {
    src: "/assets/Photo_6553672_DJI_72_jpg_5716447_0_20201220144554_photo_original_1751955954945.JPG",
    alt: "Aerial view of Stanley and Dovecote Estate development"
  },
  {
    src: "/assets/Photo_6553680_DJI_80_jpg_4880146_0_20201220161210_photo_original_1751955954946.JPG",
    alt: "Stanley coastline aerial perspective"
  },
  {
    src: "/assets/Photo_6553681_DJI_81_jpg_5378036_0_20201220161216_photo_original_1751955954947.JPG",
    alt: "Stanley Nut and harbor aerial view"
  },
  {
    src: "/images/gallery/stanley-nut-rockpool.jpg",
    alt: "The Nut reflected in a coastal rock pool at low tide, Stanley"
  },
  {
    src: "/images/gallery/stanley-beach-sunset.jpg",
    alt: "Purple and pink sunset over Godfrey's Beach with The Nut, Stanley"
  },
  {
    src: "/images/gallery/stanley-godfrey-aerial.jpg",
    alt: "Aerial view of Godfrey's Beach curving around to The Nut, Stanley"
  },
  {
    src: "/images/gallery/stanley-beach-boat.jpg",
    alt: "People resting on a weathered boat on the beach with The Nut and seagulls, Stanley"
  },
  {
    src: "/images/gallery/stanley-beach-walk.jpg",
    alt: "Person walking dogs on a quiet beach with green farmland, Stanley"
  },
  {
    src: "/assets/gallery_godfreys_beach.png",
    alt: "Godfrey's Beach — popular surf beach with golden sand and family facilities"
  },
  {
    src: "/assets/The-Nut-Chairlift-Wai-Nang-Poon-131062-300x200_1751957153427.jpg",
    alt: "The Nut State Reserve — Stanley's iconic 143-metre volcanic plug"
  },
  {
    src: "/assets/447604458_987670320028615_7113507161881837945_n_1751957217997.jpg",
    alt: "Stanley Golf Club — nine-hole links-style course established in 1909"
  },
  {
    src: "/assets/gallery_cradle_mountain.png",
    alt: "Cradle Mountain — day trip access to Tasmania's premier wilderness experience"
  },
  {
    src: "/assets/gallery_marina_1.jpg",
    alt: "Stanley Marina concept with boats and facilities"
  },
  {
    src: "/assets/gallery_marina_2.jpg",
    alt: "Stanley Marina aerial view render"
  },
  {
    src: "/assets/gallery_lot1.png",
    alt: "Hudson 27 by JDR Homes — front facade at dusk"
  },
  {
    src: "/assets/gallery_lot5.png",
    alt: "Lot 5 corner block aerial view"
  },
  {
    src: "/assets/gallery_lot8.png",
    alt: "Lot 8 — golf course outlook aerial view"
  },
  {
    src: "/assets/gallery_overview.png",
    alt: "Development aerial overview"
  },
  {
    src: "/images/lots/town-sites.png",
    alt: "Aerial view of Stanley township showing the location of Dovecote Estate in relation to the town centre, supermarket, and Stanley Golf Club."
  },
  {
    src: "/images/lots/godfreys-beach-aerial.jpg",
    alt: "Aerial view of Dovecote Estate looking toward Godfrey's Beach, showing the six released lots."
  },
  {
    src: "/images/lots/aerial-straight-back.jpg",
    alt: "Aerial view of Dovecote Estate from the rear, showing the six released lots within the township."
  },
  {
    src: "/images/lots/aerial-golf-course.jpg",
    alt: "Aerial view of Dovecote Estate looking toward Stanley Golf Course and the coast."
  },
  {
    src: "/images/lots/nut-aerial-back.jpg",
    alt: "Aerial view of Dovecote Estate with The Nut and Stanley township in the background."
  }
];

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const total = galleryImages.length;
  const isOpen = lightboxIndex !== null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % total));
  }, [total]);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + total) % total));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, lightboxNext, lightboxPrev]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Preload adjacent images
  useEffect(() => {
    if (lightboxIndex === null) return;
    const preload = (idx: number) => {
      const img = new Image();
      img.src = galleryImages[(idx + total) % total].src;
    };
    preload(lightboxIndex + 1);
    preload(lightboxIndex - 1);
  }, [lightboxIndex, total]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? lightboxNext() : lightboxPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Thumbnail carousel auto-rotate
  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isOpen, total]);

  return (
    <div className="min-h-screen bg-midnight">

      {/* Header */}
      <header className="bg-midnight/95 backdrop-blur-sm border-b border-white/10 px-4 py-4 z-50 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-caramel flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Prata, serif' }}>
            Dovecote Estate Gallery
          </h1>
          <div className="w-32" />
        </div>
      </header>

      {/* Gallery Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Main Featured Image */}
        <div className="relative mb-8">
          <div
            className="relative overflow-hidden rounded-xl shadow-2xl aspect-[16/10] md:aspect-[16/9] bg-black cursor-zoom-in"
            onClick={() => openLightbox(currentImageIndex)}
          >
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((i) => (i - 1 + total) % total); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((i) => (i + 1) % total); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {total}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm hidden sm:block">
              Click to enlarge
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-300 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              {galleryImages[currentImageIndex].alt}
            </p>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => { setCurrentImageIndex(index); openLightbox(index); }}
              className={`aspect-square overflow-hidden rounded-lg transition-all duration-200 ${
                index === currentImageIndex
                  ? 'ring-2 ring-caramel scale-105'
                  : 'hover:scale-105 hover:opacity-80'
              }`}
              aria-label={`View image ${index + 1}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Gallery Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Prata, serif' }}>
            Experience Stanley Through Our Gallery
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Discover the natural beauty and exclusive opportunity that is Dovecote Estate Stanley. From aerial views of the peninsula subdivision to the iconic Stanley Nut, experience the coastal lifestyle and premium development that makes this location truly exceptional.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition z-10"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-4 py-1.5 rounded-full z-10">
            {lightboxIndex + 1} / {total}
          </div>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
              style={{ animation: 'fadeIn 0.2s ease' }}
            />
            {/* Caption */}
            <p className="mt-4 text-gray-300 text-sm text-center max-w-xl px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              {galleryImages[lightboxIndex].alt}
            </p>
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition z-10"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </div>
  );
}
