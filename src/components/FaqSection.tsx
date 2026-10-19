import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, AlertCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faqs.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // First open by default for immediate reassurance
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section 
      id="faq" 
      className="py-16 sm:py-24 bg-white scroll-mt-20" 
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0A7C7C] text-xs font-bold uppercase tracking-wider mb-3">
            Common Questions
          </div>
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#5B6B7B]">
            Clear, honest answers about our 24/7 store hours, central London location, and delivery service.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-10">
          {FAQ_DATA.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-base sm:text-lg font-bold text-[#0B2545] hover:text-[#0FA3A3] focus:outline-none focus:bg-[#E6F6F4]/30 min-h-[52px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0FA3A3] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#5B6B7B] leading-relaxed border-t border-gray-100/60"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mandatory Medical Advice Disclaimer Note */}
        <div 
          className="rounded-2xl bg-[#E6F6F4] border border-[#0FA3A3]/25 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          role="note"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0FA3A3] flex items-center justify-center shrink-0 shadow-2xs">
              <AlertCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <p className="text-xs sm:text-sm text-[#0B2545] font-medium leading-relaxed">
              <strong>Medical Disclaimer:</strong> Our staff can help you find products and physical specifications, but cannot give medical advice. Please speak to your doctor, GP, or pharmacist for health concerns.
            </p>
          </div>

          <a
            href={STORE_CONFIG.contact.phoneHref}
            className="px-4 py-2.5 rounded-xl bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white text-xs sm:text-sm font-bold shrink-0 transition-colors inline-flex items-center gap-1.5 shadow-xs"
            aria-label="Call store for questions"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +44 1730 298007</span>
          </a>
        </div>

      </div>
    </section>
  );
};
