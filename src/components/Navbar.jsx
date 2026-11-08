import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useCurrency } from './CurrencyContext.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currency, toggleCurrency } = useCurrency();

  const navLinks = [
    { label: 'Healing Sessions', path: '/healing-sessions' },
    { label: 'Certified Courses', path: '/courses' },
    { label: 'Free Meditation', path: '/twin-hearts-meditation' },
    { label: 'About Anita', path: '/about' },
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8E2DC] transition-all">
      {/* Top Banner */}
      <div className="bg-[#2A1234] text-[#EFE8E2] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
        <span>GMCKS Certified Instructor • Next Basic Pranic Healing Batch: Nov 23–24, Jaipur</span>
        <Link to="/courses" className="text-[#DFC082] hover:underline font-semibold ml-1">
          Reserve Seat &rarr;
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-[#2A1234] flex items-center justify-center text-[#DFC082] shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 5c2 3 3.5 4.5 3.5 7s-1.5 4-3.5 7c-2-3-3.5-4.5-3.5-7s1.5-4 3.5-7z" fill="#DFC082" fillOpacity="0.4" />
                <circle cx="12" cy="12" r="2" fill="#DFC082" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F1A1C] group-hover:text-[#4A1E56] transition-colors block">
                Anita Khandelwal
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B88E3E] block -mt-0.5">
                Certified Pranic Healer & Instructor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-medium tracking-wide transition-colors relative py-1 ${
                  isActive(link.path)
                    ? 'text-[#4A1E56] font-bold'
                    : 'text-[#5A5255] hover:text-[#1F1A1C]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B88E3E] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Currency Button */}
            <button
              onClick={toggleCurrency}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#E8E2DC] text-xs font-semibold text-[#5A5255] hover:border-[#B88E3E] hover:text-[#1F1A1C] transition-colors bg-[#FAF8F5]"
              title="Toggle Currency between INR and USD"
            >
              <Globe className="w-3.5 h-3.5 text-[#B88E3E]" />
              <span>{currency === 'INR' ? '₹ INR' : '$ USD'}</span>
            </button>

            {/* Direct CTA */}
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20a%20Free%2015-Minute%20Aura%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#2A1234] hover:bg-[#4A1E56] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
            >
              <span>Free 15-Min Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFC082]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleCurrency}
              className="px-2 py-1 rounded-full border border-[#E8E2DC] text-xs font-semibold text-[#5A5255]"
            >
              {currency === 'INR' ? '₹' : '$'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#5A5255] hover:text-[#1F1A1C] hover:bg-[#FAF8F5]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E2DC] px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium ${
                isActive(link.path) ? 'text-[#4A1E56] font-bold' : 'text-[#5A5255]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#E8E2DC]">
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20a%20Free%2015-Minute%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-[#2A1234] block shadow-md"
            >
              Book Free 15-Min Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
