import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquarePlus, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = REVIEWS_DATA.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <section 
      id="reviews" 
      className="py-16 sm:py-24 bg-[#EAF3FB]/50 scroll-mt-20 overflow-hidden" 
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#0B2545] text-xs font-bold uppercase tracking-wider mb-4 border border-gray-200 shadow-2xs">
            <div className="flex text-amber-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <Star className="w-3.5 h-3.5 text-gray-300" />
            </div>
            <span>Rated 4.0 on Google</span>
          </div>

          <h2 
            id="reviews-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
          >
            What Central London Customers Say
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#5B6B7B]">
            Based on early reviews on our Google Business listing. We are committed to transparent, caring service.
          </p>
        </div>

        {/* 3 Review Cards (Grid on desktop, carousel on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header with stars and sample tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-200" />
                    ))}
                  </div>

                  {review.isSample && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                      Sample review
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#1C2B3A] italic leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0B2545] text-sm">
                    {review.author}
                  </div>
                  <div className="text-xs text-[#5B6B7B]">
                    {review.theme}
                  </div>
                </div>

                <span className="text-xs text-gray-400 font-medium">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review button */}
        <div className="text-center">
          <a
            href={STORE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#E6F6F4] text-[#0B2545] border-2 border-gray-200 hover:border-[#0FA3A3] font-bold px-6 py-3.5 rounded-xl shadow-xs transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3]"
            aria-label="Leave a review on Google Maps (opens in new tab)"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#0FA3A3]" aria-hidden="true" />
            <span>Leave a Review on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};
