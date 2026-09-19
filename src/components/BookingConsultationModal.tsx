import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, MessageSquare, Phone, User, Mail, Sparkles } from 'lucide-react';

interface BookingConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNote?: string;
}

export const BookingConsultationModal: React.FC<BookingConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledNote = '',
}) => {
  const [format, setFormat] = useState<'presencial' | 'estudio' | 'online'>('presencial');
  const [selectedDate, setSelectedDate] = useState<string>('2025-04-10');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>(prefilledNote || '');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hola Habita Pro / NLD, me llamo ${name || 'un interesado'}. Me gustaría solicitar asesoría para una reforma: ${notes || 'Reforma integral'}. Mi teléfono es ${phone}.`
    );
    window.open(`https://wa.me/34643080215?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#fbf9f5] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden my-auto border border-[#dec0b7]/40 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#dec0b7]/30 flex items-center justify-between bg-white">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9f3c16]">
                Sin compromiso · Respuesta en 24h
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#1b1c1a] font-medium">
              Agendar Asesoría Gratuita
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] flex items-center justify-center transition-colors"
            aria-label="Cerrar modal de asesoría"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-white">
            <div className="w-16 h-16 rounded-full bg-[#ffdbcf] text-[#9f3c16] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#1b1c1a]">
              ¡Solicitud recibida con éxito!
            </h3>
            <p className="text-sm text-[#57423b] max-w-md mx-auto leading-relaxed">
              Gracias, <strong>{name || 'Estimado cliente'}</strong>. Nuestro arquitecto de zona revisará los detalles de tu vivienda y te contactará en menos de 24 horas laborables al <strong>{phone || 'tu teléfono'}</strong> para confirmar la cita de asesoramiento técnico.
            </p>
            <div className="p-4 rounded-xl bg-[#fbf9f5] border border-[#dec0b7]/40 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-[#57423b]">Modalidad:</span>
                <span className="font-bold text-[#1b1c1a] capitalize">{format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#57423b]">Fecha preferente:</span>
                <span className="font-bold text-[#1b1c1a]">{selectedDate} ({selectedSlot}h)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar también por WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-[#dec0b7] text-[#1b1c1a] text-xs font-bold hover:bg-[#efeeea] transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            {/* Direct WhatsApp Quick Contact */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-emerald-900">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium">¿Prefieres atención inmediata?</span>
              </div>
              <a
                href="https://wa.me/34643080215?text=Hola,%20quisiera%20pedir%20presupuesto%20para%20una%20reforma"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1"
              >
                <span>WhatsApp 643 080 215</span>
              </a>
            </div>

            {/* Meeting Modality */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-2">
                Modalidad de la reunión
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'presencial', label: 'Visita en la obra' },
                  { id: 'estudio', label: 'En nuestro estudio' },
                  { id: 'online', label: 'Videollamada 3D' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormat(item.id as any)}
                    className={`p-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                      format === item.id
                        ? 'bg-[#9f3c16] text-white border-[#9f3c16] shadow-sm'
                        : 'bg-white text-[#57423b] border-[#dec0b7]/40 hover:bg-[#efeeea]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                  Fecha preferente
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#dec0b7]/60 rounded-lg text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                  Franja horaria
                </label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#dec0b7]/60 rounded-lg text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                >
                  <option value="09:30">09:30 - 11:00 (Mañanas)</option>
                  <option value="11:30">11:30 - 13:00 (Mediodía)</option>
                  <option value="16:00">16:00 - 17:30 (Tardes)</option>
                  <option value="18:00">18:00 - 19:30 (Tarde-noche)</option>
                </select>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-3 pt-1">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                  Nombre completo *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-[#57423b] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carmen Navarro"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#dec0b7]/60 rounded-lg text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                    Teléfono móvil *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-[#57423b] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 643 080 215"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#dec0b7]/60 rounded-lg text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-[#57423b] absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#dec0b7]/60 rounded-lg text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] block mb-1">
                  Detalles de tu proyecto o inmueble
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos la ubicación, metros cuadrados aproximados, o qué estancias te gustaría reformar..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 text-xs bg-white border border-[#dec0b7]/60 rounded-lg text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#9f3c16]"
                />
              </div>
            </div>

            {/* Privacy note & Submit */}
            <div className="pt-2 border-t border-[#dec0b7]/30 space-y-3">
              <p className="text-[11px] text-[#57423b]">
                Tus datos están protegidos por secreto profesional y nunca se cederán a terceros. Visita y presupuesto 100% gratuitos y sin compromiso.
              </p>
              <button
                type="submit"
                id="submit-consultation-btn"
                className="w-full py-3 px-4 rounded-xl bg-[#9f3c16] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#bf542c] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirmar y solicitar asesoría gratuita</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
