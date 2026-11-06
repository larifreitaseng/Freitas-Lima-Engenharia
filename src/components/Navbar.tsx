import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenLeadModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active topic highlight
      const sections = ['inicio', 'servicos', 'diferenciais', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTopics = [
    { id: 'inicio', num: '01', label: 'Início', href: '#inicio' },
    { id: 'servicos', num: '02', label: 'Serviços', href: '#servicos' },
    { id: 'diferenciais', num: '03', label: 'Diferenciais', href: '#diferenciais' },
    { id: 'contato', num: '04', label: 'Contato', href: '#contato' },
  ];

  const handleTopicClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1325]/95 backdrop-blur-md border-b border-[#C5A059]/20 shadow-xl py-3'
          : 'bg-[#0A1325]/75 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          
          {/* Brand Wordmark e Monogram */}
          <a
            href="#inicio"
            onClick={(e) => handleTopicClick(e, '#inicio')}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            aria-label="Freitas Lima Engenharia - Ir para o início"
          >
            <div className="w-10 h-10 rounded border border-[#C5A059]/40 bg-[#0F1D38] overflow-hidden flex items-center justify-center shadow-md group-hover:border-[#C5A059] transition-colors">
              <img
                src={COMPANY_INFO.logoImage}
                alt="Logo Freitas Lima Engenharia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#C5A059] transition-colors whitespace-nowrap">
                FREITAS LIMA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-sans font-semibold whitespace-nowrap">
                ENGENHARIA
              </span>
            </div>
          </a>

          {/* Sequential Topics Navigation */}
          <nav
            className="hidden md:flex items-center gap-1.5 lg:gap-3 p-1 rounded-xl bg-[#0F1D38]/80 border border-white/10"
            aria-label="Tópicos da página em sequência"
          >
            {navTopics.map((topic) => {
              const isActive = activeSection === topic.id;
              return (
                <a
                  key={topic.id}
                  href={topic.href}
                  onClick={(e) => handleTopicClick(e, topic.href)}
                  className={`px-3.5 lg:px-4 py-1.5 rounded-lg text-xs lg:text-sm font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#C5A059] text-[#0A1325] shadow-md font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#0A1325]/80 font-bold' : 'text-[#C5A059]'}`}>
                    {topic.num}
                  </span>
                  <span>{topic.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenLeadModal()}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider text-[#0A1325] bg-gradient-to-r from-[#F9ECCB] via-[#C5A059] to-[#9F7A2C] hover:brightness-110 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#C5A059]/15 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenLeadModal()}
              className="px-3 py-1.5 text-xs font-semibold text-[#0A1325] bg-[#C5A059] rounded-lg"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de tópicos' : 'Abrir menu de tópicos'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Sequential Topics */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1325] border-b border-[#C5A059]/20 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-[#C5A059]">
            Navegue pelos tópicos da página:
          </p>
          <div className="flex flex-col space-y-1">
            {navTopics.map((topic) => (
              <a
                key={topic.id}
                href={topic.href}
                onClick={(e) => handleTopicClick(e, topic.href)}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
                  activeSection === topic.id
                    ? 'bg-[#C5A059] text-[#0A1325] font-semibold'
                    : 'text-slate-200 hover:text-[#C5A059] hover:bg-[#0F1D38]'
                }`}
              >
                <span className={`text-xs font-mono ${activeSection === topic.id ? 'text-[#0A1325]/80' : 'text-[#C5A059]'}`}>
                  {topic.num}
                </span>
                <span>{topic.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full py-3 rounded-xl font-semibold text-sm text-[#0A1325] bg-gradient-to-r from-[#F9ECCB] via-[#C5A059] to-[#9F7A2C] flex items-center justify-center gap-2"
            >
              <span>Solicitar Orçamento ou Proposta</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
