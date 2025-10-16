import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, FileText, Home } from "lucide-react";
import Lightbox from "@/components/ui/lightbox";

// -----------------------------
// JDR Homes floor plan data
// -----------------------------
const jdrFloorPlans: Record<string, { image: string; pdf: string; specs: string }> = {
  "Seaside Serenity – Lot 17": {
    image: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR197-Plan.jpg",
    pdf: "https://www.jdrhomes.com.au/wp-content/uploads/2021/10/JDR-House-Plan-197.pdf",
    specs: "3 Bed • 2 Bath • 2 Car • 197 m² (21 Squares)",
  },
  "The Horizon – Lot 15": {
    image: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR228-4-Bedroom-Residence-3.png",
    pdf: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-228-A4-plan-1.pdf",
    specs: "4 Bed • 2 Bath • 2 Car • 228 m² (25 Squares)",
  },
  "The Bayview – Lot 23": {
    image: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/Screen_Shot_2023-08-08_at_43059_pm1.jpg",
    pdf: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-185-Plan.pdf",
    specs: "3 Bed • 2 Bath • 2 Car • 185 m² (20 Squares)",
  },
  "The Hideaway – Lot 24": {
    image: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR130-Plan.jpg",
    pdf: "https://www.jdrhomes.com.au/wp-content/uploads/2021/10/JDR-House-Plan-130.pdf",
    specs: "2 Bed • 1 Bath • 1 Car • 130 m² (14 Squares)",
  },
};

// -----------------------------
// Local UI fallback
// -----------------------------
const MOCK_UI_PACKAGES = [
  {
    id: "coastal-haven",
    name: "Seaside Serenity – Lot 17",
    description: "Light-filled coastal living tailored for Stanley’s climate.",
    price: 645000,
    bedrooms: 3,
    bathrooms: 2,
    size: "197 m²",
    imageUrl: "/assets/homes/package-1.jpg",
    features: [
      "Premium coastal façade",
      "Double garage",
      "Alfresco dining",
      "Stone benchtops",
      "900 mm appliances",
      "Energy efficient glazing",
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
    imageUrl: "/assets/homes/package-2.jpg",
    features: [
      "Four spacious bedrooms",
      "Master with ensuite",
      "Walk-in pantry",
      "Double garage",
      "Outdoor living",
      "Coastal-spec insulation",
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
    imageUrl: "/assets/homes/package-3.jpg",
    features: [
      "Open-plan living",
      "Premium kitchen",
      "Deck/alfresco",
      "Coastal timber accents",
      "Quality fixtures",
      "Turnkey inclusions",
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
    imageUrl: "/assets/homes/package-4.jpg",
    features: [
      "Low-maintenance living",
      "Chef’s kitchen",
      "Cozy lounge",
      "Premium finishes",
      "Energy-smart design",
      "Move-in ready",
    ],
  },
];

export default function HomesSection() {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<{
    name: string;
    image: string;
    pdf: string;
    specs: string;
  } | null>(null);

  const { data: homePackages, isLoading } = useQuery({
    queryKey: ["/api/home-packages"],
  });

  // ✅ Use local mock data if API fails or returns fewer than 4
  const data =
    Array.isArray(homePackages) && homePackages.length >= 4
      ? homePackages
      : MOCK_UI_PACKAGES;

  const localImageMap: Record<string, string> = {
    "coastal-haven": "/assets/homes/package-1.jpg",
    "stanley-retreat": "/assets/homes/package-2.jpg",
    "seaside-sanctuary": "/assets/homes/package-3.jpg",
    "hideaway": "/assets/homes/package-4.jpg",
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-mist-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className="text-forest-green mb-6"
            style={{ fontFamily: "Prata, serif" }}
          >
            JDR Home & Land Packages
          </h2>
          <p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Explore architecturally designed JDR homes paired with premium
            Dovecote lots.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin" />
            <p className="mt-4 text-gray-600">Loading home packages...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((pkg: any, index: number) => {
              const imgSrc =
                pkg.imageUrl && pkg.imageUrl.startsWith("/")
                  ? pkg.imageUrl
                  : localImageMap[pkg.id] ||
                    `/assets/homes/package-${(index % 4) + 1}.jpg`;

              return (
                <Card
                  key={pkg.id}
                  className="bg-smoke-white shadow-lg hover:shadow-xl transition overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-forest-green font-prata">
                        {pkg.name}
                      </CardTitle>
                      <span className="text-xs bg-forest-green text-white px-2 py-1 rounded">
                        JDR Homes
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {pkg.description}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      {jdrFloorPlans[pkg.name]?.specs ||
                        `${pkg.bedrooms} bed, ${pkg.bathrooms} bath • ${pkg.size}`}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-caramel">
                        ${Number(pkg.price ?? 0).toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        House & Land
                      </span>
                    </div>

                    <ul className="text-xs text-gray-600 space-y-1 mb-6">
                      {(pkg.features || []).slice(0, 5).map((f: string, i: number) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>

                    <Button
                      onClick={() =>
                        setSelectedFloorPlan({
                          name: pkg.name,
                          image: jdrFloorPlans[pkg.name]?.image || "",
                          pdf: jdrFloorPlans[pkg.name]?.pdf || "",
                          specs: jdrFloorPlans[pkg.name]?.specs || "",
                        })
                      }
                      className="w-full rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
                    >
                      <Home className="mr-2" size={16} />
                      View Floor Plan
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
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
