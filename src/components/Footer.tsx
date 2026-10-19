import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo.tsx';
import { STORE_CONFIG } from '../config/storeConfig.ts';
import { PRODUCT_CATEGORIES } from '../data/categories.ts';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenCookies }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2545] text-white pt-16 pb-28 md:pb-16 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            
            <p className="text-sm font-semibold text-[#0FA3A3] italic tracking-wide">
              "{STORE_CONFIG.tagline}"
            </p>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Providing Central London with round-the-clock access to certified medical supplies, mobility equipment, and home healthcare essentials.
            </p>

            {/* Social Media Links with Teal Glow on hover */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={STORE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:text-[#0FA3A3] hover:bg-white hover:shadow-[0_0_15px_rgba(15,163,163,0.5)] transition-all min-h-[44px] min-w-[44px]"
                aria-label="Riggs Medical Supply on Facebook (opens in new tab)"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href={STORE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:text-[#0FA3A3] hover:bg-white hover:shadow-[0_0_15px_rgba(15,163,163,0.5)] transition-all min-h-[44px] min-w-[44px]"
                aria-label="Riggs Medical Supply on Instagram (opens in new tab)"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#products" className="hover:text-[#0FA3A3] transition-colors py-1 block">
                  Product Categories
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[#0FA3A3] transition-colors py-1 block">
                  Request Delivery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#0FA3A3] transition-colors py-1 block">
                  About Our Store
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#0FA3A3] transition-colors py-1 block">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0FA3A3] transition-colors py-1 block">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#0FA3A3] transition-colors py-1 block">
                  Visit &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories Sample */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {PRODUCT_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <a href="#products" className="hover:text-[#0FA3A3] transition-colors py-1 block truncate">
                    {cat.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#products" className="text-[#0FA3A3] font-bold text-xs inline-flex items-center gap-1 hover:underline pt-1">
                  <span>View All 8 Categories</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & 24 Hours Info */}
          <div className="lg:col-span-3 space-y-3 text-sm text-gray-300">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Central London Store
            </h4>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#0FA3A3] shrink-0 mt-1" aria-hidden="true" />
              <span>21 Museum St, London WC1A 1JN (Plus Code: GV8F+XR London)</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#0FA3A3] shrink-0" aria-hidden="true" />
              <span className="font-semibold text-emerald-400">Open 24 Hours, 7 Days a Week</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#0FA3A3] shrink-0" aria-hidden="true" />
              <a 
                href={STORE_CONFIG.contact.phoneHref}
                className="text-white hover:text-[#0FA3A3] font-bold underline"
              >
                {STORE_CONFIG.contact.phoneFormatted}
              </a>
            </div>

            <div className="pt-2">
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
                <span>Near British Museum &bull; Deliveries confirmed by phone</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Banner */}
        <div className="py-6 border-b border-white/10 text-xs text-gray-300/90 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong>Medical Disclaimer:</strong> {STORE_CONFIG.disclaimers.medicalDisclaimer}
          </p>
        </div>

        {/* Bottom Bar: Copyright, Compliance Links, Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; 2026 Riggs Medical Supply Store. All rights reserved. Demo design.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline focus:outline-none"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenCookies}
              className="hover:text-white transition-colors underline focus:outline-none"
            >
              Cookie Policy
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[36px]"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
};
