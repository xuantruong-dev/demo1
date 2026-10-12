import React from 'react';
import { CONSULTING_RECOMMENDATIONS } from '../data/fieldStudyData';
import { Lightbulb, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export const ConsultingNotesSection: React.FC = () => {
  return (
    <section id="consulting-notes" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Vũ khí số 7 — Khuyến nghị tư vấn học thuật</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            13. From Insight to Improvement
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Chuyển hóa dữ liệu khảo sát và quan sát thực địa thành <strong className="text-stone-950 font-semibold">3 giải pháp tư vấn khả thi</strong> dành cho Ban Giám đốc Detrang Farm nhằm tối ưu hóa giá trị trải nghiệm và hiệu quả giáo dục.
          </p>
        </div>

        {/* 3 Consulting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONSULTING_RECOMMENDATIONS.map((rec) => (
            <div
              key={rec.id}
              className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs hover:border-[#164E37] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header: Number & Title */}
                <div className="flex items-start justify-between border-b border-stone-100 pb-3">
                  <div className="space-y-1">
                    <span className="font-mono text-sm font-bold text-[#164E37]">
                      {rec.number}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-stone-900 leading-tight">
                      {rec.title}
                    </h3>
                  </div>
                </div>

                {/* Evidence Basis */}
                <div className="bg-[#FAF9F5] border-l-2 border-[#784A29] p-3 rounded-r text-xs">
                  <span className="font-semibold text-[#784A29] uppercase tracking-wider block text-[10px] mb-0.5">
                    Căn cứ bằng chứng:
                  </span>
                  <span className="text-stone-700 italic">
                    {rec.evidenceBasis}
                  </span>
                </div>

                {/* Recommendation Statement */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 font-sans">
                    Đề xuất can thiệp:
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                    {rec.recommendation}
                  </p>
                </div>

                {/* Implementation Steps */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-mono uppercase text-stone-400">
                    Kế hoạch triển khai:
                  </div>
                  <ul className="space-y-1 text-xs text-stone-600">
                    {rec.implementation.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#164E37] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Expected Effect Bottom Box */}
              <div className="bg-[#F4F3EC] p-3 rounded-lg text-xs space-y-1 mt-2">
                <div className="font-semibold text-[#164E37] text-[10px] uppercase tracking-wider flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>Hiệu quả kỳ vọng (Expected Effect):</span>
                </div>
                <div className="text-stone-800 font-medium font-sans">
                  {rec.expectedEffect}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
