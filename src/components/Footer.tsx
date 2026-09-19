import React from 'react';
import { HABITA_PRO_IMAGES, NLD_IMAGES } from '../data/mockData';
import { ShieldCheck, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenBudgetCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenBudgetCalculator,
}) => {
  return (
    <footer className="bg-[#1b1c1a] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={HABITA_PRO_IMAGES.logo}
                alt="Logo Habita Pro"
                className="h-9 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Habita Pro
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Estudio de arquitectura interior, reformas integrales de alta gama y constructora de confianza en Madrid y la Costa Blanca (Altea, Calpe, Moraira). Proyectos llave en mano con presupuesto cerrado y garantía decenal.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-white/10 text-[#ffdbcf] text-[10px] font-mono uppercase tracking-wider">
                Colegiado COAM / CTAA
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-emerald-300 text-[10px] font-mono uppercase tracking-wider">
                Seguro RC 1.000.000 €
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffdbcf]">
              Servicios Clave
            </h4>
            <ul className="text-xs text-white/70 space-y-2">
              <li><a href="#servicios" className="hover:text-white transition-colors">Reformas Integrales</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Cocinas de Autor</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Baños Estilo Spa</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Carpintería & Ebanistería</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Domótica KNX & Clima</a></li>
            </ul>
          </div>

          {/* Tools & Planning */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffdbcf]">
              Herramientas Online
            </h4>
            <ul className="text-xs text-white/70 space-y-2">
              <li>
                <button
                  onClick={onOpenBudgetCalculator}
                  className="hover:text-white transition-colors text-left text-[#ffdbcf]"
                >
                  Calculadora de Presupuesto
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors text-left"
                >
                  Agendar Visita Técnica
                </button>
              </li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Portafolio de Obras</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffdbcf]">
              Contacto & Sedes
            </h4>
            <ul className="text-xs text-white/70 space-y-2.5">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9f3c16] shrink-0 mt-0.5" />
                <span>Madrid: Paseo de la Castellana 140 · Altea: Carrer Major 12</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#9f3c16] shrink-0" />
                <a href="tel:+34643080215" className="hover:text-white">+34 643 080 215</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9f3c16] shrink-0" />
                <span>contacto@habitapro.es</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#9f3c16] shrink-0" />
                <span>Lunes a Viernes: 08:30 - 19:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Habita Pro · NLD Construcciones. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Aviso Legal</span>
            <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-white transition-colors cursor-pointer">Garantía Decenal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
