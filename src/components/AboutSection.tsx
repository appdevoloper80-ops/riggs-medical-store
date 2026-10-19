import React from 'react';
import { Heart, Compass, ShieldCheck, Check } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig.ts';

/**
 * CODE COMMENT FOR CLIENT:
 * Replace this story and history with the official background of Riggs Medical Supply Store,
 * including founder details, years of establishment in Bloomsbury, and store photo assets.
 */

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "Care",
      description: "Compassionate, patient listening to understand your personal recovery or daily living needs.",
      icon: Heart,
    },
    {
      title: "Convenience",
      description: "Open 24/7 on Museum Street, with swift delivery available right across Central London.",
      icon: Compass,
    },
    {
      title: "Confidence",
      description: "Tested, safe healthcare products and clear sizing guidance from attentive on-site staff.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 bg-white scroll-mt-20 overflow-hidden" 
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Teal Offset Frame and Floating Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Teal Offset Frame */}
              <div 
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-[28px] border-2 border-[#0FA3A3] -z-10" 
                aria-hidden="true"
              />

              {/* Main Store / Team Image */}
              <div className="relative rounded-[24px] overflow-hidden shadow-xl bg-slate-100 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=900&auto=format&fit=crop&q=80"
                  alt="Riggs Medical Supply storefront and assistive equipment collection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badge: "Care, Day and Night" */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white px-5 py-3.5 rounded-2xl shadow-xl border border-[#0FA3A3]/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0FA3A3] text-white flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#0B2545]">Care, Day and Night</div>
                  <div className="text-xs text-[#5B6B7B] font-medium">Serving Museum St &amp; London</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & 3 Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0A7C7C] text-xs font-bold uppercase tracking-wider">
              About Us
            </div>

            <h2 
              id="about-heading" 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight"
            >
              Healthcare Essentials, <br />
              <span className="text-[#0FA3A3]">Close to You</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#5B6B7B] leading-relaxed">
              At Riggs Medical Supply Store, we believe that accessing reliable medical equipment, mobility aids, and wound care shouldn’t be complicated or confined to standard business hours. Located conveniently at 21 Museum Street in the heart of Bloomsbury, we help individuals, carers, and families find the exact supplies they need with dignity and ease.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-[#5B6B7B] leading-relaxed">
              Whether you are managing long-term recovery, assisting an aging relative, or looking for emergency post-hospital supplies in the middle of the night, our counter is always staffed by respectful team members ready to help you locate the right product.
            </p>

            {/* 3 Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-xl bg-[#EAF3FB]/60 border border-[#0FA3A3]/10">
                    <div className="w-9 h-9 rounded-lg bg-[#0FA3A3] text-white flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-[#0B2545] text-base mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#5B6B7B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
