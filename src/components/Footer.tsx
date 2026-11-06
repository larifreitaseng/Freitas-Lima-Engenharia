import React, { useState } from 'react';
import { ArrowUp, MessageCircle, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenLeadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070E1C] text-slate-400 border-t border-[#C5A059]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#C5A059]/40 bg-[#0F1D38] overflow-hidden flex items-center justify-center">
                <img
                  src={COMPANY_INFO.logoImage}
                  alt="Freitas Lima Engenharia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-wider block">
                  FREITAS LIMA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-sans font-semibold">
                  ENGENHARIA E CONSULTORIA
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-200 font-medium">
              Planejamento que Constrói Resultados.
            </p>

            <p className="text-xs text-slate-300 leading-relaxed font-light max-w-sm">
              Soluções técnicas e estratégicas para obras mais eficientes, econômicas e seguras. Do plano à realização, conte com quem entende de cada detalhe.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-[#C5A059] transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">Serviços Especializados</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#C5A059] transition-colors">Metodologia e Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C5A059] transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>

          {/* Contacts e Support (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Canais Diretos
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">WhatsApp Comercial:</span>
                  <a href={`https://wa.me/${COMPANY_INFO.phone1Raw}`} className="font-mono hover:text-[#C5A059] transition-colors">
                    {COMPANY_INFO.phone1}
                  </a>
                  <span className="mx-1 text-slate-600">·</span>
                  <a href={`https://wa.me/${COMPANY_INFO.phone2Raw}`} className="font-mono hover:text-[#C5A059] transition-colors">
                    {COMPANY_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">E-mail:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-mono hover:text-[#C5A059] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Atuação:</span>
                  <span>{COMPANY_INFO.region}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright e Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Freitas Lima Engenharia. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Política de Privacidade e LGPD
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0F1D38] hover:bg-[#152749] text-slate-400 hover:text-[#C5A059] transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="w-full max-w-lg bg-[#0F1D38] border border-white/10 rounded-2xl p-6 text-xs text-slate-300 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-display font-bold text-base text-white">Política de Privacidade e LGPD</span>
              <button onClick={() => setShowPrivacy(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>
            <div className="space-y-2 text-slate-300 leading-relaxed max-h-60 overflow-y-auto">
              <p>
                A <strong>Freitas Lima Engenharia</strong> preza pela total confidencialidade e segurança das informações transmitidas por nossos clientes e parceiros.
              </p>
              <p>
                Os dados coletados neste formulário (nome, telefone, e-mail e descrição da obra) destinam-se exclusivamente à formulação de diagnósticos técnicos e propostas comerciais personalizadas, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              </p>
              <p>
                Nenhuma informação é compartilhada com terceiros para fins de marketing não autorizado.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="w-full py-2 bg-[#C5A059] text-[#0A1325] font-semibold rounded-lg"
            >
              Compreendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
