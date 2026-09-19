import React, { useState } from 'react';
import { ScreenMode } from '../types';
import { HABITA_PRO_IMAGES, NLD_IMAGES } from '../data/mockData';
import { Phone, MessageSquare, Menu, X, Calculator, ArrowLeftRight, Sparkles, Building2 } from 'lucide-react';

interface NavbarProps {
  currentScreen: ScreenMode;
  onSelectScreen: (screen: ScreenMode) => void;
  onOpenConsultation: () => void;
  onOpenBudgetCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onSelectScreen,
  onOpenConsultation,
  onOpenBudgetCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#dec0b7]/40">
      {/* Top Brand / Screen Selector Banner */}
      <div className="bg-[#30312e] text-white text-[11px] py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#dec0b7] uppercase tracking-wider font-semibold text-[10px] hidden md:inline">
              Vistas y Pantallas:
            </span>
            <div className="flex items-center gap-1">
              <button
                id="nav-switch-habita"
                onClick={() => onSelectScreen('habita')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                  currentScreen === 'habita'
                    ? 'bg-[#9f3c16] text-white shadow-sm'
                    : 'text-[#efeeea] hover:text-white hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#ffdbcf]" />
                <span>Habita Pro (Lujo)</span>
              </button>

              <button
                id="nav-switch-nld"
                onClick={() => onSelectScreen('nld')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                  currentScreen === 'nld'
                    ? 'bg-[#9f3c16] text-white shadow-sm'
                    : 'text-[#efeeea] hover:text-white hover:bg-white/10'
                }`}
              >
                <Building2 className="w-3 h-3 text-[#ffdbcf]" />
                <span>NLD Construcciones (Altea)</span>
              </button>

              <button
                id="nav-switch-comparador"
                onClick={() => onSelectScreen('comparador')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                  currentScreen === 'comparador'
                    ? 'bg-[#9f3c16] text-white shadow-sm'
                    : 'text-[#efeeea] hover:text-white hover:bg-white/10'
                }`}
              >
                <ArrowLeftRight className="w-3 h-3" />
                <span>Comparador Antes/Después</span>
              </button>

              <button
                id="nav-switch-calc"
                onClick={onOpenBudgetCalculator}
                className="px-3 py-1 rounded-full text-[11px] font-bold text-[#ffdbcf] hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 hidden sm:flex"
              >
                <Calculator className="w-3 h-3" />
                <span>Calculadora Online</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#dec0b7] hidden lg:flex">
            <a
              href="tel:+34643080215"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffdbcf]" />
              <span>643 080 215</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://wa.me/34643080215?text=Hola,%20quisiera%20solicitar%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#2fe06f] flex items-center gap-1 transition-colors font-sans font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp (643 080 215)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectScreen(currentScreen === 'nld' ? 'nld' : 'habita')}
              className="flex items-center gap-3 text-left group"
            >
              {currentScreen === 'nld' ? (
                <div className="flex items-center gap-3">
                  <img
                    src={NLD_IMAGES.logo}
                    alt="Logo NLD Construcciones"
                    className="h-10 w-auto object-contain rounded"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-serif text-xl font-bold text-[#1b1c1a] tracking-tight block">
                      NLD Construcciones
                    </span>
                    <span className="text-[10px] text-[#9f3c16] uppercase tracking-widest font-bold block">
                      Altea & Costa Blanca
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <img
                    src={HABITA_PRO_IMAGES.logo}
                    alt="Logo Habita Pro"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-serif text-xl font-bold text-[#1b1c1a] tracking-tight block">
                      Habita Pro
                    </span>
                    <span className="text-[10px] text-[#9f3c16] uppercase tracking-widest font-bold block">
                      Arquitectura & Reformas de Lujo
                    </span>
                  </div>
                </div>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#57423b]">
            <button
              onClick={() => onSelectScreen(currentScreen === 'nld' ? 'nld' : 'habita')}
              className="hover:text-[#9f3c16] transition-colors"
            >
              Inicio
            </button>
            <a href="#servicios" className="hover:text-[#9f3c16] transition-colors">
              Servicios
            </a>
            <a href="#proyectos" className="hover:text-[#9f3c16] transition-colors">
              Proyectos
            </a>
            <button
              onClick={() => onSelectScreen('comparador')}
              className="hover:text-[#9f3c16] transition-colors flex items-center gap-1"
            >
              <span>Antes / Después</span>
            </button>
            <button
              onClick={onOpenBudgetCalculator}
              className="hover:text-[#9f3c16] transition-colors text-[#9f3c16]"
            >
              Presupuesto
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-consult-cta-btn"
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Pedir Cita Gratuita
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-2 rounded-lg bg-[#9f3c16] text-white text-xs font-bold uppercase tracking-wider"
            >
              Pedir Cita
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#dec0b7]/60 text-[#1b1c1a]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#dec0b7]/40 p-4 space-y-3 animate-in slide-in-from-top-2">
          <div className="space-y-1">
            <button
              onClick={() => {
                onSelectScreen('habita');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-[#1b1c1a] hover:bg-[#efeeea] rounded-lg"
            >
              Habita Pro (Estudio de Lujo)
            </button>
            <button
              onClick={() => {
                onSelectScreen('nld');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-[#1b1c1a] hover:bg-[#efeeea] rounded-lg"
            >
              NLD Construcciones (Altea)
            </button>
            <button
              onClick={() => {
                onSelectScreen('comparador');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-[#9f3c16] hover:bg-[#efeeea] rounded-lg flex items-center justify-between"
            >
              <span>Comparador Antes / Después</span>
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                onOpenBudgetCalculator();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-[#1b1c1a] hover:bg-[#efeeea] rounded-lg flex items-center justify-between"
            >
              <span>Calculadora de Presupuesto</span>
              <Calculator className="w-3.5 h-3.5 text-[#9f3c16]" />
            </button>
          </div>

          <div className="pt-2 border-t border-[#dec0b7]/30 flex gap-2">
            <a
              href="tel:+34643080215"
              className="flex-1 py-2 px-3 text-center bg-[#efeeea] text-[#1b1c1a] text-xs font-bold rounded-lg flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#9f3c16]" />
              <span>643 080 215</span>
            </a>
            <a
              href="https://wa.me/34643080215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 text-center bg-[#25D366] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
