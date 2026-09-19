import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { X, Calendar, Maximize2, MapPin, Award, CheckCircle, ArrowRight, PhoneCall } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultation: (projectTitle?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'comparador' | 'galeria'>('comparador');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#fbf9f5] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col border border-[#dec0b7]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#dec0b7]/30 flex items-center justify-between bg-white shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbcf] text-[#822801] text-[11px] font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-[#57423b] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#9f3c16]" /> {project.location}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1b1c1a] font-medium">
              {project.title}
            </h2>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] flex items-center justify-center transition-colors"
            aria-label="Cerrar modal de proyecto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white border border-[#dec0b7]/30 shadow-sm text-center">
            <div>
              <span className="text-xs text-[#57423b] block">Superficie</span>
              <span className="font-bold text-[#1b1c1a] text-lg">{project.area}</span>
            </div>
            <div>
              <span className="text-xs text-[#57423b] block">Plazo de ejecución</span>
              <span className="font-bold text-[#1b1c1a] text-lg">{project.duration}</span>
            </div>
            <div>
              <span className="text-xs text-[#57423b] block">Rango de inversión</span>
              <span className="font-bold text-[#9f3c16] text-lg">{project.investmentRange}</span>
            </div>
            <div>
              <span className="text-xs text-[#57423b] block">Dirección facultativa</span>
              <span className="font-bold text-[#1b1c1a] text-xs sm:text-sm truncate block">
                {project.architect}
              </span>
            </div>
          </div>

          {/* Visual Showcase: Tabs for Interactive Slider or Gallery */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('comparador')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'comparador'
                      ? 'bg-[#9f3c16] text-white shadow-sm'
                      : 'bg-[#efeeea] text-[#57423b] hover:bg-[#eae8e4]'
                  }`}
                >
                  Comparador Antes y Después
                </button>
                <button
                  onClick={() => setActiveTab('galeria')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'galeria'
                      ? 'bg-[#9f3c16] text-white shadow-sm'
                      : 'bg-[#efeeea] text-[#57423b] hover:bg-[#eae8e4]'
                  }`}
                >
                  Galería de Acabados ({project.gallery.length})
                </button>
              </div>
              <span className="text-xs text-[#57423b] hidden sm:inline">
                {activeTab === 'comparador' ? 'Desliza para ver la transformación' : 'Haz clic para ampliar'}
              </span>
            </div>

            {activeTab === 'comparador' ? (
              <div className="h-80 sm:h-96 w-full rounded-xl overflow-hidden shadow-md">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeAlt={`Antes de ${project.title}`}
                  afterAlt={`Después de ${project.title}`}
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="space-y-3">
                <div className="h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-black/5 relative shadow-md">
                  <img
                    src={selectedGalleryImage || project.gallery[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGalleryImage(img)}
                      className={`h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        (selectedGalleryImage || project.gallery[0]) === img
                          ? 'border-[#9f3c16] scale-98 ring-2 ring-[#ffdbcf]'
                          : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Transformation details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 rounded-xl border border-[#dec0b7]/30">
            <div className="border-l-2 border-red-400/50 pl-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ba1a1a] block mb-1">
                Punto de partida (Antes)
              </span>
              <p className="text-sm text-[#57423b] leading-relaxed">{project.beforeDesc}</p>
            </div>
            <div className="border-l-2 border-[#9f3c16] pl-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9f3c16] block mb-1">
                Solución arquitectónica (Después)
              </span>
              <p className="text-sm text-[#57423b] leading-relaxed">{project.afterDesc}</p>
            </div>
          </div>

          {/* Full architectural story */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#9f3c16] mb-2">
              Memoria Técnica & Diseño
            </h4>
            <p className="text-sm sm:text-base text-[#57423b] leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Materials Used Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-2">
              Materiales y Calidades Principales
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.materialsUsed.map((mat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-[#efeeea] text-[#1b1c1a] text-xs font-medium border border-[#dec0b7]/40 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#9f3c16]" />
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[#dec0b7]/30 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#57423b] flex items-center gap-1.5 text-center sm:text-left">
            <Award className="w-4 h-4 text-[#9f3c16] shrink-0" />
            <span>Presupuesto cerrado sin desviaciones y garantía legal por escrito.</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-[#dec0b7] text-[#1b1c1a] text-xs font-bold hover:bg-[#efeeea] transition-colors"
            >
              Cerrar
            </button>
            <button
              id="request-similar-project-btn"
              onClick={() => {
                onClose();
                onOpenConsultation(project.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-[#9f3c16] text-white text-xs font-bold hover:bg-[#bf542c] transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Solicitar proyecto similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
