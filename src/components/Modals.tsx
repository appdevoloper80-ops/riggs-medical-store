import React, { useState } from 'react';
import { X, Phone, CheckCircle2, AlertCircle, Shield, Cookie, Send } from 'lucide-react';
import { ProductCategory } from '../data/categories.ts';
import { FeaturedProduct } from '../data/products.ts';
import { isValidUKPhone, isValidName } from '../utils/validation.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

// 1. PRODUCT / CATEGORY ENQUIRY MODAL
interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetItem: ProductCategory | FeaturedProduct | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, targetItem }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !targetItem) return null;

  const isCategory = 'sampleItems' in targetItem;
  const title = isCategory ? targetItem.title : (targetItem as FeaturedProduct).name;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!isValidName(formData.name)) {
      newErrors.name = 'Please enter your name.';
    }
    if (!isValidUKPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid UK telephone number.';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', phone: '', notes: '' });
    setErrors({});
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-enquiry-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-[24px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0FA3A3]">
              {isCategory ? 'Category Enquiry' : 'Product Enquiry'}
            </span>
            <h3 id="modal-enquiry-title" className="text-xl font-bold leading-tight">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {isSubmitted ? (
            <div className="text-center py-8" role="status">
              <div className="w-14 h-14 rounded-full bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0B2545] mb-2">Enquiry Received</h4>
              <p className="text-sm text-[#5B6B7B] max-w-xs mx-auto mb-6">
                Thank you! Our on-duty team at 21 Museum Street will contact you at <strong>{formData.phone}</strong> regarding <strong>{title}</strong>.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#0FA3A3] text-white font-bold text-sm hover:bg-[#0A7C7C]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              {/* Item Summary Card */}
              <div className="flex gap-4 p-3.5 rounded-2xl bg-[#EAF3FB]/60 border border-[#0FA3A3]/10 items-center">
                <img
                  src={targetItem.image}
                  alt={title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="text-xs text-[#1C2B3A] space-y-1">
                  <p className="font-semibold">{targetItem.description}</p>
                  <p className="text-[#0A7C7C] font-bold">
                    Call or message for current stock &amp; pricing
                  </p>
                </div>
              </div>

              {/* Direct Call Button for Fast Help */}
              <a
                href={STORE_CONFIG.contact.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E6F6F4] hover:bg-[#0FA3A3] text-[#0A7C7C] hover:text-white font-bold py-3 px-4 rounded-xl transition-colors border border-[#0FA3A3]/20 min-h-[48px] text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Counter Directly ({STORE_CONFIG.contact.phoneFormatted})</span>
              </a>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="shrink-0 mx-3 text-xs text-gray-400 font-medium">Or request a quick call back</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Quick Callback Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="modal-name" className="block text-xs font-bold uppercase text-[#0B2545]">
                    Your Name <span className="text-[#FF6B5E]">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. David Campbell"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.name ? 'border-[#FF6B5E]' : 'border-gray-200 focus:border-[#0FA3A3]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-[#FF6B5E]">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-phone" className="block text-xs font-bold uppercase text-[#0B2545]">
                    UK Telephone Number <span className="text-[#FF6B5E]">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="e.g. +44 1730 298007"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.phone ? 'border-[#FF6B5E]' : 'border-gray-200 focus:border-[#0FA3A3]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-[#FF6B5E]">{errors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-notes" className="block text-xs font-bold uppercase text-[#0B2545]">
                    Specific Requirements or Questions (Optional)
                  </label>
                  <textarea
                    id="modal-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Sizes, delivery preference, or urgency..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0FA3A3] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-colors min-h-[48px]"
                >
                  {isSubmitting ? <span>Sending...</span> : <span>Submit Enquiry</span>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


// 2. COOKIE CONSENT BANNER (NON-INTRUSIVE)
export const CookieConsentBanner: React.FC<{ onOpenPolicy: () => void }> = ({ onOpenPolicy }) => {
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem('riggs_cookie_consent') === 'true';
  });

  if (dismissed) return null;

  const handleAccept = () => {
    localStorage.setItem('riggs_cookie_consent', 'true');
    setDismissed(true);
  };

  return (
    <div 
      className="fixed bottom-16 md:bottom-4 left-4 right-4 md:left-6 md:max-w-lg z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-200 text-[#1C2B3A] animate-in slide-in-from-bottom duration-300"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="space-y-2 flex-1">
          <h4 className="text-sm font-bold text-[#0B2545]">
            Cookie &amp; Privacy Preferences
          </h4>
          <p className="text-xs text-[#5B6B7B] leading-relaxed">
            We use essential cookies to maintain your accessibility preferences and improve site functionality. In accordance with UK GDPR, no marketing trackers are activated without your consent.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white text-xs font-bold transition-colors"
            >
              Accept Essential
            </button>
            <button
              type="button"
              onClick={onOpenPolicy}
              className="px-3 py-1.5 text-xs text-[#5B6B7B] hover:text-[#0FA3A3] underline transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// 3. PRIVACY & COOKIE POLICY MODAL
interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'cookies';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl overflow-hidden border border-gray-200 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#0FA3A3]" />
            <h3 id="policy-modal-title" className="text-lg font-bold">
              {type === 'privacy' ? 'Privacy Policy & Data Protection' : 'Cookie Policy'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10"
            aria-label="Close policy dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#5B6B7B] leading-relaxed">
          <p className="font-semibold text-[#0B2545]">
            Last updated: 2026 &bull; Riggs Medical Supply Store (21 Museum St, London WC1A 1JN, United Kingdom)
          </p>

          {type === 'privacy' ? (
            <>
              <h4 className="font-bold text-[#0B2545] text-base">1. UK GDPR Compliance</h4>
              <p>
                Riggs Medical Supply Store respects your privacy and complies with the UK Data Protection Act 2018 and UK GDPR. Any personal information you provide through enquiry or delivery forms (including name, telephone number, and delivery postcode) is processed solely to fulfill your medical supply enquiries and orders.
              </p>

              <h4 className="font-bold text-[#0B2545] text-base">2. Health Data Protection</h4>
              <p>
                We do not collect or store clinical diagnosis or medical history on this demo website. Product queries are handled confidentially by our store staff for the purpose of identifying the right equipment dimensions and safety specifications.
              </p>

              <h4 className="font-bold text-[#0B2545] text-base">3. Your Rights</h4>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data at any time by telephoning our store at {STORE_CONFIG.contact.phoneFormatted} or writing to our store premises on Museum Street.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-[#0B2545] text-base">1. Essential Functionality Cookies</h4>
              <p>
                This website stores functional in-memory session preferences to remember your accessibility choices (such as high-contrast mode and text scaling) and cookie banner dismissal.
              </p>

              <h4 className="font-bold text-[#0B2545] text-base">2. No Third-Party Advertising Trackers</h4>
              <p>
                We do not sell personal data or utilize intrusive behavioral trackers. Embedded maps and font resources are loaded strictly for presentation and navigation purposes.
              </p>
            </>
          )}

          <div className="p-4 rounded-xl bg-[#E6F6F4] text-xs text-[#0B2545] mt-4">
            <strong>Client Demo Notice:</strong> This policy text serves as a compliant demo template for Riggs Medical Supply Store. Replace with final legal counsel approved documents before commercial launch.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#0FA3A3] text-white font-bold text-sm transition-colors min-h-[44px]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
