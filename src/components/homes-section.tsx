import { FileText } from "lucide-react";

const PACKAGES = [
  {
    id: "lot-15",
    title: "Hudson",
    label: "HAVEN FACADE · JDR HOMES",
    description: "Four bedroom family home with double living, alfresco and double garage.",
    specs: "4 Bed · 2 Bath · 2 Living · 2 Car · 246m² home · 770m² lot",
    price: 830000,
    features: [
      "Master with walk in robe and ensuite",
      "Open plan kitchen, dining and living",
      "Separate lounge and alfresco",
      "Double garage",
    ],
    pdf: "/pdfs/HL_Lot-15-Dovecote-Estate-Stanley.pdf",
    imageUrl: "/assets/gallery_lot1.png",
    imageAlt: "Hudson 27 by JDR Homes, four bedroom family home with double living, alfresco and double garage.",
    hidePrice: true,
  },
  {
    id: "lot-24",
    title: "Mariner",
    label: "GABLES FACADE · JDR HOMES",
    description: "Compact two bedroom coastal home on a generous 714m² lot.",
    specs: "2 Bed · 1 Bath · 1 Living · 1 Car · 134m² home · 714m² lot",
    price: 646000,
    features: [
      "Two bedrooms with built in robes",
      "Open plan kitchen, dining and lounge",
      "Single garage",
      "Entry level turnkey price point",
    ],
    pdf: "/pdfs/HL_Lot-24-Dovecote-Estate-Stanley.pdf",
    imageUrl: "/images/jdr/lot-24-exterior.png",
    imageAlt: "JDR Homes Mariner 14 exterior render, Gables facade, 2 bedroom home for Dovecote Estate Stanley",
  },
];

export default function HomesSection() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-mist-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-forest-green mb-6" style={{ fontFamily: "Prata, serif" }}>
            JDR House &amp; Land Packages
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
            Two JDR Homes packages available as a turnkey pathway, in addition to building with your preferred builder. Buyers are free to build with their preferred builder. We can also assist with introductions to local Tasmanian builders and house and land pathways for those who want a turnkey route.
          </p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-smoke-white rounded-xl shadow-lg hover:shadow-xl transition flex flex-col overflow-hidden"
            >
              {/* Image area */}
              <div className="aspect-[3/2] overflow-hidden flex-shrink-0">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">

                {/* Title + lot */}
                <div className="mb-1">
                  <h3 className="text-lg text-forest-green leading-snug" style={{ fontFamily: "Prata, serif" }}>
                    {pkg.title}
                  </h3>
                </div>

                {/* Label */}
                <p
                  className="text-gray-400 mb-3"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  {pkg.label}
                </p>

                {/* Description */}
                <p className="text-sm italic text-gray-500 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  {pkg.description}
                </p>

                {/* Specs */}
                <p className="text-xs text-gray-600 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {pkg.specs}
                </p>

                {/* Price */}
                {!pkg.hidePrice && (
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-2xl font-bold text-caramel" style={{ fontFamily: "Inter, sans-serif" }}>
                    ${pkg.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 ml-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    House &amp; Land
                  </span>
                </div>
                )}

                {/* Features */}
                <ul className="text-xs text-gray-600 space-y-1 mb-6 flex-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-forest-green flex-shrink-0">•</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={pkg.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-90 transition"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <FileText size={15} />
                  View Floor Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* JDR Homes link */}
        <p className="text-center mt-10 text-sm text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
          Full JDR Homes packages and plans:{" "}
          <a
            href="https://www.jdrhomes.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-green hover:underline font-medium"
          >
            jdrhomes.com.au →
          </a>
        </p>

      </div>
    </section>
  );
}
