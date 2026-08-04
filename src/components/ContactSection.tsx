import React from 'react';
import { Phone, MapPin, Clock, Navigation, ShieldAlert } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-[#0E2338] text-xs font-bold uppercase tracking-widest rounded-full">
            Contact & Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2338] tracking-tight">
            Connect With <span className="text-[#C81D25]">Pet Stop Clinic</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Reach our veterinary team 24/7 or visit us at Wallayat Complex, Bahria Expressway.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Phone Hotline Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#C81D25] flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Emergency Phone Line
                </span>
                <a
                  href={`tel:${clinicConfig.phoneRaw}`}
                  className="text-lg font-extrabold text-[#0E2338] hover:text-[#C81D25] transition-colors"
                >
                  {clinicConfig.phone}
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Direct helpline for immediate emergencies, consultation queries, and hospital admissions.
              </p>
            </div>

            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0E2338] hover:bg-black text-white font-bold text-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Call Hotline Now</span>
            </a>
          </div>

          {/* WhatsApp Direct Chat Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#25D366] flex items-center justify-center font-bold">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Official WhatsApp Chat
                </span>
                <a
                  href={clinicConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-extrabold text-[#0E2338] hover:text-[#25D366] transition-colors"
                >
                  {clinicConfig.phone}
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Quick chat for instant inquiries, photo questions, prescription queries, and location share.
              </p>
            </div>

            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-all shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Address & Hours Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0E2338] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5 text-[#C81D25]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Clinic Location
                </span>
                <p className="text-xs font-bold text-[#0E2338] leading-snug mt-0.5">
                  {clinicConfig.address}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 bg-red-50 p-2 rounded-lg border border-red-100">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Open 24 Hours • 7 Days a Week</span>
              </div>
            </div>

            <a
              href={clinicConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-[#0E2338] text-slate-800 font-bold text-xs transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C81D25]" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

        </div>

        {/* Embedded Interactive Google Map */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-4 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-1">
            <div>
              <h3 className="text-sm font-bold text-[#0E2338] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C81D25]" />
                Interactive Map Location
              </h3>
              <p className="text-xs text-slate-500">
                Wallayat Complex, Bahria Expressway, Islamabad, Pakistan
              </p>
            </div>
            <a
              href={clinicConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C81D25] hover:underline"
            >
              Open Google Maps App →
            </a>
          </div>

          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100">
            <iframe
              title="Pet Stop Clinic Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.882415174542!2d73.1092823!3d33.5281483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed9555555555%3A0x123456789abcdef!2sWallayat%20Complex%2C%20Bahria%20Expressway%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
