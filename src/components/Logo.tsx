import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '', 
  showSubtitle = true 
}) => {
  const isDark = variant === 'dark';
  
  return (
    <a 
      href="#" 
      className={`group inline-flex items-center gap-3 focus:outline-none ${className}`}
      aria-label="Riggs Medical Supply Store Home"
    >
      {/* Plus-in-a-shield emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0FA3A3] text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6"
        >
          {/* Shield Outline */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" fill="currentColor" fillOpacity="0.15" />
          {/* Plus inside shield */}
          <path d="M12 8v8" stroke="white" strokeWidth="2.5" />
          <path d="M8 12h8" stroke="white" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight text-lg leading-tight transition-colors ${
          isDark ? 'text-[#0B2545] group-hover:text-[#0FA3A3]' : 'text-white'
        }`}>
          Riggs Medical Supply
        </span>
        {showSubtitle && (
          <span className={`text-xs font-medium tracking-wide ${
            isDark ? 'text-[#5B6B7B]' : 'text-[#E6F6F4]/80'
          }`}>
            Central London • Open 24 Hours
          </span>
        )}
      </div>
    </a>
  );
};
