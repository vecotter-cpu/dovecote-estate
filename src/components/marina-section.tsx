export default function MarinaSection() {
  return (
    <section id="marina" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Left column: copy */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Stanley Marina</h2>
          <p className="mt-3 text-gray-600">
            A proposed marina could redefine Stanley's future. If realised, it would anchor Stanley as a
            premier coastal destination. Beyond lifestyle benefits, it would generate tourism, jobs, and
            long-term capital growth.
          </p>
        </div>

        {/* Right column: single image */}
        <div className="rounded-xl overflow-hidden bg-gray-100 shadow-sm">
          <div className="relative w-full aspect-[16/9]">
            <img
              src="/assets/marina/marina-2.jpg"
              alt="Stanley marina aerial view beneath The Nut"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
