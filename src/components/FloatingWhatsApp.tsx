import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(
    'Olá! Vim através do site da Freitas Lima Engenharia e gostaria de falar com um especialista sobre meu projeto.'
  )}`;

  return (
    <aside
      aria-label="Atendimento direto por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip badge on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#0A1325]/95 backdrop-blur-md text-white text-xs font-medium px-3.5 py-2 rounded-xl border border-[#C5A059]/40 shadow-xl shadow-black/60 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="whitespace-nowrap">Fale Conosco no WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label="Conversar no WhatsApp com Freitas Lima Engenharia (abre em nova aba)"
      >
        {/* Pulsing / Blinking Radar Wave (Piscando) */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none" />
        
        {/* Golden Ring Edge */}
        <span className="absolute inset-0 rounded-full border-2 border-[#C5A059]/50 pointer-events-none group-hover:border-[#C5A059] transition-colors" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 text-white transform group-hover:rotate-6 transition-transform" />
      </a>
    </aside>
  );
};
