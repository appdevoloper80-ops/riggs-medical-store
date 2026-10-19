import React, { useState } from 'react';
import { 
  Truck, 
  PhoneCall, 
  PackageCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  Send
} from 'lucide-react';
import { isValidUKPostcode, isValidUKPhone, isValidName, formatUKPostcode } from '../utils/validation.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

/**
 * CODE COMMENT FOR CLIENT:
 * Delivery areas, courier fees, cutoff times, and minimum order values are placeholders
 * designed to present a professional demonstration. Please confirm with the store owner
 * what the exact courier radius (e.g., WC1, EC1, London zones 1-3) and pricing policy will be.
 */

export const DeliverySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    itemsNeeded: '',
    preferredTime: 'urgent',
    gdprConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on edit
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
      newErrors.name = 'Please enter your full name (minimum 2 characters).';
    }

    if (!isValidUKPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid UK phone number (e.g. +44 1730 298007 or 07123 456789).';
    }

    if (!isValidUKPostcode(formData.postcode)) {
      newErrors.postcode = 'Please enter a valid UK delivery postcode (e.g. WC1A 1JN).';
    }

    if (!formData.itemsNeeded.trim() || formData.itemsNeeded.trim().length < 5) {
      newErrors.itemsNeeded = 'Please describe the medical supplies or equipment you require.';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Please agree to allow Riggs Medical Supply Store to contact you.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real brief network transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      postcode: '',
      itemsNeeded: '',
      preferredTime: 'urgent',
      gdprConsent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section 
      id="delivery" 
      className="py-16 sm:py-24 bg-gradient-to-br from-[#0FA3A3] via-[#0A7C7C] to-[#0B2545] text-white relative overflow-hidden scroll-mt-20"
      aria-labelledby="delivery-heading"
    >
      {/* Subtle background medical cross pattern */}
      <div 
        className="absolute inset-0 bg-medical-cross-grid opacity-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-[#E6F6F4] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Truck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>London Courier Service</span>
          </div>
          <h2 
            id="delivery-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Delivered to Your Door
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E6F6F4] leading-relaxed">
            Essential healthcare and mobility supplies delivered promptly across Central London so you, your patient, or your family member can stay safe and comfortable at home.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-white/70 italic">
            * Please note: Delivery coverage areas, precise time windows, and courier fees are confirmed by our store team over the telephone.
          </p>
        </div>

        {/* 3-Step Visual Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-[#E6F6F4]">01</span>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <PhoneCall className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Call or Send Request</h3>
              <p className="text-sm text-[#E6F6F4]/90 leading-relaxed">
                Fill in the delivery form below or phone our 24/7 store line directly at <strong className="text-white">+44 1730 298007</strong> with what you need.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/70">
              Immediate counter response
            </div>
          </div>

          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-[#E6F6F4]">02</span>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <PackageCheck className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Order &amp; Details Confirmed</h3>
              <p className="text-sm text-[#E6F6F4]/90 leading-relaxed">
                Our team confirms item sizes, stock availability, pricing, delivery address, and estimated arrival window.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/70">
              Clear &amp; respectful communication
            </div>
          </div>

          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-[#E6F6F4]">03</span>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <Truck className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Receive at Your Door</h3>
              <p className="text-sm text-[#E6F6F4]/90 leading-relaxed">
                Your medical supplies arrive safely packaged at your residence, office, clinic, or temporary central London accommodation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/70">
              Contactless drop-off available
            </div>
          </div>
        </div>

        {/* Request Delivery Form Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-[24px] shadow-2xl p-6 sm:p-10 text-[#1C2B3A]">
          {isSubmitted ? (
            <div className="text-center py-8" role="status" aria-live="polite">
              <div className="w-16 h-16 rounded-full bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2545] mb-2">
                Thank you!
              </h3>
              <p className="text-base text-[#5B6B7B] max-w-md mx-auto mb-6">
                The Riggs team will contact you shortly to confirm your delivery request and order items.
              </p>
              
              <div className="bg-[#E6F6F4]/60 p-4 rounded-xl text-xs text-[#0B2545] text-left mb-6 max-w-md mx-auto space-y-1">
                <div><strong>Requested By:</strong> {formData.name}</div>
                <div><strong>Contact Number:</strong> {formData.phone}</div>
                <div><strong>Postcode:</strong> {formatUKPostcode(formData.postcode)}</div>
                <div><strong>Timing:</strong> {formData.preferredTime}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-sm font-semibold hover:bg-gray-50 min-h-[48px] w-full sm:w-auto transition-colors"
                >
                  Submit Another Request
                </button>
                <a
                  href={STORE_CONFIG.contact.phoneHref}
                  className="px-6 py-3 rounded-xl bg-[#0FA3A3] text-white text-sm font-bold hover:bg-[#0A7C7C] min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Store Directly</span>
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b border-gray-100 pb-5 mb-6">
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Request Home Delivery
                </h3>
                <p className="text-sm text-[#5B6B7B] mt-1">
                  Submit your details below and our Museum Street team will call you back right away to confirm items, timing, and dispatch.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="delivery-name" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    Full Name <span className="text-[#FF6B5E]">*</span>
                  </label>
                  <input
                    id="delivery-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-4 py-3 rounded-xl border text-base text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors min-h-[48px] ${
                      errors.name ? 'border-[#FF6B5E] bg-red-50/20 focus:border-[#FF6B5E]' : 'border-gray-200 focus:border-[#0FA3A3]'
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "delivery-name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="delivery-name-error" className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Postcode Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="delivery-phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                      Phone Number <span className="text-[#FF6B5E]">*</span>
                    </label>
                    <input
                      id="delivery-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +44 1730 298007 or 07123..."
                      className={`w-full px-4 py-3 rounded-xl border text-base text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors min-h-[48px] ${
                        errors.phone ? 'border-[#FF6B5E] bg-red-50/20 focus:border-[#FF6B5E]' : 'border-gray-200 focus:border-[#0FA3A3]'
                      }`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "delivery-phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="delivery-phone-error" className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Delivery Postcode */}
                  <div className="space-y-1">
                    <label htmlFor="delivery-postcode" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                      UK Delivery Postcode <span className="text-[#FF6B5E]">*</span>
                    </label>
                    <input
                      id="delivery-postcode"
                      name="postcode"
                      type="text"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      placeholder="e.g. WC1A 1JN"
                      className={`w-full px-4 py-3 rounded-xl border text-base uppercase text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors min-h-[48px] ${
                        errors.postcode ? 'border-[#FF6B5E] bg-red-50/20 focus:border-[#FF6B5E]' : 'border-gray-200 focus:border-[#0FA3A3]'
                      }`}
                      aria-invalid={!!errors.postcode}
                      aria-describedby={errors.postcode ? "delivery-postcode-error" : undefined}
                    />
                    {errors.postcode && (
                      <p id="delivery-postcode-error" className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.postcode}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* What do you need? */}
                <div className="space-y-1">
                  <label htmlFor="delivery-items" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    What do you need? <span className="text-[#FF6B5E]">*</span>
                  </label>
                  <textarea
                    id="delivery-items"
                    name="itemsNeeded"
                    rows={3}
                    value={formData.itemsNeeded}
                    onChange={handleInputChange}
                    placeholder="List required items (e.g. 1x lightweight folding walking stick, sterile island dressings 10x10cm, urine collection bags)..."
                    className={`w-full px-4 py-3 rounded-xl border text-base text-[#1C2B3A] placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                      errors.itemsNeeded ? 'border-[#FF6B5E] bg-red-50/20 focus:border-[#FF6B5E]' : 'border-gray-200 focus:border-[#0FA3A3]'
                    }`}
                    aria-invalid={!!errors.itemsNeeded}
                    aria-describedby={errors.itemsNeeded ? "delivery-items-error" : undefined}
                  />
                  {errors.itemsNeeded && (
                    <p id="delivery-items-error" className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.itemsNeeded}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Delivery Timing */}
                <div className="space-y-1">
                  <label htmlFor="delivery-time" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    Preferred Delivery Window
                  </label>
                  <select
                    id="delivery-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base text-[#1C2B3A] focus:border-[#0FA3A3] focus:outline-none min-h-[48px]"
                  >
                    <option value="urgent">As soon as possible (Urgent / Next available)</option>
                    <option value="today-morning">Today Morning (09:00 - 12:00)</option>
                    <option value="today-afternoon">Today Afternoon (13:00 - 17:00)</option>
                    <option value="today-evening">Today Evening (18:00 - 22:00)</option>
                    <option value="tomorrow">Tomorrow / Scheduled date</option>
                  </select>
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1 pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleCheckboxChange}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-[#0FA3A3] focus:ring-[#0FA3A3]"
                    />
                    <span className="text-xs text-[#5B6B7B] leading-normal">
                      {STORE_CONFIG.disclaimers.gdprConsentText}
                    </span>
                  </label>
                  {errors.gdprConsent && (
                    <p className="text-xs text-[#FF6B5E] flex items-center gap-1 mt-1 font-medium pl-8">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.gdprConsent}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white font-bold py-4 px-6 rounded-xl shadow-md shadow-[#0FA3A3]/20 transition-all min-h-[52px] text-base focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2 active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Delivery Request...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>Send Delivery Request</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#5B6B7B]">
                  Prefer to order by telephone? Call our counter at{' '}
                  <a href={STORE_CONFIG.contact.phoneHref} className="text-[#0FA3A3] font-bold underline">
                    {STORE_CONFIG.contact.phoneFormatted}
                  </a>
                </p>
              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
