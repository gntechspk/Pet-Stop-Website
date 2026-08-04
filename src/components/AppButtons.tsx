import React from 'react';
import { QrCode, Smartphone, Download, Check } from 'lucide-react';
import { useDeviceType } from '../utils/deviceDetect';
import { clinicConfig } from '../config/clinicConfig';

interface AppButtonsProps {
  compact?: boolean;
}

export const AppButtons: React.FC<AppButtonsProps> = ({ compact = false }) => {
  const device = useDeviceType();

  return (
    <div className="space-y-3 font-sans">
      <div className="flex flex-wrap items-center gap-2">
        {/* Apple App Store Button */}
        <a
          href={clinicConfig.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 border ${
            device === 'ios'
              ? 'bg-[#0E2338] text-white border-transparent shadow-md ring-2 ring-red-500/50'
              : 'bg-slate-900 text-white border-slate-800 hover:bg-black'
          }`}
        >
          {/* Apple Logo SVG */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 384 512">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-91.9-61.7-92.1zM245.9 83c27.6-33.8 24.7-64.8 23.6-74.9-24.1 1.4-53.5 16.4-70.1 35.8-17.6 20.4-23.8 49-21.5 74 26.5 2 54.3-13.8 68-34.9z"/>
          </svg>
          <div className="text-left leading-none">
            <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              {device === 'ios' ? 'Recommended for iPhone' : 'Download on the'}
            </div>
            <div className="text-xs font-bold tracking-tight mt-0.5">App Store</div>
          </div>
          {device === 'ios' && (
            <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </a>

        {/* Google Play Store Button */}
        <a
          href={clinicConfig.googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 border ${
            device === 'android'
              ? 'bg-[#0E2338] text-white border-transparent shadow-md ring-2 ring-red-500/50'
              : 'bg-slate-900 text-white border-slate-800 hover:bg-black'
          }`}
        >
          {/* Google Play Logo SVG */}
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 512 512">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-46 1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
          </svg>
          <div className="text-left leading-none">
            <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              {device === 'android' ? 'Recommended for Android' : 'GET IT ON'}
            </div>
            <div className="text-xs font-bold tracking-tight mt-0.5">Google Play</div>
          </div>
          {device === 'android' && (
            <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </a>
      </div>

      {/* QR Code Scan Indicator for Desktop / General */}
      {!compact && (
        <div className="flex items-center gap-2 pt-1 text-slate-500 text-[11px] font-medium">
          <QrCode className="w-3.5 h-3.5 text-[#C81D25]" />
          <span>Scan QR code with phone camera to download instantly</span>
        </div>
      )}
    </div>
  );
};
