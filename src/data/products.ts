/**
 * Featured Products Data for Riggs Medical Supply Store
 * 
 * CODE COMMENT FOR CLIENT:
 * Replace this sample catalog with actual product imagery, real SKU codes,
 * and manufacturer details provided by Riggs Medical Supply Store.
 * Note: Under UK trading standards and medical advertising regulations,
 * no therapeutic claims or unverified endorsements are included.
 */

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  sampleTag: string; // "Sample Item"
  statusBadge: string; // "Ask in Store"
}

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: "prod-1",
    name: "Folding Walking Stick",
    category: "Mobility Aids",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    description: "Lightweight anodised aluminium walking stick that folds down into 4 compact sections for easy transit in bags or coats.",
    features: [
      "Ergonomic contoured wooden handle",
      "Non-slip rubber ferrule tip for steady grip",
      "Height adjustable from 33 to 37 inches",
      "Includes wrist strap and storage clip"
    ],
    sampleTag: "Sample Item",
    statusBadge: "Ask in Store"
  },
  {
    id: "prod-2",
    name: "Home First Aid Kit",
    category: "First Aid & Wound Care",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&auto=format&fit=crop&q=80",
    description: "Organised, water-resistant zipped case containing essential sterile dressings, bandages, tweezers, and antiseptic wipes.",
    features: [
      "HSE compliant general content checklist",
      "Sterile eyepads, triangular bandages & tape",
      "Assorted hypoallergenic washproof plasters",
      "Durable clamshell case with clear compartments"
    ],
    sampleTag: "Sample Item",
    statusBadge: "Ask in Store"
  },
  {
    id: "prod-3",
    name: "Adjustable Bath Seat",
    category: "Bathroom Safety",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    description: "Sturdy, corrosion-resistant aluminium bath stool with textured drainage holes and suction-capped feet for shower security.",
    features: [
      "Tool-free push-button height adjustment",
      "High-density polyethylene seat surface",
      "Non-marking rubber suction feet",
      "Supports weights up to 135kg (approx. 21 stone)"
    ],
    sampleTag: "Sample Item",
    statusBadge: "Ask in Store"
  },
  {
    id: "prod-4",
    name: "Digital Blood Pressure Monitor",
    category: "Home Monitoring",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    description: "One-touch upper arm monitor featuring an easy-to-read high-contrast LCD screen and dual-user memory tracking.",
    features: [
      "Comfort-fit cuff fits 22cm - 42cm arms",
      "Irregular heartbeat indicator flag",
      "Averaging mode for last 3 consecutive readings",
      "Includes protective carry case & batteries"
    ],
    sampleTag: "Sample Item",
    statusBadge: "Ask in Store"
  },
  {
    id: "prod-5",
    name: "Ergonomic Lumbar Support Cushion",
    category: "Orthopaedic Supports",
    image: "https://images.unsplash.com/photo-1583912267670-6575ad4736f8?w=800&auto=format&fit=crop&q=80",
    description: "High-resilience moulded memory foam cushion designed to promote neutral spinal alignment in chairs or car seats.",
    features: [
      "Breathable, removable machine-washable mesh cover",
      "Dual adjustable elastic fastening straps",
      "Anatomical contour supports lower back curve",
      "Versatile fit for office, home, and wheelchair use"
    ],
    sampleTag: "Sample Item",
    statusBadge: "Ask in Store"
  },
  {
    id: "prod-6",
    name: "Compressible Cold & Hot Gel Pack",
    category: "First Aid & Wellness",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80",
    description: "Flexible non-toxic gel pack that remains pliable whether frozen or microwave-heated, complete with protective fabric sleeve.",
    features: [
      "Dual purpose: microwaveable or freezable",
      "Soft velour sleeve with secure hook-and-loop strap",
      "Durable puncture-resistant exterior seams",
      "Maintains therapeutic temperature up to 30 mins"
    ],
    sampleTag: "Sample Item",
    statusBadge: "Ask in Store"
  }
];
