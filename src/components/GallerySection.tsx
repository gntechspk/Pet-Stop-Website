import React, { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Facility Photos' },
    { id: 'facilities', label: 'Facilities & Lounges' },
    { id: 'rooms', label: 'Clinical Rooms' },
    { id: 'store', label: 'Pharmacy & Store' },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-12 md:py-16 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-[#0E2338] text-xs font-bold uppercase tracking-widest rounded-full">
            Clinic Tour
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2338] tracking-tight">
            Facility & Hospital <span className="text-[#C81D25]">Gallery</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Take a virtual tour of our state-of-the-art veterinary hospital and pet care center at Wallayat Complex.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0E2338] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="space-y-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs">
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
        {item.image && !imageError ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder
            label={item.label}
            category={item.title}
            dimensions="1200 × 800 px"
            aspectRatio="aspect-[16/9]"
            subtext={item.description}
          />
        )}
      </div>
      <div className="px-1 space-y-1">
        <h3 className="text-sm font-bold text-[#0E2338]">
          {item.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};
