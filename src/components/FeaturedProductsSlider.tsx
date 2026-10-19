import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';
import { FEATURED_PRODUCTS, FeaturedProduct } from '../data/products.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

interface FeaturedProductsSliderProps {
  onAskAboutProduct: (product: FeaturedProduct) => void;
}

export const FeaturedProductsSlider: React.FC<FeaturedProductsSliderProps> = ({ 
  onAskAboutProduct 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = FEATURED_PRODUCTS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="py-16 sm:py-20 bg-white overflow-hidden" 
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0A7C7C] text-xs font-bold uppercase tracking-wider mb-3">
              Popular Equipment Examples
            </div>
            <h2 
              id="featured-heading" 
              className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
            >
              Featured Products
            </h2>
            <p className="mt-2 text-base text-[#5B6B7B] max-w-xl">
              Representative examples of high-demand items stocked in our Museum Street store. Call or visit for immediate availability.
            </p>
          </div>

          {/* Navigation Arrows & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[#5B6B7B] mr-2">
              {currentIndex + 1} / {total}
            </span>
            <button
              type="button"
              onClick={prevSlide}
              className="w-12 h-12 rounded-xl border border-gray-200 hover:border-[#0FA3A3] hover:bg-[#E6F6F4] text-[#0B2545] flex items-center justify-center transition-colors min-h-[48px] min-w-[48px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3]"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-12 h-12 rounded-xl border border-gray-200 hover:border-[#0FA3A3] hover:bg-[#E6F6F4] text-[#0B2545] flex items-center justify-center transition-colors min-h-[48px] min-w-[48px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3]"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          {/* Slider track (responsive grid on desktop, swipeable view) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show a sliding window of 3 items on desktop, 1 on mobile based on currentIndex */}
            {[0, 1, 2].map((offset) => {
              const itemIndex = (currentIndex + offset) % total;
              const product = FEATURED_PRODUCTS[itemIndex];
              const isHiddenOnMobile = offset > 0;
              const isHiddenOnTablet = offset > 1;

              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-[20px] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    isHiddenOnMobile ? 'hidden md:flex' : 'flex'
                  } ${isHiddenOnTablet ? 'hidden lg:flex' : 'flex'}`}
                >
                  {/* Image container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#0B2545] uppercase tracking-wider shadow-xs">
                        {product.sampleTag}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-[#0FA3A3] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                        {product.statusBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-xs font-medium">
                      {product.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] mb-2 group-hover:text-[#0FA3A3] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#5B6B7B] leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Feature Points */}
                      <ul className="space-y-1.5 mb-6 text-xs text-[#1C2B3A] border-t border-gray-100 pt-3" aria-label="Key features">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#0FA3A3] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => onAskAboutProduct(product)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2 active:scale-[0.98]"
                        aria-label={`Ask about ${product.name}`}
                      >
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                        <span>Ask About This Product</span>
                      </button>

                      <p className="text-center text-[11px] text-[#5B6B7B]">
                        No online prices &bull; Contact counter for latest stock
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex justify-center items-center gap-2 mt-8" role="tablist" aria-label="Slide selectors">
            {FEATURED_PRODUCTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all min-h-[32px] min-w-[32px] flex items-center justify-center ${
                  currentIndex === i ? 'w-8 bg-[#0FA3A3]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={currentIndex === i}
                role="tab"
              >
                <span className="sr-only">Slide {i + 1}</span>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
