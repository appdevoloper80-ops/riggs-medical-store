import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Sun, 
  Sunset, 
  Moon, 
  Sunrise, 
  PhoneCall, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig.ts';

export const Open24HoursSection: React.FC = () => {
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentHour, setCurrentHour] = useState(12);

  useEffect(() => {
    const updateTime = () => {
      // Show London time (GMT / BST)
      const now = new Date();
      try {
        const londonTime = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(londonTime);

        const londonHourStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/London',
          hour: 'numeric',
          hour12: false,
        }).format(now);
        setCurrentHour(parseInt(londonHourStr, 10));
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString());
        setCurrentHour(now.getHours());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timePhases = [
    {
      name: "Early Morning",
      hours: "06:00 – 12:00",
      description: "Morning dressings, daily health monitoring, and early morning pick-ups before work.",
      icon: Sunrise,
      isActive: currentHour >= 6 && currentHour < 12,
    },
    {
      name: "Midday",
      hours: "12:00 – 18:00",
      description: "Mobility equipment demonstrations, advice from counter staff, and home deliveries.",
      icon: Sun,
      isActive: currentHour >= 12 && currentHour < 18,
    },
    {
      name: "Evening",
      hours: "18:00 – 00:00",
      description: "Post-hospital discharge support, surgical tape, wound care, and evening emergency collections.",
      icon: Sunset,
      isActive: currentHour >= 18 && currentHour < 24,
    },
    {
      name: "Overnight",
      hours: "00:00 – 06:00",
      description: "Quiet-hour immediate access. No appointment needed. Counter is staffed and open.",
      icon: Moon,
      isActive: currentHour >= 0 && currentHour < 6,
    },
  ];

  return (
    <section 
      className="py-16 sm:py-24 bg-[#0B2545] text-white relative overflow-hidden" 
      aria-labelledby="hours-heading"
    >
      {/* Decorative background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0FA3A3]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#0FA3A3] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0FA3A3]/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Always Open • 365 Days A Year</span>
          </div>
          
          <h2 
            id="hours-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Late-Night Need? We're Here.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#EAF3FB]/80 leading-relaxed">
            Medical needs do not keep business hours. Whether an essential bandage runs out at 2:00 AM, a mobility aid is needed post-hospital discharge, or a fever requires immediate monitoring supplies, our doors on Museum Street never close.
          </p>

          {/* Current Live London Clock Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20">
            <Clock className="w-5 h-5 text-[#0FA3A3]" aria-hidden="true" />
            <div className="text-left">
              <span className="text-xs text-white/70 block uppercase tracking-wider font-semibold">
                Current Central London Time:
              </span>
              <span className="text-lg font-mono font-bold text-white tracking-widest">
                {currentTimeStr || '00:00:00'} (GMT/BST)
              </span>
            </div>
            <span className="ml-2 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/30">
              Open Now
            </span>
          </div>
        </div>

        {/* 24-Hour Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timePhases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.name}
                className={`relative rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between ${
                  phase.isActive
                    ? 'bg-gradient-to-b from-[#0FA3A3]/30 to-[#0B2545] border-2 border-[#0FA3A3] shadow-lg shadow-[#0FA3A3]/20 -translate-y-1'
                    : 'bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      phase.isActive ? 'bg-[#0FA3A3] text-white' : 'bg-white/10 text-[#0FA3A3]'
                    }`}>
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    {phase.isActive && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider animate-pulse">
                        Current Time
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {phase.name}
                  </h3>
                  
                  <div className="text-sm font-semibold text-[#0FA3A3] mb-3">
                    {phase.hours}
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-white/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0FA3A3]" aria-hidden="true" />
                  <span>Store open &amp; staffed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Call Note */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Life-Threatening Emergency?
              </p>
              <p className="text-xs text-gray-300">
                For acute emergencies, chest pains, or serious trauma, call <strong className="text-red-400">999</strong> immediately.
              </p>
            </div>
          </div>

          <a
            href="tel:999"
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors min-h-[40px] inline-flex items-center justify-center shadow-md"
            aria-label="Call emergency services at 999"
          >
            Emergency 999
          </a>
        </div>

      </div>
    </section>
  );
};
