import React from 'react';
import { LIVESTOCK_CASE_LAYERS } from '../data/fieldStudyData';
import { Layers, ShieldCheck, HeartHandshake, Sprout, FileCheck } from 'lucide-react';
import { EvidenceImage } from './EvidenceImage';

export const OneResourceSection: React.FC = () => {
  const layerIcons = [
    <Sprout className="w-5 h-5 text-emerald-700" key="1" />,
    <ShieldCheck className="w-5 h-5 text-blue-700" key="2" />,
    <HeartHandshake className="w-5 h-5 text-amber-700" key="3" />,
  ];

  return (
    <section id="one-resource" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Phân tích tầng sâu thực nghiệm</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            04. One Resource – Three Layers of Value
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Minh họa Tam giác N–G–T bằng một trường hợp thực tế điển hình: <strong className="text-stone-950 font-semibold">Đàn vật nuôi (Dê sữa & Đà điểu)</strong>. Cùng một nguồn lực sinh học nhưng đồng thời kiến tạo 3 lớp giá trị kinh tế – giáo dục – cảm xúc.
          </p>
        </div>

        {/* Central Visual + 3 Layer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5/12): Real Livestock Visual (TT05) + Supporting Seminar Evidence (TD04) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary Field Evidence: TT05 */}
            <div className="space-y-2">
              <EvidenceImage
                code="TT05"
                aspectRatio="aspect-4/3"
                caption="TT05 — Khu vực vật nuôi tại Detrang Farm, 19/09/2026."
                showDate={true}
              />
            </div>

            {/* Supporting Seminar Evidence: TD04 */}
            <div className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200/90 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#784A29] uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  Bằng chứng tọa đàm đối chiếu
                </span>
                <span className="text-[#784A29] font-semibold">TD04</span>
              </div>

              <EvidenceImage
                code="TD04"
                aspectRatio="aspect-16/10"
                caption="TD04 — Slide tọa đàm: vật nuôi và định hướng giáo dục trải nghiệm."
                showCaption={true}
              />

              <p className="text-xs text-stone-600 italic font-sans leading-relaxed">
                “Tọa đàm chỉ rõ: Đàn vật nuôi không dừng lại ở sản xuất nông nghiệp thuần túy mà là chủ thể tương tác để học sinh tiếp thu tri thức sinh học và an toàn sinh học.”
              </p>
            </div>
          </div>

          {/* Right Column (7/12): 3 Analytical Cards (AGRICULTURE, EDUCATION, EXPERIENCE) */}
          <div className="lg:col-span-7 space-y-4">
            {LIVESTOCK_CASE_LAYERS.map((layer, index) => (
              <div
                key={layer.layer}
                className="bg-white border border-stone-200 rounded-lg p-5 sm:p-6 hover:shadow-xs transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-stone-50 border border-stone-200">
                      {layerIcons[index]}
                    </div>
                    <div>
                      <h3 className="font-editorial text-lg sm:text-xl font-bold text-stone-900">
                        {layer.title}
                      </h3>
                      <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                        {layer.layer === 'agriculture' ? 'AGRICULTURE' : layer.layer === 'education' ? 'EDUCATION' : 'EXPERIENCE'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-600 font-medium">
                    {layer.evidenceCode}
                  </span>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  {layer.description}
                </p>

                <div className="bg-[#FAF9F5] p-3 rounded text-xs space-y-1">
                  <div className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider font-mono">
                    Cơ chế chuyển hóa:
                  </div>
                  <div className="text-stone-600">
                    {layer.mechanism}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-stone-400 text-[11px] font-mono mr-1">Đầu ra thặng dư:</span>
                  {layer.outcomes.map((out, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-stone-100 text-stone-700 rounded text-[11px]"
                    >
                      {out}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
