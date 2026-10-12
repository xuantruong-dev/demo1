import React from 'react';
import { REFLECTION_PHASES, SO_WHAT_INSIGHT } from '../data/fieldStudyData';
import { BrainCircuit, Quote, Users, Camera } from 'lucide-react';
import { EvidenceImage } from './EvidenceImage';

export const ReflectionSection: React.FC = () => {
  return (
    <section id="reflection" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold flex items-center gap-1.5 font-mono">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Chuyển hóa nhận thức học thuật (Before – Field – After)</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            14. What Changed in My Thinking?
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Hành trình kiến tập tại Detrang Farm đã định hình lại căn bản lăng kính quan sát kinh tế của người học — từ lối nhìn tĩnh tại về sản xuất hàng hóa sang tư duy động về chuỗi giá trị và tổ chức nguồn lực.
          </p>
        </div>

        {/* 3 Columns: Before / Field / After */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REFLECTION_PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#164E37]/60 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                  <span className="font-mono text-xs font-bold text-[#164E37] tracking-wider">
                    {phase.phase}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    {phase.tag}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-stone-900 leading-tight">
                  {phase.title}
                </h3>

                <p className="text-sm font-medium text-stone-850 leading-relaxed font-sans">
                  {phase.statement}
                </p>

                <div className="bg-[#FAF9F5] p-3.5 rounded text-xs text-stone-600 italic leading-relaxed">
                  {phase.quote}
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
                Giai đoạn nhận thức 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Real Photographic Evidence: SK01 + Optional Supporting TT10 */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#164E37]">
              <Users className="w-4 h-4" />
              <span>Tư liệu hình ảnh thực tế — Đoàn sinh viên & Không gian thực địa</span>
            </div>
            <span className="text-xs text-stone-400 font-mono">19.09.2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Primary: SK01 (Đoàn sinh viên kiến tập) */}
            <div className="md:col-span-7 space-y-2">
              <EvidenceImage
                code="SK01"
                aspectRatio="aspect-16/10"
                caption="SK01 — Đoàn sinh viên Khoa Kinh tế Chính trị tại Detrang Farm, 19/09/2026."
                showDate={true}
              />
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Đoàn sinh viên và giảng viên Khoa Kinh tế Chính trị (UEB – VNU) trong chuyến kiến tập thực địa tại Ba Vì, ghi nhận trải nghiệm chuyển hóa nhận thức thực tế.
              </p>
            </div>

            {/* Optional Supporting: TT10 (Nhà Detrang Farm) */}
            <div className="md:col-span-5 space-y-2">
              <EvidenceImage
                code="TT10"
                aspectRatio="aspect-16/10"
                caption="TT10 — Nhà Detrang Farm và khu đón tiếp trung tâm, 19/09/2026."
                showDate={true}
              />
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Không gian trung tâm đón tiếp và trao đổi học thuật tại Detrang Farm — nơi diễn ra các phiên thảo luận và tổng kết nhận thức.
              </p>
            </div>
          </div>
        </div>

        {/* The "SO WHAT?" Methodology Landmark Card */}
        <div className="bg-[#164E37] text-white rounded-xl p-8 sm:p-10 shadow-md relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-emerald-200 text-xs font-mono tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              <span>{SO_WHAT_INSIGHT.title}</span>
            </div>

            <blockquote className="font-editorial text-2xl sm:text-3xl font-medium leading-relaxed text-stone-100">
              “{SO_WHAT_INSIGHT.statement}”
            </blockquote>

            <div className="pt-2 text-xs text-emerald-200/80 font-mono">
              — {SO_WHAT_INSIGHT.author}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
