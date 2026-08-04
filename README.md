# Pet Stop Clinic - Web Application Maintenance Guide

Welcome to the official **Pet Stop Clinic** website project. This codebase has been engineered for maximum maintainability. All text, contact details, gallery configurations, doctor profiles, and reviews are decoupled from JSX components into dedicated configuration files.

---

## 📁 Directory Structure Overview

```text
public/
└── assets/
    ├── gallery/        <-- Place clinic photos here (reception.jpg, surgery-room.jpg, etc.)
    ├── doctors/        <-- Place doctor photos here (dr-adeel-khalid.jpg)
    ├── logo/           <-- Place brand logo files (petstop-logo.png, petstop-logo.svg)
    └── app/            <-- Place mobile app graphics & QR codes (qr-code.png, app-store.png)

src/
├── config/
│   ├── clinicConfig.ts <-- Main site configuration aggregator
│   └── siteConfig.ts   <-- Central site re-export configuration
│
└── data/
    ├── contact.ts      <-- Phone, WhatsApp, Address, Google Maps, App Store links
    ├── doctors.ts      <-- Doctor profiles list (Dr. Adeel Khalid, etc.)
    ├── gallery.ts      <-- Facility gallery items list
    ├── services.ts     <-- Clinical & Care services list
    └── reviews.json    <-- Google Reviews & Rating metrics JSON
```

---

## 📷 1. How to Replace Gallery Images

1. Place your photo files inside `public/assets/gallery/`:
   - `reception.jpg`
   - `waiting-area.jpg`
   - `consultation-room.jpg`
   - `treatment-room.jpg`
   - `surgery-room.jpg`
   - `grooming-area.jpg`
   - `pet-store.jpg`
2. If an image file is not provided yet or is missing, the web app automatically displays a clean, professional SVG placeholder.

---

## 👨‍⚕️ 2. How to Replace Doctor Photos & Add New Doctors

### Replacing Dr. Adeel Khalid's Photo
Place a high-resolution photo named `dr-adeel-khalid.jpg` inside `public/assets/doctors/`.

### Adding a New Doctor
Open `src/data/doctors.ts` and add a new Doctor object to the array:

```typescript
export const doctorsData: Doctor[] = [
  {
    id: "dr-adeel-khalid",
    name: "Dr. Adeel Khalid",
    qualification: "DVM",
    title: "Veterinary Doctor",
    image: "/assets/doctors/dr-adeel-khalid.jpg",
    placeholderLabel: "Dr. Adeel Khalid — DVM"
  },
  {
    id: "dr-[#id]",
    name: "Dr. [Full Name]",
    qualification: "DVM",
    title: "Veterinary Specialist",
    image: "/assets/doctors/dr-[#id].jpg",
    placeholderLabel: "Dr. [Full Name]"
  }
];
```

---

## 📞 3. How to Update Phone Number, WhatsApp, Address & Google Maps

Edit `src/data/contact.ts`:

- **Phone Display**: Update `phoneDisplay` (e.g. `"+92 333 8593822"`)
- **Phone Raw (tel: link)**: Update `phoneRaw` (e.g. `"+923338593822"`)
- **WhatsApp Number**: Update `whatsappNumber` & `whatsappRaw`
- **Clinic Address**: Update `address`
- **Google Maps Link**: Update `googleMapsUrl` & `googleMapsEmbedUrl`

---

## 📲 4. How to Update App Store and Google Play Links

Edit `src/data/contact.ts`:

```typescript
appStoreUrl: "https://apps.apple.com/app/pet-stop-clinic/id...",
googlePlayUrl: "https://play.google.com/store/apps/details?id=..."
```

---

## ⭐ 5. How to Replace Google Reviews JSON

Edit `src/data/reviews.json` or paste a fresh JSON extract from Google Maps reviews:

```json
{
  "totalScore": 4.2,
  "reviewsCount": 280,
  "placeName": "Pet Stop clinic",
  "googleMapsUrl": "...",
  "reviews": [
    {
      "id": "rev-1",
      "name": "Reviewer Name",
      "stars": 5,
      "publishAt": "1 month ago",
      "text": "Review comment..."
    }
  ]
}
```

---

## 🛠️ Verification & Build

Run the standard linter and compiler to verify all configurations:

```bash
npm run lint
npm run build
```
