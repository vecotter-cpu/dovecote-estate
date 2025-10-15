export default function LocationHighlights() {
  return (
    <section id="location" className="py-24 md:py-32" style={{ backgroundColor: 'var(--mist-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Location Highlights</h2>
        
        {/* Hero image for location context */}
        <div className="mt-8 mb-8 relative overflow-hidden rounded-2xl h-64">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt="Stanley coastal landscape with mountains and water"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-medium">Stanley, Tasmania - Your coastal sanctuary</p>
          </div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Fast Access</h3>
            <p className="mt-2 text-gray-600">~40 mins to Wynyard Airport (multiple direct flights to Melbourne daily).</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Walkable</h3>
            <p className="mt-2 text-gray-600">Stanley Nut, Godfreys Beach, Tatlows Bay and Stanley Golf Club.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Village Lifestyle</h3>
            <p className="mt-2 text-gray-600">Cafés, schools and heritage streets close by.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Nature Gateway</h3>
            <p className="mt-2 text-gray-600">Gateway to the Tarkine wilderness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}