import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

export default function MarinaSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const marinaImages = [
    {
      src: "/assets/marina/marina-1.jpg",
      alt: "Stanley Marina concept with boats and facilities"
    },
    {
      src: "/assets/marina/marina-1.jpg", 
      alt: "Stanley Marina aerial view render"
    }
  ];

  const faqs = [
    {
      id: "approval",
      question: "When will it be approved?",
      answer: "Currently in planning; updates will be shared as the process develops."
    },
    {
      id: "values",
      question: "How could it impact property values?",
      answer: "Historically, marina precincts create strong demand and uplift surrounding land values."
    },
    {
      id: "lifestyle",
      question: "What are the lifestyle benefits?",
      answer: "Enhanced tourism, marine culture, and access to water-based recreation."
    }
  ];

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % marinaImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + marinaImages.length) % marinaImages.length);
  };

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % marinaImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [marinaImages.length]);

  return (
    <section id="marina" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-8" style={{ fontFamily: 'Prata, serif' }}>
            Stanley Marina
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              A proposed marina could redefine Stanley's future. If realised, it would  attract yachts, recreational boats, and cruise visitors, further anchoring Stanley as a premier coastal destination. Beyond lifestyle benefits, it would generate tourism, jobs, and long-term capital growth.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {faq.question}
                    </span>
                    {openFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Marina Image Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
              <img
                src={marinaImages[currentImageIndex].src}
                alt={marinaImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {marinaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentImageIndex
                      ? 'bg-gray-800'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}