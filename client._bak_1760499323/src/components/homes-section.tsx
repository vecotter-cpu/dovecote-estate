import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2, FileText, Home } from "lucide-react";
import type { HomePackage } from "@shared/schema";
import Lightbox from "@/components/ui/lightbox";

// JDR Homes floor plan data - mapped to new package names
const jdrFloorPlans: Record<string, { image: string; pdf: string; specs: string }> = {
  'Seaside Serenity – Lot 17': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR197-Plan.jpg',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/10/JDR-House-Plan-197.pdf',
    specs: '3 Bed • 2 Bath • 2 Car • 197m² (21 Squares)'
  },
  'The Horizon – Lot 15': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR228-4-Bedroom-Residence-3.png',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-228-A4-plan-1.pdf',
    specs: '4 Bed • 2 Bath • 2 Car • 228m² (25 Squares)'
  },
  'The Bayview – Lot 23': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/Screen_Shot_2023-08-08_at_43059_pm1.jpg',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-185-Plan.pdf',
    specs: '3 Bed • 2 Bath • 2 Car • 185m² (20 Squares)'
  },
  'The Hideaway – Lot 24': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR130-Plan.jpg',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/10/JDR-House-Plan-130.pdf',
    specs: '2 Bed • 1 Bath • 1 Car • 130m² (14 Squares)'
  }
};

export default function HomesSection() {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<{ name: string; image: string; pdf: string; specs: string } | null>(null);
  const { data: homePackages, isLoading, error } = useQuery<HomePackage[]>({
    queryKey: ["/api/home-packages"],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <section id="homes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin" color="#8B7040" />
            <p className="mt-4 text-gray-600">Loading home packages...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="homes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Failed to load home packages. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-24 md:py-32 bg-mist-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-forest-green mb-6" style={{ fontFamily: 'Prata, serif' }}>JDR Home & Land Packages</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Prefer turnkey? Explore architecturally designed homes paired with premium lots. Authentic JDR Homes designs now available at Dovecote Estate Stanley. Premium quality builds with detailed floor plans and specifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePackages?.map((homePackage) => {
            const getImageAlt = (name: string) => {
              const altMap: Record<string, string> = {
                'Seaside Serenity – Lot 17': 'Seaside Serenity coastal house and land package in Stanley, Tasmania',
                'The Horizon – Lot 15': 'The Horizon family coastal home and land package, Stanley Tasmania',
                'The Bayview – Lot 23': 'The Bayview coastal residence house and land package in Stanley Tasmania',
                'The Hideaway – Lot 24': 'The Hideaway compact designer coastal home in Stanley Tasmania'
              };
              return altMap[name] || `${name} house and land package in Stanley, Tasmania`;
            };

            return (
            <Card key={homePackage.id} className="bg-smoke-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={homePackage.imageUrl || ''} 
                  alt={getImageAlt(homePackage.name)}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-forest-green font-prata">{homePackage.name}</CardTitle>
                  <span className="text-xs bg-forest-green text-white px-2 py-1 rounded">JDR Homes</span>
                </div>
                <p className="text-neutral-700/90 text-sm md:text-base mt-1 font-inter leading-relaxed">
                  {homePackage.description}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {jdrFloorPlans[homePackage.name]?.specs || `${homePackage.bedrooms} bed, ${homePackage.bathrooms} bath • ${homePackage.size}`}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-caramel">
                    ${homePackage.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">House & Land</span>
                </div>
                <div className="text-sm text-gray-600 mb-6">
                  <div className="grid grid-cols-1 gap-1">
                    {homePackage.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="mr-2 flex-shrink-0" size={14} color="#8B7040" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                    {homePackage.features.length > 6 && (
                      <span className="text-xs text-gray-500 ml-5">+{homePackage.features.length - 6} more inclusions</span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    onClick={() => setSelectedFloorPlan({ 
                      name: homePackage.name, 
                      image: jdrFloorPlans[homePackage.name]?.image || '', 
                      pdf: jdrFloorPlans[homePackage.name]?.pdf || '',
                      specs: jdrFloorPlans[homePackage.name]?.specs || ''
                    })}
                    className="w-full rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
                  >
                    <Home className="mr-2" size={16} />
                    View Floor Plan
                  </Button>
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    variant="outline"
                    className="w-full rounded-2xl px-5 py-3 text-sm font-medium border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition"
                  >
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          )}
        </div>
        
        {/* Floor Plan Lightbox */}
        <Lightbox 
          open={!!selectedFloorPlan} 
          onClose={() => setSelectedFloorPlan(null)}
          label={`Floor Plan - ${selectedFloorPlan?.name}`}
        >
          {selectedFloorPlan && (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-forest-green mb-2">{selectedFloorPlan.name}</h3>
                <p className="text-gray-600">{selectedFloorPlan.specs}</p>
              </div>
              <img 
                src={selectedFloorPlan.image} 
                alt={`Floor plan - ${selectedFloorPlan.name}`}
                className="w-full h-auto rounded-lg border"
                style={{ maxHeight: '60vh', objectFit: 'contain' }}
              />
              <div className="flex gap-3 justify-center">
                <Button 
                  onClick={() => window.open(selectedFloorPlan.pdf, '_blank')}
                  className="rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
                >
                  <FileText className="mr-2" size={16} />
                  Download PDF
                </Button>
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  variant="outline"
                  className="rounded-2xl px-5 py-3 text-sm font-medium border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          )}
        </Lightbox>
        
        {/* Exclusions */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">
            <em>*Exclusions: fencing, window furnishings, landscaping, BAL requirements and subject to site classification and land sale cost.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
