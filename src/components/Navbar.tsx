import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, Menu, X, ShieldAlert, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { clinicConfig } from '../config/clinicConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Refined Top Information Bar */}
      <div className="bg-[#0B1A28] text-white py-1 sm:py-1.5 px-3 sm:px-6 lg:px-8 text-[11px] sm:text-xs border-b border-slate-800/80 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: 24/7 Emergency Care Status */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold tracking-tight text-white flex items-center gap-1">
              <span className="hidden xs:inline text-[11px] sm:text-xs">24/7 Emergency Care Active</span>
              <span className="xs:hidden text-[10.5px]">24/7 Emergency Care</span>
            </span>
          </div>

          {/* Center: Address & Locate Us Button (Google Maps) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Full Address - Hidden on mobile, visible on desktop (md+) */}
            <span className="hidden md:inline text-slate-300 text-[11px] xl:text-xs truncate max-w-xs lg:max-w-none">
              Wallayat Complex, Bahria Expressway, Islamabad
            </span>

            {/* Locate Us Button (Google Maps) */}
            <a
              href={clinicConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-600/80 hover:border-slate-400 bg-slate-800/60 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-[10px] sm:text-[11px] transition-all shrink-0 active:scale-95"
              title="Open Google Maps Directions"
            >
              <MapPin className="w-3 h-3 text-[#C81D25] shrink-0" />
              <span>Locate Us</span>
            </a>
          </div>

          {/* Right: Hotline Phone Link */}
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="inline-flex items-center gap-1 sm:gap-1.5 font-bold text-white hover:text-red-400 transition-colors text-[11px] sm:text-xs"
              aria-label={`Call Hotline ${clinicConfig.phone}`}
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C81D25] shrink-0" />
              <span className="hidden sm:inline">{clinicConfig.phone}</span>
              <span className="sm:hidden font-bold text-[11px]">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navbar */}
      <nav
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-2 sm:py-2.5 border-b border-slate-200/90'
            : 'bg-white/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between min-h-[52px] sm:min-h-[56px] transition-all duration-300">
          {/* Left: Official Pet Stop Clinic Logo & Brand Typography */}
          <a href="#home" className="flex items-center focus:outline-none group">
            <Logo size="sm" showSubtitle={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#C81D25] hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 hover:border-[#0E2338] text-slate-800 font-bold text-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C81D25]" />
              Call Reception
            </a>

            {/* Authentic Green WhatsApp Button */}
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm transition-all hover:shadow active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              WhatsApp Us
            </a>
          </div>

          {/* Right Mobile Actions: Official WhatsApp Icon + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Official Green WhatsApp Button */}
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] h-11 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-2xs transition-all active:scale-95 flex items-center justify-center gap-1.5"
              aria-label="Chat on Official WhatsApp"
              title="Chat on Official WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              <span className="hidden xs:inline text-[11px] font-bold tracking-tight">WhatsApp</span>
            </a>

            {/* Hamburger Menu Toggle with 44px Touch Target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center focus:outline-none transition-colors active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1 border-b border-slate-100 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-800 hover:text-[#C81D25] hover:bg-slate-50 flex items-center justify-between"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${clinicConfig.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-[#C81D25]" />
                Call {clinicConfig.phone}
              </a>

              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                Chat on Official WhatsApp
              </a>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C81D25]" />
                  Wallayat Complex, Bahria Expressway
                </p>
                <p className="text-slate-500 pl-5">Islamabad, Pakistan (Open 24 Hours)</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
