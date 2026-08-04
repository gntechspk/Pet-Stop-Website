import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { Stethoscope, ShieldAlert, Syringe, Scissors, TestTube, Pill, ShoppingBag, HeartPulse, CheckCircle2, Phone, Activity, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { clinicConfig } from '../config/clinicConfig';
import { servicesData } from '../data/services';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'clinical', label: 'Clinical' },
    { id: 'surgical', label: 'Surgery & Diagnostics' },
    { id: 'care', label: 'Grooming' },
    { id: 'pharmacy', label: 'Pharmacy & Store' },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'Syringe': return Syringe;
      case 'HeartPulse': return HeartPulse;
      case 'ShieldAlert': return ShieldAlert;
      case 'TestTube': return TestTube;
      case 'Scissors': return Scissors;
      case 'Pill': return Pill;
      case 'ShoppingBag': return ShoppingBag;
      case 'Activity': return Activity;
      case 'Sparkles': return Sparkles;
      default: return Stethoscope;
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-[#0E2338] text-xs font-bold uppercase tracking-widest rounded-full">
            Comprehensive Healthcare
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2338] tracking-tight">
            Complete Veterinary Care Under <span className="text-[#C81D25]">One Roof</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From emergency critical care to routine health checkups, grooming, pharmacy, and pet supplies.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0E2338] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service) => {
            const IconComponent = getIcon(service.iconName);
            const isEmergency = service.id === 'emergency-care';
            const whatsappMsg = `https://wa.me/${clinicConfig.whatsappRaw}?text=Hello%20Pet%20Stop%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(service.title)}%20service.`;

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-5 border transition-all flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isEmergency
                    ? 'bg-red-50/80 border-red-200'
                    : 'bg-white border-slate-200 hover:border-[#0E2338]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        isEmergency ? 'bg-[#C81D25] text-white' : 'bg-[#0E2338] text-white'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {service.badge && (
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          isEmergency
                            ? 'bg-[#C81D25] text-white animate-pulse'
                            : 'bg-red-100 text-[#C81D25]'
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#0E2338] mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-3">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 mb-4 border-t border-slate-100 pt-2.5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C81D25] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={whatsappMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Inquire Service</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Alert Box */}
        <div className="bg-[#0E2338] rounded-2xl p-5 sm:p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#C81D25] text-white text-[10px] font-bold uppercase tracking-wider">
              24/7 Critical Emergency Ward
            </span>
            <h3 className="text-lg font-bold">
              Pet Emergency? We Are Open Right Now
            </h3>
            <p className="text-slate-300 text-xs max-w-xl">
              Immediate triage, oxygen, IV resuscitation, and overnight ICU monitoring at Wallayat Complex, Bahria Expressway.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C81D25] hover:bg-red-700 text-white font-bold text-xs transition-all shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline {clinicConfig.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
