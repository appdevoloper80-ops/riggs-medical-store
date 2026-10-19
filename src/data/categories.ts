/**
 * Product Categories Data for Riggs Medical Supply Store
 * 
 * CODE COMMENT FOR CLIENT:
 * These 8 categories represent standard inventory for urban central London medical suppliers.
 * Please confirm the real range, brands, and catalogue taxonomy with the store management
 * before updating for live commercial production.
 */

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  sampleItems: string[];
  inquiryHint: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "mobility-aids",
    title: "Mobility Aids",
    description: "Lightweight walking sticks, crutches, wheeled rollators, and standard transport wheelchairs for recovery and everyday independence.",
    iconName: "Accessibility",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Folding Walking Sticks", "Forearm & Underarm Crutches", "4-Wheel Rollators with Seat", "Lightweight Transit Wheelchairs"],
    inquiryHint: "Available in store for immediate collection or scheduled local delivery."
  },
  {
    id: "first-aid-wound-care",
    title: "First Aid & Wound Care",
    description: "Sterile dressings, surgical tape, cohesive bandages, antiseptic washes, burn care, and comprehensive home or workplace kits.",
    iconName: "Bandage",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Sterile Gauze & Island Dressings", "Waterproof Plaster Multipacks", "Skin Closures & Steri-Strips", "Antiseptic Cleansers & Saline"],
    inquiryHint: "Essential kits stocked round-the-clock for day or night emergencies."
  },
  {
    id: "daily-living-aids",
    title: "Daily Living Aids",
    description: "Practical tools designed to assist dressing, reaching, pill management, and meal preparation for seniors and recuperating patients.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Easy-Grip Reachers & Grabbers", "7-Day Pill Organisers & Splitters", "Ergonomic Cutlery & Cup Grips", "Shoehorns & Sock Aids"],
    inquiryHint: "Ask our staff to demonstrate assistive handles and ergonomic grips."
  },
  {
    id: "home-healthcare-monitoring",
    title: "Home Healthcare & Monitoring",
    description: "Clinically validated upper-arm blood pressure monitors, fingertip pulse oximeters, digital thermometers, and respiratory aids.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Digital Blood Pressure Monitors", "Fingertip Pulse Oximeters", "Infrared Non-Contact Thermometers", "Nebulisers & Spacer Devices"],
    inquiryHint: "Simple setup guidance provided on physical devices by our team."
  },
  {
    id: "orthopaedic-supports-braces",
    title: "Orthopaedic Supports & Braces",
    description: "Comfortable, adjustable joint supports for knees, wrists, ankles, elbows, and lumbar spine to stabilize strains and arthritis.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1583912267670-6575ad4736f8?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Stabilising Knee Braces", "Adjustable Wrist Splints", "Neoprene Ankle Supports", "Lumbar Back Support Belts"],
    inquiryHint: "Multiple sizes kept on hand to ensure proper, snug fit."
  },
  {
    id: "bathroom-safety-incontinence",
    title: "Bathroom Safety & Incontinence Care",
    description: "Slip-resistant shower stools, grab rails, toilet seat raisers, disposable bed protectors, and discreet protective briefs.",
    iconName: "Bath",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Height-Adjustable Bath Seats", "Suction & Screw-Fix Grab Bars", "Raised Toilet Seats with Arms", "Absorbent Underpads & Briefs"],
    inquiryHint: "Discreet packaging and considerate advice provided for all care needs."
  },
  {
    id: "diabetes-wellness-essentials",
    title: "Diabetes & Wellness Essentials",
    description: "Blood glucose test strips, lancets, sharps disposal containers, diabetic foot creams, and wellness test kits.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Glucose Monitoring Accessories", "Safety Lancets & Lancing Devices", "Safe Sharps Bins", "Moisturising Barrier Creams"],
    inquiryHint: "Fast restocking available 24/7 if you find yourself unexpectedly out of supplies."
  },
  {
    id: "travel-health-personal-care",
    title: "Travel Health & Personal Care",
    description: "Graduated flight compression socks, motion sickness bands, compact first-aid pouches, and sanitisation essentials.",
    iconName: "Plane",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&auto=format&fit=crop&q=80",
    sampleItems: ["Graduated Flight Compression Socks", "Acupressure Travel Wristbands", "Compact Travel First Aid Kits", "Antibacterial Hand Gels & Sprays"],
    inquiryHint: "Conveniently located near central train & tube links for travellers."
  }
];
