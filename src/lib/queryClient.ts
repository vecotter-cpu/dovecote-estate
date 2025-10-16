import { QueryClient } from "@tanstack/react-query";

type Json = Record<string, unknown>;

/** ---- Fallback (static) data ---- */
const MOCK_HOME_PACKAGES = [
  {
    id: "coastal-haven",
    name: "Seaside Serenity – Lot 17",
    description: "Light-filled coastal living tailored for Stanley's climate.",
    price: 645000,
    bedrooms: 3,
    bathrooms: 2,
    size: "197 m²",
    imageUrl: "/assets/homes/package-1.jpg",
    features: ["Premium coastal façade","Double garage","Alfresco dining","Stone benchtops","900mm appliances","Energy efficient glazing"]
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
    features: ["Four spacious bedrooms","Master with ensuite","Walk-in pantry","Double garage","Outdoor living","Coastal-spec insulation"]
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
    features: ["Open-plan living","Premium kitchen","Deck/alfresco","Coastal timber accents","Quality fixtures","Turnkey inclusions"]
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
    features: ["Low-maintenance living","Chef’s kitchen","Cozy lounge","Premium finishes","Energy-smart design","Move-in ready"]
  },
];

const MOCK_LOTS = [
  { lot: 1, sizeSqm: 820, price: 315000, status: "available" },
  { lot: 2, sizeSqm: 910, price: 319000, status: "available" },
  { lot: 3, sizeSqm: 760, price: 299000, status: "available" },
  { lot: 4, sizeSqm: 845, price: 309000, status: "available" },
  { lot: 5, sizeSqm: 980, price: 329000, status: "available" },
  { lot: 6, sizeSqm: 735, price: 289000, status: "available" },
];

/** ---- React Query client (uses global fetcher) ---- */
export const queryClient = new QueryClient({
  defaultOptions: { queries: { queryFn: fetcher, retry: 0 } },
});

/** ---- Global fetcher with graceful fallback ---- */
export async function fetcher({ queryKey }: { queryKey: readonly [string, ...unknown[]] }) {
  const url = queryKey[0];
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`[fetcher] fallback for ${url}`, err);
    if (url.includes("home-packages")) return MOCK_HOME_PACKAGES;
    if (url.includes("lots")) return MOCK_LOTS;
    return [];
  }
}

/** ---- POST helper with mock fallback ---- */
export async function apiRequest(method: string, path: string, data?: Json) {
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
