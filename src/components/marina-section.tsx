import React from "react"

export default function MarinaSection() {
  const marinaImages = [
    {
      src: "/assets/marina/marina-2.jpg",
      alt: "Aerial view of Stanley's existing working port at the foot of The Nut.",
    },
    {
      src: "/images/stanley-marina-current.jpg",
      alt: "Stanley's working port at ground level, with fishing boats, private yachts and the breakwater.",
    },
  ]

  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    const next = (index + 1) % marinaImages.length
    const img = new Image()
    img.src = marinaImages[next].src
  }, [index])

  React.useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % marinaImages.length)
    }, 5000)
    return () => clearInterval(id)
  }, [paused, marinaImages.length])

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + marinaImages.length) % marinaImages.length)

  return (
    <section id="marina" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 items-center">

        {/* Left column: copy */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Stanley Marina, A Regional Proposal</h2>

          <p className="mt-4 text-gray-600">
            Stanley is the focus of several regional infrastructure proposals currently under consideration, including a proposed 80 to 100 berth marina at the foot of The Nut. The concept has been shared publicly with the Stanley community and is in early stage discussions with Circular Head Council.
          </p>

          <p className="mt-4 text-gray-600">
            The site is owned by Circular Head Council. Any development is subject to approvals, community consultation and funding, and no construction has commenced.
          </p>

          <p className="mt-4 text-gray-600">
            These proposals are not commitments, but they reflect the long term direction of the region.
          </p>
        </div>

        {/* Right column: carousel */}
        <div
          className="relative rounded-xl overflow-hidden bg-gray-100 shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <div className="relative w-full aspect-[16/9]">
            {marinaImages.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={[
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out",
                  i === index ? "opacity-100" : "opacity-0",
                ].join(" ")}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>

          {/* Prev/Next */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-2.5 py-2 shadow"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-2.5 py-2 shadow"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {marinaImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  i === index ? "bg-white shadow ring-1 ring-black/10" : "bg-white/60 hover:bg-white",
                ].join(" ")}
              />
            ))}
          </div>

          <div className="sr-only" aria-live="polite">
            Showing slide {index + 1} of {marinaImages.length}: {marinaImages[index].alt}
          </div>
        </div>

      </div>
    </section>
  )
}
