import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const PUBLICATIONS = [
  "THE AUSTRALIAN",
  "GOURMET TRAVELLER",
  "BROADSHEET",
  "AUSTRALIAN TRAVELLER",
  "SMH TRAVELLER",
  "9TRAVEL",
  "THE MERCURY",
];

// ─── Lightbox ────────────────────────────────────────────────────────────────

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
      aria-label="Hobart Mercury article: A fresh, modern twist — ZIVAH Stanley by Bridget Clarke"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="fixed top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition text-white"
      >
        <X size={22} />
      </button>
      <div className="my-8 mx-4" onClick={(e) => e.stopPropagation()}>
        <img
          src="/images/Zivah_article_1776834137978.jpg"
          alt="Hobart Mercury article: A fresh, modern twist — ZIVAH Stanley by Bridget Clarke"
          className="max-w-full rounded shadow-2xl"
          style={{ maxHeight: "90vh", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

// ─── Card types ──────────────────────────────────────────────────────────────

interface BaseCard {
  image: string;
  imageAlt: string;
  publication: string;
  date?: string;
  link: string;
}

interface StandardCardData extends BaseCard {
  type: "standard";
  supportingLine?: string;
  headline: string;
  byline?: string;
  pullQuote?: string;
  linkLabel?: string;
}

interface FeaturedCardData extends BaseCard {
  type: "featured";
  pullQuote: string;
  byline: string;
  linkLabel: string;
}

type CardData = StandardCardData | FeaturedCardData;

// ─── Card data ───────────────────────────────────────────────────────────────

const CARDS: CardData[] = [
  // Row 1
  {
    type: "standard",
    image: "/images/stanley_haven_1776843807058.webp",
    imageAlt: "Aerial view of Stanley Haven beach and coastline",
    publication: "PULSE TASMANIA",
    date: "JULY 2025",
    headline: "Deloraine, Stanley and Devonport win top Tasmanian tourism awards",
    link: "https://pulsetasmania.com.au/news/deloraine-stanley-and-devonport-win-top-tasmanian-tourism-awards/",
  },
  {
    type: "standard",
    image: "/images/Table_Cape_1776843807059.webp",
    imageAlt: "Aerial view of Table Cape, Tasmania",
    publication: "PREMIER OF TASMANIA",
    date: "JULY 2024",
    headline: "Tassie's Top Tourism Towns crowned for 2024",
    link: "https://www.premier.tas.gov.au/latest-news/2024/june/tassies-top-tourism-towns-crowned-for-2024",
  },
  {
    type: "standard",
    image: "/images/the_nut_1776843807058.jpg",
    imageAlt: "The Nut volcanic plug rising above Stanley, Tasmania",
    publication: "SPIRIT OF TASMANIA",
    date: "2021",
    headline: "Stanley — Tassie's Top Tourism Town, Gold Winner",
    link: "https://www.spiritoftasmania.com.au/blog/stanley-tassie-s-top-tourism-town-2021-gold-winner",
  },
  // Row 2
  {
    type: "standard",
    image: "/images/shin_inn_1776843807058.jpg",
    imageAlt: "The Shingle Inn heritage accommodation beneath The Nut, Stanley",
    publication: "SMH TRAVELLER",
    date: "MAY 2025",
    supportingLine: "Part of SMH's \"Best of Tasmania\" guide",
    headline: "This Aussie road trip is outstanding, even if my car isn't",
    byline: "— Jim Darby",
    link: "https://www.smh.com.au/traveller/inspiration/this-aussie-road-trip-is-outstanding-even-if-my-car-isn-t-20241205-p5kw3p.html",
  },
  {
    type: "featured",
    image: "/images/Zivah_article_1776834137978.jpg",
    imageAlt: "Hobart Mercury article: A fresh, modern twist — ZIVAH Stanley by Bridget Clarke",
    publication: "THE MERCURY · NEWS 09",
    pullQuote: "How a young restaurateur is reinventing dining in Stanley.",
    byline: "— Bridget Clarke, The Mercury",
    link: "",
    linkLabel: "View press clipping →",
  },
  {
    type: "standard",
    image: "/images/the_australian_article_1776843807059.avif",
    imageAlt: "The Australian — Things to do in Stanley, Tasmania",
    publication: "THE AUSTRALIAN · TRAVEL",
    date: "JANUARY 2023",
    supportingLine: "By Patricia Maunder",
    headline: "Things to do in Stanley, Tasmania",
    pullQuote: "\"From historic buildings to a striking geological landmark, Stanley has diversions aplenty.\"",
    link: "https://www.theaustralian.com.au/travel/things-to-do-in-stanley-tasmania/news-story/8aae37d054a2d28917026e69649e928f",
  },
  // Row 3
  {
    type: "standard",
    image: "/images/Stanley_look_out_1776843807058.jpg",
    imageAlt: "Visitors at The Nut lookout platform overlooking Stanley Bay",
    publication: "9TRAVEL",
    date: "2026",
    headline: "Best Beaches in Australia 2026",
    link: "https://travel.nine.com.au/latest/best-beaches-in-australia-2026-sydney-secret-bay-winner/c24a416a-eb2b-4bef-9d12-d37c970c1f0c",
  },
  {
    type: "standard",
    image: "/images/Golden_hour_1776843807058.jpg",
    imageAlt: "Golden hour over Stanley's coastal headland and beach",
    publication: "AUSTRALIAN TRAVELLER",
    headline: "The Best Australian Beaches",
    link: "https://www.australiantraveller.com/australia/best-australian-beach/",
  },
  {
    type: "standard",
    image: "/images/stanley_main_street_1776843807058.jpg",
    imageAlt: "Stanley main street with heritage shopfronts",
    publication: "GOURMET TRAVELLER",
    date: "2026",
    headline: "Best Restaurants in Tasmania to Visit in 2026",
    link: "https://www.gourmettraveller.com.au/dining-out/restaurant-guide/best-restaurants-tasmania-20149/",
  },
];

// ─── Thumbnail ───────────────────────────────────────────────────────────────

function Thumbnail({
  src,
  alt,
  featured = false,
  onClick,
}: {
  src: string;
  alt: string;
  featured?: boolean;
  onClick?: () => void;
}) {
  const img = (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      style={{ filter: featured ? "saturate(0.82)" : "saturate(0.9)" }}
    />
  );

  const wrapperClass =
    "w-full overflow-hidden rounded-t-xl" +
    (onClick ? " cursor-zoom-in" : "");

  const style: React.CSSProperties = { aspectRatio: "3/2" };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        aria-label="Open Mercury press clipping lightbox"
        className={wrapperClass + " block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green"}
        style={style}
      >
        {img}
      </button>
    );
  }

  return (
    <div className={wrapperClass} style={style}>
      {img}
    </div>
  );
}

