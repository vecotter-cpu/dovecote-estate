import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

type Json = Record<string, unknown>;

/** ---- Fallback (static) data ---- */
const MOCK_HOME_PACKAGES = [
  {
    id: "coastal-haven",
    name: "Seaside Serenity",
    description: "Light-filled coastal living tailored for Stanley's climate.",
    price: 783000,
    bedrooms: 3,
    bathrooms: 2,
    size: "197 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR197.jpg",
    features: ["Premium coastal facade","Double garage","Alfresco dining","Stone benchtops","900mm appliances","Energy efficient glazing"]
  },
  {
    id: "stanley-retreat",
    name: "The Horizon",
    description: "Family-ready plan with generous kitchen and alfresco.",
    price: 841000,
    bedrooms: 4,
    bathrooms: 2,
    size: "228 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-228-800x535.jpg",
    features: ["Four spacious bedrooms","Master with ensuite","Walk in pantry","Double garage","Outdoor living","Coastal spec insulation"]
  },
  {
    id: "seaside-sanctuary",
    name: "The Bayview",
    description: "Coastal residence with elevated outlook and open living.",
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    size: "185 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR185-800x516.jpg",
    features: ["Open plan living","Premium kitchen","Deck and alfresco","Coastal timber accents","Quality fixtures","Turnkey inclusions"]
  },
  {
    id: "hideaway",
    name: "The Hideaway",
    description: "Compact designer coastal home with efficient layout.",
    price: 635000,
    bedrooms: 2,
    bathrooms: 1,
    size: "130 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR130-1-1200x675.jpg",
    features: ["Low maintenance living","Chef's kitchen","Cozy lounge","Premium finishes","Energy smart design","Move in ready"]
  },
];

export const MOCK_LOTS = [
  {
    id: "lot-13",
    name: "Lot 13, Corner Block",
    sqm: 776,
    price: 310400,
    description: "The largest building envelope in the release.",
    features: [
      "Corner position with two street frontages",
      "North east aspect toward the golf course",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled and build ready"
    ],
    bucket: "Corner Block",
    status: "available"
  },
  {
    id: "lot-18",
    name: "Lot 18, Nut Aspect",
    sqm: 769,
    price: 307600,
    description: "One of only a handful of lots with a direct outlook to The Nut.",
    features: [
      "Outlook toward The Nut",
      "Central elevated position within the estate",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled and build ready"
    ],
    bucket: "Nut Aspect",
    status: "available"
  },
  {
    id: "lot-8",
    name: "Lot 8, Golf Course",
    sqm: 730,
    price: 292000,
    description: "The closest lot in the release to Stanley Golf Club.",
    features: [
      "Bordering Stanley Golf Club",
      "Open outlook east across the fairway",
      "Adjacent to one of Australia's oldest links courses",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled and build ready"
    ],
    bucket: "Golf Course",
    status: "available"
  },
  {
    id: "lot-12",
    name: "Lot 12, Coastal Aspect",
    sqm: 716,
    price: 286400,
    description: "The closest position to Sawyers Bay in the release.",
    features: [
      "Closest position to Sawyers Bay in the release",
      "Short walk to the coast",
      "North facing aspect with ocean outlook beyond",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled and build ready"
    ],
    bucket: "Coastal Aspect",
    status: "available"
  },
  {
    id: "lot-15",
    name: "Lot 15, Builder Pathway",
    sqm: 777,
    price: 310800,
    description: "Premium 777m² position, available with a JDR Homes house and land pathway.",
    features: [
      "Pre matched to a JDR Homes package for buyers seeking a turnkey path",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled and build ready"
    ],
    bucket: "Builder Pathway",
    status: "available"
  },
  {
    id: "lot-1",
    name: "Lot 1, Coastal Outlook",
    sqm: 635,
    price: 254000,
    description: "Entry priced position with northern outlook, rare at this price point.",
    features: [
      "Outlook toward Sawyers Bay",
      "North facing aspect with Nut views beyond",
      "Entry pricing within the release",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled and build ready"
    ],
    bucket: "Coastal Outlook",
    status: "available"
  }
];

/** ---- POST helper with mock fallback ---- */
export async function apiRequest(method: string, path: string, data?: Record<string, unknown>) {
  try {
    const res = await fetch(path, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`[apiRequest] mock for ${method} ${path}`, err);
    return { ok: true, message: "Mock request successful" };
  }
}
