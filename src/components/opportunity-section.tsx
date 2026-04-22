import { Home, Wifi, MapPin, Construction } from "lucide-react";

const DATA_TILES = [
  { stat: "240:1", label: "Visitor-to-resident ratio" },
  { stat: "145,000", label: "Visitors to Stanley each year" },
  { stat: "56%", label: "Rise in Northern Tasmania investor activity (2025)" },
  { stat: "3.6%", label: "Annual property turnover in Stanley — roughly half the national average" },
];

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="py-16 md:py-24" style={{ backgroundColor: 'var(--mist-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'Prata, serif' }}>
            Why Stanley. Why now.
          </h2>
          <p className="text-lg italic text-gray-500 mb-10" style={{ fontFamily: 'Prata, serif' }}>
            The market case for residential land in one of Australia's most tightly held coastal villages.
          </p>

          <div className="max-w-4xl mx-auto mb-12 space-y-6 text-left">
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stanley is a 600-resident fishing village on Tasmania's north-west coast, hosting more than 145,000 visitors a year — 75,000 of them staying overnight. It has been named Tasmania's Top Tiny Tourism Town in 2024 and 2025, and won the People's Choice award at the 2025 Tasmanian Tourism Awards. Residential land inside the township is rarely offered: only 16 properties changed hands across the entire town in the past twelve months.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tasmania's north-west coast led the state's regional property recovery in 2025, offering some of the most affordable coastal real estate in the country. Mainland investor activity into northern Tasmania rose 56% last year, with total mainland buyer numbers into the state up 43.6%. Regional property prices nationally outperformed the capital cities over the past twelve months. These conditions are forecast to continue for at least the next three to five years.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              For buyers relocating from the mainland, Stanley offers heritage, coastline and genuine community at a fraction of Melbourne or Sydney equivalents. For those buying a second home, the township's tourism profile provides a proven short-stay market. For long-term holders, this is a scarcity asset in a market the data now rates among the strongest in regional Australia. Wynyard Airport is 40 minutes from Stanley, with daily flights to Melbourne.
            </p>
          </div>

          {/* Data Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {DATA_TILES.map((tile) => (
              <div
                key={tile.stat}
                className="border border-gray-200 rounded-xl px-6 py-10 text-center bg-white"
              >
                <p
                  className="mb-3 leading-none"
                  style={{
                    fontFamily: 'Prata, serif',
                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                    color: 'var(--dark-green)',
                  }}
                >
                  {tile.stat}
                </p>
                <p
                  className="text-gray-600 leading-snug"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
                >
                  {tile.label}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-gray-700 mb-8" style={{ fontFamily: 'Prata, serif' }}>
            Development Ready
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-green/10 mb-4">
              <Home className="w-8 h-8" style={{ color: 'var(--forest-green)' }} />
            </div>
            <h4 className="text-lg mb-2 text-gray-900" style={{ fontFamily: 'Prata, serif' }}>Full Infrastructure</h4>
            <p className="text-gray-700">Equipped with modern utilities: power, water & stormwater.</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-green/10 mb-4">
              <MapPin className="w-8 h-8" style={{ color: 'var(--forest-green)' }} />
            </div>
            <h4 className="text-lg mb-2 text-gray-900" style={{ fontFamily: 'Prata, serif' }}>Premium Location</h4>
            <p className="text-gray-700">Walking distance to beaches, cafés & attractions.</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-green/10 mb-4">
              <Wifi className="w-8 h-8" style={{ color: 'var(--forest-green)' }} />
            </div>
            <h4 className="text-lg mb-2 text-gray-900" style={{ fontFamily: 'Prata, serif' }}>NBN Ready</h4>
            <p className="text-gray-700">High-speed internet connectivity.</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-green/10 mb-4">
              <Construction className="w-8 h-8" style={{ color: 'var(--forest-green)' }} />
            </div>
            <h4 className="text-lg mb-2 text-gray-900" style={{ fontFamily: 'Prata, serif' }}>Quality Roads</h4>
            <p className="text-gray-700">Sealed entrances with footpaths.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