// ─── Cards ───────────────────────────────────────────────────────────────────

function StandardCard({ card }: { card: StandardCardData }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden">
      <Thumbnail src={card.image} alt={card.imageAlt} />
      <div className="flex flex-col flex-grow p-8">
        <p
          className="text-xs font-medium mb-1"
          style={{ color: "var(--caramel)", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          {card.publication}
        </p>
        {card.date && (
          <p className="text-xs text-gray-400 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            {card.date}
          </p>
        )}
        {card.supportingLine && (
          <p className="text-gray-400 italic mb-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>
            {card.supportingLine}
          </p>
        )}
        <p
          className="text-gray-800 mb-1 flex-grow"
          style={{ fontFamily: "Prata, serif", fontSize: "1.1rem", lineHeight: "1.5" }}
        >
          &ldquo;{card.headline}&rdquo;
        </p>
        {card.byline && (
          <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
            {card.byline}
          </p>
        )}
        {card.pullQuote && (
          <p className="text-gray-500 italic text-sm mt-2 mb-1" style={{ fontFamily: "Prata, serif" }}>
            {card.pullQuote}
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
    </div>
  );
}

function FeaturedCard({
  card,
  onOpenLightbox,
}: {
  card: FeaturedCardData;
  onOpenLightbox: () => void;
}) {
  return (
    <div
      className="flex flex-col bg-white rounded-xl overflow-hidden"
      style={{ border: "2px solid var(--dark-green)" }}
    >
      <Thumbnail src={card.image} alt={card.imageAlt} featured onClick={onOpenLightbox} />
      <div className="flex flex-col flex-grow p-8">
        <p
          className="text-xs font-medium mb-4"
          style={{ color: "var(--caramel)", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          {card.publication}
        </p>
        <p
          className="text-gray-800 italic flex-grow mb-2"
          style={{ fontFamily: "Prata, serif", fontSize: "1.1rem", lineHeight: "1.5" }}
        >
          &ldquo;{card.pullQuote}&rdquo;
        </p>
        <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          {card.byline}
        </p>
        <hr className="border-gray-200 my-3" />
        <button
          onClick={onOpenLightbox}
          className="text-sm font-medium text-left hover:underline"
          style={{ color: "var(--dark-green)", fontFamily: "Inter, sans-serif" }}
        >
          {card.linkLabel}
        </button>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function NewsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="press-coverage" className="py-16 md:py-24" style={{ backgroundColor: "var(--mist-white)" }}>
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

        {/* 3×3 Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) =>
            card.type === "featured" ? (
              <FeaturedCard key={i} card={card} onOpenLightbox={() => setLightboxOpen(true)} />
            ) : (
              <StandardCard key={i} card={card as StandardCardData} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
