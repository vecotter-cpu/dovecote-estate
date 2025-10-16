import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MARINA_IMG = "/assets/marina/marina-1.jpg";

export default function MarinaFactor() {
  const [showQA, setShowQA] = useState(false);

  return (
    <section id="marina" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">The Marina Factor (Planning Stage)</h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            A proposed marina is currently under consideration. If realised, it would anchor Stanley as a premier coastal
            destination and amplify lifestyle, tourism and investment appeal.
          </p>
        </header>

        {/* Imagery */}
        <figure className="mt-8 overflow-hidden rounded-2xl border bg-white">
          <a href={MARINA_IMG} target="_blank" rel="noreferrer" aria-label="Open marina image in a new tab">
            <img
              src={MARINA_IMG}
              alt="Illustrative marina environment: berths, breakwater and waterfront amenities"
              className="w-full h-[260px] md:h-[420px] object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback to a placeholder if marina image not available
                e.currentTarget.src = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600";
                e.currentTarget.alt = "Marina concept visualization - Stanley waterfront";
              }}
            />
          </a>
          <figcaption className="px-4 py-3 text-xs text-gray-500">
            Concept reference only. Final design, location and scope subject to planning and approvals.
          </figcaption>
        </figure>

        {/* Expandable Q&A */}
        <div className="mt-6">
          <button
            onClick={() => setShowQA(!showQA)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Learn more about the marina proposal
            {showQA ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {showQA && (
            <div className="mt-4 p-4 bg-white rounded-xl border space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900">What does "planning stage" mean?</h4>
                <p className="mt-1 text-gray-600">The marina is a proposal currently under consideration by local authorities. No approvals have been granted and timelines are not confirmed.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">What would the marina include?</h4>
                <p className="mt-1 text-gray-600">Proposed features may include berths for recreational and commercial vessels, waterfront amenities, and supporting infrastructure.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">How does this affect Dovecote Estate?</h4>
                <p className="mt-1 text-gray-600">If approved, a marina could enhance Stanley's appeal as a destination, potentially benefiting property values and lifestyle amenity in the area.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Investment disclaimer</h4>
                <p className="mt-1 text-gray-600">Purchase decisions should be based on current amenities and location benefits. Future development outcomes cannot be guaranteed.</p>
              </div>
            </div>
          )}
        </div>

        {/* Benefits grid */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Destination Magnet</h3>
            <p className="mt-2 text-gray-600">
              Attracts yachts, recreational boats and potentially cruise traffic—lifting year-round visitation.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Economic Momentum</h3>
            <p className="mt-2 text-gray-600">
              Jobs, services and hospitality uplift from new marine activity and supporting businesses.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Capital Growth</h3>
            <p className="mt-2 text-gray-600">
              Increased demand for housing and accommodation can put upward pressure on values.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">First-Mover Advantage</h3>
            <p className="mt-2 text-gray-600">
              Dovecote owners are well placed to benefit if the project proceeds.
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          *Marina proposal status: planning stage. Timeframes, approvals and outcomes are not guaranteed and may change.
        </p>
      </div>
    </section>
  );
}