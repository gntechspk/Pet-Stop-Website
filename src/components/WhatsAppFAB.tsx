import React, { useState } from 'react';
import { MessageCircle, Phone, X, ShieldAlert } from 'lucide-react';

export const WhatsAppFAB: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const phoneNum = "+92 333 8593822";
  const whatsappUrl = "https://wa.me/923338593822?text=Hello%20Pet%20Stop%20Clinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20or%20ask%20a%20question.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans">
      {/* Expanded Quick Contact Card */}
      {expanded && (
        <div className="w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 space-y-4 animate-in slide-in-from-bottom-5 duration-200 text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-sm font-bold text-[#0E2338] font-heading">
                Pet Stop Clinic Reception
              </h4>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Need an immediate appointment or 24/7 emergency response in Islamabad? Chat with us live!
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C81D25] hover:bg-[#A8141B] text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Start WhatsApp Chat
            </a>

            <a
              href={`tel:+923338593822`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 hover:border-[#0E2338] text-slate-800 font-bold text-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              Call {phoneNum}
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C81D25]" />
            <span>24/7 Emergency Ward Always Active</span>
          </div>
        </div>
      )}

      {/* Primary Floating Circle Trigger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C81D25] hover:bg-[#A8141B] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer"
        aria-label="Open WhatsApp live chat drawer"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
        {expanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
