import React from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, Clock, ArrowUp, Heart, ShieldAlert } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1726] text-slate-300 font-sans border-t border-slate-800">
      
      {/* Top Emergency Bar */}
      <div className="bg-[#0E2338] border-b border-slate-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#C81D25] text-white shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                Immediate 24/7 Veterinary Emergency Response
              </h3>
              <p className="text-[11px] text-slate-400">
                Wallayat Complex, Bahria Expressway, Islamabad
              </p>
            </div>
          </div>

          <a
            href={`tel:${clinicConfig.phoneRaw}`}
            className="px-4 py-2 rounded-xl bg-[#C81D25] hover:bg-red-700 text-white text-xs font-bold transition-all shrink-0"
          >
            Emergency Call: {clinicConfig.phone}
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <Logo size="lg" showSubtitle={true} theme="dark" />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pet Stop Clinic delivers compassionate, modern, and high-standard veterinary hospital care, diagnostics, surgery, grooming, pharmacy, and pet supplies in Islamabad & Rawalpindi.
            </p>

            <div className="pt-1 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C81D25] shrink-0" />
                <span>{clinicConfig.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C81D25] shrink-0" />
                <a href={`tel:${clinicConfig.phoneRaw}`} className="hover:text-white font-semibold">
                  {clinicConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a href={clinicConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold">
                  WhatsApp: {clinicConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-emerald-400 font-bold">Open 24 Hours • 7 Days a Week</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Clinic</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Veterinary Services</a></li>
              <li><a href="#doctors" className="hover:text-red-400 transition-colors">Veterinary Doctors</a></li>
              <li><a href="#app" className="hover:text-red-400 transition-colors">Order Pet Food App</a></li>
              <li><a href="#gallery" className="hover:text-red-400 transition-colors">Facility Gallery</a></li>
              <li><a href="#reviews" className="hover:text-red-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact & Directions</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Clinical Services
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>General Health & Wellness Consultations</li>
              <li>Core & Non-Core Pet Vaccinations</li>
              <li>Spay, Neuter & Soft Tissue Surgery</li>
              <li>24/7 Critical Emergency Ward</li>
              <li>Digital X-Ray & Ultrasound Diagnostics</li>
              <li>Pet Spa & Medicated Flea/Tick Grooming</li>
              <li>100% Authentic Veterinary Pharmacy</li>
              <li>Super-Premium Food & Supplies</li>
            </ul>
          </div>

          {/* Mobile App Links */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Mobile App
            </h3>
            <p className="text-[11px] text-slate-400">
              Order pet supplies with fast home delivery in Islamabad & Rawalpindi.
            </p>
            <div className="space-y-1.5 pt-1">
              <a
                href={clinicConfig.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-all"
              >
                App Store
              </a>
              <a
                href={clinicConfig.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-all"
              >
                Google Play
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Pet Stop Clinic. All rights reserved. Wallayat Complex, Bahria Expressway, Islamabad.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-[#C81D25] fill-[#C81D25]" /> for Pets
            </span>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
