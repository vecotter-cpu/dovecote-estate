import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const PUBLICATIONS = [
  "GOURMET TRAVELLER",
  "BROADSHEET",
  "AUSTRALIAN TRAVELLER",
  "SMH TRAVELLER",
  "9TRAVEL",
  "THE MERCURY",
];

interface ArticleCard {
  type: "standard" | "featured";
  publication: string;
  date?: string;
  supportingLine?: string;
  headline: string;
  byline?: string;
  link: string;
  linkLabel?: string;
}

const ARTICLES: ArticleCard[] = [
  {
    type: "standard",
    publication: "PULSE TASMANIA",
    date: "JULY 2025",
    headline: "Deloraine, Stanley and Devonport win top Tasmanian tourism awards",
    link: "https://pulsetasmania.com.au/news/deloraine-stanley-and-devonport-win-top-tasmanian-tourism-awards/",
  },
  {
    type: "standard",
    publication: "PREMIER OF TASMANIA",
    date: "JULY 2024",
    headline: "Tassie's Top Tourism Towns crowned for 2024",
    link: "https://www.premier.tas.gov.au/latest-news/2024/june/tassies-top-tourism-towns-crowned-for-2024",
  },
  {
    type: "standard",
    publication: "SPIRIT OF TASMANIA",
    date: "2021",
    headline: "Stanley — Tassie's Top Tourism Town, Gold Winner",
    link: "https://www.spiritoftasmania.com.au/blog/stanley-tassie-s-top-tourism-town-2021-gold-winner",
  },
  {
    type: "standard",
    publication: "SMH TRAVELLER",
    date: "MAY 2025",
    supportingLine: "Part of SMH's \"Best of Tasmania\" guide",
    headline: "This Aussie road trip is outstanding, even if my car isn't",
    byline: "— Jim Darby",
    link: "https://www.smh.com.au/traveller/inspiration/this-aussie-road-trip-is-outstanding-even-if-my-car-isn-t-20241205-p5kw3p.html",
  },
  {
    type: "featured",
    publication: "THE MERCURY · NEWS 09",
    headline: "How a young restaurateur is reinventing dining in Stanley.",
    byline: "— Bridget Clarke, The Mercury",
    link: "",
    linkLabel: "View press clipping →",
  },
  {
    type: "standard",
    publication: "9TRAVEL",
    date: "2026",
    headline: "Best Beaches in Australia 2026",
    link: "https://travel.nine.com.au/latest/best-beaches-in-australia-2026-sydney-secret-bay-winner/c24a416a-eb2b-4bef-9d12-d37c970c1f0c",
  },
  {
    type: "standard",
    publication: "AUSTRALIAN TRAVELLER",
    headline: "The Best Australian Beaches",
    link: "https://www.australiantraveller.com/australia/best-australian-beach/",
  },
  {
    type: "standard",
    publication: "GOURMET TRAVELLER",
    date: "2026",
    headline: "Best Restaurants in Tasmania to Visit in 2026",
    link: "https://www.gourmettraveller.com.au/dining-out/restaurant-guide/best-restaurants-tasmania-20149/",
  },
  {
    type: "standard",
    publication: "WORLDATLAS",
    headline: "The 8 Can't-Miss Towns in Tasmania",
    link: "https://www.worldatlas.com/cities/the-8-cant-miss-towns-in-tasmania.html",
  },
];

function MercuryLightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hobart Mercury article: A fresh, modern twist — ZIVAH Stanley, by Bridget Clarke"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="fixed top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition text-white"
      >
        <X size={22} />
      </button>

      {/* Image — stopPropagation so clicking image doesn't close */}
      <div
        className="my-8 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/images/Zivah_article_1776834137978.jpg"
          alt="Hobart Mercury article: A fresh, modern twist — ZIVAH Stanley, by Bridget Clarke"
          className="max-w-full rounded shadow-2xl"
          style={{ maxHeight: "90vh", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

function StandardCard({ card }: { card: ArticleCard }) {
  return (
    <div
      className="flex flex-col bg-white border border-gray-200 rounded-xl p-8"
      style={{ gap: "0" }}
    >
      <p
        className="text-xs font-medium tracking-widest mb-1"
        style={{ color: "var(--caramel)", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em" }}
      >
        {card.publication}
      </p>
      {card.date && (
        <p className="text-xs text-gray-400 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
          {card.date}
        </p>
      )}
      {card.supportingLine && (
        <p
          className="text-gray-400 italic mb-2"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}
        >
          {card.supportingLine}
        </p>
      )}
      <p
        className="text-gray-800 mb-1 flex-grow"
        style={{ fontFamily: "Prata, serif", fontSize: "1.1rem", lineHeight: "1.5" }}
      >
        "{card.headline}"
      </p>
      {card.byline && (
        <p className="text-xs text-gray-400 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
          {card.byline}
        </p>
      )}
      <hr className="border-gray-200 my-4" />
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium hover:underline"
        style={{ color: "var(--dark-green)", fontFamily: "Inter, sans-serif" }}
      >
        Read the article →
      </a>
    </div>
  );
}

function FeaturedCard({ onOpenLightbox }: { onOpenLightbox: () => void }) {
  return (
    <div
      className="flex flex-col bg-white rounded-xl p-8 relative"
      style={{ border: "2px solid var(--dark-green)" }}
    >
      {/* Publication label */}
      <p
        className="text-xs font-medium tracking-widest mb-4"
        style={{ color: "var(--caramel)", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em" }}
      >
        THE MERCURY · NEWS 09
      </p>

      {/* Thumbnail — clicking opens lightbox */}
      <button
        onClick={onOpenLightbox}
        onKeyDown={(e) => e.key === "Enter" && onOpenLightbox()}
        aria-label="Open Mercury press clipping lightbox"
        className="block w-full mb-4 overflow-hidden rounded cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{ "--tw-ring-color": "var(--dark-green)" } as React.CSSProperties}
      >
        <img
          src="/images/Zivah_article_1776834137978.jpg"
          alt="Hobart Mercury article: A fresh, modern twist — ZIVAH Stanley, by Bridget Clarke"
          className="w-full rounded"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            maxHeight: "200px",
            filter: "saturate(0.82)",
          }}
        />
      </button>

      {/* Pull quote */}
      <p
        className="text-gray-800 italic mb-2 flex-grow"
        style={{ fontFamily: "Prata, serif", fontSize: "1.1rem", lineHeight: "1.5" }}
      >
        "How a young restaurateur is reinventing dining in Stanley."
      </p>

      {/* Byline */}
      <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
        — Bridget Clarke, The Mercury
      </p>

      <hr className="border-gray-200 my-3" />

      {/* Link */}
      <button
        onClick={onOpenLightbox}
        className="text-sm font-medium text-left hover:underline"
        style={{ color: "var(--dark-green)", fontFamily: "Inter, sans-serif" }}
      >
        View press clipping →
      </button>
    </div>
  );
}

export default function NewsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="news" className="py-16 md:py-24" style={{ backgroundColor: "var(--mist-white)" }}>
      <MercuryLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: "Prata, serif" }}>
            Press &amp; Coverage
          </h2>
          <p className="text-lg italic text-gray-500 max-w-2xl mx-auto" style={{ fontFamily: "Prata, serif" }}>
            Stanley has been named Tasmania's Top Tiny Tourism Town, won the 2025 People's Choice award, and is featured regularly in national travel, food and lifestyle press.
          </p>
        </div>

        {/* As Featured In strip */}
        <div className="text-center py-10 md:py-12 border-t border-b border-gray-200 mb-16">
          <p
            className="text-gray-400 mb-5"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {PUBLICATIONS.map((pub) => (
              <span
                key={pub}
                className="text-gray-400"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {pub}
              </span>
            ))}
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((card, i) =>
            card.type === "featured" ? (
              <FeaturedCard key={i} onOpenLightbox={() => setLightboxOpen(true)} />
            ) : (
              <StandardCard key={i} card={card} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
