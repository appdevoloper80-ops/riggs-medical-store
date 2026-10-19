import React from 'react';
import { 
  Clock, 
  Truck, 
  HeartHandshake, 
  MapPin, 
  ArrowRight, 
  AlertCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig.ts';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#E6F6F4]/40 via-white to-white"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background decorative plus-cross grid (under 20 visual accents) */}
      <div 
        className="absolute inset-0 bg-medical-cross-grid pointer-events-none opacity-40" 
        aria-hidden="true" 
      />

      {/* Subtle floating medical plus-cross icons (lightweight CSS opacity/transform) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg className="absolute top-12 left-[10%] w-6 h-6 text-[#0FA3A3]/25 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
        </svg>
        <svg className="absolute top-1/4 right-[12%] w-8 h-8 text-[#0FA3A3]/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
        </svg>
        <svg className="absolute bottom-20 left-[20%] w-5 h-5 text-[#0FA3A3]/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
        </svg>
        <svg className="absolute top-2/3 right-[30%] w-7 h-7 text-[#0FA3A3]/15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Eyebrow kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F6F4] text-[#0A7C7C] border border-[#0FA3A3]/25 text-xs sm:text-sm font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0FA3A3] animate-pulse"></span>
              <span>Central London, Open 24 Hours</span>
            </div>

            {/* H1 Primary Heading */}
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0B2545] tracking-tight leading-[1.12]"
            >
              Medical Supplies, <br className="hidden sm:inline" />
              <span className="text-[#0FA3A3]">Whenever You Need Them</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[#5B6B7B] leading-relaxed max-w-2xl font-normal">
              Quality healthcare products, friendly help and delivery available, right on Museum Street, at any hour of the day or night.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white text-base sm:text-lg font-bold px-7 py-4 rounded-2xl shadow-lg shadow-[#0FA3A3]/25 hover:shadow-xl hover:shadow-[#0FA3A3]/30 transition-all duration-200 min-h-[52px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2 active:scale-[0.98]"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#delivery"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#E6F6F4]/60 text-[#0B2545] border-2 border-[#0FA3A3]/30 hover:border-[#0FA3A3] text-base sm:text-lg font-bold px-7 py-4 rounded-2xl transition-all duration-200 min-h-[52px] focus:outline-none focus:ring-2 focus:ring-[#0FA3A3] focus:ring-offset-2 active:scale-[0.98]"
              >
                <Truck className="w-5 h-5 text-[#0FA3A3]" aria-hidden="true" />
                <span>Request Delivery</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-6 border-t border-gray-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E6F6F4] flex items-center justify-center text-[#0FA3A3] shrink-0">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1C2B3A]">Open 24 Hours</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E6F6F4] flex items-center justify-center text-[#0FA3A3] shrink-0">
                    <Truck className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1C2B3A]">Delivery Available</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E6F6F4] flex items-center justify-center text-[#0FA3A3] shrink-0">
                    <HeartHandshake className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1C2B3A]">Friendly Staff</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E6F6F4] flex items-center justify-center text-[#0FA3A3] shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1C2B3A]">Central London</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Glass Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background aura */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-[#0FA3A3]/20 to-[#EAF3FB] rounded-[32px] transform -rotate-1 blur-lg -z-10" 
                aria-hidden="true"
              />

              {/* Main Rounded Image */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[4/3.5]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80"
                  alt="Friendly healthcare professional assisting customer at medical supply counter"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glass Badge 1: Open Now Live Status */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-[#0FA3A3]/20 flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-800 tracking-wide uppercase">Open Now</div>
                  <div className="text-xs text-[#5B6B7B] font-medium">Ready 24 Hours • 7 Days</div>
                </div>
              </div>

              {/* Floating Glass Badge 2: Delivery Available */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-[#0FA3A3]/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0FA3A3] flex items-center justify-center text-white shrink-0">
                  <Truck className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B2545]">Fast Home Delivery</div>
                  <div className="text-xs text-[#5B6B7B]">Direct to your doorstep</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Prominent Emergency Notice Bar below Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div 
          className="rounded-2xl bg-amber-50 border-2 border-amber-300/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-amber-950 shadow-xs"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-900 shrink-0">
              <AlertCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold leading-snug">
                In a life-threatening medical emergency, call <strong className="font-extrabold underline text-amber-950">999</strong> immediately.
              </p>
              <p className="text-xs sm:text-sm text-amber-900/80">
                For urgent non-emergency clinical advice, contact <strong>NHS 111</strong>. Our store provides medical equipment and supplies, not diagnosis or clinical treatment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="tel:999"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors shadow-xs"
              aria-label="Call emergency 999"
            >
              Emergency 999
            </a>
            <a 
              href="tel:111"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-200 text-amber-900 font-bold text-xs hover:bg-amber-300 transition-colors shadow-xs"
              aria-label="Call NHS 111 for non-emergency clinical advice"
            >
              NHS 111
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
