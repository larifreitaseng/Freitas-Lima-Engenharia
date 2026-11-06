/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGallerySection } from './components/ProjectGallerySection';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ServicesSection } from './components/ServicesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadSelectedService, setLeadSelectedService] = useState<string | undefined>(undefined);

  const handleOpenLeadModal = (service?: string) => {
    setLeadSelectedService(service);
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
    setLeadSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0A1325] text-[#E5E7EB] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#0A1325] relative">
      {/* Top Fixed Header with Sequential Topics */}
      <Navbar onOpenLeadModal={handleOpenLeadModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Início (Introdução Inicial) */}
        <Hero onOpenLeadModal={handleOpenLeadModal} />

        {/* Galeria Real de Imagens: Casas de Alto Padrão, Obras Públicas e Edifícios Verticais */}
        <ProjectGallerySection onOpenLeadModal={handleOpenLeadModal} />

        {/* Quantified Impact Numbers */}
        <ImpactMetrics />

        {/* 02. Serviços */}
        <ServicesSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 03. Diferenciais e Metodologia */}
        <SocialProofSection />

        {/* 04. Contato */}
        <ContactSection onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* Interactive Lead Capture Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
        initialService={leadSelectedService}
      />

      {/* Pulsing Floating WhatsApp on bottom right */}
      <FloatingWhatsApp />
    </div>
  );
}
