import React from 'react';
import { Phone, Navigation, Truck } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig.ts';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl p-2.5 md:hidden"
      role="region"
      aria-label="Mobile quick actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={STORE_CONFIG.contact.phoneHref}
          className="flex flex-col items-center justify-center gap-1 bg-[#0FA3A3] text-white py-2 px-1 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-all min-h-[48px]"
          aria-label={`Phone store at ${STORE_CONFIG.contact.phoneFormatted}`}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Call</span>
        </a>

        {/* Directions Button */}
        <a
          href={STORE_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-[#EAF3FB] text-[#0B2545] border border-gray-200 py-2 px-1 rounded-xl text-xs font-bold active:scale-95 transition-all min-h-[48px]"
          aria-label="Get directions to 21 Museum St on Google Maps"
        >
          <Navigation className="w-4 h-4 text-[#0FA3A3]" aria-hidden="true" />
          <span>Directions</span>
        </a>

        {/* Delivery Button */}
        <a
          href="#delivery"
          className="flex flex-col items-center justify-center gap-1 bg-[#0B2545] text-white py-2 px-1 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-all min-h-[48px]"
          aria-label="Request medical supplies delivery"
        >
          <Truck className="w-4 h-4 text-[#0FA3A3]" aria-hidden="true" />
          <span>Delivery</span>
        </a>
      </div>
    </div>
  );
};
