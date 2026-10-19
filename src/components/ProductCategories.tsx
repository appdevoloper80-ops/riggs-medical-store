import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  HelpCircle,
  Accessibility,
  Bandage,
  HeartHandshake,
  Activity,
  ShieldCheck,
  Bath,
  Sparkles,
  Plane
} from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductCategory } from '../data/categories.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

interface ProductCategoriesProps {
  onSelectCategory: (category: ProductCategory) => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ 
  onSelectCategory,
  searchInputRef 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Accessibility': return Accessibility;
      case 'Bandage': return Bandage;
      case 'HeartHandshake': return HeartHandshake;
      case 'Activity': return Activity;
      case 'ShieldCheck': return ShieldCheck;
      case 'Bath': return Bath;
      case 'Sparkles': return Sparkles;
      case 'Plane': return Plane;
      default: return Activity;
    }
  };

  // Filter categories by title, description, or sample item keywords
  const filteredCategories = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return PRODUCT_CATEGORIES;
    return PRODUCT_CATEGORIES.filter((cat) => {
      const matchTitle = cat.title.toLowerCase().includes(term);
      const matchDesc = cat.description.toLowerCase().includes(term);
      const matchItems = cat.sampleItems.some(item => item.toLowerCase().includes(term));
      return matchTitle || matchDesc || matchItems;
    });
  }, [searchTerm]);

  return (
    <section 
      id="products" 
      className="py-16 sm:py-20 bg-[#EAF3FB]/40 scroll-mt-20"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0A7C7C] text-xs font-bold uppercase tracking-wider mb-3">
            Essential Healthcare Range
          </div>
          <h2 
            id="categories-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
          >
            Explore Product Categories
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5B6B7B]">
            From mobility equipment to wound care and diagnostic monitors, we keep essential supplies in stock for immediate London collection or delivery.
          </p>

          {/* Pricing Reassurance Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#0FA3A3]/20 text-xs sm:text-sm text-[#0B2545] shadow-2xs">
            <PhoneCall className="w-4 h-4 text-[#0FA3A3] shrink-0" aria-hidden="true" />
            <span className="font-medium">
              Call or message for availability and pricing &bull; Counter assistance 24/7
            </span>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="relative">
            <label htmlFor="category-search" className="sr-only">
              Search for a product or category
            </label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#5B6B7B]" aria-hidden="true" />
            </div>
            <input
              ref={searchInputRef}
              id="category-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a product or category (e.g., crutches, wound dressings, bath seat)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border-2 border-gray-200 focus:border-[#0FA3A3] focus:ring-0 text-[#1C2B3A] placeholder-[#5B6B7B]/70 shadow-sm transition-all text-sm sm:text-base outline-none min-h-[48px]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-gray-400 hover:text-gray-700 min-h-[48px] px-2"
                aria-label="Clear search input"
              >
                Clear
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="text-xs text-[#5B6B7B] mt-2 px-2" role="status">
              Showing {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'} matching "{searchTerm}"
            </p>
          )}
        </div>

        {/* 8 Categories Grid (Rounded 20px, Teal top border, Hover lift) */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              const Icon = getIcon(category.iconName);
              return (
                <div
                  key={category.id}
                  className="group relative flex flex-col justify-between bg-white rounded-[20px] border border-gray-100 border-t-4 border-t-[#0FA3A3] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 overflow-hidden"
                >
                  {/* Category Image Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Category Icon */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs text-[#0FA3A3] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Category Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-[#0FA3A3] transition-colors mb-2">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B6B7B] leading-relaxed mb-4">
                        {category.description}
                      </p>

                      {/* Sample Items list */}
                      <div className="space-y-1.5 mb-5 bg-[#E6F6F4]/40 p-3 rounded-xl border border-[#0FA3A3]/10">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A7C7C] block mb-1">
                          Common Items In Stock:
                        </span>
                        {category.sampleItems.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-[#1C2B3A]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0FA3A3] shrink-0" aria-hidden="true" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enquire button / link */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#5B6B7B]">
                        Call for price &amp; stock
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectCategory(category)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0FA3A3] group-hover:text-[#0A7C7C] hover:underline focus:outline-none min-h-[44px] py-2 px-1"
                        aria-label={`Enquire about ${category.title}`}
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 p-8 max-w-lg mx-auto">
            <HelpCircle className="w-12 h-12 text-[#0FA3A3] mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">No categories matched your search</h3>
            <p className="text-sm text-[#5B6B7B] mb-5">
              We carry a wide range of medical and home healthcare supplies. Call our 24/7 store counter and we'll check stock immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold hover:bg-gray-50 min-h-[44px]"
              >
                Reset Search
              </button>
              <a
                href={STORE_CONFIG.contact.phoneHref}
                className="px-4 py-2.5 rounded-xl bg-[#0FA3A3] text-white text-sm font-bold hover:bg-[#0A7C7C] min-h-[44px] inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Counter</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
