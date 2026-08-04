import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Check, ShieldAlert, Award } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';

export const AboutSection: React.FC = () => {
  const missionPoints = [
    'International standard diagnosis and therapeutic care for small pets.',
    'Hygienic, stress-free hospital atmosphere designed for animal comfort.',
    'Transparent, honest guidance and pet parental consultations.',
    '24/7 immediate emergency response with zero treatment delays.',
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-[#0E2338] text-xs font-bold uppercase tracking-widest rounded-full">
              About Pet Stop Clinic
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2338] tracking-tight">
              Islamabad's Trusted Center for <span className="text-[#C81D25]">Veterinary Medicine</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Located in Wallayat Complex on Bahria Expressway, Pet Stop Clinic was established to provide compassionate, modern, and comprehensive healthcare for dogs, cats, birds, and exotics across Islamabad and Rawalpindi.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Equipped with digital diagnostics, sterile surgical suites, grooming parlors, in-house pharmacy, and a 24-hour emergency ward, our staff treats every pet as a beloved family member.
            </p>

            {/* Core Standards */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold text-[#0E2338] uppercase tracking-wider">
                Our Healthcare Commitment:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {missionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Check className="w-3.5 h-3.5 text-[#C81D25] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-[#C81D25] border border-red-100">
                <ShieldAlert className="w-4 h-4" />
                <span>24/7 Emergency Ward Always Active</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0E2338] border border-blue-100">
                <Award className="w-4 h-4" />
                <span>Bahria Expressway Location</span>
              </div>
            </div>
          </div>

          {/* Right Image Placeholders Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImagePlaceholder
              label="Waiting Lounge"
              category="Pet-Friendly Reception"
              dimensions="800 × 600 px"
              aspectRatio="aspect-[4/3]"
              subtext="Clean, spacious area minimizing animal anxiety"
            />
            <ImagePlaceholder
              label="Diagnostics Lab"
              category="In-House Blood & Ultrasound"
              dimensions="800 × 600 px"
              aspectRatio="aspect-[4/3]"
              subtext="Rapid lab results and digital radiology"
            />
            <div className="sm:col-span-2">
              <ImagePlaceholder
                label="Surgical Suite"
                category="Sterile Operating Room"
                dimensions="1200 × 600 px"
                aspectRatio="aspect-[2/1]"
                subtext="Equipped for soft tissue & orthopedic surgeries"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
