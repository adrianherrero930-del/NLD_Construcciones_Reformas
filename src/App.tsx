import React, { useState } from 'react';
import { ScreenMode, ProjectItem, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { HabitaProView } from './components/HabitaProView';
import { NldConstruccionesView } from './components/NldConstruccionesView';
import { InteractiveComparatorView } from './components/InteractiveComparatorView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BudgetCalculatorModal } from './components/BudgetCalculatorModal';
import { BookingConsultationModal } from './components/BookingConsultationModal';
import { Footer } from './components/Footer';
import { MessageSquare, Phone, Calculator, ArrowUp } from 'lucide-react';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenMode>('habita');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isBudgetCalculatorOpen, setIsBudgetCalculatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefillNote, setConsultationPrefillNote] = useState('');

  const handleOpenConsultation = (note: string = '') => {
    setConsultationPrefillNote(note);
    setIsConsultationOpen(true);
  };

  const handleOpenBudgetCalculator = () => {
    setIsBudgetCalculatorOpen(true);
  };

  const handleOpenConsultationWithBudget = (budgetSummary: string) => {
    setIsBudgetCalculatorOpen(false);
    handleOpenConsultation(`Presupuesto estimado: ${budgetSummary}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a] font-sans-body">
      {/* Top Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onSelectScreen={setCurrentScreen}
        onOpenConsultation={() => handleOpenConsultation('Solicitud desde cabecera')}
        onOpenBudgetCalculator={handleOpenBudgetCalculator}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentScreen === 'habita' && (
          <HabitaProView
            onOpenConsultation={handleOpenConsultation}
            onOpenBudgetCalculator={handleOpenBudgetCalculator}
            onSelectProject={setSelectedProject}
            onSelectService={setSelectedService}
          />
        )}

        {currentScreen === 'nld' && (
          <NldConstruccionesView
            onOpenConsultation={handleOpenConsultation}
            onOpenBudgetCalculator={handleOpenBudgetCalculator}
            onSelectProject={setSelectedProject}
            onSelectService={setSelectedService}
          />
        )}

        {currentScreen === 'comparador' && (
          <InteractiveComparatorView
            onSelectProject={setSelectedProject}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation('Solicitud desde pie de página')}
        onOpenBudgetCalculator={handleOpenBudgetCalculator}
      />

      {/* Floating Bottom Quick Actions */}
      <aside aria-label="Acciones rápidas" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* Quick Calculator Trigger */}
        <button
          onClick={handleOpenBudgetCalculator}
          className="px-3.5 py-2 rounded-full bg-white text-[#9f3c16] border border-[#dec0b7] shadow-lg hover:shadow-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#fbf9f5] transition-all group"
          title="Abrir calculadora de presupuestos"
        >
          <Calculator className="w-4 h-4 text-[#9f3c16] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Calculadora €</span>
        </button>

        {/* WhatsApp Direct Floating Button */}
        <a
          href="https://wa.me/34643080215?text=Hola,%20quisiera%20pedir%20presupuesto%20para%20una%20reforma"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center group"
          aria-label="Contactar por WhatsApp al 643 080 215"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
      </aside>

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <BudgetCalculatorModal
        isOpen={isBudgetCalculatorOpen}
        onClose={() => setIsBudgetCalculatorOpen(false)}
        onOpenConsultationWithBudget={handleOpenConsultationWithBudget}
      />

      <BookingConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledNote={consultationPrefillNote}
      />
    </div>
  );
}

export default App;
