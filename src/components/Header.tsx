import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { STORE_CONFIG } from '../config/storeConfig.ts';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0FA3A3]/15 py-3'
            : 'bg-white/80 backdrop-blur-xs py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Logo variant="dark" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-semibold text-[#1C2B3A] hover:text-[#0FA3A3] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0FA3A3] hover:after:w-full after:transition-all focus:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={STORE_CONFIG.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white font-bold px-5 py-3 rounded-xl transition-all shadow-md shadow-[#0FA3A3]/20 hover:shadow-lg hover:shadow-[#0FA3A3]/30 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2 active:scale-[0.98]"
                aria-label={`Call the store now at ${STORE_CONFIG.contact.phoneFormatted}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl text-[#0B2545] hover:bg-[#E6F6F4] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#0FA3A3]"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Height Slide-in Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#EAF3FB]/50">
              <Logo variant="dark" showSubtitle={false} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl text-gray-500 hover:text-black hover:bg-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Close mobile navigation menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5B6B7B] mb-2 px-3">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-semibold text-[#1C2B3A] hover:bg-[#E6F6F4] hover:text-[#0FA3A3] transition-colors min-h-[48px]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" aria-hidden="true" />
                </a>
              ))}

              <div className="pt-6 mt-4 border-t border-gray-100">
                <div className="text-xs font-bold uppercase tracking-wider text-[#5B6B7B] mb-3 px-3">
                  Store Details
                </div>
                <div className="p-4 rounded-2xl bg-[#E6F6F4] space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-[#0B2545]">
                    <MapPin className="w-4 h-4 text-[#0FA3A3] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>21 Museum St, London WC1A 1JN (Plus Code: GV8F+XR)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md w-fit">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Open 24 Hours • Ready to Help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
              <a
                href={STORE_CONFIG.contact.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white font-bold py-3.5 px-4 rounded-xl shadow-md min-h-[48px] text-base transition-colors"
                aria-label={`Call the store now at ${STORE_CONFIG.contact.phoneFormatted}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call Now: {STORE_CONFIG.contact.phoneFormatted}</span>
              </a>

              <a
                href="#delivery"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-white border border-[#0FA3A3] text-[#0A7C7C] hover:bg-[#E6F6F4] font-bold py-3 px-4 rounded-xl min-h-[48px] text-base transition-colors"
              >
                Request Delivery
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
