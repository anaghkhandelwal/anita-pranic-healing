import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe, Sparkles } from 'lucide-react';
import { useCurrency } from './CurrencyContext.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currency, toggleCurrency } = useCurrency();

  const navLinks = [
    { label: 'Healing', path: '/healing-sessions' },
    { label: 'Courses', path: '/courses' },
    { label: 'Twin Hearts', path: '/twin-hearts-meditation' },
    { label: 'About', path: '/about' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Articles', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-divider transition-all">
      {/* Top Announcement Banner - Fully Responsive with min-w-0 */}
      <div className="bg-primary text-[#EFE8E2] text-[11px] sm:text-xs py-2 px-3 sm:px-4 text-center font-medium tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 overflow-hidden">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" />
        <span className="truncate min-w-0 max-w-[210px] sm:max-w-none">
          GMCKS Lineage • Next Basic Batch: Nov 23–24 (Jaipur)
        </span>
        <Link to="/courses" className="text-gold-light hover:underline font-semibold ml-0.5 shrink-0 inline-flex items-center gap-1">
          <span>Reserve</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Logo & Identity - Gracefully Shrinks on Mobile */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink min-w-0 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary flex items-center justify-center text-gold-light shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 5c2 3 3.5 4.5 3.5 7s-1.5 4-3.5 7c-2-3-3.5-4.5-3.5-7s1.5-4 3.5-7z" fill="#DFC082" fillOpacity="0.4" />
                <circle cx="12" cy="12" r="2" fill="#DFC082" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors block leading-tight truncate">
                Anita Khandelwal
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-dark block mt-0.5 truncate">
                Certified GMCKS Healer & Instructor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] xl:text-sm font-medium tracking-wide transition-all relative py-1.5 px-1 ${
                  isActive(link.path)
                    ? 'text-primary font-bold'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions & Conversion CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Currency Button */}
            <button
              onClick={toggleCurrency}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-divider text-xs font-semibold text-ink-muted hover:border-gold hover:text-ink transition-colors bg-canvas shadow-xs"
              title="Toggle Currency between INR (₹) and USD ($)"
            >
              <Globe className="w-3.5 h-3.5 text-gold-dark" />
              <span>{currency === 'INR' ? '₹ INR' : '$ USD'}</span>
            </button>

            {/* Direct Booking CTA */}
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20a%20Free%2015-Minute%20Aura%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-primary hover:bg-plum-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span>Free 15-Min Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-light" />
            </a>
          </div>

          {/* Mobile Menu & Currency Toggle - Guaranteed to fit under 360px */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            <button
              onClick={toggleCurrency}
              className="px-2.5 py-1.5 min-h-[44px] min-w-[44px] rounded-full border border-divider text-xs font-bold text-ink-muted bg-canvas hover:border-gold transition-colors flex items-center justify-center"
              title="Switch Currency"
            >
              {currency === 'INR' ? '₹' : '$'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl text-ink-muted hover:text-ink hover:bg-canvas transition-colors flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-divider px-5 py-5 space-y-2.5 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-divider/40 ${
                isActive(link.path) ? 'text-primary font-bold' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex items-center justify-between text-xs text-ink-muted">
            <span>Currency Display:</span>
            <button
              onClick={toggleCurrency}
              className="px-3 py-1 rounded-full border border-divider bg-canvas text-ink font-semibold"
            >
              {currency === 'INR' ? '₹ INR (India)' : '$ USD (International)'}
            </button>
          </div>
          <div className="pt-2">
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20a%20Free%2015-Minute%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-primary block shadow-md hover:bg-plum-800 transition-colors"
            >
              Book Free 15-Min Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
