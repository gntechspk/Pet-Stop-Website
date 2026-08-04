import { GalleryItem } from '../types';

/**
 * Pet Stop Clinic - Facility Gallery Configuration
 * To update or add gallery items, edit this configuration file.
 * Place matching image files in /public/assets/gallery/ (e.g. reception.jpg, surgery-room.jpg).
 * If an image file is not found, a clean SVG placeholder will be rendered automatically.
 */
export const galleryData: GalleryItem[] = [
  {
    id: "reception",
    title: "Reception Area",
    label: "Main Reception & Welcome Desk",
    category: "facilities",
    aspectRatio: "16/9",
    description: "Spacious reception lounge with climate control and comfortable seating for pet parents.",
    image: "/assets/gallery/reception.jpg"
  },
  {
    id: "waiting-area",
    title: "Waiting Area",
    label: "Pet-Friendly Waiting Lounge",
    category: "facilities",
    aspectRatio: "16/9",
    description: "Separate stress-free waiting zones designed for dogs, cats, and small pets.",
    image: "/assets/gallery/waiting-area.jpg"
  },
  {
    id: "consultation-room",
    title: "Consultation Room",
    label: "Veterinary Examination Suite",
    category: "rooms",
    aspectRatio: "16/9",
    description: "Fully sanitized consultation room equipped with modern diagnostic tools and examination tables.",
    image: "/assets/gallery/consultation-room.jpg"
  },
  {
    id: "treatment-room",
    title: "Treatment Room",
    label: "Treatment & ICU Observation",
    category: "rooms",
    aspectRatio: "16/9",
    description: "Intensive care unit and observation ward with 24/7 patient monitoring capabilities.",
    image: "/assets/gallery/treatment-room.jpg"
  },
  {
    id: "surgery-room",
    title: "Surgery Room",
    label: "Sterile Operating Theatre",
    category: "rooms",
    aspectRatio: "16/9",
    description: "Sterile surgical suite equipped with multiparameter patient monitors and gas anesthesia.",
    image: "/assets/gallery/surgery-room.jpg"
  },
  {
    id: "grooming-area",
    title: "Grooming Area",
    label: "Pet Spa & Grooming Studio",
    category: "facilities",
    aspectRatio: "16/9",
    description: "Hygienic pet spa featuring stainless steel grooming tubs, hydraulic tables, and medicated bath stations.",
    image: "/assets/gallery/grooming-area.jpg"
  },
  {
    id: "pet-store",
    title: "Pet Store",
    label: "Pharmacy & Supplies Shop",
    category: "store",
    aspectRatio: "16/9",
    description: "Comprehensive stock of premium pet food brands, therapeutic diets, prescription medicines, and accessories.",
    image: "/assets/gallery/pet-store.jpg"
  }
];
