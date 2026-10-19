import React from 'react';
import { Phone, Clock, Truck, Eye } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig.ts';

interface TopBarProps {
  textSize: 'normal' | 'large' | 'xlarge';
  setTextSize: (size: 'normal' | 'large' | 'xlarge') => void;
  isHighContrast: boolean;
  setIsHighContrast: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  textSize,
  setTextSize,
  isHighContrast,
  setIsHighContrast
}) => {
  return (
    <div 
      className="bg-[#0B2545] text-white border-b border-white/10 text-xs sm:text-sm py-2 px-4 transition-colors"
      role="region"
      aria-label="Store status and accessibility controls"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Store Status and Quick Information */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          {/* Open 24h with green pulsing dot */}
          <div className="inline-flex items-center gap-2 font-medium">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0FA3A3]" aria-hidden="true" />
              <span>Open 24 Hours</span>
            </span>
          </div>

          {/* Delivery Available */}
          <div className="hidden md:inline-flex items-center gap-1.5 text-white/90">
            <Truck className="w-3.5 h-3.5 text-[#0FA3A3]" aria-hidden="true" />
            <span>Delivery Available</span>
          </div>

          {/* Click to call */}
          <a
            href={STORE_CONFIG.contact.phoneHref}
            className="inline-flex items-center gap-1.5 text-white hover:text-[#0FA3A3] font-semibold transition-colors focus:outline-none focus:underline"
            aria-label={`Call the store at ${STORE_CONFIG.contact.phoneFormatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#0FA3A3]" aria-hidden="true" />
            <span>Call {STORE_CONFIG.contact.phoneFormatted}</span>
          </a>
        </div>

        {/* Right: Accessibility Controls */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Text Size Switcher */}
          <div 
            className="flex items-center bg-white/10 rounded-lg p-0.5" 
            role="group" 
            aria-label="Text size options"
          >
            <button
              type="button"
              onClick={() => setTextSize('normal')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-all min-h-[32px] min-w-[32px] flex items-center justify-center ${
                textSize === 'normal' 
                  ? 'bg-[#0FA3A3] text-white shadow-xs' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Set text size to standard"
              aria-pressed={textSize === 'normal'}
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setTextSize('large')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-all min-h-[32px] min-w-[32px] flex items-center justify-center ${
                textSize === 'large' 
                  ? 'bg-[#0FA3A3] text-white shadow-xs' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Set text size to large"
              aria-pressed={textSize === 'large'}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setTextSize('xlarge')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-all min-h-[32px] min-w-[32px] flex items-center justify-center ${
                textSize === 'xlarge' 
                  ? 'bg-[#0FA3A3] text-white shadow-xs' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Set text size to extra large"
              aria-pressed={textSize === 'xlarge'}
            >
              A+
            </button>
          </div>

          {/* High Contrast Mode Toggle */}
          <button
            type="button"
            onClick={() => setIsHighContrast(prev => !prev)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all min-h-[32px] ${
              isHighContrast 
                ? 'bg-amber-400 text-black ring-2 ring-white' 
                : 'bg-white/10 text-white/90 hover:bg-white/20'
            }`}
            aria-label="Toggle high contrast display mode"
            aria-pressed={isHighContrast}
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Contrast</span>
          </button>
        </div>
      </div>
    </div>
  );
};
