import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/fieldStudyData';
import { useEvidenceLightbox } from '../context/EvidenceLightboxContext';
import { EvidenceImage } from './EvidenceImage';
import { Image as ImageIcon, Filter, Calendar, Tag } from 'lucide-react';

export const EvidenceGallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'EVENT' | 'SEMINAR' | 'FIELD'>('ALL');
  const { openEvidence } = useEvidenceLightbox();

  const filteredItems = selectedFilter === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const counts = {
    ALL: GALLERY_ITEMS.length,
    EVENT: GALLERY_ITEMS.filter((i) => i.category === 'EVENT').length,
    SEMINAR: GALLERY_ITEMS.filter((i) => i.category === 'SEMINAR').length,
    FIELD: GALLERY_ITEMS.filter((i) => i.category === 'FIELD').length,
  };

  const getSourceTypeName = (category: string) => {
    switch (category) {
      case 'EVENT':
        return 'EVENT EVIDENCE (SK)';
      case 'SEMINAR':
        return 'SEMINAR EVIDENCE (TD)';
      case 'FIELD':
      default:
        return 'FIELD EVIDENCE (TT)';
    }
  };

  return (
    <section id="evidence-gallery" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5 font-mono">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Kho tư liệu thực chứng học thuật (18 Bằng chứng)</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              15. Field Evidence Gallery
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
              Toàn bộ hồ sơ tài liệu và hình ảnh được quy chuẩn theo hệ thống mã hóa bằng chứng độc quyền của đề tài:
            </p>
            
            {/* Standardized Coding System Explanation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono pt-1">
              <div className="p-2.5 rounded bg-indigo-50 border border-indigo-200/80 text-indigo-950">
                <span className="font-bold text-indigo-700">SK = Event Evidence</span>
                <p className="text-[11px] text-indigo-900/80 font-sans mt-0.5">Bằng chứng sự kiện thực tế của đoàn sinh viên (SK01).</p>
              </div>
              <div className="p-2.5 rounded bg-amber-50 border border-amber-200/80 text-amber-950">
                <span className="font-bold text-[#784A29]">TD = Seminar Evidence</span>
                <p className="text-[11px] text-amber-900/80 font-sans mt-0.5">Bằng chứng tọa đàm & slide dữ liệu từ Ban Quản lý (TD01–TD07).</p>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200/80 text-emerald-950">
                <span className="font-bold text-[#164E37]">TT = Field Evidence</span>
                <p className="text-[11px] text-emerald-900/80 font-sans mt-0.5">Bằng chứng quan sát hiện trường & hoạt động trải nghiệm (TT01–TT10).</p>
              </div>
            </div>

            <div className="text-[11px] text-stone-500 font-mono italic">
              * Hệ thống mã hóa bằng chứng này được sử dụng nhất quán xuyên suốt giữa bản báo cáo giấy và Digital Companion.
            </div>
          </div>

          {/* Gallery Filters: ALL, EVENT, SEMINAR, FIELD */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 self-start md:self-auto shrink-0">
            <button
              onClick={() => setSelectedFilter('ALL')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                selectedFilter === 'ALL'
                  ? 'bg-white text-stone-900 shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              TẤT CẢ ({counts.ALL})
            </button>
            <button
              onClick={() => setSelectedFilter('EVENT')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                selectedFilter === 'EVENT'
                  ? 'bg-white text-indigo-900 shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EVENT · SK ({counts.EVENT})
            </button>
            <button
              onClick={() => setSelectedFilter('SEMINAR')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                selectedFilter === 'SEMINAR'
                  ? 'bg-white text-[#784A29] shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              SEMINAR · TD ({counts.SEMINAR})
            </button>
            <button
              onClick={() => setSelectedFilter('FIELD')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                selectedFilter === 'FIELD'
                  ? 'bg-white text-[#164E37] shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              FIELD · TT ({counts.FIELD})
            </button>
          </div>
        </div>

        {/* Gallery Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-md hover:border-[#164E37]/60 transition-all flex flex-col justify-between p-4 space-y-4"
            >
              {/* Evidence Photo Frame using EvidenceImage */}
              <div className="space-y-3">
                <EvidenceImage
                  code={item.code}
                  aspectRatio="aspect-16/10"
                  caption={item.caption}
                  showCaption={false}
                  showBadge={true}
                  interactive={true}
                />

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-stone-900">{item.code}</span>
                    <span className="text-stone-500 font-medium">
                      {getSourceTypeName(item.category)}
                    </span>
                  </div>

                  <h3 className="font-editorial text-base font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card Footer: Date & Source Type */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-stone-400" />
                  19/09/2026
                </span>
                <button
                  onClick={() => openEvidence(item.code)}
                  className="text-[#164E37] hover:underline font-semibold cursor-pointer"
                >
                  Phóng to & Chi tiết →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
