import React from 'react';
import { POLITICAL_ECONOMY_LENSES } from '../data/fieldStudyData';
import { Landmark, Scale, Network, BookOpen } from 'lucide-react';

export const PoliticalEconomySection: React.FC = () => {
  const icons = [
    <Scale className="w-5 h-5 text-[#164E37]" key="1" />,
    <Landmark className="w-5 h-5 text-[#784A29]" key="2" />,
    <Network className="w-5 h-5 text-blue-800" key="3" />,
  ];

  return (
    <section id="political-economy" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Đặc trưng chuyên ngành</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            11. A Political Economy Perspective
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Nền tảng phân tích kinh tế chính trị giúp bài báo cáo vượt ra khỏi cách tiếp cận tiếp thị hay du lịch thông thường, đi sâu vào bản chất của <strong className="text-stone-950 font-semibold">phân bổ nguồn lực</strong>, <strong className="text-stone-950 font-semibold">hình thái giá trị</strong> và <strong className="text-stone-950 font-semibold">quan hệ lợi ích</strong>.
          </p>
        </div>

        {/* 3 Academic Theory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POLITICAL_ECONOMY_LENSES.map((lens, idx) => (
            <div
              key={lens.title}
              className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs hover:border-[#164E37]/60 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header with Icon */}
                <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
                  <div className="p-2 rounded bg-stone-50 border border-stone-200">
                    {icons[idx]}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-stone-400">
                      Khung lý thuyết 0{idx + 1}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-stone-900 leading-tight">
                      {lens.title}
                    </h3>
                    <div className="text-xs font-mono text-stone-500 mt-0.5">{lens.engTitle}</div>
                  </div>
                </div>

                {/* Core Thesis */}
                <div className="bg-[#FAF9F5] border-l-2 border-[#164E37] p-3 rounded-r">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                    Luận điểm cốt lõi:
                  </div>
                  <div className="font-editorial text-sm font-bold text-stone-900 mt-0.5">
                    {lens.coreThesis}
                  </div>
                </div>

                {/* Analysis Body */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {lens.analysis}
                </p>

              </div>

              {/* Keywords Tag List */}
              <div className="pt-3 border-t border-stone-100 space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-stone-400">
                  Phạm trù nghiên cứu:
                </div>
                <div className="flex flex-wrap gap-1">
                  {lens.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 bg-stone-100 text-stone-700 rounded font-sans"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
