import React from 'react';
import { Mail, MapPin, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLeadModal }) => {
  const whatsappMsg1 = `https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(
    'Olá! Gostaria de conversar com a Freitas Lima Engenharia sobre um orçamento para minha obra.'
  )}`;

  const whatsappMsg2 = `https://wa.me/${COMPANY_INFO.phone2Raw}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com o time de engenharia da Freitas Lima sobre um projeto.'
  )}`;

  return (
    <section id="contato" className="py-24 bg-[#0A1325] relative overflow-hidden border-t border-white/5">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#C5A059]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Closure Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0F1D38] to-[#09101F] border border-[#C5A059]/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 cols: Persuasive Closure Call */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Do Plano à Realização</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                Sua Obra Merece a Segurança de um <br />
                <span className="text-gold-gradient">Planejamento Impecável</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                Não deixe prazos e custos ao acaso. Fale agora mesmo com nossa equipe e garanta a previsibilidade técnica que o seu investimento exige.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenLeadModal()}
                  className="px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-[#0A1325] bg-gradient-to-r from-[#F9ECCB] via-[#C5A059] to-[#9F7A2C] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#C5A059]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Proposta pelo Formulário</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>

                <a
                  href={whatsappMsg1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 hover:text-emerald-200 bg-emerald-950/20 hover:bg-emerald-950/40 text-sm sm:text-base font-medium transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Imediato</span>
                </a>
              </div>
            </div>

            {/* Right 5 cols: Direct Contact Details e Phone Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-5 rounded-2xl bg-[#0A1325] border border-white/10 hover:border-[#C5A059]/40 transition-colors">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
                  Atendimento Comercial e Técnico (WhatsApp)
                </p>
                <div className="space-y-2 mt-2">
                  <a
                    href={whatsappMsg1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-white hover:text-[#C5A059] transition-colors group"
                  >
                    <span className="font-mono text-sm sm:text-base font-semibold">{COMPANY_INFO.phone1}</span>
                    <span className="text-xs text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Conversar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>

                  <a
                    href={whatsappMsg2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-white hover:text-[#C5A059] transition-colors group pt-2 border-t border-white/5"
                  >
                    <span className="font-mono text-sm sm:text-base font-semibold">{COMPANY_INFO.phone2}</span>
                    <span className="text-xs text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Conversar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0A1325] border border-white/10 hover:border-[#C5A059]/40 transition-colors">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
                  E-mail Oficial
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-mono text-sm sm:text-base text-slate-200 hover:text-[#C5A059] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-[#0A1325] border border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
                  Sede e Abrangência Técnica
                </p>
                <div className="flex items-start gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    Votuporanga e região e consultorias online em todo território nacional
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
