import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#061727] text-slate-300 pt-10 sm:pt-14 pb-6 sm:pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Brand & Contact Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <BrandLogo variant="combined" isDarkBackground={true} className="h-12 sm:h-13" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2 max-w-md">
              Premier travel agency and tour operator under <span className="text-[#f4e8c1] font-semibold">Group of Gowda's</span>. We specialize in custom holiday tours, sanitized AC cabs, airport transfers, and exclusive boutique hill stays.
            </p>

            <div className="pt-1">
              <BrandLogo variant="gowdas" isDarkBackground={true} className="h-9" />
            </div>

            {/* Direct Hotline Numbers */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 pt-1">
              <span className="text-[#c59b27] font-bold flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Travel Desk:</span>
              </span>
              <a href="tel:+916382508601" className="hover:text-[#c59b27] font-semibold transition-colors">+91 63825 08601</a>
              <span className="text-white/30">|</span>
              <a href="tel:+916384693543" className="hover:text-[#c59b27] font-semibold transition-colors">+91 63846 93543</a>
            </div>

            {/* Official Social Media Icons with Origin Colors */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook - Official Blue #1877F2 */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1877F2] hover:brightness-110 flex items-center justify-center text-white transition-all shadow-md hover:scale-110 active:scale-95"
                aria-label="Facebook"
                title="Follow on Facebook"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram - Official Gradient */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 flex items-center justify-center text-white transition-all shadow-md hover:scale-110 active:scale-95"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube - Official Red #FF0000 */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FF0000] hover:brightness-110 flex items-center justify-center text-white transition-all shadow-md hover:scale-110 active:scale-95"
                aria-label="YouTube"
                title="Subscribe on YouTube"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* WhatsApp - Official Green #25D366 */}
              <a
                href="https://wa.me/916382508601"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] hover:brightness-110 flex items-center justify-center text-white transition-all shadow-md hover:scale-110 active:scale-95"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase border-l-2 border-[#c59b27] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-slate-200 hover:text-[#c59b27] transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-[#c59b27]">›</span> Curated Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/tours#fleet" className="text-slate-200 hover:text-[#c59b27] transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-[#c59b27]">›</span> Private Cabs & Fleet
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Boutique Cottages & Stays
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> About Our Agency
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Contact & Travel Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase border-l-2 border-[#c59b27] pl-3">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/tours?category=Hill+Station+%26+Nature" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Kodaikanal Pine Hills & Lake
                </Link>
              </li>
              <li>
                <Link to="/tours?category=Hill+Station+%26+Nature" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Munnar Tea Terraces & Gap Road
                </Link>
              </li>
              <li>
                <Link to="/tours?category=Hill+Station+%26+Nature" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Ooty & Nilgiri Heritage Toy Train
                </Link>
              </li>
              <li>
                <Link to="/tours?category=Spiritual+%26+Cultural" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Rameswaram & Dhanushkodi Coast
                </Link>
              </li>
              <li>
                <Link to="/tours?category=Hill+Station+%26+Nature" className="text-slate-400 hover:text-[#c59b27] transition-colors flex items-center gap-1.5">
                  <span className="text-[#c59b27]">›</span> Coorg & Wayanad Plantation Escapes
                </Link>
              </li>
            </ul>

            {/* Quick 24/7 Assistance Box */}
            <div className="pt-2">
              <a 
                href="https://wa.me/916382508601?text=Hi%20Om%20Muruga%20Travels,%20I%20would%20like%20to%20inquire%20about%20booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[#25D366] text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all group"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>24/7 WhatsApp Assistance Available</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Details & Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <span>© {new Date().getFullYear()} Om Muruga Holidays. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="text-slate-400">A Group of Gowda's Enterprise</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/contact" className="hover:text-[#c59b27] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#c59b27] transition-colors">Terms of Booking</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#c59b27] transition-colors">Cancellation Rules</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
