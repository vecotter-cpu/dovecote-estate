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
      id: 1,
      title: "JDR Homes Packages Available on Lots 23 and 24",
      date: "October 12, 2025",
      excerpt: "Tasmanian builder JDR Homes has published house-and-land packages on two Dovecote Estate lots. Optional turnkey pathway for buyers who prefer a ready-to-build solution.",
      category: "Development",
      slug: "jdr-homes-packages-lots-23-24",
    },
    {
      id: 2,
      title: "The Stanley Lifestyle: More Than Just Ocean Views",
      date: "October 5, 2025",
      excerpt: "Living at Dovecote Estate means immediate access to Stanley Golf Club, Godfrey's Beach, The Nut chairlift, and a thriving local community. With Wynyard Airport just 40 minutes away and NBN connectivity, residents enjoy the perfect blend of coastal serenity and modern convenience.",
      category: "Lifestyle",
      slug: "stanley-lifestyle-coastal-living",
    },
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/#contact';
  };

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

        {/* News Grid — 2 cards, centred */}
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

        {/* Full Articles */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-16">

              {/* JDR Article */}
              <article id="jdr-homes-packages-lots-23-24" className="scroll-mt-24">
                <p className="text-sm font-medium px-3 py-1 rounded-full inline-block mb-4" style={{ backgroundColor: 'var(--forest-green)', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                  Development
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                  JDR Homes Packages Available on Lots 23 and 24
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-8">
                  <Calendar size={16} className="mr-2" />
                  October 12, 2025
                </div>
                <div className="prose prose-lg max-w-none space-y-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-gray-700">
                    Tasmanian builder JDR Homes has published two house-and-land packages for Dovecote Estate Stanley, offering buyers an optional turnkey pathway on specific lots.
                  </p>
                  <p className="text-gray-700">
                    <strong>Lot 23: Three-bedroom package</strong><br />
                    3 bed, 2 bath, 2 car on a 714m² lot, with a 190m² home. Total package price: $734,000.
                  </p>
                  <p className="text-gray-700">
                    <strong>Lot 24: Two-bedroom package</strong><br />
                    2 bed, 1 bath, 1 car on a 714m² lot, with a 134m² home. Total package price: $646,000.
                  </p>
                  <p className="text-gray-700">
                    Both packages include JDR Homes' 'Essentials' specification with a minimum 6-star energy rating. Site cost allowances are confirmed following soil tests and survey. Full plans, inclusions and specifications are available directly from JDR Homes.
                  </p>
                  <p className="text-gray-700">
                    JDR Homes is based in Ulverstone on Tasmania's north-west coast and has built across the region for over three decades. The published Dovecote packages are designed for the site's coastal climate and orientation.
                  </p>
                  <p className="text-gray-700">
                    Buyers are welcome to build with any Tasmanian builder of their choice on any of the 25 titled lots at Dovecote Estate. The JDR packages are offered as one option among many, particularly suited to buyers who prefer a turnkey outcome with fixed pricing and a single point of contact.
                  </p>
                  <p className="text-gray-700">
                    Enquiries regarding JDR packages can be directed to JDR Homes directly, or via the Dovecote Estate sales team for assistance coordinating the land purchase and build contract.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <a
                    href="https://www.jdrhomes.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium border transition-colors"
                    style={{ borderColor: 'var(--forest-green)', color: 'var(--forest-green)', fontFamily: 'Inter, sans-serif' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--forest-green)'; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = ''; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--forest-green)'; }}
                  >
                    View JDR Homes →
                  </a>
                  <a
                    href="/#contact"
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-colors"
                    style={{ backgroundColor: 'var(--forest-green)', color: 'white', fontFamily: 'Inter, sans-serif' }}
                  >
                    Enquire about these lots →
                  </a>
                </div>
              </article>

              {/* Stanley Lifestyle Article */}
              <article id="stanley-lifestyle-coastal-living" className="scroll-mt-24">
                <p className="text-sm font-medium px-3 py-1 rounded-full inline-block mb-4" style={{ backgroundColor: 'var(--forest-green)', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                  Lifestyle
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                  The Stanley Lifestyle: More Than Just Ocean Views
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-8">
                  <Calendar size={16} className="mr-2" />
                  October 5, 2025
                </div>
                <div className="prose prose-lg max-w-none space-y-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-gray-700">
                    Living at Dovecote Estate means immediate access to Stanley Golf Club, Godfrey's Beach, The Nut chairlift, and a thriving local community. This isn't just about buying property. It's about embracing a coastal lifestyle that balances serenity with convenience.
                  </p>
                  <p className="text-gray-700">
                    Residents enjoy morning walks to Godfrey's Beach for surfing or swimming, afternoon rounds at the heritage-listed golf club, and weekend adventures exploring The Nut's walking trails and chairlift. The Stanley Marina development adds boating and water sports to the lifestyle mix, while Cradle Mountain sits just 90 minutes away for wilderness experiences.
                  </p>
                  <p className="text-gray-700">
                    With Wynyard Airport just 40 minutes away offering daily Melbourne flights, and NBN connectivity enabling remote work, Stanley residents enjoy the perfect blend of coastal serenity and modern convenience. It's this unique combination that makes Dovecote Estate more than a property investment. It's a lifestyle transformation.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Cross-link to press coverage */}
        <section className="text-center" style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: 'var(--mist-white)' }}>
          <a
            href="/#press-coverage"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#press-coverage';
            }}
            className="hover:underline"
            style={{
              color: 'var(--dark-green)',
              fontFamily: 'Prata, serif',
              fontSize: '1rem',
              letterSpacing: '0.02em',
              textDecoration: 'none',
            }}
          >
            See press coverage of Stanley →
          </a>
        </section>

        <Footer />
      </div>
    </div>
  );
}
