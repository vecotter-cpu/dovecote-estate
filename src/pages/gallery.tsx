import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      alt: "Godfrey's Beach - Popular surf beach with golden sand and family facilities"
    },
    {
      src: "/assets/The-Nut-Chairlift-Wai-Nang-Poon-131062-300x200_1751957153427.jpg",
      alt: "The Nut State Reserve - Stanley's iconic 143-meter volcanic plug"
    },
    {
      src: "/assets/447604458_987670320028615_7113507161881837945_n_1751957217997.jpg",
      alt: "Stanley Golf Club - Nine-hole links-style course established in 1909"
    },
    {
      src: "/assets/gallery_cradle_mountain.png",
      alt: "Cradle Mountain - Day trip access to Tasmania's premier wilderness experience"
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
      alt: "Lot 1 - Ocean Views aerial perspective"
    },
    {
      src: "/assets/gallery_lot5.png",
      alt: "Lot 5 - Corner Block aerial view"
    },
    {
      src: "/assets/gallery_lot8.png",
      alt: "Lot 8 - Golf Course outlook aerial view"
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Auto-rotate images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="min-h-screen bg-midnight">
      {/* Header with back button */}
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
          <div className="w-32"></div> {/* Spacer for center alignment */}
        </div>
      </header>

      {/* Gallery Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Gallery Carousel */}
        <div className="relative mb-8">
          <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[16/10] md:aspect-[16/9] bg-black">
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Image Description */}
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
              onClick={() => goToImage(index)}
              className={`aspect-square overflow-hidden rounded-lg transition-all duration-200 ${
                index === currentImageIndex
                  ? 'ring-2 ring-caramel scale-105'
                  : 'hover:scale-105 hover:opacity-80'
              }`}
              aria-label={`View image ${index + 1}`}
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
    </div>
  );
}