import React, { useState } from 'react';
import { TRIANGULATION_CASES } from '../data/fieldStudyData';
import { GitMerge, MessageSquare, Camera, CheckSquare2, Award, BarChart2 } from 'lucide-react';
import { EvidenceImage } from './EvidenceImage';

export const EvidenceTriangulationSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState(TRIANGULATION_CASES[0].id);
  const activeCase = TRIANGULATION_CASES.find((c) => c.id === activeCaseId) || TRIANGULATION_CASES[0];

  return (
    <section id="evidence-triangulation" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold flex items-center gap-1.5 font-mono">
            <GitMerge className="w-3.5 h-3.5" />
            <span>Phương pháp tam giác hóa bằng chứng (Triangulation)</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            10. Three Sources. One Insight.
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Sức nặng học thuật của báo cáo đến từ việc đối chiếu chéo (Triangulation) giữa 3 nguồn dữ liệu độc lập: <span className="font-semibold text-stone-950">Doanh nghiệp trình bày (TD)</span>, <span className="font-semibold text-stone-950">Thực địa ghi nhận (TT)</span> và <span className="font-semibold text-stone-950">Sinh viên phản hồi (KS)</span>.
          </p>
        </div>

        {/* Case Switcher */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-3">
          {TRIANGULATION_CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCaseId(item.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${
                activeCaseId === item.id
                  ? 'bg-[#164E37] text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200/80'
              }`}
            >
              {item.caseName}
            </button>
          ))}
        </div>

        {/* 3-Column Triangulation Display */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase text-stone-500 tracking-wider">
            Chủ đề đối chiếu: <strong className="text-stone-900 font-sans normal-case text-sm font-semibold">{activeCase.topic}</strong>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Column 1: WHAT THE BUSINESS SAID (TD04) */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-2 text-[#784A29] text-xs font-semibold uppercase tracking-wider font-mono">
                    <MessageSquare className="w-4 h-4" />
                    <span>01. Doanh nghiệp nói (TD)</span>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 bg-amber-50 text-[#784A29] border border-amber-200 rounded font-bold">
                    TD04
                  </span>
                </div>

                {/* TD04 Seminar Evidence Image */}
                <EvidenceImage
                  code="TD04"
                  aspectRatio="aspect-16/10"
                  caption="TD04 — Slide tọa đàm: vật nuôi và định hướng giáo dục trải nghiệm."
                  showCaption={false}
                />

                <blockquote className="font-editorial text-base text-stone-900 italic font-medium leading-snug">
                  {activeCase.businessSaid.quote}
                </blockquote>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-600 font-sans">
                <strong className="text-stone-800">Hàm ý:</strong> {activeCase.businessSaid.implication}
              </div>
            </div>

            {/* Column 2: WHAT WAS OBSERVED (TT05) */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-2 text-[#164E37] text-xs font-semibold uppercase tracking-wider font-mono">
                    <Camera className="w-4 h-4" />
                    <span>02. Thực địa ghi nhận (TT)</span>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 bg-emerald-50 text-[#164E37] border border-emerald-200 rounded font-bold">
                    TT05
                  </span>
                </div>
                
                {/* TT05 Field Evidence Image */}
                <EvidenceImage
                  code="TT05"
                  aspectRatio="aspect-16/10"
                  caption="TT05 — Khu vực vật nuôi tại Detrang Farm, 19/09/2026."
                  showCaption={false}
                />

                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {activeCase.observed.fact}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[11px] font-mono text-stone-500">
                Ghi nhận thực tế: {activeCase.observed.source}
              </div>
            </div>

            {/* Column 3: WHAT STUDENTS REPORTED (KS Survey / Chart) */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-2 text-blue-700 text-xs font-semibold uppercase tracking-wider font-mono">
                    <CheckSquare2 className="w-4 h-4" />
                    <span>03. Sinh viên phản hồi (KS)</span>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded font-bold">
                    KS n=72
                  </span>
                </div>

                {/* Survey Chart / Metric Card */}
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                    <span className="flex items-center gap-1 font-semibold text-stone-700">
                      <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
                      Chỉ số định lượng:
                    </span>
                    <span className="text-blue-700 font-bold">{activeCase.studentsReported.metric}</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92.6%' }} />
                  </div>
                  <div className="text-[11px] text-stone-500 font-mono text-right">Độ đồng thuận cao: 92.6%</div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {activeCase.studentsReported.dataPoint}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 italic">
                Dữ liệu sơ cấp đã được xử lý và kiểm định độ tin cậy.
              </div>
            </div>

          </div>

          {/* Unified Analytical Conclusion Banner */}
          <div className="bg-[#FAF9F5] border border-stone-300 rounded-xl p-6 sm:p-8 space-y-3 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164E37] font-mono">
              <Award className="w-4 h-4" />
              <span>Kết luận phân tích đối sánh (Analytical Conclusion)</span>
            </div>

            <p className="font-editorial text-xl sm:text-2xl text-stone-900 font-bold leading-relaxed">
              “Nguồn lực vật nuôi không chỉ mang chức năng nông nghiệp mà còn trở thành nội dung giáo dục và trải nghiệm.”
            </p>

            <div className="pt-3 border-t border-stone-200/80 text-xs sm:text-sm text-stone-600 font-sans">
              <strong className="text-stone-900">Góc nhìn Kinh tế chính trị:</strong> {activeCase.politicalEconomyTakeaway}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
