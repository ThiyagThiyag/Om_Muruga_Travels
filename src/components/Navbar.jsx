import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { servicesMegaMenuData } from '../data/navbarServicesData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState('cabs');

  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  // Scroll detection for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // Handle click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hover handlers with smooth delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isServicesActive = location.pathname.startsWith('/tours') || location.pathname.startsWith('/rooms');

  // Render Category Icon helper
  const renderCategoryIcon = (iconType) => {
    switch (iconType) {
      case 'car':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1" />
            <path d="M10 5l1.5-2h2.5L15.5 5" />
            <circle cx="7.5" cy="16.5" r="2.5" />
            <circle cx="16.5" cy="16.5" r="2.5" />
            <path d="M5 9h14" />
          </svg>
        );
      case 'compass':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
      case 'home':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#061727] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <a href="tel:+916382508601" className="flex items-center gap-1.5 hover:text-[#c59b27] transition-colors">
                <svg className="w-3.5 h-3.5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 63825 08601</span>
              </a>
              <span className="text-white/30">|</span>
              <a href="tel:+916384693543" className="hover:text-[#c59b27] transition-colors">
                <span>+91 63846 93543</span>
              </a>
            </div>
            <a href="mailto:reservations@ommurugaholidays.com" className="flex items-center gap-2 hover:text-[#c59b27] transition-colors">
              <svg className="w-3.5 h-3.5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>reservations@ommurugaholidays.com</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <svg className="w-3.5 h-3.5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Om Muruga Travels • Kodaikanal • Ooty • Munnar • All South India</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#c59b27]/20 text-[#f4e8c1] font-medium text-[11px] border border-[#c59b27]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]"></span>
              Group of Gowda's Travels Agency
            </span>
            <a
              href="https://wa.me/916382508601?text=Hi%20Om%20Muruga%20Holidays,%20I%20would%20like%20to%20inquire%20about%20booking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#20ba59] font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 relative ${isScrolled
        ? 'bg-[#0a2540]/95 backdrop-blur-md shadow-xl border-b border-[#c59b27]/20 py-3'
        : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo Link */}
          <Link to="/" className="flex items-center group transition-transform group-hover:scale-102">
            <BrandLogo variant="combined" isDarkBackground={isScrolled} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <Link
              to="/"
              className={`text-sm font-semibold tracking-wide transition-all relative py-1 ${isActive('/')
                ? 'text-[#c59b27]'
                : isScrolled
                  ? 'text-slate-200 hover:text-[#c59b27]'
                  : 'text-slate-700 hover:text-[#0a2540]'
                }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c59b27] rounded-full"></span>
              )}
            </Link>

            {/* Services Dropdown (Hover Trigger) */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className={`text-sm font-semibold tracking-wide transition-all relative py-1 flex items-center gap-1.5 focus:outline-none ${isServicesActive || isServicesOpen
                  ? 'text-[#c59b27]'
                  : isScrolled
                    ? 'text-slate-200 hover:text-[#c59b27]'
                    : 'text-slate-700 hover:text-[#0a2540]'
                  }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#c59b27]' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
                {isServicesActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c59b27] rounded-full"></span>
                )}
              </button>

              {/* Desktop Services Compact Dropdown */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[640px] max-w-[94vw] transition-all duration-200 z-50 ${isServicesOpen
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden ring-1 ring-black/5">
                  {/* Accent Top Line */}
                  <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-[#c59b27] to-[#0a2540]"></div>

                  {/* 3 Compact Columns for Cabs, Tours, Rooms */}
                  <div className="p-4 sm:p-5 grid grid-cols-3 divide-x divide-slate-100 gap-4">
                    {servicesMegaMenuData.map((category) => (
                      <div key={category.id} className="flex flex-col justify-between pl-3.5 first:pl-0">
                        <div>
                          {/* Column Header */}
                          <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center border shadow-2xs shrink-0 ${category.iconBg}`}>
                              {renderCategoryIcon(category.icon)}
                            </div>
                            <Link
                              to={category.mainPath}
                              onClick={() => setIsServicesOpen(false)}
                              className="text-sm font-bold text-[#0a2540] hover:text-[#c59b27] transition-colors font-serif truncate"
                            >
                              {category.title}
                            </Link>
                          </div>

                          {/* Subtopics List */}
                          <div className="mt-2 space-y-1">
                            {category.subtopics.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={sub.path}
                                onClick={() => setIsServicesOpen(false)}
                                className="group/sub px-2 py-1.5 rounded-lg hover:bg-amber-50/70 transition-colors flex items-center gap-1.5 text-xs text-slate-700 hover:text-[#0a2540] font-medium"
                              >
                                <span className="text-[#c59b27] text-[10px] group-hover/sub:translate-x-0.5 transition-transform">›</span>
                                <span className="truncate">{sub.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column Footer Link */}
                        <div className="pt-2 mt-2 border-t border-slate-100">
                          <Link
                            to={category.footerAction.path}
                            onClick={() => setIsServicesOpen(false)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#c59b27] hover:text-[#a37f1c] group/action transition-colors"
                          >
                            <span>{category.footerAction.text}</span>
                            <span className="group-hover/action:translate-x-0.5 transition-transform">→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* About Agency */}
            <Link
              to="/about"
              className={`text-sm font-semibold tracking-wide transition-all relative py-1 ${isActive('/about')
                ? 'text-[#c59b27]'
                : isScrolled
                  ? 'text-slate-200 hover:text-[#c59b27]'
                  : 'text-slate-700 hover:text-[#0a2540]'
                }`}
            >
              About Agency
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c59b27] rounded-full"></span>
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-sm font-semibold tracking-wide transition-all relative py-1 ${isActive('/contact')
                ? 'text-[#c59b27]'
                : isScrolled
                  ? 'text-slate-200 hover:text-[#c59b27]'
                  : 'text-slate-700 hover:text-[#0a2540]'
                }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c59b27] rounded-full"></span>
              )}
            </Link>
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] shadow-md hover:shadow-lg hover:shadow-[#c59b27]/30 hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Tour / Cab</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 transition-colors ${isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-slate-800 hover:bg-slate-100'
                }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-lg shadow-xl px-5 py-5 transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {/* Mobile Home */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${isActive('/')
                  ? 'bg-[#c59b27]/10 text-[#c59b27]'
                  : 'text-slate-800 hover:bg-slate-50'
                  }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between p-3.5 text-left text-base font-semibold transition-colors ${isServicesActive || mobileServicesOpen
                    ? 'text-[#0a2540] bg-[#c59b27]/10'
                    : 'text-slate-800 hover:bg-slate-100'
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span>Services</span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#c59b27]/20 text-[#0a2540]">
                      Cabs, Tours, Rooms
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#c59b27]' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="p-3 bg-white space-y-4 border-t border-slate-200">
                    {/* Category tabs for clean mobile navigation */}
                    <div className="flex rounded-xl bg-slate-100 p-1 gap-1">
                      {servicesMegaMenuData.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setActiveMobileCategory(cat.id)}
                          className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${activeMobileCategory === cat.id
                            ? 'bg-[#0a2540] text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                          {cat.shortTitle}
                        </button>
                      ))}
                    </div>

                    {/* Active Category Content */}
                    {servicesMegaMenuData
                      .filter((cat) => cat.id === activeMobileCategory)
                      .map((cat) => (
                        <div key={cat.id} className="space-y-2.5 animate-in fade-in duration-200">
                          <div className="flex items-center justify-between px-1">
                            <span className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
                              {cat.title}
                            </span>
                            <Link
                              to={cat.mainPath}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-semibold text-[#c59b27] hover:underline"
                            >
                              View All →
                            </Link>
                          </div>

                          <div className="space-y-1.5">
                            {cat.subtopics.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={sub.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-[#c59b27]/40 hover:bg-amber-50/40 transition-colors"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-slate-800">
                                    {sub.title}
                                  </span>
                                  {sub.badge && (
                                    <span className="text-[9px] font-semibold text-[#c59b27] bg-[#c59b27]/10 px-1.5 py-0.5 rounded">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                  {sub.desc}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* About Agency */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${isActive('/about')
                  ? 'bg-[#c59b27]/10 text-[#c59b27]'
                  : 'text-slate-800 hover:bg-slate-50'
                  }`}
              >
                About Agency
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${isActive('/contact')
                  ? 'bg-[#c59b27]/10 text-[#c59b27]'
                  : 'text-slate-800 hover:bg-slate-50'
                  }`}
              >
                Contact
              </Link>

              {/* Mobile CTA & Quick Contacts */}
              <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] shadow-md"
                >
                  Inquire Tour, Cab or Stay
                </button>
                <div className="flex flex-col gap-2 text-xs text-slate-600 px-1 pt-1">
                  <div className="flex items-center justify-between">
                    <a href="tel:+916382508601" className="flex items-center gap-1.5 hover:text-[#0a2540] font-semibold">
                      <svg className="w-3.5 h-3.5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+91 63825 08601</span>
                    </a>
                    <a href="tel:+916384693543" className="text-slate-600 hover:text-[#0a2540] font-semibold">
                      +91 63846 93543
                    </a>
                  </div>
                  <a
                    href="https://wa.me/916382508601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold text-center py-2 rounded-xl bg-emerald-50 border border-emerald-200"
                  >
                    Chat on WhatsApp (+91 63825 08601)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
