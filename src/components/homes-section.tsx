import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2, FileText, Home } from "lucide-react";
import Lightbox from "@/components/ui/lightbox";

// JDR Homes floor plan data
const jdrFloorPlans: Record<string, { image: string; pdf: string; specs: string }> = {
  'Seaside Serenity – Lot 17': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR197-Plan.jpg',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/10/JDR-House-Plan-197.pdf',
    specs: '3 Bed • 2 Bath • 2 Car • 197 m² (21 Squares)',
  },
  'The Horizon – Lot 15': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR228-4-Bedroom-Residence-3.png',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-228-A4-plan-1.pdf',
    specs: '4 Bed • 2 Bath • 2 Car • 228 m² (25 Squares)',
  },
  'The Bayview – Lot 23': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/Screen_Shot_2023-08-08_at_43059_pm1.jpg',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-185-Plan.pdf',
    specs: '3 Bed • 2 Bath • 2 Car • 185 m² (20 Squares)',
  },
  'The Hideaway – Lot 24': {
    image: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR130-Plan.jpg',
    pdf: 'https://www.jdrhomes.com.au/wp-content/uploads/2021/10/JDR-House-Plan-130.pdf',
    specs: '2 Bed • 1 Bath • 1 Car • 130 m² (14 Squares)',
  },
};

// Local UI fallback
const MOCK_UI_PACKAGES = [
  {
    id:"coastal-haven",
    name:"Seaside Serenity – Lot 17",
    description:"Light-filled coastal living tailored for Stanley’s climate.",
    price:645000,
    bedrooms:3,
    bathrooms:2,
    size:"197 m²",
    imageUrl:"https://images.unsplash.com/photo-1505692794403-34d4982df1a0?q=80&w=1200&auto=format&fit=crop",
    features:["Premium coastal façade","Double garage","Alfresco dining","Stone benchtops","900 mm appliances","Energy efficient glazing"],
  },
  {
    id:"stanley-retreat",
    name:"The Horizon – Lot 15",
    description:"Family-ready plan with generous kitchen + alfresco.",
    price:689000,
    bedrooms:4,
    bathrooms:2,
    size:"228 m²",
    imageUrl:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    features:["Four spacious bedrooms","Master with ensuite","Walk-in pantry","Double garage","Outdoor living","Coastal-spec insulation"],
  },
  {
    id:"seaside-sanctuary",
    name:"The Bayview – Lot 23",
    description:"Coastal residence with elevated outlook and open living.",
    price:705000,
    bedrooms:3,
    bathrooms:2,
    size:"185 m²",
    imageUrl:"https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1200&auto=format&fit=crop",
    features:["Open-plan living","Premium kitchen","Deck/alfresco","Coastal timber accents","Quality fixtures","Turnkey inclusions"],
  },
  {
    id:"hideaway",
    name:"The Hideaway – Lot 24",
    description:"Compact designer coastal home with efficient layout.",
    price:599000,
    bedrooms:2,
    bathrooms:1,
    size:"130 m²",
    imageUrl:"https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    features:["Low-maintenance living","Chef’s kitchen","Cozy lounge","Premium finishes","Energy-smart design","Move-in ready"],
  },
];

export default function HomesSection() {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<{ name:string; image:string; pdf:string; specs:string } | null>(null);
  const { data: homePackages, isLoading } = useQuery({ queryKey:[ "/api/home-packages" ] });

  // ✅ Always show 4 mock items if API fails or returns fewer than 4
  const data = Array.isArray(homePackages) && homePackages.length >= 4 ? homePackages : MOCK_UI_PACKAGES;

  return (
    <section id="packages" className="py-24 md:py-32 bg-mist-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-forest-green mb-6" style={{ fontFamily:'Prata, serif' }}>JDR Home JDR Home JDR Home & Land Packages Land Packages [MOCK TEST] Land Packages [MOCK TEST]</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily:'Inter, sans-serif' }}>
            Explore architecturally designed JDR homes paired with premium Dovecote lots.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center"><Loader2 className="mx-auto animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map(pkg => (
              <Card key={pkg.id} className="bg-smoke-white shadow-lg hover:shadow-xl transition overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-forest-green font-prata">{pkg.name}</CardTitle>
                    <span className="text-xs bg-forest-green text-white px-2 py-1 rounded">JDR Homes</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-caramel">${(pkg.price ?? 0).toLocaleString()}</p>
                  <ul className="mt-2 text-xs text-gray-600 list-disc list-inside">
                    {pkg.features.slice(0,4).map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <Button className="mt-4 w-full bg-forest-green text-white" onClick={() => setSelectedFloorPlan(jdrFloorPlans[pkg.name])}>
                    <Home className="mr-2" size={16}/> View Floor Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {selectedFloorPlan && (
        <Lightbox
          title={selectedFloorPlan.name}
          imageUrl={selectedFloorPlan.image}
          pdfUrl={selectedFloorPlan.pdf}
          onClose={() => setSelectedFloorPlan(null)}
          actions={<a href={selectedFloorPlan.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-forest-green hover:underline"><FileText size={16}/>Download Plan PDF</a>}
        />
      )}
    </section>
  );
}
