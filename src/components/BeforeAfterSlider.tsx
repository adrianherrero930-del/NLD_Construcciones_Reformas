import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  initialPosition?: number;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Estado antes de la reforma',
  afterAlt = 'Resultado después de la reforma',
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  className = '',
  initialPosition = 50,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(initialPosition);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      id="before-after-container"
      className={`relative select-none overflow-hidden cursor-ew-resize group rounded-xl ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Comparador de antes y después"
      tabIndex={0}
    >
      {/* After image (background layer - full width) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />

      {/* Before image (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Draggable Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#30312e] text-white border-2 border-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <ArrowLeftRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Badges */}
      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#30312e]/85 backdrop-blur-sm text-white font-mono text-[11px] font-bold uppercase tracking-wider z-20 pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#9f3c16]/90 backdrop-blur-sm text-white font-mono text-[11px] font-bold uppercase tracking-wider z-20 pointer-events-none">
        {afterLabel}
      </span>

      {/* Floating subtle guide on hover */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 flex items-center gap-1.5">
        <span>Arrastra para comparar</span>
      </div>
    </div>
  );
};
