import React from 'react';
import { Search, Truck, PhoneCall, Navigation, ArrowUpRight } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig.ts';

interface QuickHelpTilesProps {
  onFindProductClick?: () => void;
}

export const QuickHelpTiles: React.FC<QuickHelpTilesProps> = ({ onFindProductClick }) => {
  const tiles = [
    {
      title: "Find a Product",
      description: "Search 8 comprehensive categories of medical supplies & aids.",
      icon: Search,
      actionText: "Explore Catalogue",
      href: "#products",
      onClick: onFindProductClick,
      isExternal: false,
    },
    {
      title: "Request Delivery",
      description: "Fast doorstep courier dispatch across London for home comfort.",
      icon: Truck,
      actionText: "Book Delivery",
      href: "#delivery",
      isExternal: false,
    },
    {
      title: "Call the Store",
      description: "Speak directly to our 24/7 on-duty team on Museum Street.",
      icon: PhoneCall,
      actionText: "+44 1730 298007",
      href: STORE_CONFIG.contact.phoneHref,
      isExternal: false,
    },
    {
      title: "Get Directions",
      description: "Visit us at 21 Museum St, London WC1A 1JN (Plus Code: GV8F+XR).",
      icon: Navigation,
      actionText: "Open Map",
      href: STORE_CONFIG.googleMapsUrl,
      isExternal: true,
    },
  ];

  return (
    <section className="py-8 bg-white" aria-label="Quick assistance actions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <a
                key={tile.title}
                href={tile.href}
                onClick={tile.onClick}
                target={tile.isExternal ? "_blank" : undefined}
                rel={tile.isExternal ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#0FA3A3]/20 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 min-h-[160px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E6F6F4] text-[#0FA3A3] flex items-center justify-center group-hover:bg-[#0FA3A3] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#0FA3A3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0B2545] group-hover:text-[#0FA3A3] transition-colors mb-1">
                    {tile.title}
                  </h2>
                  <p className="text-sm text-[#5B6B7B] leading-relaxed">
                    {tile.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-gray-100 flex items-center text-xs font-bold text-[#0FA3A3] tracking-wide uppercase">
                  <span>{tile.actionText}</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
