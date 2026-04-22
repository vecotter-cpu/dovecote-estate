import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

type Json = Record<string, unknown>;

/** ---- Fallback (static) data ---- */
const MOCK_HOME_PACKAGES = [
  {
    id: "coastal-haven",
    name: "Seaside Serenity – Lot 17",
    description: "Light-filled coastal living tailored for Stanley's climate.",
    price: 783000,
    bedrooms: 3,
    bathrooms: 2,
    size: "197 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR197.jpg",
    features: ["Premium coastal façade","Double garage","Alfresco dining","Stone benchtops","900mm appliances","Energy efficient glazing"]
  },
  {
    id: "stanley-retreat",
    name: "The Horizon – Lot 15",
    description: "Family-ready plan with generous kitchen + alfresco.",
    price: 841000,
    bedrooms: 4,
    bathrooms: 2,
    size: "228 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-228-800x535.jpg",
    features: ["Four spacious bedrooms","Master with ensuite","Walk-in pantry","Double garage","Outdoor living","Coastal-spec insulation"]
  },
  {
    id: "seaside-sanctuary",
    name: "The Bayview – Lot 23",
    description: "Coastal residence with elevated outlook and open living.",
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    size: "185 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR185-800x516.jpg",
    features: ["Open-plan living","Premium kitchen","Deck/alfresco","Coastal timber accents","Quality fixtures","Turnkey inclusions"]
  },
  {
    id: "hideaway",
    name: "The Hideaway – Lot 24",
    description: "Compact designer coastal home with efficient layout.",
    price: 635000,
    bedrooms: 2,
    bathrooms: 1,
    size: "130 m²",
    imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR130-1-1200x675.jpg",
    features: ["Low-maintenance living","Chef’s kitchen","Cozy lounge","Premium finishes","Energy-smart design","Move-in ready"]
  },
];

export const MOCK_LOTS = [
  {
    id: "lot-13",
    name: "Lot 13 — Corner Block",
    sqm: 776,
    price: 310400,
    description: "A generous 776m² corner position with dual street frontage — the most flexible building envelope in the release.",
    features: [
      "Corner position with two street frontages",
      "776m² — among the largest in the release",
      "North-east aspect toward the golf course",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled, subdivision-approved, build-ready"
    ],
    bucket: "Corner Block",
    status: "available"
  },
  {
    id: "lot-1",
    name: "Lot 1 — Coastal Outlook",
    sqm: 635,
    price: 254000,
    description: "A 635m² entry position at the northern edge of the estate, with outlook toward Sawyers Bay and The Nut.",
    features: [
      "Outlook toward Sawyers Bay",
      "Entry pricing within the release",
      "North-facing aspect with Nut views beyond",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled, subdivision-approved, build-ready"
    ],
    bucket: "Coastal Outlook",
    status: "available"
  },
  {
    id: "lot-18",
    name: "Lot 18 — Nut Aspect",
    sqm: 769,
    price: 307600,
    description: "The second-largest lot in the release at 769m², with outlook north toward Stanley's most photographed landmark.",
    features: [
      "Outlook toward The Nut",
      "769m² — second-largest in the release",
      "Central elevated position within the estate",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled, subdivision-approved, build-ready"
    ],
    bucket: "Nut Aspect",
    status: "available"
  },
  {
    id: "lot-8",
    name: "Lot 8 — Golf Course",
    sqm: 730,
    price: 292000,
    description: "A 730m² position on the eastern edge of the estate, bordering Stanley Golf Club — a 1909 links course on the edge of Bass Strait.",
    features: [
      "Bordering Stanley Golf Club",
      "Open outlook east across the fairway",
      "Adjacent to one of Australia's oldest links courses",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled, subdivision-approved, build-ready"
    ],
    bucket: "Golf Course",
    status: "available"
  },
  {
    id: "lot-12",
    name: "Lot 12 — Coastal Aspect",
    sqm: 716,
    price: 286400,
    description: "A 716m² position at the northern edge of the estate, closest to Sawyers Bay within the release.",
    features: [
      "Closest position to Sawyers Bay in the release",
      "Short walk to the coast",
      "North-facing aspect with ocean outlook beyond",
      "Fully serviced: NBN, power, water, sealed roads",
      "Walking distance to beach, cafés, The Nut and the golf club",
      "Titled, subdivision-approved, build-ready"
    ],
    bucket: "Coastal Aspect",
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
