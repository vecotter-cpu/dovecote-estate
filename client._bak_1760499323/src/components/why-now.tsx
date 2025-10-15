export default function WhyNow() {
  return (
    <section id="why-now" className="py-16 md:py-24" style={{ backgroundColor: 'var(--mist-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Why Now?</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Scarcity + Demand</h3>
            <p className="mt-2 text-gray-600">Land in Stanley is almost impossible to find.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Tourism Growth</h3>
            <p className="mt-2 text-gray-600">Visitors increasing year on year.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Future Infrastructure</h3>
            <p className="mt-2 text-gray-600">Planned projects could redefine Stanley's profile and values.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Lifestyle & Legacy</h3>
            <p className="mt-2 text-gray-600">Ideal for a dream build or long-term investment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}