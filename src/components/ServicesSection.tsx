import React from 'react';
import { ClipboardCheck, Calculator, Compass, ArrowRight, Check } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/companyData';

interface ServicesSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-7 h-7 text-[#C5A059]" strokeWidth={1.5} />;
      case 'Calculator':
        return <Calculator className="w-7 h-7 text-[#C5A059]" strokeWidth={1.5} />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#C5A059]" strokeWidth={1.5} />;
      default:
        return <ClipboardCheck className="w-7 h-7 text-[#C5A059]" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#0A1325] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span>Nossas Soluções Especializadas</span>
            <span className="w-6 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Engenharia de Alto Padrão em <span className="text-gold-gradient">Três Áreas Estratégicas</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Metodologias modernas e rigor técnico para blindar prazos, otimizar custos e garantir a excelência executiva da sua construção.
          </p>
        </div>

        {/* 3 Columns Desktop / 1 Column Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative bg-[#0F1D38] hover:bg-[#13264A] border border-[#C5A059]/20 hover:border-[#C5A059]/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/50 hover:-translate-y-1"
            >
              {/* Card Top: Number and Icon */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                  <div className="w-14 h-14 rounded-xl bg-[#0A1325] border border-[#C5A059]/30 flex items-center justify-center group-hover:border-[#C5A059] group-hover:scale-105 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-display text-2xl font-bold text-slate-500 group-hover:text-[#C5A059] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-gold-gradient transition-colors">
                  {service.title}
                </h3>

                {/* Short Benefit-Oriented Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light">
                  {service.shortDesc}
                </p>

                {/* Deliverables / Benefits List */}
                <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Benefícios e Entregas:
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => onOpenLeadModal(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#0A1325] hover:bg-[#C5A059] text-slate-200 hover:text-[#0A1325] border border-[#C5A059]/40 hover:border-[#C5A059] text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 group-hover:shadow-lg cursor-pointer"
                >
                  <span>Solicitar Proposta para este Serviço</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-[#0A1325] transition-colors" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Bottom Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0F1D38]/80 border border-[#C5A059]/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-display font-semibold text-white">
              Precisa de uma consultoria integrada para toda a obra?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Unimos orçamento, planejamento e gestão em um único pacote técnico com atendimento exclusivo do início ao fim.
            </p>
          </div>
          <button
            onClick={() => onOpenLeadModal('Consultorias técnicas em gestão de obras')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F9ECCB] via-[#C5A059] to-[#9F7A2C] text-[#0A1325] font-semibold text-xs sm:text-sm whitespace-nowrap hover:brightness-110 transition-all shrink-0 cursor-pointer"
          >
            Falar com Engenheiro Responsável
          </button>
        </div>

      </div>
    </section>
  );
};
