import React from 'react';
import { Star, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import reviewsData from '../data/reviews.json';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-12 md:py-16 bg-slate-50 border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
            <svg className="w-4 h-4 fill-current text-blue-500" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z"/>
            </svg>
            <span>Verified Google Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2338] tracking-tight">
            What Pet Parents Say About <span className="text-[#C81D25]">Pet Stop Clinic</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Real feedback from pet owners across Islamabad, Rawalpindi, and Bahria Town.
          </p>

          {/* Rating Summary Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-[#0E2338]">
                {reviewsData.totalScore} / 5.0
              </span>
              <span className="text-xs text-slate-500 font-medium">
                ({reviewsData.reviewsCount}+ Real Google Reviews)
              </span>
            </div>

            <a
              href={reviewsData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-slate-700 hover:text-[#0E2338] border border-slate-200 text-xs font-bold transition-all"
            >
              <span>Read on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviewsData.reviews.slice(0, 6).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {rev.publishAt}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Header */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[#0E2338] flex items-center gap-1">
                    {rev.name}
                    {rev.isLocalGuide && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-blue-50 text-blue-600 border border-blue-100">
                        Local Guide
                      </span>
                    )}
                  </h3>
                  <div className="text-[10px] text-slate-400">Verified Pet Parent</div>
                </div>

                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Chat / Share Review Callout */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${clinicConfig.whatsappRaw}?text=Hello%20Pet%20Stop%20Clinic%2C%20I%20would%20like%20to%20share%20feedback%20or%20ask%20a%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat With Us on WhatsApp</span>
          </a>

          <a
            href={reviewsData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-all"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>View All {reviewsData.reviewsCount}+ Google Reviews</span>
          </a>
        </div>

      </div>
    </section>
  );
};
