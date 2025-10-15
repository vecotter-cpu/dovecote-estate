import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2, FileText, Home } from "lucide-react";
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

// Local UI fallback (used when the API is empty/unavailable OR wrong shape)
const MOCK_UI_PACKAGES = [
  {
    id: "coastal-haven",
    name: "Seaside Serenity – Lot 17",
    description: "Light-filled coastal living tailored for Stanley's climate.",
    price: 645000,
    bedrooms: 3,
    bathrooms: 2,
    size: "197 m²",
    imageUrl: "https://images.unsplash.com/photo-1505692794403-34d4982df1a0?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Premium coastal façade",
      "Double garage",
      "Alfresco dining",
      "Stone benchtops",
      "900mm appliances",
      "Energy efficient glazing"
    ],
  },
  {
    id: "stanley-retreat",
    name: "The Horizon – Lot 15",
    description: "Family-ready plan with generous kitchen + alfresco.",
    price: 689000,
    bedrooms: 4,
    bathrooms: 2,
    size: "228 m²",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Four spacious bedrooms",
      "Master with ensuite",
      "Walk-in pantry",
      "Double garage",
      "Outdoor living",
      "Coastal-spec insulation"
    ],
  },
  {
    id: "seaside-sanctuary",
    name: "The Bayview – Lot 23",
    description: "Coastal residence with elevated outlook and open living.",
    price: 705000,
    bedrooms: 3,
    bathrooms: 2,
    size: "185 m²",
    imageUrl: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Open-plan living",
      "Premium kitchen",
      "Deck/alfresco",
      "Coastal timber accents",
      "Quality fixtures",
      "Turnkey inclusions"
    ],
  },
  {
    id: "hideaway",
    name: "The Hideaway – Lot 24",
    description: "Compact designer coastal home with efficient layout.",
    price: 599000,
    bedrooms: 2,
    bathrooms: 1,
    size: "130 m²",
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Low-maintenance living",
      "Chef’s kitchen",
      "Cozy lounge",
      "Premium finishes",
      "Energy-smart design",
      "Move-in ready"
    ],
  },
];

function normalizePackages(input: any): any[] {
  if (!Array.isArray(input) || input.length === 0) return MOCK_UI_PACKAGES;

  // If the first item already has the UI shape, keep it.
  const first = input[0] as any;
  const looksLikeUi =
    typeof first?.name === "string" &&
    (typeof first?.price === "number" || typeof first?.price === "string");

  if (looksLikeUi) return input;

  // Otherwise, transform minimal fallback (title/priceFrom/image) into UI shape.
  try {
    return input.map((p: any, i: number) => ({
      id: p.id ?? `pkg-${i}`,
      name: p.name ?? p.title ?? "Home Package",
      description: p.blurb ?? "Architecturally designed coastal home.",
      price: Number(p.price ?? p.priceFrom ?? 0),
      bedrooms: p.beds ?? 3,
      bathrooms: p.baths ?? 2,
      size: p.areaSqm ? `${p.areaSqm} m²` : "—",
      imageUrl:
        p.imageUrl ??
        p.image ??
        "https://images.unsplash.com/photo-1505692794403-34d4982df1a0?q=80&w=1200&auto=format&fit=crop",
      features:
        p.features ??
        ["Premium façade", "Alfresco", "Stone benchtops", "Double garage"],
    }));
  } catch {
    return MOCK_UI_PACKAGES;
  }
}

export default function HomesSection() {
  const [selectedFloorPlan, setSelectedFloorPlan] =
    useState<{ name: string; image: string; pdf: string; specs: string } | null>(null);

  // Uses global default queryFn (fetcher). It may return HTML (Netlify 404),
  // then our fetcher falls back to a minimal array. We normalize either way.
  const { data: homePackages, isLoading, error } = useQuery({
    queryKey: ["/api/home-packages"],
  });

  const data = normalizePackages(homePackages);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading && !homePackages) {
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
    console.warn("Packages request error; rendering normalized fallback.", error);
  }

  return (
    <section id="packages" className="py-24 md:py-32 bg-mist-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-forest-green mb-6" style={{ fontFamily: "Prata, serif" }}>
            JDR Home & Land Packages
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Prefer turnkey? Explore architecturally designed homes paired with premium lots. Authentic JDR Homes designs now available at Dovecote Estate Stanley. Premium quality builds with detailed floor plans and specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((pkg: any) => {
            const name = pkg.name ?? pkg.title ?? "Home package";
            const priceValue = Number(pkg.price ?? pkg.priceFrom ?? 0);
            const imageUrl =
              pkg.imageUrl ?? pkg.image ?? "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop";

            const getImageAlt = (n: string) => {
              const altMap: Record<string, string> = {
                "Seaside Serenity – Lot 17": "Seaside Serenity coastal house and land package in Stanley, Tasmania",
                "The Horizon – Lot 15": "The Horizon family coastal home and land package, Stanley Tasmania",
                "The Bayview – Lot 23": "The Bayview coastal residence house and land package in Stanley Tasmania",
                "The Hideaway – Lot 24": "The Hideaway compact designer coastal home in Stanley Tasmania",
              };
              return altMap[n] || `${n} house and land package in Stanley, Tasmania`;
            };

            return (
              <Card key={pkg.id} className="bg-smoke-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={getImageAlt(name)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-forest-green font-prata">{name}</CardTitle>
                    <span className="text-xs bg-forest-green text-white px-2 py-1 rounded">JDR Homes</span>
                  </div>
                  <p className="text-neutral-700/90 text-sm md:text-base mt-1 font-inter leading-relaxed">
                    {pkg.description ?? "Architecturally designed coastal home with quality inclusions."}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {jdrFloorPlans[name]?.specs || `${pkg.bedrooms ?? 3} bed, ${pkg.bathrooms ?? 2} bath • ${pkg.size ?? "—"}`}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-caramel">
                      ${(priceValue ?? 0).toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">House & Land</span>
                  </div>

                  <div className="text-sm text-gray-600 mb-6">
                    <div className="grid grid-cols-1 gap-1">
                      {(pkg.features ?? []).slice(0, 6).map((feature: string, i: number) => (
                        <div key={i} className="flex items-center">
                          <Check className="mr-2 flex-shrink-0" size={14} color="#8B7040" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                      {Array.isArray(pkg.features) && pkg.features.length > 6 && (
                        <span className="text-xs text-gray-500 ml-5">
                          +{pkg.features.length - 6} more inclusions
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={() =>
                        setSelectedFloorPlan({
                          name,
                          image: jdrFloorPlans[name]?.image || imageUrl,
                          pdf: jdrFloorPlans[name]?.pdf || "#",
                          specs: jdrFloorPlans[name]?.specs || "",
                        })
                      }
                      className="w-full rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
                    >
                      <Home className="mr-2" size={16} />
                      View Floor Plan
                    </Button>

                    <Button
                      onClick={() => {
                        const el = document.querySelector("#contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      variant="outline"
                      className="w-full rounded-2xl px-5 py-3 text-sm font-medium border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedFloorPlan && (
        <Lightbox
          title={selectedFloorPlan.name}
          imageUrl={selectedFloorPlan.image}
          pdfUrl={selectedFloorPlan.pdf}
          onClose={() => setSelectedFloorPlan(null)}
          actions={
            <a
              href={selectedFloorPlan.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-forest-green hover:underline"
            >
              <FileText size={16} />
              Download Plan PDF
            </a>
          }
        />
      )}
    </section>
  );
}
