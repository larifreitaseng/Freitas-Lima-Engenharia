import React from 'react';
import { IMPACT_METRICS } from '../data/companyData';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="relative border-y border-[#C5A059]/20 bg-[#0D1A33]/90 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {IMPACT_METRICS.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-mono tabular-nums tracking-tight">
                {item.value}
              </div>
              <h3 className="mt-1 text-sm sm:text-base font-semibold text-slate-200">
                {item.label}
              </h3>
              <p className="mt-0.5 text-xs text-slate-400 font-light max-w-[220px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
