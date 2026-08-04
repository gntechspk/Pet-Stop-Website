import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { SEO } from './components/SEO';

// Lazy loading below-the-fold components for optimal initial bundle performance
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const DoctorsSection = lazy(() => import('./components/DoctorsSection').then(m => ({ default: m.DoctorsSection })));
const ServicesSection = lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const MobileAppSection = lazy(() => import('./components/MobileAppSection').then(m => ({ default: m.MobileAppSection })));
const GallerySection = lazy(() => import('./components/GallerySection').then(m => ({ default: m.GallerySection })));
const ReviewsSection = lazy(() => import('./components/ReviewsSection').then(m => ({ default: m.ReviewsSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Clean loading placeholder for lazy suspense fallback
const SectionLoader: React.FC = () => (
  <div className="w-full py-16 flex items-center justify-center bg-slate-50/50">
    <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold">
      <span className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-[#C81D25] animate-spin" />
      <span>Loading content...</span>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#C81D25] selection:text-white flex flex-col">
      {/* Reusable Dynamic SEO Component */}
      <SEO />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Website Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section with WhatsApp & Directions CTAs */}
        <HeroSection />

        {/* Lazy Suspense boundary for below-the-fold sections */}
        <Suspense fallback={<SectionLoader />}>
          {/* 2. Why Choose Us - Clinical Pillars */}
          <WhyChooseUs />

          {/* 3. About Section - Facility & Care Standards */}
          <AboutSection />

          {/* 4. Doctors Section - Veterinary Surgeons & Specialists */}
          <DoctorsSection />

          {/* 5. Services Section - 8 Core Clinical & Care Services */}
          <ServicesSection />

          {/* 6. Mobile App Section - Order Pet Food & Accessories */}
          <MobileAppSection />

          {/* 7. Gallery Section - Structured Placeholders */}
          <GallerySection />

          {/* 8. Customer Reviews - Real Google Reviews */}
          <ReviewsSection />

          {/* 9. FAQ Section */}
          <FAQSection />

          {/* 10. Contact Section - Location, Directions & 24/7 Hotline */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </Suspense>
      </main>

      {/* Floating Action WhatsApp Button */}
      <WhatsAppFAB />
    </div>
  );
}
