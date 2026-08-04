import reviewsData from '../data/reviews.json';
import { doctorsData } from '../data/doctors';
import { galleryData } from '../data/gallery';
import { servicesData } from '../data/services';
import { contactData } from '../data/contact';

export const clinicConfig = {
  name: "Pet Stop Clinic",
  tagline: "Compassionate Veterinary Care You Can Trust",
  subtitle: "24/7 Veterinary Care, Surgery, Diagnostics, Grooming, Pharmacy & Pet Supplies",
  
  // Contact details mapped from contactData
  phone: contactData.phoneDisplay,
  phoneRaw: contactData.phoneRaw,
  whatsappNumber: contactData.whatsappNumber,
  whatsappRaw: contactData.whatsappRaw,
  whatsappMessage: contactData.whatsappMessage,
  get whatsappUrl() {
    return contactData.whatsappUrl;
  },
  address: contactData.address,
  cityRegion: contactData.cityRegion,
  hours: contactData.hoursDisplay,
  googleMapsUrl: contactData.googleMapsUrl,
  googleMapsEmbedUrl: contactData.googleMapsEmbedUrl,
  
  appStoreUrl: contactData.appStoreUrl,
  googlePlayUrl: contactData.googlePlayUrl,

  stats: {
    totalScore: reviewsData.totalScore,
    reviewsCount: reviewsData.reviewsCount,
    experienceYears: "10+",
    petsTreated: "15,000+",
  },

  // Centralized collections
  doctors: doctorsData,
  gallery: galleryData,
  services: servicesData,
  reviews: reviewsData.reviews,
};

export default clinicConfig;
