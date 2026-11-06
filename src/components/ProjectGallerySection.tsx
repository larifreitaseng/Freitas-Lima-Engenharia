import React from 'react';
import { ArrowUpRight, Home, Building2, Landmark } from 'lucide-react';

import imgCasaAltoPadrao from '../assets/images/galeria_casa_alto_padrao_1793998640351.jpg';
import imgObraPublica from '../assets/images/galeria_obra_publica_1793998640262.jpg';
import imgEdificioVertical from '../assets/images/galeria_edificio_vertical_1793998640347.jpg';

interface ProjectGallerySectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const ProjectGallerySection: React.FC<ProjectGallerySectionProps> = ({ onOpenLeadModal }) => {
  const segments = [
    {
      id: 'casas-alto-padrao',
      title: 'Casas de Alto Padrão',
      subtitle: 'Residências de luxo e condomínios',
      desc: 'Planejamento orçamentário detalhado, gestão executiva e engenharia de valor para residências contemporâneas de alto padrão.',
      image: imgCasaAltoPadrao,
      icon: Home,
      tag: 'Residencial de Luxo'
    },
    {
      id: 'obras-publicas',
      title: 'Obras Públicas',
      subtitle: 'Infraestrutura e equipamentos cívicos',
      desc: 'Fiscalização técnica rigorosa, orçamentos analíticos em conformidade total com normas técnicas e cumprimento de cronogramas contratuais.',
      image: imgObraPublica,
      icon: Landmark,
      tag: 'Infraestrutura e Institucional'
    },
    {
      id: 'edificios-verticais',
      title: 'Edifícios Verticais',
      subtitle: 'Torres residenciais e corporativas',
      desc: 'Controle físico-financeiro contínuo, linha de balanço e consultoria técnica em gestão de obras para empreendimentos verticais de grande porte.',
      image: imgEdificioVertical,
      icon: Building2,
      tag: 'Vertical e Comercial'
    }
  ];

  return (
    <section className="relative py-16 bg-[#0A1325] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span>Campos de Atuação Prática</span>
            <span className="w-6 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
            Experiência Técnica em <span className="text-gold-gradient">Projetos de Todo Porte</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Soluções completas de engenharia civil aplicadas a casas de alto padrão, obras públicas e edifícios verticais.
          </p>
        </div>

        {/* 3 Real Photographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment) => {
            const IconComp = segment.icon;
            return (
              <div
                key={segment.id}
                onClick={() => onOpenLeadModal(segment.title)}
                className="group relative rounded-2xl overflow-hidden bg-[#0F1D38] border border-white/10 hover:border-[#C5A059]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/60 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Real Image Container with Vite Bundled Assets */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#070E1C]">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Resilient fallback in case of direct path
                        const target = e.currentTarget;
                        if (segment.id === 'casas-alto-padrao') target.src = '/assets/images/galeria_casa_alto_padrao_1793998640351.jpg';
                        if (segment.id === 'obras-publicas') target.src = '/assets/images/galeria_obra_publica_1793998640262.jpg';
                        if (segment.id === 'edificios-verticais') target.src = '/assets/images/galeria_edificio_vertical_1793998640347.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D38] via-[#0F1D38]/30 to-transparent opacity-85" />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#0A1325]/85 backdrop-blur-md border border-[#C5A059]/30 text-[11px] font-semibold text-[#C5A059] flex items-center gap-1.5 shadow">
                      <IconComp className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{segment.tag}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-2.5">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-gradient transition-colors">
                      {segment.title}
                    </h3>
                    <p className="text-xs text-[#C5A059] font-medium tracking-wide">
                      {segment.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light pt-1">
                      {segment.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-300 group-hover:text-[#C5A059] transition-colors">
                  <span className="font-semibold">Solicitar orçamento para este segmento</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
