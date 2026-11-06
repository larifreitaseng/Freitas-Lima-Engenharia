import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, TrendingUp, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#servicos');
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#0A1325]">
      {/* Background Architectural Grid and Radial Navy Glow */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#182F57]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Contextual Eyebrow */}
        <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A059] mb-6">
          <span className="w-8 h-[1px] bg-[#C5A059]" />
          <span>Engenharia Civil e Consultoria Estratégica</span>
          <span className="w-8 h-[1px] bg-[#C5A059]" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] text-balance mb-6">
          Planejamento que <br className="hidden sm:inline" />
          <span className="text-gold-gradient">Constrói Resultados</span>
        </h1>

        {/* Slogan and Subtitle */}
        <p className="text-lg sm:text-2xl text-slate-200 font-medium leading-relaxed max-w-3xl mx-auto mb-6">
          Soluções técnicas e estratégicas para obras mais eficientes, econômicas e seguras.
        </p>

        {/* Connecting Paragraph */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto font-light mb-8">
          Da concepção ao canteiro de obras, blindamos seu investimento com orçamentos analíticos de precisão, cronogramas físico-financeiros executivos e consultorias técnicas especializadas. Menos retrabalho, zero desperdício e controle absoluto do primeiro dia à entrega das chaves.
        </p>

        {/* Region Trust Marker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#C5A059] bg-[#0F1D38]/90 border border-[#C5A059]/30 px-4 py-2.5 rounded-xl mx-auto mb-8 shadow-lg shadow-black/40">
          <MapPin className="w-4 h-4 shrink-0 text-[#C5A059]" />
          <span className="font-medium text-slate-200">
            Atuação em Votuporanga e região e consultorias online em todo território nacional
          </span>
        </div>

        {/* Key Value Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 pt-2">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 bg-[#0F1D38]/50 border border-white/5 py-2.5 px-4 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Previsibilidade total</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 bg-[#0F1D38]/50 border border-white/5 py-2.5 px-4 rounded-xl">
            <TrendingUp className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Engenharia de valor</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 bg-[#0F1D38]/50 border border-white/5 py-2.5 px-4 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Segurança técnica ABNT</span>
          </div>
        </div>

        {/* Action Group: Primary CTA + Secondary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenLeadModal()}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold text-[#0A1325] bg-gradient-to-r from-[#F9ECCB] via-[#C5A059] to-[#9F7A2C] hover:brightness-110 active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-[#C5A059]/25 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            <span>Solicitar Orçamento Gratuito</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a
            href="#servicos"
            onClick={scrollToServices}
            className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-[#0F1D38] hover:bg-[#152749] border border-white/10 hover:border-[#C5A059]/40 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Conhecer Nossos Serviços</span>
          </a>
        </div>

        {/* Agility assurance */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Retorno comercial e técnico prioritário em até 24h</span>
        </div>

      </div>
    </section>
  );
};
