import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/companyData';

export const SocialProofSection: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: 'Diagnóstico e Premissas',
      desc: 'Análise minuciosa dos projetos arquitetônicos, expectativas de prazo e orçamento global disponível.'
    },
    {
      num: '02',
      title: 'Orçamento e Engenharia de Valor',
      desc: 'Levantamento quantitativo detalhado, curva ABC e otimização inteligente de custos sem perder padrão.'
    },
    {
      num: '03',
      title: 'Cronograma Físico-Financeiro',
      desc: 'Definição da linha de balanço, marcos críticos e desembolso previsto para cada fase da construção.'
    },
    {
      num: '04',
      title: 'Gestão e Fiscalização',
      desc: 'Acompanhamento rigoroso de canteiro, medições periódicas e relatórios transparentes de evolução.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-[#0A1325] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Sub-block 1: Methodology / Work Process */}
        <div>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span>Metodologia Comprovada</span>
              <span className="w-6 h-[1px] bg-[#C5A059]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Como Transformamos o Seu Projeto em <span className="text-gold-gradient">Realidade Sem Imprevistos</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Um processo estruturado de ponta a ponta para que investidores e construtores tenham controle total da obra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0F1D38] border border-white/5 hover:border-[#C5A059]/40 rounded-xl p-6 transition-all relative group"
              >
                <div className="text-3xl font-display font-bold text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-block 2: Testimonials e Social Proof */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
                Depoimentos e Experiência de Clientes
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                O que dizem os parceiros que confiam em nosso trabalho
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t: Testimonial) => (
              <div
                key={t.id}
                className="bg-[#0F1D38] border border-white/10 hover:border-[#C5A059]/40 rounded-2xl p-6 flex flex-col justify-between transition-all relative"
              >
                <Quote className="w-8 h-8 text-[#C5A059]/20 absolute top-5 right-5" />

                <div className="space-y-4">
                  <p className="text-sm text-slate-300 italic leading-relaxed pt-2">
                    "{t.text}"
                  </p>
                  
                  {/* Outcome Highlight */}
                  <div className="p-2.5 rounded-lg bg-[#0A1325] border border-[#C5A059]/20 text-xs text-[#C5A059] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{t.metric}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                  <p className="text-xs text-[#C5A059]/80 font-medium">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
