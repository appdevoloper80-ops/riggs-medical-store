import React from 'react';
import { 
  Clock, 
  Truck, 
  HeartHandshake, 
  ShoppingBag, 
  MapPin, 
  Users,
  CheckCircle
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Open 24 Hours",
      description: "Our Museum Street doors remain open 24 hours a day, 7 days a week, so you can access essential medical supplies whenever an urgent need arises.",
      icon: Clock,
    },
    {
      title: "Delivery Available",
      description: "We deliver directly across Central London postcodes, helping patients, recuperating individuals, and elderly residents stay comfortable at home.",
      icon: Truck,
    },
    {
      title: "Friendly, Respectful Help",
      description: "Visiting a medical store can happen during stressful or vulnerable moments. Our counter team treats every customer with patience, dignity, and warmth.",
      icon: HeartHandshake,
    },
    {
      title: "Wide Range of Everyday Essentials",
      description: "From certified wound dressings and mobility aids to diagnostic monitors and bathroom safety equipment, find what you need in one place.",
      icon: ShoppingBag,
    },
    {
      title: "Easy to Find in Central London",
      description: "Located at 21 Museum St, London WC1A 1JN, just a 5-minute walk from Tottenham Court Road and Holborn Underground stations.",
      icon: MapPin,
    },
    {
      title: "Support for Carers & Families",
      description: "We assist family members, hospice workers, and professional carers in choosing the right physical sizes, pads, and adaptive aids for their loved ones.",
      icon: Users,
    },
  ];

  return (
    <section 
      className="py-16 sm:py-24 bg-[#E6F6F4] relative overflow-hidden" 
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0A7C7C] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0FA3A3]/20">
            Dedicated Care &amp; Reliability
          </div>
          <h2 
            id="why-choose-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
          >
            Why Choose Riggs Medical Supply
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5B6B7B]">
            A reassuring, locally rooted healthcare supply store serving the Central London community with dependable access, day and night.
          </p>
        </div>

        {/* 6 Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white rounded-[20px] p-7 border border-[#0FA3A3]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0B2545] mb-2">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-[#5B6B7B] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#0FA3A3]">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Verified Store Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
