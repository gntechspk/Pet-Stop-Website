import React from 'react';
import { UserCheck, Activity, ShieldCheck, HeartPulse, Sparkles, Clock, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Experienced Veterinary Team',
      description: 'Qualified surgeons and physicians with deep expertise across dogs, cats, birds, and exotic pets.',
      color: 'bg-red-50 text-[#C81D25]',
    },
    {
      icon: Activity,
      title: 'Modern Diagnostic Lab',
      description: 'In-house blood analyzers, digital radiography, ultrasound, and rapid testing for precise care.',
      color: 'bg-blue-50 text-[#0E2338]',
    },
    {
      icon: ShieldCheck,
      title: 'All-In-One Pet Care Facility',
      description: 'Consultations, surgery, grooming, pharmacy, pet food, and accessories under one single roof.',
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Response',
      description: 'Round-the-clock critical care unit ready for accident cases, trauma, or urgent medical needs.',
      color: 'bg-red-50 text-[#C81D25]',
    },
    {
      icon: HeartPulse,
      title: 'Gentle & Stress-Free Handling',
      description: 'Quiet, loving handling techniques that put anxious pets at complete ease during visits.',
      color: 'bg-indigo-50 text-indigo-700',
    },
    {
      icon: Sparkles,
      title: 'Hygienic & Sterile Ward',
      description: 'Hospital-grade sanitization standards to protect your furry family members at all times.',
      color: 'bg-amber-50 text-amber-700',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-full">
            Clinical Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2338] tracking-tight">
            Why Pet Owners Trust <span className="text-[#C81D25]">Pet Stop Clinic</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Providing compassionate, international-standard veterinary medicine in Islamabad & Rawalpindi.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#0E2338] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center font-bold`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E2338]">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-bold text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C81D25] mr-1.5 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
