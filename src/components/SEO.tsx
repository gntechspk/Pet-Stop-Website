import React, { useEffect, useState } from 'react';
import { clinicConfig } from '../config/clinicConfig';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  sectionId?: string;
}

export interface SectionSEOMap {
  [key: string]: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const SECTION_SEO_DATA: SectionSEOMap = {
  home: {
    title: 'Pet Stop Clinic | 24/7 Emergency Veterinary Care in Islamabad',
    description: 'Top-rated 24/7 veterinary clinic in Islamabad at Wallayat Complex, Bahria Expressway. Specialist pet doctors, digital lab, surgery, grooming & pharmacy.',
    keywords: 'Veterinary clinic Islamabad, 24/7 pet emergency Islamabad, pet doctor Bahria Town, dog cat surgery Rawalpindi, vet hospital Wallayat Complex',
  },
  about: {
    title: 'About Pet Stop Clinic | Premier 24/7 Veterinary Hospital Islamabad',
    description: 'Learn about Pet Stop Clinic\'s international standard veterinary care, sterile operating suites, digital diagnostics, and compassionate medical staff in Islamabad.',
    keywords: 'About Pet Stop Clinic, best vet hospital Islamabad, veterinary facility Bahria Expressway, small animal hospital Pakistan',
  },
  services: {
    title: 'Veterinary Services | Surgery, Vaccinations, Lab & Grooming Islamabad',
    description: 'Comprehensive pet healthcare in Islamabad: general checkups, core vaccinations, soft tissue surgery, 24/7 emergency triage, X-ray, ultrasound & spa grooming.',
    keywords: 'Pet vaccination Islamabad, dog cat surgery Islamabad, pet grooming spa Bahria Town, 24/7 emergency vet care, veterinary blood test',
  },
  doctors: {
    title: 'Qualified Veterinary Surgeons & Specialists | Pet Stop Clinic Islamabad',
    description: 'Meet our experienced DVM veterinary surgeons, feline/canine practitioners, and avian/exotic consultants at Pet Stop Clinic in Islamabad.',
    keywords: 'Veterinary surgeons Islamabad, DVM doctors Rawalpindi, pet specialist doctor, Dr Adeel Khalid vet, feline practitioner Islamabad',
  },
  app: {
    title: 'Order Pet Food & Medicines App | Fast Home Delivery Islamabad',
    description: 'Download Pet Stop Clinic mobile app to order 100% genuine pet food (Royal Canin, Reflex), medicines, and accessories with home delivery in Islamabad & Rawalpindi.',
    keywords: 'Pet food online Islamabad, dog food delivery Rawalpindi, Royal Canin online Pakistan, pet pharmacy app, buy cat litter Islamabad',
  },
  gallery: {
    title: 'Facility Tour & Gallery | Modern Veterinary Hospital Islamabad',
    description: 'Take a photo tour of Pet Stop Clinic\'s hygienic reception lounge, consultation suites, sterile surgical operating room, and diagnostic lab in Islamabad.',
    keywords: 'Pet Stop Clinic photos, veterinary hospital gallery Islamabad, Bahria Expressway clinic tour',
  },
  reviews: {
    title: 'Pet Parent Reviews & Ratings | Pet Stop Clinic Islamabad',
    description: 'Read 500+ verified 5-star Google reviews from pet parents across Islamabad, Rawalpindi, and Bahria Town trusting Pet Stop Clinic for 24/7 pet healthcare.',
    keywords: 'Pet Stop Clinic reviews, top rated vet Islamabad, best pet clinic feedback Pakistan',
  },
  contact: {
    title: 'Contact & Directions | 24/7 Veterinary Emergency Line Islamabad',
    description: 'Contact Pet Stop Clinic 24/7 hotline at +92 333 8593822 or visit Wallayat Complex, Bahria Expressway, Islamabad. Instant WhatsApp consultation available.',
    keywords: 'Pet Stop Clinic address, vet emergency phone number Islamabad, Bahria Expressway clinic location, WhatsApp vet consultation',
  },
};

// Helper function to update meta tags dynamically
function updateMetaTag(selectorType: 'name' | 'property', selectorValue: string, content: string) {
  let element = document.querySelector(`meta[${selectorType}="${selectorValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(selectorType, selectorValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

// Helper function to update link canonical tag
function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

// Helper to update Schema.org JSON-LD
function updateJsonLdSchema() {
  const schemaId = 'pet-stop-clinic-jsonld';
  let script = document.getElementById(schemaId) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['VeterinaryCare', 'EmergencyService', 'MedicalBusiness', 'Pharmacy'],
    '@id': 'https://petstopclinic.pk/#organization',
    name: clinicConfig.name,
    alternateName: ['Pet Stop Vet Clinic Islamabad', 'Pet Stop Emergency Hospital'],
    url: window.location.origin,
    logo: `${window.location.origin}/logo.svg`,
    image: [
      `${window.location.origin}/images/reception.jpg`,
      `${window.location.origin}/images/surgery.jpg`,
    ],
    description: clinicConfig.subtitle,
    telephone: clinicConfig.phoneRaw,
    priceRange: '$$',
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, EasyPaisa, JazzCash',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wallayat Complex, Bahria Expressway',
      addressLocality: 'Islamabad',
      addressRegion: 'Capital Territory',
      postalCode: '46000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5363374,
      longitude: 73.1106644,
    },
    hasMap: clinicConfig.googleMapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Islamabad',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Rawalpindi',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bahria Town Islamabad',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'DHA Islamabad',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: clinicConfig.stats.totalScore,
      reviewCount: clinicConfig.stats.reviewsCount,
      bestRating: '5',
      worstRating: '1',
    },
    medicalSpecialty: [
      'Veterinary Medicine',
      'Small Animal Surgery',
      'Emergency Critical Care',
      'Avian and Exotic Medicine',
      'Pet Dermatology',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: '24/7 Emergency Triage & Critical Care',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Pet Vaccinations & Health Passports',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Soft Tissue & Orthopedic Surgery',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'In-House Laboratory Blood Diagnostics & Radiology',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Hygienic Pet Spa & Medicated Grooming',
      },
    ],
    employee: clinicConfig.doctors.map((doc) => ({
      '@type': 'Person',
      name: doc.name,
      jobTitle: doc.title,
      honorificPrefix: 'Dr.',
    })),
    sameAs: [
      clinicConfig.googleMapsUrl,
      clinicConfig.whatsappUrl,
    ],
  };

  script.textContent = JSON.stringify(structuredData, null, 2);
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  sectionId,
}) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Automatic Intersection Observer to track section in view
  useEffect(() => {
    if (sectionId) {
      setActiveSection(sectionId);
      return;
    }

    const sections = Object.keys(SECTION_SEO_DATA);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-10% 0px -50% 0px',
      threshold: [0.25, 0.5],
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionId]);

  // Apply meta tags when activeSection or explicit props change
  useEffect(() => {
    const defaultData = SECTION_SEO_DATA[activeSection] || SECTION_SEO_DATA.home;

    const currentTitle = title || defaultData.title;
    const currentDescription = description || defaultData.description;
    const currentKeywords = keywords || defaultData.keywords;
    const currentCanonical = canonical || `${window.location.origin}${window.location.pathname}#${activeSection}`;
    const currentOgImage = ogImage || `${window.location.origin}/og-image.jpg`;

    // 1. Update Document Title
    document.title = currentTitle;

    // 2. Standard Meta Tags
    updateMetaTag('name', 'description', currentDescription);
    updateMetaTag('name', 'keywords', currentKeywords);
    updateMetaTag('name', 'author', 'Pet Stop Clinic');
    updateMetaTag('name', 'robots', 'index, follow');

    // 3. Open Graph Tags (Facebook, WhatsApp preview, etc.)
    updateMetaTag('property', 'og:title', currentTitle);
    updateMetaTag('property', 'og:description', currentDescription);
    updateMetaTag('property', 'og:url', currentCanonical);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', clinicConfig.name);
    updateMetaTag('property', 'og:locale', 'en_US');
    updateMetaTag('property', 'og:image', currentOgImage);

    // 4. Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', currentTitle);
    updateMetaTag('name', 'twitter:description', currentDescription);
    updateMetaTag('name', 'twitter:image', currentOgImage);

    // 5. Canonical Link Tag
    updateCanonicalLink(currentCanonical);

    // 6. Schema.org JSON-LD Structured Data
    updateJsonLdSchema();
  }, [activeSection, title, description, keywords, canonical, ogImage]);

  return null;
};

// Custom Hook to manually trigger or query SEO updates from any component
export function useSEO(customProps?: SEOProps) {
  useEffect(() => {
    if (!customProps) return;
    if (customProps.title) document.title = customProps.title;
    if (customProps.description) updateMetaTag('name', 'description', customProps.description);
    if (customProps.keywords) updateMetaTag('name', 'keywords', customProps.keywords);
  }, [customProps]);
}
