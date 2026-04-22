import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  slug: string;
}

export default function News() {
  useEffect(() => {
    document.title = "Dovecote Estate News | Stanley Tasmania";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Updates from the Dovecote Estate development, partnership announcements, and the story of Stanley life.');
    }
  }, []);

  const newsArticles: NewsArticle[] = [
    {
      id: 2,
      title: "JDR Homes Announces New Design Options for Dovecote Estate",
      date: "October 12, 2025",
      excerpt: "Premium home builder JDR Homes has expanded their design offerings for Dovecote Estate Stanley, with three coastal-inspired packages now available. The Coastal Haven, Stanley Retreat, and Seaside Sanctuary designs specifically tailored for Tasmania's coastal climate.",
      category: "Development",
      slug: "jdr-homes-new-designs-dovecote-estate",
    },
    {
      id: 4,
      title: "The Stanley Lifestyle: More Than Just Ocean Views",
      date: "October 5, 2025",
      excerpt: "Living at Dovecote Estate means immediate access to Stanley Golf Club, Godfrey's Beach, The Nut chairlift, and a thriving local community. With Wynyard Airport just 40 minutes away and NBN connectivity, residents enjoy the perfect blend of coastal serenity and modern convenience.",
      category: "Lifestyle",
      slug: "stanley-lifestyle-coastal-living",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--mist-white)' }}>
      <Navigation />

      <div className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--dark-green)' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Prata, serif' }}>
                Dovecote Estate News
              </h1>
              <p className="text-lg md:text-xl text-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                Updates from the development, partnership announcements, and the story of Stanley life.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid — 2 cards, centred 2-column layout */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {newsArticles.map((article) => (
                <Card key={article.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--forest-green)', color: 'white' }}>
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="text-2xl" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {article.excerpt}
                    </p>
                    <a
                      href={`#${article.slug}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2 border border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-colors rounded-md text-sm font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(article.slug);
                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      Read Full Article <ArrowRight className="ml-2" size={16} />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Full Article Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-16">

              {/* JDR Article */}
              <article id="jdr-homes-new-designs-dovecote-estate" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                  JDR Homes Announces New Design Options for Dovecote Estate
                </h2>
                <p className="text-sm italic text-amber-700 mb-4 border-l-2 border-amber-400 pl-3">
                  The package names, bed counts and pricing in this article require verification with JDR Homes and the developer before publishing. Flag for review.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <Calendar size={16} className="mr-2" />
                  October 12, 2025
                </div>
                <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-gray-700 mb-4">
                    Premium Tasmanian home builder JDR Homes has expanded their design offerings specifically for Dovecote Estate Stanley, with three coastal-inspired packages now available. The Coastal Haven, Stanley Retreat, and Seaside Sanctuary designs are specifically tailored for Tasmania's coastal climate and the unique Stanley lifestyle.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Each design incorporates premium fixtures, energy-efficient features, and architectural elements that complement the coastal landscape. The Coastal Haven (3 bed, $645k) offers exceptional value for downsizers and first-home buyers, while the Stanley Retreat (4 bed, $785k) and Seaside Sanctuary (4 bed, $695k) cater to growing families seeking space and style.
                  </p>
                  <p className="text-gray-700">
                    JDR Homes brings over 30 years of Tasmania building expertise, understanding the unique requirements of coastal construction including wind ratings, salt-air resilience, and thermal efficiency for Tasmania's climate. This partnership ensures Dovecote Estate buyers receive turnkey solutions built to the highest standards.
                  </p>
                </div>
              </article>

              {/* Stanley Lifestyle Article */}
              <article id="stanley-lifestyle-coastal-living" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                  The Stanley Lifestyle: More Than Just Ocean Views
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <Calendar size={16} className="mr-2" />
                  October 5, 2025
                </div>
                <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-gray-700 mb-4">
                    Living at Dovecote Estate means immediate access to Stanley Golf Club, Godfrey's Beach, The Nut chairlift, and a thriving local community. This isn't just about buying property - it's about embracing a coastal lifestyle that balances serenity with convenience.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Residents enjoy morning walks to Godfrey's Beach for surfing or swimming, afternoon rounds at the heritage-listed golf club, and weekend adventures exploring The Nut's walking trails and chairlift. The Stanley Marina development adds boating and water sports to the lifestyle mix, while Cradle Mountain sits just 90 minutes away for wilderness experiences.
                  </p>
                  <p className="text-gray-700">
                    With Wynyard Airport just 40 minutes away offering daily Melbourne flights, and NBN connectivity enabling remote work, Stanley residents enjoy the perfect blend of coastal serenity and modern convenience. It's this unique combination that makes Dovecote Estate more than a property investment - it's a lifestyle transformation.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Cross-link to press coverage */}
        <section className="py-12 text-center" style={{ backgroundColor: 'var(--mist-white)' }}>
          <a
            href="/#news"
            className="text-sm font-medium hover:underline"
            style={{ color: 'var(--dark-green)', fontFamily: 'Inter, sans-serif' }}
          >
            See press coverage of Stanley →
          </a>
        </section>

        <Footer />
      </div>
    </div>
  );
}
