import React, { useState, useMemo } from 'react';
import { BudgetCalculatorState } from '../types';
import { X, Calculator, Check, ArrowRight, ShieldCheck, Sparkles, Copy, CheckCheck } from 'lucide-react';

interface BudgetCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultationWithBudget: (summary: string) => void;
}

export const BudgetCalculatorModal: React.FC<BudgetCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultationWithBudget,
}) => {
  const [calcState, setCalcState] = useState<BudgetCalculatorState>({
    propertyType: 'piso',
    areaSqm: 110,
    qualityTier: 'exclusiva',
    services: {
      demolicion: true,
      cocina: true,
      banos: true,
      climatizacion: true,
      carpinteria: true,
      domotica: false,
      exterior: false,
    },
    numBanos: 2,
    openConcept: true,
  });

  const [copied, setCopied] = useState(false);

  // Dynamic pricing algorithm based on Spanish luxury renovation market metrics
  const calculation = useMemo(() => {
    const baseRates: Record<string, number> = {
      alta: 1100,
      exclusiva: 1550,
      museistica: 2150,
    };

    const propMultipliers: Record<string, number> = {
      piso: 1.0,
      atico: 1.15,
      villa: 1.25,
      local: 0.95,
    };

    const basePerSqm = (baseRates[calcState.qualityTier] || 1550) * (propMultipliers[calcState.propertyType] || 1.0);
    let totalBase = basePerSqm * calcState.areaSqm;

    // Adjust for selected sub-services
    let serviceFactor = 0;
    if (calcState.services.demolicion) serviceFactor += 0.12;
    if (calcState.services.cocina) serviceFactor += 0.22;
    if (calcState.services.banos) serviceFactor += 0.14 * (calcState.numBanos || 1);
    if (calcState.services.climatizacion) serviceFactor += 0.16;
    if (calcState.services.carpinteria) serviceFactor += 0.18;
    if (calcState.services.domotica) serviceFactor += 0.12;
    if (calcState.services.exterior) serviceFactor += 0.15;

    // Normalize factor with a base integral core
    const adjustedFactor = Math.max(0.6, serviceFactor);
    const estimatedMid = Math.round((totalBase * adjustedFactor) / 500) * 500;
    const estimatedMin = Math.round((estimatedMid * 0.92) / 500) * 500;
    const estimatedMax = Math.round((estimatedMid * 1.08) / 500) * 500;

    // Execution time in weeks
    let weeks = Math.max(6, Math.round(calcState.areaSqm / 12));
    if (calcState.qualityTier === 'museistica') weeks += 3;

    return {
      estimatedMin,
      estimatedMax,
      estimatedMid,
      weeks,
      perSqm: Math.round(estimatedMid / calcState.areaSqm),
      breakdown: {
        demolicion: Math.round(estimatedMid * 0.14),
        instalaciones: Math.round(estimatedMid * 0.28),
        acabados: Math.round(estimatedMid * 0.35),
        ebanisteraEquip: Math.round(estimatedMid * 0.23),
      },
    };
  }, [calcState]);

  const handleCopySummary = () => {
    const summaryText = `Estimación Reforma Habita Pro:
Propiedad: ${calcState.propertyType.toUpperCase()} (${calcState.areaSqm} m²)
Calidad: ${calcState.qualityTier.toUpperCase()}
Inversión orientativa: ${calculation.estimatedMin.toLocaleString('es-ES')} € - ${calculation.estimatedMax.toLocaleString('es-ES')} €
Plazo estimado: ${calculation.weeks} semanas
Servicios: ${Object.entries(calcState.services)
      .filter(([_, active]) => active)
      .map(([name]) => name)
      .join(', ')}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProceed = () => {
    const summary = `${calcState.propertyType.toUpperCase()} de ${calcState.areaSqm}m² (${calcState.qualityTier}) ~ ${calculation.estimatedMin.toLocaleString('es-ES')}€ - ${calculation.estimatedMax.toLocaleString('es-ES')}€`;
    onClose();
    onOpenConsultationWithBudget(summary);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#fbf9f5] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-[#dec0b7]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#dec0b7]/30 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffdbcf] text-[#9f3c16] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-[#1b1c1a] font-medium">
                Calculadora de Presupuesto Interactivo
              </h2>
              <p className="text-xs text-[#57423b]">
                Estimación orientativa de inversión con calidades premium y presupuesto cerrado.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] flex items-center justify-center transition-colors"
            aria-label="Cerrar calculadora"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* 1. Property Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-2">
                  1. Tipo de Inmueble
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'piso', label: 'Piso / Apartamento' },
                    { id: 'atico', label: 'Ático con Terraza' },
                    { id: 'villa', label: 'Villa / Chalet' },
                    { id: 'local', label: 'Local Comercial' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() =>
                        setCalcState({ ...calcState, propertyType: p.id as any })
                      }
                      className={`p-2.5 text-xs rounded-lg font-medium border text-center transition-all ${
                        calcState.propertyType === p.id
                          ? 'bg-[#9f3c16] text-white border-[#9f3c16] shadow-sm'
                          : 'bg-white text-[#57423b] border-[#dec0b7]/40 hover:bg-[#efeeea]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Surface Area Slider */}
              <div className="bg-white p-4 rounded-xl border border-[#dec0b7]/30">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a]">
                    2. Superficie a reformar
                  </label>
                  <span className="text-base font-bold text-[#9f3c16] font-mono">
                    {calcState.areaSqm} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="450"
                  step="5"
                  value={calcState.areaSqm}
                  onChange={(e) =>
                    setCalcState({ ...calcState, areaSqm: Number(e.target.value) })
                  }
                  className="w-full accent-[#9f3c16] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#57423b] mt-1">
                  <span>35 m²</span>
                  <span>120 m² (media)</span>
                  <span>250 m²</span>
                  <span>450 m²</span>
                </div>
              </div>

              {/* 3. Quality Tier */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-2">
                  3. Nivel de Acabados & Materiales
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    {
                      id: 'alta',
                      title: 'Alta Gama',
                      desc: 'Maderas nobles, porcelánico gran formato y firmas reconocidas.',
                      price: '~1.100 €/m²',
                    },
                    {
                      id: 'exclusiva',
                      title: 'Exclusivo Autor',
                      desc: 'Diseño a medida, electrodomésticos Gaggenau/Miele, piedra natural.',
                      price: '~1.550 €/m²',
                      featured: true,
                    },
                    {
                      id: 'museistica',
                      title: 'Museístico',
                      desc: 'Mármoles importados, ebanistería artesana y domótica integral KNX.',
                      price: '~2.150 €/m²',
                    },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() =>
                        setCalcState({ ...calcState, qualityTier: tier.id as any })
                      }
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all relative ${
                        calcState.qualityTier === tier.id
                          ? 'bg-[#ffdbcf]/50 border-[#9f3c16] ring-1 ring-[#9f3c16]'
                          : 'bg-white border-[#dec0b7]/40 hover:bg-[#efeeea]'
                      }`}
                    >
                      {tier.featured && (
                        <span className="absolute -top-2 right-2 px-2 py-0.5 rounded-full bg-[#9f3c16] text-white text-[9px] font-bold uppercase tracking-wider">
                          Más elegido
                        </span>
                      )}
                      <div>
                        <span className="font-bold text-xs text-[#1b1c1a] block">
                          {tier.title}
                        </span>
                        <p className="text-[11px] text-[#57423b] mt-1 leading-snug">
                          {tier.desc}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#9f3c16] mt-2 block">
                        {tier.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Scope checklist */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-2">
                  4. Partidas a incluir
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'demolicion', label: 'Demolición y tabiquería' },
                    { key: 'cocina', label: 'Cocina de autor completa' },
                    { key: 'banos', label: `Baños de diseño (${calcState.numBanos})` },
                    { key: 'climatizacion', label: 'Climatización conductos' },
                    { key: 'carpinteria', label: 'Carpintería & vestidores' },
                    { key: 'domotica', label: 'Domótica & audio' },
                    { key: 'exterior', label: 'Terrazas / exteriores' },
                  ].map((srv) => {
                    const isChecked = calcState.services[srv.key as keyof typeof calcState.services];
                    return (
                      <button
                        key={srv.key}
                        type="button"
                        onClick={() =>
                          setCalcState({
                            ...calcState,
                            services: {
                              ...calcState.services,
                              [srv.key]: !isChecked,
                            },
                          })
                        }
                        className={`p-2.5 rounded-lg border text-xs flex items-center justify-between text-left transition-all ${
                          isChecked
                            ? 'bg-white border-[#9f3c16] text-[#1b1c1a] font-medium'
                            : 'bg-white/60 border-[#dec0b7]/30 text-[#57423b]'
                        }`}
                      >
                        <span>{srv.label}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center ${
                            isChecked ? 'bg-[#9f3c16] text-white' : 'border border-gray-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Live Estimate Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white p-5 rounded-2xl border border-[#dec0b7]/50 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#dec0b7]/30 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#57423b]">
                    Inversión Estimada
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#ffdbcf] text-[#822801] text-[10px] font-bold">
                    Presupuesto Cerrado
                  </span>
                </div>

                {/* Big Price Range */}
                <div className="text-center py-2 bg-[#fbf9f5] rounded-xl border border-[#dec0b7]/30">
                  <span className="text-xs text-[#57423b] block">Rango de Inversión Orientativo</span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#9f3c16] my-1">
                    {calculation.estimatedMin.toLocaleString('es-ES')} € – {calculation.estimatedMax.toLocaleString('es-ES')} €
                  </div>
                  <span className="text-xs text-[#57423b]">
                    Aproximadamente <strong className="text-[#1b1c1a]">{calculation.perSqm.toLocaleString('es-ES')} €/m²</strong> (IVA no incl.)
                  </span>
                </div>

                {/* Timeline and Guarantee Pill */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-[#efeeea] text-xs">
                    <span className="text-[#57423b] block text-[11px]">Plazo de obra</span>
                    <strong className="text-[#1b1c1a] text-sm font-serif">
                      ~{calculation.weeks} semanas
                    </strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#efeeea] text-xs">
                    <span className="text-[#57423b] block text-[11px]">Garantía</span>
                    <strong className="text-[#1b1c1a] text-sm">10 años legal</strong>
                  </div>
                </div>

                {/* Partidas Breakdown */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#57423b] block">
                    Desglose orientativo por capítulos
                  </span>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-[#57423b]">
                      <span>Demolición y albañilería técnica</span>
                      <span className="font-mono font-medium">{calculation.breakdown.demolicion.toLocaleString('es-ES')} €</span>
                    </div>
                    <div className="w-full bg-[#efeeea] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#9f3c16] h-full" style={{ width: '14%' }} />
                    </div>

                    <div className="flex justify-between text-[#57423b]">
                      <span>Instalaciones (fontanería, clima, luz)</span>
                      <span className="font-mono font-medium">{calculation.breakdown.instalaciones.toLocaleString('es-ES')} €</span>
                    </div>
                    <div className="w-full bg-[#efeeea] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#bf542c] h-full" style={{ width: '28%' }} />
                    </div>

                    <div className="flex justify-between text-[#57423b]">
                      <span>Pavimentos, alicatados y revestimientos</span>
                      <span className="font-mono font-medium">{calculation.breakdown.acabados.toLocaleString('es-ES')} €</span>
                    </div>
                    <div className="w-full bg-[#efeeea] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#d97757] h-full" style={{ width: '35%' }} />
                    </div>

                    <div className="flex justify-between text-[#57423b]">
                      <span>Ebanistería, cocina y equipamiento</span>
                      <span className="font-mono font-medium">{calculation.breakdown.ebanisteraEquip.toLocaleString('es-ES')} €</span>
                    </div>
                    <div className="w-full bg-[#efeeea] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#57423b] h-full" style={{ width: '23%' }} />
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#ffdbcf]/30 border border-[#dec0b7]/40 text-xs text-[#57423b] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9f3c16] shrink-0 mt-0.5" />
                  <span>
                    El presupuesto definitivo se confirma tras visita técnica presencial y mediciones in situ sin coste.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4">
                <button
                  id="calc-request-visit-btn"
                  onClick={handleProceed}
                  className="w-full py-3 px-4 rounded-xl bg-[#9f3c16] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#bf542c] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Solicitar visita técnica con este cálculo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopySummary}
                  className="w-full py-2 px-3 rounded-lg border border-[#dec0b7] text-[#57423b] text-xs font-medium hover:bg-[#efeeea] transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">¡Cálculo copiado al portapapeles!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar desglose estimado</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
