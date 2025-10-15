import { QueryClient } from "@tanstack/react-query";

type Json = Record<string, unknown>;

const MOCK_HOME_PACKAGES = [
  { id: "coastal-haven", title: "Coastal Haven by JDR", priceFrom: 645000 },
  { id: "stanley-retreat", title: "Stanley Retreat by JDR", priceFrom: 689000 },
];

const MOCK_LOTS = [
  { lot: 1, sizeSqm: 820, price: 315000, status: "available" },
  { lot: 2, sizeSqm: 910, price: 319000, status: "available" },
];

export const queryClient = new QueryClient({ defaultOptions: { queries: { queryFn: fetcher, retry: 0 } } });
export async function fetcher({ queryKey }: { queryKey: readonly [string, ...unknown[]] }) {
  const url = queryKey[0];
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`[fetcher] fallback for ${url}`, err);
    if (url.includes("home-packages")) return [
      { id: "coastal-haven", title: "Coastal Haven by JDR", priceFrom: 645000 },
      { id: "stanley-retreat", title: "Stanley Retreat by JDR", priceFrom: 689000 }
    ];
    if (url.includes("lots")) return [
      { lot: 1, sizeSqm: 820, price: 315000, status: "available" },
      { lot: 2, sizeSqm: 910, price: 319000, status: "available" }
    ];
    return [];
  }
}

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
