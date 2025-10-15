import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;
    const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Header functionality - dropdown menu with smooth slide and width matching
  useEffect(() => {
    const btn = document.querySelector('.nav-toggle');
    const panel = document.querySelector('#menu-panel');
    const rightGroup = document.querySelector('.right-group');
    if (!btn || !panel || !rightGroup) return;

    // Function: match dropdown width to right-group width
    const sizePanel = () => {
      const w = rightGroup.getBoundingClientRect().width;
      (panel as HTMLElement).style.width = `${Math.round(w)}px`;
    };
    sizePanel();
    window.addEventListener('resize', sizePanel);

    // Toggle open/close (with slide animation)
    const handleToggle = () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.classList.toggle('open', !expanded);
    };
    btn.addEventListener('click', handleToggle);

    // Optional: close panel when clicking outside
    const handleClickOutside = (e: Event) => {
      if (!panel.classList.contains('open')) return;
      const target = e.target as Element;
      const clickInside = target.closest('.right-group') || target.closest('#menu-panel');
      if (!clickInside) {
        btn.setAttribute('aria-expanded', 'false');
        panel.classList.remove('open');
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      btn.removeEventListener('click', handleToggle);
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', sizePanel);
    };
  }, []);

  // Scroll behavior - dark green header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#0E300E] py-2 shadow-md"
          : "bg-white py-4 shadow-none"
      }`}
      role="banner"
    >
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Dovecote Estate Home"
          className="flex flex-col leading-tight items-center justify-center logo"
        >
          <span
            className={`font-prata tracking-[0.02em] ${
              isScrolled ? "text-white" : "text-[#0E300E]"
            } text-[1.35rem] sm:text-[1.45rem] lg:text-[1.85rem] xl:text-[2.0rem]`}
          >
            DOVECOTE ESTATE
          </span>
          <span
            className={`font-inter uppercase mt-[-0.12rem] tracking-[0.18em] text-[0.8rem] sm:text-[0.82rem] lg:text-[0.92rem] xl:text-[1.0rem] ${
              isScrolled ? "text-white" : "text-[#2E3A2F]"
            }`}
          >
            STANLEY
          </span>
        </Link>

        {/* Right-side nav */}
        <div className="flex items-center space-x-4 right-group">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className={`border rounded-full px-5 py-2 text-sm transition-all duration-300 ${
              isScrolled
                ? "bg-transparent border-white text-white hover:bg-white hover:text-[#0E300E]"
                : "bg-white border-[#0E300E] text-[#0E300E] hover:bg-[#0E300E] hover:text-white"
            }`}
          >
            Contact
          </a>

          {/* Hamburger */}
          <button 
            className={`nav-toggle ${isScrolled ? "text-white" : "text-[#0E300E]"}`}
            aria-label="Open menu" 
            aria-expanded="false" 
            aria-controls="menu-panel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu (aligned right, width will match .right-group) */}
      <nav id="menu-panel" className="dropdown-panel" aria-label="Secondary">
        <ul>
          <li>
            <button
              onClick={() => {
                scrollToSection("#lots");
                document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
                document.querySelector('#menu-panel')?.classList.remove('open');
              }}
            >
              Available Lots
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("#lifestyle");
                document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
                document.querySelector('#menu-panel')?.classList.remove('open');
              }}
            >
              Explore Lifestyle
            </button>
          </li>
          <li>
            <Link 
              href="/news"
              onClick={() => {
                document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
                document.querySelector('#menu-panel')?.classList.remove('open');
              }}
            >
              News & Updates
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery"
              onClick={() => {
                document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
                document.querySelector('#menu-panel')?.classList.remove('open');
              }}
            >
              Gallery
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("#contact");
                document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
                document.querySelector('#menu-panel')?.classList.remove('open');
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
