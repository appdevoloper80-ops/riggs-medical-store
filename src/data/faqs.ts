/**
 * Frequently Asked Questions for Riggs Medical Supply Store
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Are you really open 24 hours?",
    answer: "Yes, our doors at 21 Museum Street are open 24 hours a day, 7 days a week, every single day of the year. Whether you need urgent wound care at 2am or a mobility aid on Sunday morning, our team is on hand."
  },
  {
    id: "faq-2",
    question: "Do you deliver, and to which areas?",
    answer: "Delivery is available across Central London and surrounding postcodes. Because courier timings and dispatch availability vary by time of day, please call +44 1730 298007 to confirm specific delivery areas and schedule."
  },
  {
    id: "faq-3",
    question: "Can I phone to check if a product is in stock?",
    answer: "Yes, we encourage you to call +44 1730 298007 before visiting. Our team can check the physical shelves immediately and hold items at the counter for you."
  },
  {
    id: "faq-4",
    question: "How do I pay?",
    answer: "We accept all major debit and credit cards (Visa, Mastercard, American Express), contactless mobile payments (Apple Pay, Google Pay), and cash. For telephone delivery orders, payment arrangements are confirmed over the phone."
  },
  {
    id: "faq-5",
    question: "Can you help me choose the right product?",
    answer: "Our friendly staff can explain product dimensions, adjustability, and equipment specifications to help you find what you need. However, please note: our staff cannot provide medical advice or clinical diagnosis. Please speak to your doctor or pharmacist for health concerns."
  },
  {
    id: "faq-6",
    question: "Where are you and how do I get there?",
    answer: "We are at 21 Museum St, London WC1A 1JN (Plus Code: GV8F+XR London). The nearest London Underground stations are Tottenham Court Road (Central, Northern, Elizabeth lines) and Holborn (Central, Piccadilly lines), both just a 5-minute walk away."
  }
];
