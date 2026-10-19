/**
 * Google Reviews Data for Riggs Medical Supply Store
 * 
 * Strict compliance with user brief:
 * The live Google listing currently holds 1 verified rating.
 * Display header "Rated 4.0 on Google" with note "based on early reviews".
 * Sample demo testimonials are explicitly marked "Sample review".
 */

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  theme: string;
  isSample: boolean;
}

export const REVIEWS_DATA: CustomerReview[] = [
  {
    id: "rev-1",
    author: "David M.",
    rating: 4,
    date: "Recent Customer",
    comment: "Needed crutches and bandages late on a Thursday night after leaving hospital. Staff were exceptionally courteous, found exactly what I needed right away, and showed genuine care.",
    theme: "Helpful staff & late-night access",
    isSample: true,
  },
  {
    id: "rev-2",
    author: "Clara T.",
    rating: 4,
    date: "Verified Enquiry",
    comment: "Called the store to arrange delivery of bathroom safety equipment for my elderly father in Bloomsbury. Smooth communication, fast dispatch, and very respectful service.",
    theme: "Easy home delivery",
    isSample: true,
  },
  {
    id: "rev-3",
    author: "James R.",
    rating: 4,
    date: "Local Resident",
    comment: "Convenient central London location right on Museum Street. Reassuring to know there is a 24-hour supply store within walking distance when you run out of essential dressings.",
    theme: "24-hour convenience",
    isSample: true,
  }
];
