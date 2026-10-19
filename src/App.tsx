/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { TopBar } from './components/TopBar.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { QuickHelpTiles } from './components/QuickHelpTiles.tsx';
import { ProductCategories } from './components/ProductCategories.tsx';
import { FeaturedProductsSlider } from './components/FeaturedProductsSlider.tsx';
import { DeliverySection } from './components/DeliverySection.tsx';
import { Open24HoursSection } from './components/Open24HoursSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { VisitUsSection } from './components/VisitUsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingMobileBar } from './components/FloatingMobileBar.tsx';
import { ChatWidget } from './components/ChatWidget.tsx';
import { EnquiryModal, CookieConsentBanner, PolicyModal } from './components/Modals.tsx';
import { ProductCategory } from './data/categories.ts';
import { FeaturedProduct } from './data/products.ts';

export default function App() {
  // Accessibility state
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Modal states
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [targetItem, setTargetItem] = useState<ProductCategory | FeaturedProduct | null>(null);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'cookies'>('privacy');

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Apply accessibility classes to root html tag
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-size-normal', 'text-size-large', 'text-size-xlarge');
    root.classList.add(`text-size-${textSize}`);

    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [textSize, isHighContrast]);

  const handleOpenCategoryEnquiry = (category: ProductCategory) => {
    setTargetItem(category);
    setEnquiryModalOpen(true);
  };

  const handleOpenProductEnquiry = (product: FeaturedProduct) => {
    setTargetItem(product);
    setEnquiryModalOpen(true);
  };

  const handleFindProductQuickTile = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 500);
    }
  };

  const handleOpenPolicy = (type: 'privacy' | 'cookies') => {
    setPolicyType(type);
    setPolicyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1C2B3A] font-sans antialiased selection:bg-[#0FA3A3]/20 selection:text-[#0B2545]">
      {/* Skip to Content for WCAG 2.2 AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 px-4 py-2 bg-[#0FA3A3] text-white font-bold rounded-lg shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Bar with Accessibility & Status */}
      <TopBar
        textSize={textSize}
        setTextSize={setTextSize}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
      />

      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* Hero Section */}
        <Hero />

        {/* Quick Help Tiles (4 Clickable Cards) */}
        <QuickHelpTiles onFindProductClick={handleFindProductQuickTile} />

        {/* Product Categories (8 Cards with live search & teal top border) */}
        <ProductCategories
          onSelectCategory={handleOpenCategoryEnquiry}
          searchInputRef={searchInputRef}
        />

        {/* Featured Products Slider (Swipeable / Arrows with sample tags) */}
        <FeaturedProductsSlider onAskAboutProduct={handleOpenProductEnquiry} />

        {/* Delivery Section (Teal gradient, 3 steps, validated UK postcode form) */}
        <DeliverySection />

        {/* Open 24 Hours Highlight (Dark Navy section with live London clock) */}
        <Open24HoursSection />

        {/* Why Choose Us (Mint background with 6 verifiable benefit cards) */}
        <WhyChooseUs />

        {/* About the Store (Two-column, teal offset frame, 3 pillars) */}
        <AboutSection />

        {/* Customer Reviews (Rated 4.0 on Google, early reviews notice) */}
        <ReviewsSection />

        {/* FAQ Section (Accordion with 6 questions & medical disclaimer) */}
        <FaqSection />

        {/* Visit Us: Location & Contact (Split layout with map & enquiry form) */}
        <VisitUsSection />
      </main>

      {/* Navy Footer with Back to Top */}
      <Footer
        onOpenPrivacy={() => handleOpenPolicy('privacy')}
        onOpenCookies={() => handleOpenPolicy('cookies')}
      />

      {/* Floating Mobile Bottom Navigation Bar (< 768px) */}
      <FloatingMobileBar />

      {/* Floating Chat Widget ("Riggs Assistant", rule-based demo assistant) */}
      <ChatWidget />

      {/* Modals & Dialogs */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        targetItem={targetItem}
      />

      <PolicyModal
        isOpen={policyModalOpen}
        onClose={() => setPolicyModalOpen(false)}
        type={policyType}
      />

      <CookieConsentBanner onOpenPolicy={() => handleOpenPolicy('cookies')} />
    </div>
  );
}
