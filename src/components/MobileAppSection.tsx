import React from 'react';
import { Smartphone, ShoppingBag, Truck, Pill, Tag, QrCode } from 'lucide-react';
import { useDeviceType } from '../utils/deviceDetect';
import { clinicConfig } from '../config/clinicConfig';
import { AppButtons } from './AppButtons';

export const MobileAppSection: React.FC = () => {
  const device = useDeviceType();

  const getDeviceLabel = () => {
    if (device === 'android') return 'Android Device Detected — Recommended for Google Play';
    if (device === 'ios') return 'iPhone/iPad Detected — Recommended for App Store';
    return 'Desktop Browser Detected — Quick QR Code Scan Available';
  };

  const appFeatures = [
    {
      icon: ShoppingBag,
      title: 'Pet Food & Treats',
      desc: 'Royal Canin, Hill’s, Reflex, Pedigree, organic treats & specialized diets.',
    },
    {
      icon: Truck,
      title: 'Fast Home Delivery',
      desc: 'Express home delivery across Islamabad and Rawalpindi.',
    },
    {
      icon: Pill,
      title: 'Medicines & Supplements',
      desc: 'Authentic flea/tick preventatives, antibiotics, and vitamins.',
    },
    {
      icon: Tag,
      title: 'Accessories & Supplies',
      desc: 'Carriers, grooming tools, collars, leashes, toys & cat litter.',
    },
  ];

  return (
    <section id="app" className="py-12 md:py-16 bg-[#0E2338] text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Device Detection Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Smartphone className="w-3.5 h-3.5 text-slate-300" />
              <span>{getDeviceLabel()}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Order Pet Food, Medicines & Accessories <br className="hidden sm:inline" />
              Via Our <span className="text-red-400">Official Mobile App</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Enjoy effortless shopping and doorstep delivery for all your pet supplies in Islamabad & Rawalpindi.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {appFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[#C81D25] text-white shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                        {feat.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* App Buttons Component */}
            <div className="pt-2">
              <AppButtons compact={false} />
            </div>

          </div>

          {/* Right Phone Mockup & QR Scan Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-slate-900 rounded-2xl p-5 border border-white/10 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#C81D25] flex items-center justify-center font-bold text-white text-xs">
                    PS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Pet Stop App Store</div>
                    <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Delivery Active in Islamabad
                    </div>
                  </div>
                </div>

                <QrCode className="w-5 h-5 text-slate-400" />
              </div>

              {/* Sample Product Items in App Mockup */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🥫</span>
                    <div>
                      <div className="font-bold text-white">Royal Canin Maxi Adult</div>
                      <div className="text-[10px] text-slate-400">15kg Bag • Home Delivery</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#C81D25] text-white font-bold text-[10px]">
                    Order
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">💊</span>
                    <div>
                      <div className="font-bold text-white">NexGard Flea & Tick Treatment</div>
                      <div className="text-[10px] text-slate-400">100% Genuine Pharmacy Item</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#C81D25] text-white font-bold text-[10px]">
                    Order
                  </span>
                </div>
              </div>

              {/* QR Code Scan Box */}
              <div className="p-3.5 rounded-xl bg-white text-slate-900 text-center space-y-1">
                <div className="text-xs font-bold text-[#0E2338] uppercase tracking-wider">
                  Scan to Install on Mobile
                </div>
                <div className="p-2 bg-slate-50 rounded-lg inline-block border border-slate-200">
                  <QrCode className="w-16 h-16 text-[#0E2338] mx-auto" />
                </div>
                <p className="text-[10px] text-slate-500">
                  Point smartphone camera at QR code to open download link.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
