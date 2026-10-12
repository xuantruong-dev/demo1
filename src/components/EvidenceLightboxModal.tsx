import React, { useState, useEffect } from 'react';
import { useEvidenceLightbox } from '../context/EvidenceLightboxContext';
import { getEvidenceUrl } from '../data/evidenceRegistry';
import { X, MapPin, Calendar, Tag, FileText, ExternalLink, Image as ImageIcon } from 'lucide-react';

export const EvidenceLightboxModal: React.FC = () => {
  const { activeEvidence, isOpen, closeEvidence } = useEvidenceLightbox();
  const [imageError, setImageError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    setImageError(false);
    setUseFallback(false);
  }, [activeEvidence]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeEvidence();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeEvidence]);

  if (!isOpen || !activeEvidence) return null;

  const currentSrc = useFallback
    ? `${import.meta.env.BASE_URL}images/${activeEvidence.filename}`
    : getEvidenceUrl(activeEvidence.code) || getEvidenceUrl(activeEvidence.filename);

  const handleImageError = () => {
    if (!useFallback) {
      setUseFallback(true);
    } else {
      setImageError(true);
    }
  };

  const getCategoryTheme = (type: string) => {
    switch (type) {
      case 'EVENT':
        return {
          badge: 'bg-indigo-900 text-indigo-100 border border-indigo-700/50',
          accent: 'text-indigo-800',
          label: 'EVENT EVIDENCE (SK)',
        };
      case 'SEMINAR':
        return {
          badge: 'bg-[#784A29] text-amber-50 border border-amber-900/40',
          accent: 'text-[#784A29]',
          label: 'SEMINAR EVIDENCE (TD)',
        };
      case 'FIELD':
      default:
        return {
          badge: 'bg-[#164E37] text-emerald-50 border border-emerald-900/40',
          accent: 'text-[#164E37]',
          label: 'FIELD EVIDENCE (TT)',
        };
    }
  };

  const theme = getCategoryTheme(activeEvidence.type);

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      onClick={closeEvidence}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-300 animate-in fade-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-[#FBFBF7]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded shadow-2xs ${theme.badge}`}>
              {activeEvidence.label}
            </span>
            <h3 className="font-editorial text-lg sm:text-xl font-bold text-stone-900 leading-tight">
              {activeEvidence.title}
            </h3>
          </div>
          <button
            onClick={closeEvidence}
            className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Đóng cửa sổ bằng chứng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Asset Area */}
        <div className="relative bg-[#1A1E1A] min-h-[260px] sm:min-h-[360px] max-h-[58vh] flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <img
              src={currentSrc}
              alt={activeEvidence.caption}
              className="w-full h-full max-h-[58vh] object-contain"
              onError={handleImageError}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="p-8 text-center flex flex-col items-center justify-center text-stone-300 space-y-3 max-w-md my-8">
              <div className="w-14 h-14 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400">
                <ImageIcon className="w-7 h-7 stroke-1" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-sm font-semibold text-stone-200">
                  Field evidence image pending.
                </div>
                <div className="text-xs font-mono text-stone-400">
                  Tập tin đích: /public/images/{activeEvidence.filename}
                </div>
              </div>
              <p className="text-xs text-stone-400 font-sans italic pt-1">
                “{activeEvidence.caption}”
              </p>
            </div>
          )}

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-2 left-2 bg-stone-900/80 backdrop-blur-xs text-stone-200 px-2.5 py-1 rounded text-[11px] font-mono border border-stone-700/60">
            {activeEvidence.filename}
          </div>
        </div>

        {/* Academic Notes & Metadata */}
        <div className="p-5 sm:p-6 space-y-4 bg-white">
          {/* Metadata Chips */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-stone-500 border-b border-stone-100 pb-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#164E37]" />
              <strong className="text-stone-700">Địa điểm:</strong> {activeEvidence.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#784A29]" />
              <strong className="text-stone-700">Thời gian:</strong> {activeEvidence.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-stone-600" />
              <strong className="text-stone-700">Phân loại:</strong> {theme.label}
            </span>
          </div>

          {/* Caption & Description */}
          <div className="space-y-3 font-sans">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-stone-400 mb-1">
                Chú thích học thuật chuẩn (Standard Caption):
              </div>
              <p className="text-sm font-medium text-stone-900 leading-relaxed font-body">
                {activeEvidence.caption}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {activeEvidence.description}
            </p>

            {/* Academic Analysis Callout */}
            <div className="bg-[#FAF9F5] border-l-3 border-[#164E37] p-3.5 rounded-r text-xs sm:text-sm space-y-1">
              <div className="font-semibold text-[#164E37] uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Ý nghĩa phương pháp & Ghi chú thực nghiệm:</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                {activeEvidence.academicNotes}
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
            <span className="text-[11px] font-mono text-stone-400">
              Mã hồ sơ: {activeEvidence.code} · Ngày khảo sát: 19/09/2026
            </span>
            <button
              onClick={closeEvidence}
              className="px-4 py-2 text-xs font-semibold bg-[#164E37] hover:bg-[#0F3827] text-white rounded-md transition-colors cursor-pointer"
            >
              Đóng cửa sổ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
