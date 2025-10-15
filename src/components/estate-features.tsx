export default function EstateFeatures() {
  return (
    <section id="estate-features" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-3xl md:text-4xl font-bold">Development Ready</h2>
          <p className="mt-3 text-gray-600">
            Residential scarcity in a tightly held, award-winning coastal town.
          </p>
        </div>
        <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Full Infrastructure</h3>
            <p className="mt-2 text-gray-600">Connected to main sewerage, power and storm water.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Premium Location</h3>
            <p className="mt-2 text-gray-600">Walking distance to beaches, cafés & attractions.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">NBN Ready</h3>
            <p className="mt-2 text-gray-600">High-speed internet connectivity ready.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Quality Roads</h3>
            <p className="mt-2 text-gray-600">Sealed entrances with footpaths.</p>
          </div>
        </div>
      </div>
    </section>
  );
}