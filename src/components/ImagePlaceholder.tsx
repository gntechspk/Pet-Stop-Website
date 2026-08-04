import React, { useState } from 'react';
import { Camera, Info, CheckCircle2, Copy, Sparkles, X } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  category?: string;
  dimensions?: string;
  aspectRatio?: string;
  className?: string;
  heightClass?: string;
  subtext?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  category = 'Clinic Facility Photo',
  dimensions = '1200 × 800 px',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  heightClass = '',
  subtext = 'Reserved for official clinic photograph',
}) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<img src="/path/to/${label.toLowerCase().replace(/[^a-z0-9]/g, '_')}.jpg" alt="${label} - Pet Stop Clinic" className="w-full h-full object-cover rounded-xl" />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className={`group relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100/80 hover:border-[#0E2338]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between p-6 ${aspectRatio} ${heightClass} ${className}`}
        role="button"
        tabIndex={0}
        aria-label={`Placeholder for ${label}`}
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

        {/* Top bar with category & dimensions badge */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0E2338] text-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {category}
          </span>
          <span className="text-[11px] font-mono text-slate-500 bg-white/90 border border-slate-200 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
            {dimensions}
          </span>
        </div>

        {/* Center Label & Icon */}
        <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center py-4">
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0E2338] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-[#C81D25]/40 transition-all duration-300 mb-3">
            <Camera className="w-6 h-6 text-[#0E2338] group-hover:text-[#C81D25] transition-colors" />
          </div>

          <h4 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-[#C81D25] transition-colors">
            {label}
          </h4>

          <p className="text-xs text-slate-500 mt-1 max-w-[220px]">
            {subtext}
          </p>
        </div>

        {/* Bottom Bar / Action Hint */}
        <div className="relative z-10 flex items-center justify-between w-full pt-2 border-t border-slate-200/60 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600">
            <Sparkles className="w-3.5 h-3.5 text-[#C81D25]" />
            Official Photo Slot
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-[#0E2338] group-hover:underline">
            <Info className="w-3.5 h-3.5" />
            Click to Inspect
          </span>
        </div>
      </div>

      {/* Developer / Admin Replacement Guide Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-6 sm:p-8">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C81D25] flex items-center justify-center font-bold">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Photo Slot: {label}
                </h3>
                <p className="text-xs text-slate-500">
                  Specification & Replacement Instructions
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600 border-t border-slate-100 pt-4">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Slot Name</span>
                  <span className="font-semibold text-slate-900">{label}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Recommended Specs</span>
                  <span className="font-semibold text-slate-900">{dimensions} (JPG/WebP)</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  How to replace with actual clinic photo:
                </p>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600">
                  <li>Upload high-resolution photo to your public directory or CDN.</li>
                  <li>Replace the <code className="bg-slate-100 px-1 py-0.5 rounded">&lt;ImagePlaceholder label="{label}" /&gt;</code> component call.</li>
                  <li>Use standard HTML <code className="bg-slate-100 px-1 py-0.5 rounded">&lt;img /&gt;</code> tag with proper ALT text for SEO accessibility.</li>
                </ol>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-medium text-slate-500">
                    JSX Replacement Snippet
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-xs text-[#0E2338] font-semibold hover:text-[#C81D25] transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-xl bg-[#0E2338] hover:bg-[#1E3A5F] text-white text-xs font-semibold transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
