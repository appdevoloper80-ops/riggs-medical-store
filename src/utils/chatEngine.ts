/**
 * Riggs Assistant Rule-Based Engine
 * 
 * NOTE ON FUTURE AI BACKEND:
 * This demo utilizes a deterministic rule-based response system with safety guardrails.
 * To connect a live Gemini AI assistant in production:
 * 1. Proxy requests through a secure server endpoint (e.g. /api/assistant-chat).
 * 2. Bind system instructions enforcing: no medical advice, emergency 999 warnings,
 *    and grounding to the Riggs Medical Supply product catalogue and store hours.
 */

import { STORE_CONFIG } from '../config/storeConfig.ts';

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  action?: {
    type: 'call' | 'directions' | 'delivery' | 'link';
    label: string;
    target: string;
  };
}

export const QUICK_CHIPS = [
  "Are you open now?",
  "Do you deliver?",
  "Where are you?",
  "Call the store",
  "Product availability & pricing"
];

export function getInitialBotMessage(): ChatMessage {
  return {
    id: 'welcome-1',
    sender: 'assistant',
    text: `Hello! I'm the Riggs Store Demo Assistant. How can we help you today with your medical and healthcare supply needs?`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

export function processUserChatQuery(query: string): ChatMessage {
  const normalized = query.toLowerCase().trim();
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. Critical Medical Emergency Guardrail
  if (
    normalized.includes('emergency') ||
    normalized.includes('chest pain') ||
    normalized.includes('cannot breathe') ||
    normalized.includes('can\'t breathe') ||
    normalized.includes('heart attack') ||
    normalized.includes('stroke') ||
    normalized.includes('bleeding heavily') ||
    normalized.includes('unconscious') ||
    normalized.includes('overdose') ||
    normalized.includes('call ambulance')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: `EMERGENCY ALERT: Please do not wait. In a life-threatening medical emergency, call 999 immediately. For urgent health advice, call NHS 111. Our store staff cannot provide emergency or clinical treatment.`,
      timestamp: timeStr,
      action: {
        type: 'call',
        label: 'Emergency: Call 999',
        target: 'tel:999',
      },
    };
  }

  // 2. Medical Diagnosis or Prescription Treatment Guardrail
  if (
    normalized.includes('diagnos') ||
    normalized.includes('prescription') ||
    normalized.includes('cure') ||
    normalized.includes('dosage') ||
    normalized.includes('antibiotic') ||
    normalized.includes('infection treatment') ||
    normalized.includes('medical advice') ||
    normalized.includes('what medicine should i take')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: `Important note: Our team can help you select physical healthcare supplies, mobility aids, and monitors, but we cannot provide medical advice, diagnosis, or prescription medicines. Please consult your GP, NHS 111, or a registered pharmacist.`,
      timestamp: timeStr,
    };
  }

  // 3. Opening Hours
  if (
    normalized.includes('open') ||
    normalized.includes('hour') ||
    normalized.includes('time') ||
    normalized.includes('sunday') ||
    normalized.includes('night') ||
    normalized.includes('close') ||
    normalized.includes('late')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: `Yes! Riggs Medical Supply Store is open 24 hours a day, 7 days a week. We never close, so you can pick up urgent supplies at 21 Museum Street any time of day or night.`,
      timestamp: timeStr,
      action: {
        type: 'call',
        label: `Call ${STORE_CONFIG.contact.phoneFormatted}`,
        target: STORE_CONFIG.contact.phoneHref,
      },
    };
  }

  // 4. Delivery Enquiries
  if (
    normalized.includes('deliver') ||
    normalized.includes('shipping') ||
    normalized.includes('post') ||
    normalized.includes('courier') ||
    normalized.includes('home delivery')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: `Delivery is available! We can deliver medical and home-care supplies directly to your doorstep. Because delivery areas, timings, and courier charges vary, please submit a delivery request on this page or call our team directly at ${STORE_CONFIG.contact.phoneFormatted} to confirm your order details.`,
      timestamp: timeStr,
      action: {
        type: 'delivery',
        label: 'Request Delivery Online',
        target: '#delivery',
      },
    };
  }

  // 5. Location / Address / Directions
  if (
    normalized.includes('where') ||
    normalized.includes('address') ||
    normalized.includes('location') ||
    normalized.includes('find you') ||
    normalized.includes('station') ||
    normalized.includes('direction') ||
    normalized.includes('museum')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: `We are located at 21 Museum St, London WC1A 1JN (Plus Code: GV8F+XR London) in Central London, moments from Tottenham Court Road and Holborn stations.`,
      timestamp: timeStr,
      action: {
        type: 'directions',
        label: 'Open Google Maps Directions',
        target: STORE_CONFIG.googleMapsUrl,
      },
    };
  }

  // 6. Pricing & Specific Stock
  if (
    normalized.includes('price') ||
    normalized.includes('cost') ||
    normalized.includes('how much') ||
    normalized.includes('stock') ||
    normalized.includes('in stock') ||
    normalized.includes('available') ||
    normalized.includes('wheelchair') ||
    normalized.includes('crutch') ||
    normalized.includes('walking stick')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: `To ensure 100% accuracy on current inventory and pricing, please call our store counter at ${STORE_CONFIG.contact.phoneFormatted}. Our staff on Museum Street will physically check the shelves for you immediately.`,
      timestamp: timeStr,
      action: {
        type: 'call',
        label: `Call ${STORE_CONFIG.contact.phoneFormatted}`,
        target: STORE_CONFIG.contact.phoneHref,
      },
    };
  }

  // 7. Phone / Call request
  if (
    normalized.includes('call') ||
    normalized.includes('phone') ||
    normalized.includes('speak') ||
    normalized.includes('human') ||
    normalized.includes('contact')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: `You can reach our on-duty team 24/7 at ${STORE_CONFIG.contact.phoneFormatted}. We are always happy to help!`,
      timestamp: timeStr,
      action: {
        type: 'call',
        label: `Call Now (${STORE_CONFIG.contact.phoneFormatted})`,
        target: STORE_CONFIG.contact.phoneHref,
      },
    };
  }

  // Default fallback
  return {
    id: `bot-${Date.now()}`,
    sender: 'assistant',
    text: `Thank you for your message. We are open 24/7 at 21 Museum St, London WC1A 1JN with delivery available. For direct answers about specific products or stock, please call our counter directly at ${STORE_CONFIG.contact.phoneFormatted}.`,
    timestamp: timeStr,
    action: {
      type: 'call',
      label: `Call ${STORE_CONFIG.contact.phoneFormatted}`,
      target: STORE_CONFIG.contact.phoneHref,
    },
  };
}
