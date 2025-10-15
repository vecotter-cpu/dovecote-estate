import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    document.title = "News & Updates - Dovecote Estate Stanley Tasmania | Property Market Insights";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Latest news and updates from Dovecote Estate Stanley. Tasmania property market insights, development progress, JDR homes updates, and Circular Head real estate trends.');
    }
  }, []);

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Stanley Property Market Shows Strong Growth in 2025",
      date: "October 14, 2025",
      excerpt: "The Stanley and Circular Head region continues to attract investors and lifestyle buyers, with coastal properties showing exceptional value appreciation. Dovecote Estate's premium positioning near The Nut and marina access points makes it a standout opportunity.",
      category: "Market Update",
      slug: "stanley-property-market-growth-2025"
    },
    {
      id: 2,
      title: "JDR Homes Announces New Design Options for Dovecote Estate",
      date: "October 12, 2025",
      excerpt: "Premium home builder JDR Homes has expanded their design offerings for Dovecote Estate Stanley, with three coastal-inspired packages now available. The Coastal Haven, Stanley Retreat, and Seaside Sanctuary designs specifically tailored for Tasmania's coastal climate.",
      category: "Development",
      slug: "jdr-homes-new-designs-dovecote-estate"
    },
    {
      id: 3,
      title: "Why Coastal Tasmania Remains Australia's Best-Kept Investment Secret",
      date: "October 8, 2025",
      excerpt: "While mainland Australian property prices surge, Tasmania's northwest coast offers exceptional value. Stanley's unique combination of heritage charm, tourism infrastructure, and pristine beaches creates a compelling case for both investors and owner-occupiers.",
      category: "Investment Insights",
      slug: "coastal-tasmania-investment-opportunity"
    },
    {
      id: 4,
      title: "The Stanley Lifestyle: More Than Just Ocean Views",
      date: "October 5, 2025",
      excerpt: "Living at Dovecote Estate means immediate access to Stanley Golf Club, Godfrey's Beach, The Nut chairlift, and a thriving local community. With Wynyard Airport just 40 minutes away and NBN connectivity, residents enjoy the perfect blend of coastal serenity and modern convenience.",
      category: "Lifestyle",
      slug: "stanley-lifestyle-coastal-living"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--mist-white)' }}>
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--dark-green)' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Prata, serif' }}>
                News & Market Updates
              </h1>
              <p className="text-lg md:text-xl text-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                Stay informed about Dovecote Estate developments, Stanley property market trends, and Tasmania coastal real estate insights.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden" data-testid={`news-card-${article.id}`}>
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
                      data-testid={`read-more-${article.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(article.slug);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
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

        {/* Full Article Content Sections */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Article 1 */}
              <article id="stanley-property-market-growth-2025" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                  Stanley Property Market Shows Strong Growth in 2025
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <Calendar size={16} className="mr-2" />
                  October 14, 2025
                </div>
                <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-gray-700 mb-4">
                    The Stanley and Circular Head region continues to attract investors and lifestyle buyers, with coastal properties showing exceptional value appreciation. Recent market data indicates that Tasmania's northwest coast is experiencing steady growth, driven by Melbourne and Sydney buyers seeking affordable coastal lifestyle options.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Dovecote Estate's premium positioning near The Nut and marina access points makes it a standout opportunity. With land lots starting from $254,000, investors are recognizing the value proposition compared to mainland coastal markets where similar properties command 2-3x the price.
                  </p>
                  <p className="text-gray-700">
                    Local real estate experts attribute this growth to improved infrastructure including Wynyard Airport connectivity, NBN rollout, and the growing recognition of Stanley as a premier tourism destination. The combination of lifestyle appeal and investment fundamentals creates a compelling case for both owner-occupiers and property investors.
                  </p>
                </div>
              </article>

              {/* Article 2 */}
              <article id="jdr-homes-new-designs-dovecote-estate" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                  JDR Homes Announces New Design Options for Dovecote Estate
                </h2>
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

              {/* Article 3 */}
              <article id="coastal-tasmania-investment-opportunity" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Prata, serif', color: 'var(--forest-green)' }}>
                  Why Coastal Tasmania Remains Australia's Best-Kept Investment Secret
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <Calendar size={16} className="mr-2" />
                  October 8, 2025
                </div>
                <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-gray-700 mb-4">
                    While mainland Australian property prices surge past affordability for many buyers, Tasmania's northwest coast offers exceptional value. Stanley's unique combination of heritage charm, tourism infrastructure, and pristine beaches creates a compelling case for both investors and owner-occupiers.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Comparable coastal properties in New South Wales or Queensland command prices 2-3 times higher than Stanley, yet lack the same heritage appeal, natural attractions, and community character. The Nut State Reserve, recognized as one of Tasmania's most iconic landmarks, provides a tourism draw that supports year-round rental demand and capital appreciation.
                  </p>
                  <p className="text-gray-700">
                    Investment fundamentals remain strong with Stanley Golf Club (established 1909), expanding marina facilities, and Wynyard Airport providing daily Melbourne connections. The combination of lifestyle appeal, tourism strength, and relative affordability positions Stanley as a strategic investment for the next decade.
                  </p>
                </div>
              </article>

              {/* Article 4 */}
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
        
        <Footer />
      </div>
    </div>
  );
}
