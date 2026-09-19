import React, { useState } from 'react';
import { ALL_PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ArrowLeftRight, Sparkles, MapPin, Clock, Maximize2, ShieldCheck, ChevronRight, MessageSquare } from 'lucide-react';

interface InteractiveComparatorViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: (projectTitle?: string) => void;
}

export const InteractiveComparatorView: React.FC<InteractiveComparatorViewProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (filterCategory === 'todos') return true;
    if (filterCategory === 'integral') return p.category.includes('Integral');
    if (filterCategory === 'cocinas') return p.category.includes('Cocina');
    if (filterCategory === 'banos') return p.category.includes('Baño');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdbcf] text-[#822801] text-xs font-bold uppercase tracking-wider mb-3">
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>Transformaciones Reales</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1b1c1a] font-medium tracking-tight mb-4">
          Comparador Interactivo de Antes y Después
        </h1>
        <p className="text-[#57423b] text-sm sm:text-base leading-relaxed">
          Arrastra el control central en cada proyecto para descubrir cómo convertimos viviendas obsoletas y compartimentadas en espacios diáfanos, luminosos y de alta eficiencia energética.
        </p>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {[
            { id: 'todos', label: 'Todas las obras' },
            { id: 'integral', label: 'Reformas Integrales' },
            { id: 'cocinas', label: 'Cocinas y Salones' },
            { id: 'banos', label: 'Baños y Spas' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                filterCategory === cat.id
                  ? 'bg-[#9f3c16] text-white shadow-sm'
                  : 'bg-white text-[#57423b] border border-[#dec0b7]/50 hover:bg-[#efeeea]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Before / After interactive cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden border border-[#dec0b7]/40 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Draggable Slider Stage */}
            <div className="h-72 sm:h-80 w-full relative">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeAlt={`Antes de ${project.title}`}
                afterAlt={`Después de ${project.title}`}
                className="h-full w-full rounded-none"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9f3c16] bg-[#ffdbcf]/60 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#57423b] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#9f3c16]" /> {project.location}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#1b1c1a] font-medium mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-[#57423b] line-clamp-2">
                  {project.afterDesc}
                </p>
              </div>

              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#dec0b7]/30 text-center text-xs">
                <div>
                  <span className="text-[#57423b] text-[10px] block">Superficie</span>
                  <strong className="text-[#1b1c1a]">{project.area}</strong>
                </div>
                <div>
                  <span className="text-[#57423b] text-[10px] block">Plazo</span>
                  <strong className="text-[#1b1c1a]">{project.duration}</strong>
                </div>
                <div>
                  <span className="text-[#57423b] text-[10px] block">Inversión</span>
                  <strong className="text-[#9f3c16]">{project.investmentRange}</strong>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] hover:text-[#9f3c16] transition-colors flex items-center gap-1"
                >
                  <span>Ver memoria completa y fotos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenConsultation(project.title)}
                  className="px-3.5 py-2 rounded-lg bg-[#9f3c16] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#bf542c] transition-colors"
                >
                  Pedir reforma así
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 bg-[#30312e] text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif">
            ¿Tienes una propiedad que necesita una renovación integral?
          </h2>
          <p className="text-sm text-[#dec0b7] leading-relaxed">
            Realizamos una visita técnica gratuita a tu inmueble, analizamos la estructura y te entregamos un anteproyecto con infografía 3D y presupuesto cerrado.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Asesoría desde comparador')}
              className="px-6 py-3 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              Agendar visita técnica gratuita
            </button>
            <a
              href="https://wa.me/34643080215?text=Hola,%20quisiera%20pedir%20presupuesto%20para%20una%20reforma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar por WhatsApp (643 080 215)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
