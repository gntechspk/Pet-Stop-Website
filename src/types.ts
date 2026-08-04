export interface ServiceItem {
  id: string;
  title: string;
  category: 'clinical' | 'surgical' | 'care' | 'pharmacy';
  description: string;
  iconName: string;
  features: string[];
  recommendedFrequency?: string;
  badge?: string;
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  title?: string;
  experience?: string;
  specialties?: string[];
  bio?: string;
  image?: string;
  placeholderLabel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  label: string;
  category: 'facilities' | 'rooms' | 'store' | 'team' | 'pets';
  dimensions?: string;
  aspectRatio?: string;
  description: string;
  image?: string;
}

export interface Review {
  id: string;
  name: string;
  reviewerPhotoUrl?: string;
  stars: number;
  publishAt: string;
  isLocalGuide?: boolean;
  text: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  petType: string;
  petName: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
