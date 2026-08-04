import React from 'react';
import { MapPin, ShieldCheck, Stethoscope, Clock, ShoppingBag, QrCode, Star } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { WhatsAppIcon } from './WhatsAppIcon';
import { clinicConfig } from '../config/clinicConfig';
import { AppButtons } from './AppButtons';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16 border-b border-slate-100 font-sans">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/70 -skew-x-12 transform origin-top pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C81D25] animate-ping" />
              <span>Premium 24/7 Veterinary Clinic • Islamabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0E2338] tracking-tight leading-tight">
              Compassionate <br className="hidden sm:inline" />
              <span className="text-[#C81D25]">Veterinary Care</span> <br className="hidden sm:inline" />
              You Can Trust
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              {clinicConfig.subtitle}
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              {/* Authentic Green WhatsApp Button */}
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Get Directions Button */}
              <a
                href={clinicConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E2338] hover:bg-black text-white font-bold text-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Ratings & Key Metrics Bar */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span>{clinicConfig.stats.totalScore} / 5.0</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  {clinicConfig.stats.reviewsCount}+ Real Google Reviews
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1 text-[#0E2338] text-sm font-bold">
                  <Clock className="w-4 h-4 text-[#C81D25]" />
                  <span>24/7 Ward</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  Always Active Emergency
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1 text-[#0E2338] text-sm font-bold">
                  <Stethoscope className="w-4 h-4 text-[#0E2338]" />
                  <span>{clinicConfig.stats.experienceYears} Years</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  Surgeons & Specialists
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Balanced Facility Image Placeholder + Hero Mobile App Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Reception Photo Placeholder Card */}
            <div className="rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden bg-white">
              <ImagePlaceholder
                label="Reception & Care Facility Photo"
                category="Main Clinic Entrance & Waiting Lounge"
                dimensions="1200 × 800 px"
                aspectRatio="aspect-[16/10]"
                subtext="Hygienic reception area at Wallayat Complex, Bahria Expressway"
              />
            </div>

            {/* Premium Mobile App Promo Card (Integrated directly inside Hero) */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0E2338] to-[#163656] text-white shadow-xl relative overflow-hidden border border-slate-800">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-red-600/30 text-red-400 border border-red-500/30">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight uppercase">
                      Order Pet Food & Accessories
                    </h3>
                    <p className="text-xs text-slate-300">
                      Download our mobile app and enjoy convenient home delivery across Rawalpindi & Islamabad.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Buttons + QR scan */}
              <div className="pt-2">
                <AppButtons compact={true} />
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Pet Food, Medicines & Supplies
                </span>
                <span className="font-bold text-red-400 uppercase tracking-wider">
                  Fast Home Delivery
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
