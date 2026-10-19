/**
 * Riggs Medical Supply Store - Master Configuration
 * 
 * NOTE FOR CLIENT INTEGRATION:
 * All store contact details, addresses, opening hours, delivery notes, and
 * legal disclaimers are centralized here. Update these fields to reflect
 * live production details before domain launch.
 */

export interface StoreConfig {
  name: string;
  tagline: string;
  address: {
    line1: string;
    city: string;
    postcode: string;
    country: string;
    fullFormatted: string;
    plusCode: string;
    landmarksHint?: string; // e.g. "Near the British Museum"
  };
  contact: {
    phoneFormatted: string;
    phoneHref: string;
    email: string;
  };
  hours: {
    is24Hours: boolean;
    displayText: string;
    note: string;
  };
  delivery: {
    available: boolean;
    headline: string;
    description: string;
    disclaimer: string;
  };
  disclaimers: {
    emergencyNotice: string;
    medicalDisclaimer: string;
    gdprConsentText: string;
  };
  googleMapsUrl: string;
  social: {
    facebook: string;
    instagram: string;
  };
}

export const STORE_CONFIG: StoreConfig = {
  name: "Riggs Medical Supply Store",
  tagline: "Care, Day and Night.",
  address: {
    line1: "21 Museum St",
    city: "London",
    postcode: "WC1A 1JN",
    country: "United Kingdom",
    fullFormatted: "21 Museum St, London WC1A 1JN, United Kingdom",
    plusCode: "GV8F+XR London",
    // Code comment: Near the British Museum - confirm with client before display
    landmarksHint: "Situated right on Museum Street, Bloomsbury, Central London (moments from Tottenham Court Road & Holborn stations)",
  },
  contact: {
    phoneFormatted: "+44 1730 298007",
    phoneHref: "tel:+441730298007",
    email: "enquiries@riggsmedicalsupply.co.uk",
  },
  hours: {
    is24Hours: true,
    displayText: "Open 24 Hours",
    note: "Open all day, all night, 365 days a year for urgent and planned medical needs.",
  },
  delivery: {
    available: true,
    headline: "Delivered to Your Door",
    description: "Quality medical supplies and mobility equipment delivered across London so you and your loved ones can stay safe and comfortable at home.",
    // Code comment: delivery areas, fees, and exact delivery windows are placeholders to confirm with the store owner
    disclaimer: "Delivery areas, timing windows, and courier fees are confirmed directly by store staff upon order enquiry.",
  },
  disclaimers: {
    emergencyNotice: "In a medical emergency, immediately call 999. For urgent non-emergency medical advice, contact NHS 111.",
    medicalDisclaimer: "Information on this website is for general informational purposes only and does not constitute medical advice. Our staff are trained to help you identify product specifications and equipment options, but cannot diagnose, prescribe, or provide clinical guidance. Please consult a qualified general practitioner (GP) or healthcare professional for health conditions.",
    gdprConsentText: "I agree that Riggs Medical Supply Store may contact me regarding this enquiry in accordance with UK GDPR and our privacy policy.",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=21+Museum+St,+London+WC1A+1JN",
  social: {
    facebook: "https://facebook.com/riggsmedicalsupply",
    instagram: "https://instagram.com/riggsmedicalsupply",
  },
};
