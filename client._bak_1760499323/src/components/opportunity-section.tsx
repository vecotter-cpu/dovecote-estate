import { Home, Wifi, MapPin, Construction } from "lucide-react";

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="py-16 md:py-24" style={{ backgroundColor: 'var(--mist-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-8" style={{ fontFamily: 'Prata, serif' }}>
            A Once in a Lifetime Opportunity
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              With residential land in Stanley virtually unobtainable in recent years, this exclusive peninsula subdivision presents a once in a lifetime opportunity to secure premium coastal land in one of Tasmania's most tightly held and historic townships. Offering both lifestyle appeal and investment potential, opportunities of this calibre are extremely limited — making this release rare, strategic, and highly desirable.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Just 40 minutes from Wynyard Airport, with daily flights to Melbourne, residents will enjoy premium connectivity while embracing a pristine coastal lifestyle where properties command premium prices.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stanley's established infrastructure and services, combined with its award-winning tourism status and Bass Strait coastal location, make this one of Tasmania's most sought-after residential development opportunities.
            </p>
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