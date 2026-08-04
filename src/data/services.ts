import { ServiceItem } from '../types';

/**
 * Pet Stop Clinic - Services Data Configuration
 * Edit this file to add, modify, or update veterinary clinical services.
 */
export const servicesData: ServiceItem[] = [
  {
    id: "emergency-care",
    title: "24/7 Emergency & Critical Care",
    category: "clinical",
    description: "Immediate emergency triage, trauma response, oxygen therapy, and life-support monitoring open 365 days a year.",
    iconName: "ShieldAlert",
    features: [
      "24/7 In-house Emergency Trauma Doctor",
      "Oxygen Therapy & ICU Incubators",
      "Critical Vital Signs Monitoring",
      "Immediate Blood Transfusion & Fluids"
    ],
    recommendedFrequency: "Available 24 Hours / 7 Days",
    badge: "24/7 Active Ward"
  },
  {
    id: "general-consultations",
    title: "General Health Consultations",
    category: "clinical",
    description: "Thorough physical examinations, preventive health assessments, nutritional guidance, and pediatric/geriatric pet care.",
    iconName: "Stethoscope",
    features: [
      "Head-to-Tail Physical Exam",
      "Weight & Body Condition Scoring",
      "Custom Diet & Nutrition Plans",
      "Flea, Tick & Worming Protocol"
    ],
    recommendedFrequency: "Every 6 Months"
  },
  {
    id: "vaccinations",
    title: "Pet Vaccinations & Microchipping",
    category: "clinical",
    description: "Essential core and lifestyle vaccines for puppies, kittens, adult dogs, and cats with official health passport registration.",
    iconName: "Syringe",
    features: [
      "Rabies, DHPPi & Tricat Vaccines",
      "ISO Standard Pet Microchipping",
      "International Health Travel Certification",
      "Digital Vaccine Reminders"
    ],
    badge: "Essential Care"
  },
  {
    id: "surgery-soft-tissue",
    title: "Spay, Neuter & Soft Tissue Surgery",
    category: "surgical",
    description: "State-of-the-art sterile surgical operating theatre for elective spaying/neutering, wound repair, tumor removal, and abdominal surgery.",
    iconName: "Scissors",
    features: [
      "Sterile Operating Theatre",
      "Inhalation Gas Anesthesia",
      "Multiparameter Vital Monitoring",
      "Comprehensive Post-Op Pain Management"
    ]
  },
  {
    id: "diagnostics-lab",
    title: "Digital X-Ray & Diagnostics Lab",
    category: "clinical",
    description: "In-house diagnostic laboratory providing instant complete blood count (CBC), chemistry analyzer, digital radiography, and ultrasound.",
    iconName: "Activity",
    features: [
      "Same-Day CBC & Biochemistry Panel",
      "High-Resolution Digital X-Ray",
      "Abdominal & Pregnancy Ultrasound",
      "Feline/Canine Rapid Viral Test Kits"
    ]
  },
  {
    id: "pet-spa-grooming",
    title: "Pet Spa & Medicated Grooming",
    category: "care",
    description: "Hygienic grooming studio offering medicated flea/tick dips, de-matting, breed-standard haircuts, nail clipping, and ear flushing.",
    iconName: "Sparkles",
    features: [
      "Therapeutic Anti-Fungal & Anti-Tick Baths",
      "Breed Specific Hair Styling & Trimming",
      "Gentle De-Shedding & De-Matting",
      "Nail Trimming & Ear Cleaning"
    ],
    recommendedFrequency: "Every 4 to 6 Weeks"
  },
  {
    id: "veterinary-pharmacy",
    title: "100% Authentic Vet Pharmacy",
    category: "pharmacy",
    description: "Fully stocked pharmacy providing temperature-controlled authentic vaccines, antibiotics, antiparasitics, and therapeutic diets.",
    iconName: "Pill",
    features: [
      "100% Guaranteed Genuine Medicines",
      "Cold-Chain Stored Vaccines",
      "Prescription Therapeutic Diets",
      "Fast Home Delivery via Mobile App"
    ]
  },
  {
    id: "food-supplies-store",
    title: "Super-Premium Pet Food & Supplies",
    category: "pharmacy",
    description: "Authorized retailer of leading global pet food brands (Royal Canin, Reflex, Happy Cat, Josera) and premium pet accessories.",
    iconName: "ShoppingBag",
    features: [
      "Super Premium Dog & Cat Food",
      "Veterinary Prescription Diets",
      "Hygienic Clumping Cat Litter",
      "Leashes, Collars, Toys & Accessories"
    ]
  }
];
