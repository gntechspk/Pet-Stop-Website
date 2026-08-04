/**
 * Pet Stop Clinic - Contact & Location Configuration
 * Edit this file to update phone numbers, WhatsApp, clinic address, Google Maps links, or App Store URLs.
 */
export const contactData = {
  phoneDisplay: "+92 333 8593822",
  phoneRaw: "+923338593822",
  whatsappNumber: "+92 333 8593822",
  whatsappRaw: "923338593822",
  whatsappMessage: "Hello Pet Stop Clinic, I would like to inquire about veterinary services or book a consultation.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappRaw}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  address: "Wallayat Complex, Bahria Expressway, Islamabad, 46000, Pakistan",
  cityRegion: "Islamabad & Rawalpindi",
  landmark: "Wallayat Complex, Bahria Expressway",
  hoursDisplay: "Open 24 Hours / 7 Days a Week",
  emergencyStatus: "Emergency Ward Active 24/7",
  
  googleMapsUrl: "https://www.google.com/maps/place/Pet+Stop+clinic/@33.5363374,73.1106644,17z/data=!4m15!1m8!3m7!1s0x38dfecd8adf85b03:0x899e8b8c62fecb67!2sPet+Stop+clinic",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6800615563915!2d73.10808947629676!3d33.53633737525389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfecd8adf85b03%3A0x899e8b8c62fecb67!2sPet%20Stop%20clinic!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
  
  appStoreUrl: "https://apps.apple.com/app/pet-stop-clinic/id123456789",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.petstopclinic.app"
};
