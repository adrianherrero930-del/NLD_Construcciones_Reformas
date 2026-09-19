import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Clock, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#fbf9f5] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col border border-[#dec0b7]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#dec0b7]/30 flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbcf] text-[#822801] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
              {service.categoryTag || 'Especialidad'}
            </span>
            <h2 className="text-2xl font-serif text-[#1b1c1a] font-medium">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] flex items-center justify-center transition-colors"
            aria-label="Cerrar modal de servicio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Description */}
          <div className="bg-white p-5 rounded-xl border border-[#dec0b7]/30">
            <p className="text-[#57423b] leading-relaxed text-base">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#9f3c16] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Estándares de Calidad y Ejecución
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#dec0b7]/20 text-xs sm:text-sm text-[#1b1c1a]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#9f3c16] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.materials && service.materials.length > 0 && (
              <div className="bg-white p-4 rounded-xl border border-[#dec0b7]/30">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#9f3c16]" />
                  Materiales Habituales
                </h4>
                <ul className="text-xs text-[#57423b] space-y-1.5">
                  {service.materials.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9f3c16]" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.estimatedTimeline && (
              <div className="bg-white p-4 rounded-xl border border-[#dec0b7]/30 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9f3c16]" />
                    Plazo Estimado de Entrega
                  </h4>
                  <p className="text-lg font-bold text-[#9f3c16] font-serif">
                    {service.estimatedTimeline}
                  </p>
                  <p className="text-xs text-[#57423b] mt-1">
                    Garantizado por contrato con penalización por día de retraso.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#dec0b7]/30 bg-white flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-[#dec0b7] text-[#1b1c1a] text-xs font-bold hover:bg-[#efeeea] transition-colors"
          >
            Volver
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation(service.title);
            }}
            className="px-6 py-2.5 rounded-lg bg-[#9f3c16] text-white text-xs font-bold hover:bg-[#bf542c] transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Pedir presupuesto para este servicio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
