import React from 'react';
import { HABITA_PRO_IMAGES, HABITA_SERVICES, ALL_PROJECTS, HABITA_TESTIMONIALS } from '../data/mockData';
import { ProjectItem, ServiceItem } from '../types';
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
  MessageSquare,
  ChevronRight,
  Maximize2,
  ChefHat,
  Bath,
  Grid,
  PenTool,
  Sliders,
  Calendar,
} from 'lucide-react';

interface HabitaProViewProps {
  onOpenConsultation: (note?: string) => void;
  onOpenBudgetCalculator: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HabitaProView: React.FC<HabitaProViewProps> = ({
  onOpenConsultation,
  onOpenBudgetCalculator,
  onSelectProject,
  onSelectService,
}) => {
  const habitaProjects = ALL_PROJECTS.slice(0, 3);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ChefHat':
        return <ChefHat className="w-5 h-5 text-[#9f3c16]" />;
      case 'Bath':
        return <Bath className="w-5 h-5 text-[#9f3c16]" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-[#9f3c16]" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-[#9f3c16]" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-[#9f3c16]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#9f3c16]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Luxury Living Room Background */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={HABITA_PRO_IMAGES.heroBg}
            alt="Interiorismo y arquitectura de lujo Habita Pro"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1a]/90 via-[#1b1c1a]/55 to-[#1b1c1a]/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-3.5 h-3.5 text-[#ffdbcf]" />
            <span>Estudio de Arquitectura e Interiorismo de Alta Gama</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white leading-tight mb-6">
            Excelencia en Arquitectura <br className="hidden sm:inline" />
            y <span className="italic font-light text-[#ffdbcf]">Reformas de Lujo</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/85 font-light leading-relaxed mb-8">
            Transformamos espacios residenciales y comerciales en obras de arte habitables. Presupuestos cerrados, ejecución milimétrica y materiales de la más alta gama.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-request-quote-btn"
              onClick={() => onOpenConsultation('Solicitud inicial desde Hero')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#9f3c16]/30 flex items-center justify-center gap-2 group"
            >
              <span>Solicita tu presupuesto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-open-calc-btn"
              onClick={onOpenBudgetCalculator}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Calculador de presupuesto online</span>
            </button>
          </div>
        </div>

        {/* Floating Stats Bar at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 max-w-5xl mx-auto px-4 sm:px-6 hidden sm:block">
          <div className="bg-white rounded-2xl shadow-xl border border-[#dec0b7]/40 p-4 sm:p-6 grid grid-cols-4 divide-x divide-[#dec0b7]/30 text-center">
            <div className="px-2">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#9f3c16] block">
                +15
              </span>
              <span className="text-[11px] text-[#57423b] uppercase tracking-wider font-medium">
                Años de trayectoria
              </span>
            </div>
            <div className="px-2">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#9f3c16] block">
                450+
              </span>
              <span className="text-[11px] text-[#57423b] uppercase tracking-wider font-medium">
                Proyectos completados
              </span>
            </div>
            <div className="px-2">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#9f3c16] block">
                10 Años
              </span>
              <span className="text-[11px] text-[#57423b] uppercase tracking-wider font-medium">
                Garantía decenal
              </span>
            </div>
            <div className="px-2">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#9f3c16] block">
                100%
              </span>
              <span className="text-[11px] text-[#57423b] uppercase tracking-wider font-medium">
                Presupuesto cerrado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats Bar */}
      <div className="sm:hidden max-w-md mx-auto px-4 mt-6">
        <div className="bg-white rounded-xl shadow-md border border-[#dec0b7]/40 p-4 grid grid-cols-2 gap-3 text-center">
          <div>
            <span className="text-xl font-serif font-bold text-[#9f3c16] block">+15</span>
            <span className="text-[10px] text-[#57423b] uppercase tracking-wider">Años experiencia</span>
          </div>
          <div>
            <span className="text-xl font-serif font-bold text-[#9f3c16] block">450+</span>
            <span className="text-[10px] text-[#57423b] uppercase tracking-wider">Obras ejecutadas</span>
          </div>
          <div>
            <span className="text-xl font-serif font-bold text-[#9f3c16] block">10 Años</span>
            <span className="text-[10px] text-[#57423b] uppercase tracking-wider">Garantía legal</span>
          </div>
          <div>
            <span className="text-xl font-serif font-bold text-[#9f3c16] block">100%</span>
            <span className="text-[10px] text-[#57423b] uppercase tracking-wider">Precio cerrado</span>
          </div>
        </div>
      </div>

      {/* Section 2: Star Products & Services */}
      <section id="servicios" className="pt-24 sm:pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
            Catálogo Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1b1c1a] tracking-tight">
            Nuestros Productos y Servicios Estrella
          </h2>
          <p className="text-[#57423b] text-sm sm:text-base mt-3 leading-relaxed">
            Cada disciplina abordada con maestría artesanal, dirección de obra personalizada e integración tecnológica sin fisuras.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HABITA_SERVICES.slice(0, 5).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#dec0b7]/40 shadow-sm hover:shadow-md hover:border-[#9f3c16]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffdbcf]/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9f3c16] block mb-1">
                  {service.categoryTag}
                </span>
                <h3 className="text-xl font-serif font-medium text-[#1b1c1a] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57423b] leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {service.bullets && (
                  <ul className="space-y-2 mb-6 border-t border-[#dec0b7]/30 pt-4">
                    {service.bullets.map((b, i) => (
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
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold uppercase tracking-wider text-[#9f3c16] hover:text-[#822801] flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver detalles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation(`Interés en ${service.title}`)}
                  className="text-[11px] font-medium text-[#57423b] hover:text-[#1b1c1a] underline"
                >
                  Pedir presupuesto
                </button>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Project CTA card */}
          <div className="bg-gradient-to-br from-[#9f3c16] to-[#822801] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 text-[#ffdbcf]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffdbcf] block mb-1">
                Servicio Llave en Mano
              </span>
              <h3 className="text-2xl font-serif font-medium text-white mb-3">
                ¿Tienes un proyecto especial en mente?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-6">
                Abordamos proyectos complejos de restauración patrimonial, redistribución integral de áticos y diseño de villas exclusivas con un único interlocutor técnico.
              </p>
            </div>

            <div className="relative z-10 space-y-2">
              <button
                id="cta-card-consult-btn"
                onClick={() => onOpenConsultation('Proyecto integral personalizado')}
                className="w-full py-3 px-4 rounded-xl bg-white text-[#9f3c16] text-xs font-bold uppercase tracking-wider hover:bg-[#fbf9f5] transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Habla con un especialista</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenBudgetCalculator}
                className="w-full py-2 text-center text-xs text-white/80 hover:text-white underline"
              >
                O calcula tu presupuesto en 2 minutos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: "La Diferencia Habita Pro" + Photo Collage */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#dec0b7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: The 3 Value Pillars */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
                  Metodología Exclusiva
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
                  La Diferencia Habita Pro
                </h2>
                <p className="text-[#57423b] text-sm sm:text-base mt-3 leading-relaxed">
                  No somos solo una constructora ni solo un estudio de diseño; integramos la concepción creativa con la ejecución constructiva propia, eliminando intermediarios y sobrecostes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-serif text-3xl font-light text-[#9f3c16] shrink-0 w-10">
                    01
                  </span>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-[#1b1c1a] mb-1">
                      Garantía decenal certificada
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57423b] leading-relaxed">
                      Cada proyecto cuenta con una cobertura completa de hasta 10 años en elementos estructurales y 3 años en instalaciones, respaldada por aseguradora de primer nivel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-serif text-3xl font-light text-[#9f3c16] shrink-0 w-10">
                    02
                  </span>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-[#1b1c1a] mb-1">
                      Diseñadores e interioristas exclusivos
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57423b] leading-relaxed">
                      Un arquitecto o interiorista senior lidera personalmente tu proyecto, creando infografías fotorrealistas 3D y selecciones de muestras in situ antes de poner un solo ladrillo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-serif text-3xl font-light text-[#9f3c16] shrink-0 w-10">
                    03
                  </span>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-[#1b1c1a] mb-1">
                      Presupuesto cerrado sin sorpresas
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57423b] leading-relaxed">
                      Partidas desglosadas con precio cerrado por contrato. El coste pactado es exactamente el coste final abonado según hitos de obra certificados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Asesoría sobre metodología')}
                  className="px-6 py-3 rounded-xl bg-[#9f3c16] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#bf542c] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Conoce nuestro proceso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Col: The 4-Photo Collage from the user's design */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] relative group">
                  <img
                    src={HABITA_PRO_IMAGES.wardrobe}
                    alt="Vestidor a medida con iluminación LED"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                    <span className="text-white text-xs font-medium">Vestidores y ebanistería</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md aspect-square relative group">
                  <img
                    src={HABITA_PRO_IMAGES.stoneSink}
                    alt="Lavabo en piedra natural"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                    <span className="text-white text-xs font-medium">Lavabos en piedra maciza</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square relative group">
                  <img
                    src={HABITA_PRO_IMAGES.kitchenIsland}
                    alt="Isla de cocina en mármol blanco"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                    <span className="text-white text-xs font-medium">Islas escultóricas</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] relative group">
                  <img
                    src={HABITA_PRO_IMAGES.fireplace}
                    alt="Salón contemporáneo con chimenea integrada"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                    <span className="text-white text-xs font-medium">Salones con chimenea lineal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Portafolio - Proyectos recientes */}
      <section id="proyectos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
              Portafolio Exclusivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
              Proyectos Recientes
            </h2>
            <p className="text-[#57423b] text-sm mt-2 max-w-xl">
              Una cuidada selección de viviendas unifamiliares, áticos y restauraciones en las ubicaciones más prestigiosas.
            </p>
          </div>
          <button
            onClick={onOpenBudgetCalculator}
            className="mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#9f3c16] hover:text-[#822801] flex items-center gap-1.5"
          >
            <span>Calcula tu proyecto</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {habitaProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-2xl overflow-hidden border border-[#dec0b7]/40 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#1b1c1a]">
                    {project.category}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1b1c1a]/80 backdrop-blur-md text-[10px] font-bold text-white font-mono">
                    {project.area}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs text-[#57423b] block mb-1">{project.location}</span>
                  <h3 className="text-xl font-serif font-medium text-[#1b1c1a] mb-2 group-hover:text-[#9f3c16] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#57423b] leading-relaxed line-clamp-2 mb-4">
                    {project.afterDesc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#dec0b7]/20 flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#9f3c16]">
                  {project.investmentRange}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] group-hover:text-[#9f3c16] flex items-center gap-1 transition-colors">
                  <span>Ver ficha y antes/después</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Testimonios de clientes */}
      <section className="py-16 sm:py-20 bg-[#efeeea]/60 border-t border-[#dec0b7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] mb-2 block">
              Opiniones Verificadas
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1b1c1a] tracking-tight">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HABITA_TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#dec0b7]/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#9f3c16]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#57423b] italic leading-relaxed mb-6 font-serif">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#dec0b7]/20">
                  <div className="w-10 h-10 rounded-full bg-[#ffdbcf] text-[#822801] font-bold text-xs flex items-center justify-center">
                    {test.initials}
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-[#1b1c1a] block">
                      {test.author}
                    </strong>
                    <span className="text-[11px] text-[#57423b]">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-[#1b1c1a] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ffdbcf] block">
            Comience su proyecto
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-white leading-tight">
            ¿Listo para dar vida al hogar de sus sueños?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Agende una reunión inicial sin compromiso con nuestro equipo de arquitectos e interioristas. Analizaremos su espacio y le presentaremos una propuesta a medida.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-agendar-btn"
              onClick={() => onOpenConsultation('Asesoría desde CTA final')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar asesoría gratuita</span>
            </button>
            <a
              href="https://wa.me/34643080215?text=Hola,%20quisiera%20pedir%20informaci%C3%B3n%20para%20una%20reforma%20con%20Habita%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contactar por WhatsApp (643 080 215)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
