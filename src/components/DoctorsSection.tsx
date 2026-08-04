import React, { useState } from 'react';
import { GraduationCap, Award, Stethoscope } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { WhatsAppIcon } from './WhatsAppIcon';
import { doctorsData } from '../data/doctors';
import { contactData } from '../data/contact';
import { Doctor } from '../types';

export const DoctorsSection: React.FC = () => {
  return (
    <section id="doctors" className="py-12 md:py-16 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-[#0E2338] text-xs font-bold uppercase tracking-widest rounded-full">
            Veterinary Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2338] tracking-tight">
            Meet Our Veterinary Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Qualified, compassionate practitioners dedicated to providing highest-standard animal healthcare in Islamabad.
          </p>
        </div>

        {/* Doctor Cards Container */}
        <div className={`grid gap-6 ${doctorsData.length === 1 ? 'max-w-md mx-auto grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {doctorsData.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

      </div>
    </section>
  );
};

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#0E2338] transition-all shadow-xs hover:shadow-md overflow-hidden flex flex-col justify-between">
      <div>
        {/* Doctor Photo or Placeholder */}
        <div className="relative w-full aspect-square bg-slate-100 overflow-hidden">
          {doctor.image && !imageError ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <ImagePlaceholder
              label={doctor.name}
              category={doctor.title || "Veterinary Practitioner"}
              dimensions="600 × 600 px"
              aspectRatio="aspect-square"
              subtext={doctor.placeholderLabel || `${doctor.name} photo placeholder`}
            />
          )}
        </div>

        {/* Doctor Info */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-[#0E2338]">
              {doctor.name}
            </h3>
            <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#C81D25] border border-red-100 font-extrabold text-xs">
              {doctor.qualification}
            </span>
          </div>

          {doctor.title && (
            <p className="text-xs font-bold text-slate-600">
              {doctor.title}
            </p>
          )}

          <div className="text-xs text-slate-600 font-medium flex items-center gap-1.5 pt-1">
            <GraduationCap className="w-4 h-4 text-[#C81D25] shrink-0" />
            <span>Qualification: <strong className="text-[#0E2338]">{doctor.qualification}</strong></span>
          </div>

          {doctor.experience && doctor.experience !== "To be updated" && (
            <div className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{doctor.experience}</span>
            </div>
          )}

          {/* Specialties if present */}
          {doctor.specialties && doctor.specialties.length > 0 && (
            <div className="pt-3 border-t border-slate-100 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Specialties
              </span>
              <div className="flex flex-wrap gap-1.5">
                {doctor.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bio if present */}
          {doctor.bio && doctor.bio !== "To be updated" && (
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 leading-relaxed">
              {doctor.bio}
            </p>
          )}
        </div>
      </div>

      {/* WhatsApp Direct Consult CTA */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
        <a
          href={`https://wa.me/${contactData.whatsappRaw}?text=Hello%20Pet%20Stop%20Clinic%2C%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(doctor.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-2xs"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>Consult {doctor.name} on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
