export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E300E] text-white pt-10 pb-8">
      {/* container mirrors header paddings */}
      <div className="px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full">
        {/* 3-col layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* LEFT: Logo + tagline */}
          <div className="flex flex-col">
            <div className="flex flex-col leading-tight">
              <span className="font-['Prata'] text-[1.6rem] tracking-[0.02em] lg:text-[1.9rem]">
                DOVECOTE ESTATE
              </span>
              <span className="font-['Inter'] uppercase tracking-[0.22em] text-[0.9rem] text-[#E8E6E2] mt-[-0.12rem]">
                STANLEY
              </span>
            </div>

            <p className="mt-4 text-sm text-[#E8E6E2] max-w-sm">
              Premium coastal living in Tasmania&apos;s most exclusive residential subdivision.
            </p>
          </div>

          {/* CENTER: Quick Links (balanced & readable) */}
          <nav className="flex flex-col items-start lg:items-center">
            <h4 className="font-['Inter'] text-sm uppercase tracking-[0.18em] text-white mb-3">
              Quick Links
            </h4>

            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[0.98rem]">
              <li>
                <button 
                  onClick={() => scrollToSection("#home")} 
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#lots")} 
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-lots"
                >
                  Available Lots
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#packages")} 
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-packages"
                >
                  JDR Home Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#lifestyle")} 
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-lifestyle"
                >
                  Lifestyle
                </button>
              </li>
              <li>
                <a 
                  href="/news" 
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-news"
                >
                  News & Updates
                </a>
              </li>
              <li>
                <a 
                  href="/gallery" 
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")} 
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-contact"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/dovecoteestate" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                  data-testid="footer-link-instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>

          {/* RIGHT: Contact (flush right on desktop) */}
          <div className="flex flex-col items-start lg:items-end">
            <h4 className="font-['Inter'] text-sm uppercase tracking-[0.18em] text-white mb-3">
              Contact
            </h4>

            <div className="text-[0.98rem] space-y-1 lg:text-right">
              <p className="text-white" data-testid="footer-phone">0455 569 646</p>
              <p>
                <a 
                  className="hover:underline underline-offset-4" 
                  href="mailto:info@dovecoteestate.com.au"
                  data-testid="footer-email"
                >
                  info@dovecoteestate.com.au
                </a>
              </p>
              <p className="text-[#E8E6E2]" data-testid="footer-address">40 Dovecote Rd, Stanley</p>
            </div>
          </div>
        </div>

        {/* SEO-Rich Description */}
        <div className="mt-10 pt-8 border-t border-white/15">
          <div className="text-sm text-[#E8E6E2] leading-relaxed max-w-5xl mx-auto">
            <p className="mb-3">
              <strong className="text-white">Dovecote Estate Stanley Tasmania</strong> - A premium coastal residential subdivision in Circular Head, offering land lots from $254,000 and JDR house and land packages from $645,000. Our exclusive location provides walking access to The Nut State Reserve, Godfrey&apos;s Beach, Stanley Golf Club, and the developing Stanley Marina - combining heritage coastal charm with modern living infrastructure.
            </p>
            <p className="text-xs opacity-90">
              Situated in one of Tasmania's most sought-after coastal locations, residents enjoy proximity to beaches, golf, wilderness experiences, and Melbourne connectivity via nearby Wynyard Airport. Experience authentic coastal living where community, natural beauty, and investment value converge.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/15 pt-6">
          <div className="text-center text-xs text-[#E8E6E2]">
            &copy; {new Date().getFullYear()} Dovecote Estate Stanley. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
