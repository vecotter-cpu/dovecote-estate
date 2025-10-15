import { Link } from "wouter";

export default function FinalCTA() {
  return (
    <section id="enquire" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          This is more than land — it's your entry into Stanley's next chapter.
        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          Secure your block before values lift further.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/packages" className="rounded-2xl px-5 py-3 text-sm font-medium bg-forest-green text-white shadow hover:opacity-95 transition">
            View House &amp; Land Packages
          </Link>
          <a href="#contact" className="rounded-2xl px-5 py-3 text-sm font-medium border border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition">
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}