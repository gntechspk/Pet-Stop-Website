import { Doctor } from '../types';

/**
 * Pet Stop Clinic - Doctors Configuration
 * To add additional doctors in the future, simply add new Doctor objects to this array.
 * Place corresponding doctor photos in /public/assets/doctors/ (e.g. /public/assets/doctors/dr-name.jpg).
 */
export const doctorsData: Doctor[] = [
  {
    id: "dr-adeel-khalid",
    name: "Dr. Adeel Khalid",
    qualification: "DVM",
    title: "Veterinary Doctor",
    experience: "To be updated",
    specialties: [],
    bio: "To be updated",
    image: "/assets/doctors/dr-adeel-khalid.jpg",
    placeholderLabel: "Dr. Adeel Khalid — DVM"
  }
];
