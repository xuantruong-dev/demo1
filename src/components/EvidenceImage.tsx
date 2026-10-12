import React, { useState } from 'react';
import { getEvidenceItem, getEvidenceUrl, EvidenceItem } from '../data/evidenceRegistry';
import { useEvidenceLightbox } from '../context/EvidenceLightboxContext';
import { ZoomIn, Image as ImageIcon } from 'lucide-react';

interface EvidenceImageProps {
  code: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  showCaption?: boolean;
  showBadge?: boolean;
  showDate?: boolean;
  interactive?: boolean;
  alt?: string;
  variant?: 'card' | 'plain' | 'editorial' | 'hero';
  overlayBadgePosition?: 'top-left' | 'top-right' | 'bottom-left';
}

export const EvidenceImage: React.FC<EvidenceImageProps> = ({
  code,
  caption,
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-4/3',
  showCaption = true,
  showBadge = true,
  showDate = false,
  interactive = true,
  alt,
  variant = 'card',
  overlayBadgePosition = 'top-left',
}) => {
  const item: EvidenceItem | undefined = getEvidenceItem(code);
  const { openEvidence } = useEvidenceLightbox();
  const [hasError, setHasError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  React.useEffect(() => {
    setHasError(false);
    setUseFallback(false);
  }, [code, item?.filename]);

  if (!item) {
    return (
      <div className={`p-4 bg-stone-100 border border-stone-200 rounded text-xs text-stone-500 font-mono ${className}`}>
        [Evidence item not found: {code}]
      </div>
    );
  }

  const effectiveCaption = caption || item.caption;
  const effectiveAlt = alt || effectiveCaption;
  const primaryUrl = getEvidenceUrl(item.code) || getEvidenceUrl(item.filename);
  const fallbackUrl = `${import.meta.env.BASE_URL}images/${item.filename}`;
  const currentSrc = useFallback ? fallbackUrl : primaryUrl;

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'EVENT':
        return 'bg-indigo-900/90 text-indigo-50 border-indigo-700/50';
      case 'SEMINAR':
        return 'bg-[#784A29]/90 text-amber-50 border-amber-800/50';
      case 'FIELD':
      default:
        return 'bg-[#164E37]/90 text-emerald-50 border-emerald-800/50';
    }
  };

  const badgeStyle = getBadgeStyle(item.type);

  const badgePositionClass = {
    'top-left': 'top-2.5 left-2.5',
    'top-right': 'top-2.5 right-2.5',
    'bottom-left': 'bottom-2.5 left-2.5',
  }[overlayBadgePosition];

  const handleClick = () => {
    if (interactive) {
      openEvidence(item);
    }
  };

  const handleImageError = () => {
    if (!useFallback) {
      setUseFallback(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <figure
      className={`group ${interactive ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Image frame */}
      <div
        className={`relative overflow-hidden rounded-lg bg-stone-100 border border-stone-200/90 ${aspectRatio} ${
          variant === 'hero' ? 'shadow-md border-stone-300' : 'shadow-2xs'
        }`}
      >
        {!hasError ? (
          <img
            src={currentSrc}
            alt={effectiveAlt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className={`w-full h-full object-cover object-center transition-transform duration-500 ${
              interactive ? 'group-hover:scale-102' : ''
            } ${imgClassName}`}
          />
        ) : (
          /* Neutral Placeholder when image is pending */
          <div className="w-full h-full bg-[#F4F3EE] flex flex-col items-center justify-center p-4 sm:p-6 text-center text-stone-600 select-none">
            <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300/80 flex items-center justify-center text-stone-500 mb-2">
              <ImageIcon className="w-5 h-5 stroke-1" />
            </div>
            <span className="font-mono text-xs font-semibold text-stone-800">
              Field evidence image pending.
            </span>
            <span className="font-mono text-[10px] text-stone-500 mt-0.5">
              {item.filename}
            </span>
          </div>
        )}

        {/* Evidence Code & Category Badge */}
        {showBadge && (
          <div className={`absolute ${badgePositionClass} z-10 pointer-events-none`}>
            <span
              className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-xs border shadow-2xs ${badgeStyle}`}
            >
              {item.label}
            </span>
          </div>
        )}

        {/* Filename watermark pill on image */}
        <div className="absolute bottom-2 right-2 z-10 pointer-events-none">
          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-white/90 backdrop-blur-xs font-medium">
            {item.filename}
          </span>
        </div>

        {/* Hover zoom affordance */}
        {interactive && (
          <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white/95 text-stone-900 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm font-sans">
              <ZoomIn className="w-3.5 h-3.5 text-[#164E37]" />
              Xem bằng chứng
            </span>
          </div>
        )}
      </div>

      {/* Caption & Date under image */}
      {showCaption && (
        <figcaption className="mt-2.5 space-y-1">
          <div className="flex items-start justify-between gap-2 text-xs font-sans text-stone-600">
            <p className="font-medium text-stone-800 leading-snug">
              {effectiveCaption}
            </p>
            {showDate && (
              <span className="font-mono text-[11px] text-stone-400 shrink-0">
                19.09.2026
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>Tệp: {item.filename}</span>
          </div>
        </figcaption>
      )}
    </figure>
  );
};
