import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are you open for emergencies 24 hours a day, 7 days a week?',
      a: 'Yes! Pet Stop Clinic is open 24 Hours, 365 days a year. Our emergency veterinary doctors and trauma ward at Wallayat Complex are always staffed to handle critical situations without delay.',
    },
    {
      q: 'Do I need an appointment for a routine consultation or vaccination?',
      a: `Walk-ins are welcome, but we recommend sending a message via WhatsApp (${clinicConfig.phone}) in advance so we can prepare for your pet.`,
    },
    {
      q: 'How does the mobile app home delivery work for pet food and supplies?',
      a: 'Download the Pet Stop Clinic mobile app on Google Play or App Store. Browse over 1,000 genuine pet foods, accessories, and prescription medicines with fast home delivery in Islamabad & Rawalpindi.',
    },
    {
      q: 'Where exactly is Pet Stop Clinic located in Islamabad?',
      a: `We are situated at ${clinicConfig.address}—easily accessible from Bahria Town, DHA, PWD, and Expressway commuters.`,
    },
    {
      q: 'Do you offer grooming services for both dogs and cats?',
      a: 'Yes, our hygienic grooming spa offers therapeutic baths, tick & flea treatments, breed-specific haircuts, nail trimming, and ear cleaning performed by gentle handlers.',
    },
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/80 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-[#0E2338] text-xs font-bold uppercase tracking-widest rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2338]">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Everything you need to know about visiting Pet Stop Clinic and caring for your pet.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-bold text-[#0E2338] text-xs sm:text-sm flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#C81D25]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 border-t border-slate-100 pt-2.5 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Question Banner */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-2 shadow-2xs">
          <h3 className="text-xs font-bold text-[#0E2338] uppercase tracking-wider">
            Have a Specific Health Question for Our Vets?
          </h3>
          <p className="text-xs text-slate-500">
            Our veterinary team is available 24/7 on WhatsApp.
          </p>
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
            <span>Ask a Vet on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
