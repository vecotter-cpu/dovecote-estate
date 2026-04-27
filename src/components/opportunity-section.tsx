import { Home, Wifi, MapPin, Construction } from "lucide-react";

const DATA_TILES = [
  { stat: "240:1", label: "Visitor-to-resident ratio" },
  { stat: "145,000", label: "Visitors to Stanley each year" },
  { stat: "56%", label: "Rise in Northern Tasmania investor activity (2025)" },
  { stat: "3.6%", label: "Annual turnover in Stanley, half the national average" },
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

          <div className="mx-auto mb-12 space-y-6 text-left" style={{ maxWidth: '760px' }}>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stanley is one of Tasmania's most tightly held coastal towns. A resident population of around 600. More than 145,000 visitors a year, with 75,000 staying overnight. Only 16 properties changed hands across the entire town in the past twelve months.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tasmania's north west coast led the state's regional property recovery in 2025. Mainland investor activity into northern Tasmania rose 56% last year. Regional prices outperformed the capital cities, and forecasts hold that pattern for the next three to five years.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              For mainland buyers, Stanley offers heritage, coastline and genuine community at a fraction of Melbourne or Sydney equivalents, with a tourism profile that underpins short stay demand and a scarcity profile that underpins long term value.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Dovecote Estate is one of the only opportunities to secure new residential land within the township.
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

          {/* Airport callout banner */}
          <div
            className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-8 py-5 mt-4 mb-6"
          >
            <span style={{ color: 'var(--caramel)', fontSize: '1.1rem' }}>✈</span>
            <p
              className="text-gray-600 text-center"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
            >
              Wynyard Airport is 40 minutes from Stanley, with multiple flights per day to Melbourne.
            </p>
          </div>

          <p
            className="text-center text-gray-600"
            style={{
              fontFamily: 'Prata, serif',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              marginTop: '3rem',
              marginBottom: '3rem',
            }}
          >
            The case is in the numbers. The opportunity is in the timing.
          </p>

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
