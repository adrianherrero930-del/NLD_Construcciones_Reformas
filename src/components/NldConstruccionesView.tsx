import React, { useState } from 'react';
import { NLD_IMAGES, NLD_SERVICES, ALL_PROJECTS, NLD_TESTIMONIALS, FAQS, COVERAGE_ZONES } from '../data/mockData';
import { ProjectItem, ServiceItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  ChevronDown,
  Clock,
  Home,
  ChefHat,
  Bath,
  Building,
  Sun,
  Wrench,
  Send,
  Calendar,
} from 'lucide-react';

interface NldConstruccionesViewProps {
  onOpenConsultation: (note?: string) => void;
  onOpenBudgetCalculator: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const NldConstruccionesView: React.FC<NldConstruccionesViewProps> = ({
  onOpenConsultation,
  onOpenBudgetCalculator,
  onSelectProject,
  onSelectService,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq1');
  const [selectedZone, setSelectedZone] = useState<string>(COVERAGE_ZONES[0].name);

  // Form state
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadService, setLeadService] = useState('integral');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const nldProjects = ALL_PROJECTS.slice(3, 6);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-5 h-5 text-[#9f3c16]" />;
      case 'ChefHat':
        return <ChefHat className="w-5 h-5 text-[#9f3c16]" />;
      case 'Bath':
        return <Bath className="w-5 h-5 text-[#9f3c16]" />;
      case 'Building':
        return <Building className="w-5 h-5 text-[#9f3c16]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#9f3c16]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#9f3c16]" />;
      default:
        return <Home className="w-5 h-5 text-[#9f3c16]" />;
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={NLD_IMAGES.heroBg}
            alt="Reformas integrales en Altea NLD Construcciones"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1a]/95 via-[#1b1c1a]/60 to-[#1b1c1a]/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Constructora & Reformas en Altea y Costa Blanca</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white leading-tight mb-6">
            Reformas Integrales <br className="hidden sm:inline" />
            en <span className="italic font-light text-[#ffdbcf]">Altea</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/85 font-light leading-relaxed mb-8">
            Transformamos tu vivienda con la tranquilidad que mereces. Presupuesto cerrado, plazos garantizados por contrato y más de 15 años de experiencia en la Costa Blanca.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="nld-hero-quote-btn"
              onClick={() => onOpenConsultation('Presupuesto inicial NLD Altea')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#9f3c16]/30 flex items-center justify-center gap-2 group"
            >
              <span>Pide tu Presupuesto Gratis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/34643080215?text=Hola,%20quisiera%20pedir%20presupuesto%20para%20una%20reforma%20en%20Altea"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ffdbcf]" />
              <span>WhatsApp / Tel: 643 080 215</span>
            </a>
          </div>
        </div>

        {/* Floating Trust Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 max-w-5xl mx-auto px-4 sm:px-6 hidden sm:block">
          <div className="bg-white rounded-2xl shadow-xl border border-[#dec0b7]/40 p-4 sm:p-5 grid grid-cols-5 divide-x divide-[#dec0b7]/30 text-center">
            <div className="px-2 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-[#9f3c16] font-bold text-sm">
                <Star className="w-4 h-4 fill-current text-amber-500" />
                <span>4.9 / 5</span>
              </div>
              <span className="text-[10px] text-[#57423b] uppercase tracking-wider mt-0.5">
                Google Reviews (+60)
              </span>
            </div>
            <div className="px-2">
              <span className="text-xl lg:text-2xl font-serif font-bold text-[#9f3c16] block">
                +15 Años
              </span>
              <span className="text-[10px] text-[#57423b] uppercase tracking-wider">
                En Altea y comarca
              </span>
            </div>
            <div className="px-2">
              <span className="text-xl lg:text-2xl font-serif font-bold text-[#9f3c16] block">
                +380 Obras
              </span>
              <span className="text-[10px] text-[#57423b] uppercase tracking-wider">
                Proyectos terminados
              </span>
            </div>
            <div className="px-2">
              <span className="text-xl lg:text-2xl font-serif font-bold text-[#9f3c16] block">
                100% Cerrado
              </span>
              <span className="text-[10px] text-[#57423b] uppercase tracking-wider">
                Sin sobrecostes
              </span>
            </div>
            <div className="px-2">
              <span className="text-xl lg:text-2xl font-serif font-bold text-[#9f3c16] block">
                Garantía
              </span>
              <span className="text-[10px] text-[#57423b] uppercase tracking-wider">
                Legal por escrito
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-24 sm:pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1b1c1a] tracking-tight">
            Especialistas en Reformas y Construcción en Altea
          </h2>
          <p className="text-[#57423b] text-sm sm:text-base mt-3 leading-relaxed">
            Desde la rehabilitación completa de una vivienda tradicional en el casco antiguo hasta la modernización de villas en Altea Hills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NLD_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#dec0b7]/40 shadow-sm hover:shadow-md hover:border-[#9f3c16]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffdbcf]/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(srv.iconName)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9f3c16] block mb-1">
                  {srv.categoryTag}
                </span>
                <h3 className="text-xl font-serif font-medium text-[#1b1c1a] mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57423b] leading-relaxed mb-4">
                  {srv.shortDesc}
                </p>

                {srv.bullets && (
                  <ul className="space-y-2 mb-6 border-t border-[#dec0b7]/30 pt-4">
                    {srv.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-[#57423b] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9f3c16] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-2 border-t border-[#dec0b7]/20 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(srv)}
                  className="text-xs font-bold uppercase tracking-wider text-[#9f3c16] hover:text-[#822801] flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver detalles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation(`Presupuesto para ${srv.title}`)}
                  className="text-xs text-[#57423b] hover:text-[#1b1c1a] font-medium underline"
                >
                  Solicitar precio
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After Interactive Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#dec0b7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
              Resultados Reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
              Antes y Después en Altea
            </h2>
            <p className="text-[#57423b] text-sm mt-2">
              Desliza el tirador central para apreciar el cambio radical en cada una de nuestras intervenciones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {nldProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#fbf9f5] rounded-2xl overflow-hidden border border-[#dec0b7]/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 w-full relative">
                    <BeforeAfterSlider
                      beforeImage={proj.beforeImage}
                      afterImage={proj.afterImage}
                      beforeAlt={`Antes ${proj.title}`}
                      afterAlt={`Después ${proj.title}`}
                      className="h-full w-full rounded-none"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-[#57423b] mb-1">
                      <span className="font-bold text-[#9f3c16] uppercase tracking-wider text-[10px]">
                        {proj.category}
                      </span>
                      <span>{proj.area}</span>
                    </div>
                    <h3 className="text-lg font-serif font-medium text-[#1b1c1a] mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#57423b] line-clamp-2">
                      {proj.afterDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="text-xs font-bold uppercase tracking-wider text-[#9f3c16] hover:underline"
                  >
                    Ver memoria técnica
                  </button>
                  <button
                    onClick={() => onOpenConsultation(`Reforma similar a ${proj.title}`)}
                    className="px-3 py-1.5 rounded-lg bg-[#9f3c16] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#bf542c]"
                  >
                    Pedir similar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Steps Workflow Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
            Paso a Paso
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
            Cómo Trabajamos: 4 Pasos Hacia Tu Nueva Vivienda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'Solicitas presupuesto',
              desc: 'Contacta por teléfono, WhatsApp o formulario web. Te responderemos en menos de 24 horas laborables para coordinar.',
            },
            {
              num: '02',
              title: 'Visita técnica gratuita',
              desc: 'Nos desplazamos a tu vivienda en Altea o alrededores para tomar medidas, evaluar el estado de las instalaciones y escuchar tus ideas.',
            },
            {
              num: '03',
              title: 'Presupuesto y contrato',
              desc: 'Entregamos un presupuesto cerrado, desglosado partida por partida, junto con un contrato que fija fecha de inicio y entrega con penalizaciones.',
            },
            {
              num: '04',
              title: 'Ejecución y entrega',
              desc: 'Coordinamos a todos los gremios con supervisión técnica diaria. Te informamos puntualmente de los avances hasta la entrega de llaves.',
            },
          ].map((st) => (
            <div
              key={st.num}
              className="bg-white p-6 rounded-2xl border border-[#dec0b7]/40 shadow-sm relative overflow-hidden"
            >
              <span className="font-serif text-4xl font-light text-[#ffdbcf] block mb-3">
                {st.num}
              </span>
              <h3 className="text-lg font-serif font-medium text-[#1b1c1a] mb-2">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#57423b] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-[#efeeea]/60 border-t border-[#dec0b7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
              Testimonios de Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
              Lo que opinan de nosotros en Altea
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NLD_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#dec0b7]/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#9f3c16]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#57423b] italic leading-relaxed mb-6 font-serif">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#dec0b7]/20">
                  <div className="w-10 h-10 rounded-full bg-[#ffdbcf] text-[#822801] font-bold text-xs flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-[#1b1c1a] block">
                      {t.author}
                    </strong>
                    <span className="text-[11px] text-[#57423b]">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Zones */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
            Ámbito de Actuación
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
            Dónde Trabajamos en la Marina Baixa y Alta
          </h2>
          <p className="text-xs sm:text-sm text-[#57423b] mt-2">
            Base central en Altea con cobertura técnica express en menos de 2 horas.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {COVERAGE_ZONES.map((zone) => (
            <button
              key={zone.name}
              onClick={() => setSelectedZone(zone.name)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedZone === zone.name
                  ? 'bg-white border-[#9f3c16] ring-2 ring-[#ffdbcf] shadow-sm'
                  : 'bg-white border-[#dec0b7]/40 hover:bg-[#efeeea]'
              }`}
            >
              <span className="text-xs font-bold text-[#1b1c1a] block truncate">
                {zone.name}
              </span>
              <span className="text-[10px] text-[#9f3c16] font-medium block mt-1">
                {zone.label}
              </span>
              <span className="text-[10px] text-[#57423b] block mt-2">
                {zone.activeProjects} obras activas
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#dec0b7]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
              Dudas Frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
              Preguntas Habituales sobre Reformas
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-[#dec0b7]/40 overflow-hidden bg-[#fbf9f5]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#1b1c1a]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9f3c16] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#57423b] leading-relaxed border-t border-[#dec0b7]/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dec0b7]/40 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-1 block">
              Solicitud Directa
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#1b1c1a]">
              Pide tu Presupuesto sin Compromiso
            </h2>
            <p className="text-xs sm:text-sm text-[#57423b] mt-2">
              Visita técnica y presupuesto 100% gratuitos. Te contactamos en menos de 24 horas.
            </p>
          </div>

          {leadSubmitted ? (
            <div className="p-8 text-center space-y-3 bg-[#fbf9f5] rounded-2xl border border-emerald-300">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#1b1c1a]">
                ¡Gracias por contactar con NLD Construcciones!
              </h3>
              <p className="text-xs sm:text-sm text-[#57423b] max-w-md mx-auto">
                Hemos recibido tu solicitud para <strong>{leadName}</strong>. Nuestro técnico en Altea te llamará al <strong>{leadPhone}</strong> para agendar la visita en tu inmueble.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Martínez"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbf9f5] border border-[#dec0b7]/60 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                    Teléfono móvil *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 643 080 215"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbf9f5] border border-[#dec0b7]/60 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbf9f5] border border-[#dec0b7]/60 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                    Tipo de obra
                  </label>
                  <select
                    value={leadService}
                    onChange={(e) => setLeadService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbf9f5] border border-[#dec0b7]/60 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                  >
                    <option value="integral">Reforma Integral de Vivienda</option>
                    <option value="cocina">Reforma de Cocina</option>
                    <option value="bano">Reforma de Baño</option>
                    <option value="local">Local Comercial</option>
                    <option value="fachada">Fachada / Terraza exterior</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                id="nld-submit-lead-btn"
                className="w-full py-3.5 px-6 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Pedir Presupuesto Gratis Ahora</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
