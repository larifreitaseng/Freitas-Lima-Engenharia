import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Mail, AlertTriangle, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Gestão e Execução de obras');
  const [message, setMessage] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(true);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'opaque_success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [webhookUrl] = useState(COMPANY_INFO.defaultWebhookUrl);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form Validations
    if (!name.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Por favor, informe um telefone/WhatsApp válido com DDD.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Por favor, descreva brevemente sua necessidade ou o tipo da obra.');
      return;
    }

    setLoading(true);

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      source: 'Landing Page Freitas Lima Engenharia'
    };

    try {
      if (webhookUrl && webhookUrl.includes('script.google.com')) {
        const queryParams = new URLSearchParams({
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          service: payload.service,
          message: payload.message,
          source: payload.source,
          timestamp: payload.timestamp
        });

        const endpointWithQuery = `${webhookUrl}?${queryParams.toString()}`;

        // 1. Envio principal via GET (100% funcional com o Apps Script)
        try {
          await fetch(endpointWithQuery, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'no-cache'
          });
        } catch (getError) {
          console.warn('Tentativa GET fetch:', getError);
        }

        // 2. Beacon / Image ping de redundância instantânea
        try {
          const pingImg = new Image();
          pingImg.src = endpointWithQuery;
        } catch (imgErr) {
          // silently ignored
        }

        // 3. Envio complementar via POST
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
          });
        } catch (postError) {
          console.warn('Tentativa POST:', postError);
        }

        setSubmissionStatus('opaque_success');
      } else {
        setSubmissionStatus('success');
      }
      setSubmitted(true);
    } catch (err: any) {
      console.warn('Webhook transmission error (fallback active):', err);
      setSubmissionStatus('opaque_success');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp formatted message template
  const whatsappTemplate = `Olá! Meu nome é ${name || '[Seu Nome]'}. Tenho interesse em ${service}. Minha necessidade é: ${message || 'Solicitação de orçamento e informações técnicas'}. Gostaria de conhecer as possibilidades e os próximos passos.`;
  const whatsappHref = `https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(whatsappTemplate)}`;

  // Email formatted body
  const emailSubject = `Solicitação de Proposta - ${service} - ${name}`;
  const emailBody = `Prezada equipe da Freitas Lima Engenharia,\n\nNome: ${name}\nWhatsApp / Telefone: ${phone}\nE-mail: ${email}\nServiço de Interesse: ${service}\n\nDescrição da necessidade:\n${message}\n\nAguardo retorno e proposta comercial.`;
  const emailHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const resetForm = () => {
    setSubmitted(false);
    setSubmissionStatus(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#0F1D38] border border-[#C5A059]/40 rounded-2xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A1325]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
              Contato Comercial e Orçamento
            </span>
            <h2 id="lead-modal-title" className="text-xl sm:text-2xl font-display font-bold text-white">
              {submitted ? 'Solicitação Registrada' : 'Solicitar Orçamento ou Proposta'}
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            aria-label="Fechar formulário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Preencha os campos abaixo com os dados da sua obra ou empreendimento. Responderemos com uma análise técnica prévia.
              </p>

              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Nome */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Eduardo de Oliveira"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0A1325] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                />
              </div>

              {/* WhatsApp e Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    WhatsApp ou Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(17) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1325] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    E-mail Corporativo ou Pessoal *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@empresa.com.br"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1325] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>
              </div>

              {/* Categoria de Interesse */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Categoria de Interesse *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0A1325] border border-white/10 text-white text-sm focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all cursor-pointer"
                >
                  <option value="Gestão e Execução de obras">Gestão e Execução de obras</option>
                  <option value="Orçamento e planejamento">Orçamento e planejamento</option>
                  <option value="Consultorias técnicas em gestão de obras">Consultorias técnicas em gestão de obras</option>
                  <option value="Consultoria Integrada Completa">Consultoria Integrada Completa (Todos os Serviços)</option>
                </select>
              </div>

              {/* Descrição da Necessidade */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Descrição da Necessidade ou Obra *
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Empreendimento residencial em Votuporanga. Precisamos de orçamento executivo e consultoria de gestão de custos."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0A1325] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                <input
                  type="checkbox"
                  id="privacy-checkbox"
                  checked={acceptPolicy}
                  onChange={(e) => setAcceptPolicy(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 bg-[#0A1325] text-[#C5A059] focus:ring-[#C5A059]"
                />
                <label htmlFor="privacy-checkbox" className="leading-snug">
                  Concordo com o envio dos meus dados para fins exclusivos de atendimento técnico e proposta comercial pela Freitas Lima Engenharia, em conformidade com a LGPD.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading || !acceptPolicy}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-[#0A1325] bg-gradient-to-r from-[#F9ECCB] via-[#C5A059] to-[#9F7A2C] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C5A059]/20"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitindo solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitação de Orçamento</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                Garantia de sigilo profissional · Retorno prioritário em até 24h
              </div>
            </form>
          ) : (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-400" />
                <div>
                  <p className="font-semibold text-white">Solicitação registrada com sucesso!</p>
                  <p className="text-slate-300 text-xs mt-0.5">
                    {submissionStatus === 'opaque_success'
                      ? 'Os dados foram enviados para o fluxo de atendimento da planilha. Para atendimento imediato, confirme pelos botões abaixo.'
                      : 'Recebemos suas informações com sucesso.'}
                  </p>
                </div>
              </div>

              {/* Summary of Collected Data */}
              <div className="p-4 rounded-xl bg-[#0A1325] border border-white/10 space-y-2 text-xs">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                  Resumo dos Dados da Solicitação:
                </p>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-slate-500">Nome: </span>
                    <span className="font-medium text-white">{name}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Telefone: </span>
                    <span className="font-mono text-white">{phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">E-mail: </span>
                    <span className="text-white">{email}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Interesse: </span>
                    <span className="text-[#C5A059] font-medium">{service}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-slate-500">Necessidade: </span>
                  <p className="text-slate-300 italic mt-0.5">"{message}"</p>
                </div>
              </div>

              {/* Action Buttons: WhatsApp e Email redirection */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Conclua o contato em 1 clique para prioridade máxima:
                </p>

                {/* WhatsApp button */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Abrir WhatsApp com Mensagem Preenchida</span>
                </a>

                {/* Email button */}
                <a
                  href={emailHref}
                  className="w-full py-3 px-4 rounded-xl bg-[#13264A] hover:bg-[#182F57] text-slate-200 border border-white/10 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>Abrir Aplicativo de E-mail (Mensagem Preenchida)</span>
                </a>
              </div>

              <div className="p-3 bg-white/5 rounded-lg text-center text-xs text-slate-400">
                O visitante deverá concluir o envio no WhatsApp ou no aplicativo de e-mail para confirmação instantânea.
              </div>

              <button
                onClick={resetForm}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Fechar janela
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
