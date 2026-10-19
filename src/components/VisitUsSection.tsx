import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Train
} from 'lucide-react';
import { isValidUKPhone, isValidEmail, isValidName } from '../utils/validation.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

/**
 * CODE COMMENT FOR CLIENT:
 * 21 Museum St is positioned moments from the British Museum in Bloomsbury.
 * Nearest Underground stations: Tottenham Court Road and Holborn.
 * Confirm with the client before highlighting specific surrounding landmark partnerships.
 */

export const VisitUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Product Availability',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!isValidName(formData.name)) {
      newErrors.name = 'Please provide your name (minimum 2 characters).';
    }

    if (!isValidUKPhone(formData.phone)) {
      newErrors.phone = 'Please provide a valid UK telephone number.';
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please enter your message or question.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please tick the consent box to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      enquiryType: 'Product Availability',
      message: '',
      consent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section 
      id="visit" 
      className="py-16 sm:py-24 bg-[#EAF3FB]/30 scroll-mt-20" 
      aria-labelledby="visit-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0A7C7C] text-xs font-bold uppercase tracking-wider mb-3">
            Central London Store
          </div>
          <h2 
            id="visit-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
          >
            Visit Our Store or Get in Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5B6B7B]">
            Conveniently situated on Museum Street in Central London, moments from Bloomsbury's major transport connections.
          </p>
        </div>

        {/* Split Layout: Contact Card (Left) & Map Embed (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Card: Store Details Glass Card */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-[24px] p-6 sm:p-8 border border-[#0FA3A3]/20 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header with Live Open Badge */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0B2545]">
                    Riggs Medical Supply Store
                  </h3>
                  <span className="text-xs text-[#5B6B7B]">Museum Street, London</span>
                </div>

                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Open Now</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5B6B7B]">Address</div>
                  <div className="text-base font-bold text-[#0B2545]">
                    21 Museum St, London WC1A 1JN
                  </div>
                  <div className="text-xs text-[#5B6B7B] mt-0.5">
                    United Kingdom &bull; Plus Code: <strong className="text-[#0B2545]">GV8F+XR London</strong>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5B6B7B]">Opening Hours</div>
                  <div className="text-base font-bold text-[#0B2545]">
                    Open 24 Hours, 7 Days a Week
                  </div>
                  <div className="text-xs text-emerald-700 font-medium">
                    Staffed round-the-clock for urgent &amp; planned collections
                  </div>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5B6B7B]">Telephone</div>
                  <a 
                    href={STORE_CONFIG.contact.phoneHref}
                    className="text-base font-bold text-[#0FA3A3] hover:underline"
                    aria-label={`Call the store counter at ${STORE_CONFIG.contact.phoneFormatted}`}
                  >
                    {STORE_CONFIG.contact.phoneFormatted}
                  </a>
                  <div className="text-xs text-[#5B6B7B]">Click to phone store directly</div>
                </div>
              </div>

              {/* Nearby Transport note */}
              <div className="p-3.5 rounded-xl bg-[#EAF3FB] border border-[#0FA3A3]/10 text-xs text-[#0B2545] space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Train className="w-4 h-4 text-[#0FA3A3]" />
                  <span>Nearest Tube Stations:</span>
                </div>
                <p className="text-[#5B6B7B]">
                  Tottenham Court Road (5 min walk) &bull; Holborn (6 min walk) &bull; Goodge Street (8 min walk)
                </p>
              </div>

            </div>

            {/* Directions Action Button */}
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a
                href={STORE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white font-bold py-3.5 px-6 rounded-xl shadow-md min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2"
                aria-label="Get directions to 21 Museum St on Google Maps (opens in new tab)"
              >
                <Navigation className="w-5 h-5" aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-white/80" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Card: High-Fidelity Interactive Map Preview */}
          <div className="lg:col-span-7 rounded-[24px] overflow-hidden border border-gray-200 shadow-lg min-h-[360px] bg-slate-100 relative flex flex-col justify-between">
            <iframe
              title="Riggs Medical Supply Store Map Location"
              src="https://maps.google.com/maps?q=21+Museum+St,+London+WC1A+1JN&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Map Label */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-gray-100 flex items-center gap-2 text-xs font-bold text-[#0B2545]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0FA3A3]"></span>
              <span>21 Museum St, Bloomsbury, London WC1A 1JN</span>
            </div>
          </div>

        </div>

        {/* Below: General Store Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-[24px] shadow-xl p-6 sm:p-10 border border-gray-200">
          <div className="border-b border-gray-100 pb-5 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E6F6F4] text-[#0A7C7C] text-xs font-bold uppercase mb-2">
              Send a Message
            </div>
            <h3 className="text-2xl font-bold text-[#0B2545]">
              General Store &amp; Stock Enquiry
            </h3>
            <p className="text-sm text-[#5B6B7B] mt-1">
              Have a question about specific brand availability, delivery times, or accessibility equipment? Send us a message and our Museum Street staff will reply promptly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8" role="status" aria-live="polite">
              <div className="w-16 h-16 rounded-full bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </div>
              <h4 className="text-2xl font-bold text-[#0B2545] mb-2">
                Thank you!
              </h4>
              <p className="text-base text-[#5B6B7B] max-w-md mx-auto mb-6">
                We'll get back to you as soon as we can. For immediate real-time assistance, feel free to call our 24/7 store line.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 rounded-xl border border-gray-300 text-sm font-semibold hover:bg-gray-50 min-h-[48px]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    Full Name <span className="text-[#FF6B5E]">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Samuel Green"
                    className={`w-full px-4 py-3 rounded-xl border text-base text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors min-h-[48px] ${
                      errors.name ? 'border-[#FF6B5E] bg-red-50/20' : 'border-gray-200 focus:border-[#0FA3A3]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    UK Phone Number <span className="text-[#FF6B5E]">*</span>
                  </label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +44 1730 298007"
                    className={`w-full px-4 py-3 rounded-xl border text-base text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors min-h-[48px] ${
                      errors.phone ? 'border-[#FF6B5E] bg-red-50/20' : 'border-gray-200 focus:border-[#0FA3A3]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Dropdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="enquiry-email" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    Email Address <span className="text-[#FF6B5E]">*</span>
                  </label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. s.green@example.co.uk"
                    className={`w-full px-4 py-3 rounded-xl border text-base text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors min-h-[48px] ${
                      errors.email ? 'border-[#FF6B5E] bg-red-50/20' : 'border-gray-200 focus:border-[#0FA3A3]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="enquiry-type" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    I'm Enquiring About
                  </label>
                  <select
                    id="enquiry-type"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base text-[#1C2B3A] focus:border-[#0FA3A3] focus:outline-none min-h-[48px]"
                  >
                    <option value="Product Availability">Product Availability &amp; Sizing</option>
                    <option value="Delivery">Home Delivery Booking</option>
                    <option value="Other">Other / General Question</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                  Message <span className="text-[#FF6B5E]">*</span>
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we assist you with medical equipment or healthcare products?..."
                  className={`w-full px-4 py-3 rounded-xl border text-base text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-[#FF6B5E] bg-red-50/20' : 'border-gray-200 focus:border-[#0FA3A3]'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Consent checkbox */}
              <div className="space-y-1 pt-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-[#0FA3A3] focus:ring-[#0FA3A3]"
                  />
                  <span className="text-xs text-[#5B6B7B]">
                    {STORE_CONFIG.disclaimers.gdprConsentText}
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium pl-8">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white font-bold py-4 px-6 rounded-xl shadow-md min-h-[52px] text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2 active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden="true" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
