import React, { useState } from 'react';
import { CUSTOMER_JOURNEY_STEPS } from '../data/fieldStudyData';
import { Route, AlertTriangle, CheckCircle, Star, MapPin, Eye } from 'lucide-react';
import { EvidenceImage } from './EvidenceImage';

export const CustomerJourneySection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState(CUSTOMER_JOURNEY_STEPS[2].id); // default to Learn
  const activeStep = CUSTOMER_JOURNEY_STEPS.find((s) => s.id === activeStepId) || CUSTOMER_JOURNEY_STEPS[0];

  return (
    <section id="visitor-journey" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= PART 1: VISITOR JOURNEY ================= */}
        <div className="space-y-8 sm:space-y-10">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5">
              <Route className="w-3.5 h-3.5" />
              <span>Vũ khí số 6 — Chuỗi điểm chạm trải nghiệm</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              08. The Visitor Journey
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
              Hành trình thực tế của khách tham quan và đoàn nghiên cứu gồm <strong className="text-stone-950 font-semibold">7 trạm tuần tự</strong>: Discover → Arrive → Learn → Observe → Experience → Reflect → Share.
            </p>
          </div>

          {/* Horizontal Journey Stepper Track */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 bg-stone-100/70 p-2 rounded-xl border border-stone-200">
              {CUSTOMER_JOURNEY_STEPS.map((step) => {
                const isSelected = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`p-3 rounded-lg text-left transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-white shadow-xs border border-stone-300 text-stone-900'
                        : 'hover:bg-white/50 text-stone-600'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className={isSelected ? 'text-[#164E37] font-bold' : 'text-stone-400'}>
                        0{step.order}
                      </span>
                      <span className="flex items-center gap-0.5 text-stone-500 font-mono text-[10px]">
                        <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" />
                        {step.surveyRating}
                      </span>
                    </div>
                    <div className="font-editorial font-bold text-sm truncate">
                      {step.stage}
                    </div>
                    <div className="text-[11px] text-stone-500 truncate font-sans">
                      {step.touchpoint}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Touchpoint Detail Analysis (Value vs. Friction) */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-stone-400 tracking-wider">
                    Điểm chạm 0{activeStep.order} · Giai đoạn {activeStep.stage}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                    {activeStep.touchpoint}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded text-xs font-mono text-stone-700">
                    <span>Mức độ hài lòng:</span>
                    <strong className="text-[#164E37]">{activeStep.surveyRating} / 5.0</strong>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 bg-stone-50 border border-stone-200 rounded text-stone-600">
                    Nguồn: {activeStep.evidenceLink}
                  </span>
                </div>
              </div>

              {/* Value Created vs Potential Friction Dual Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                
                {/* Positive: Value Created */}
                <div className="bg-[#FAF9F5] border border-stone-200/80 rounded-lg p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164E37]">
                    <CheckCircle className="w-4 h-4 text-[#164E37]" />
                    <span>Giá trị tạo lập (Value Created)</span>
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed font-sans">
                    {activeStep.valueCreated}
                  </p>
                  <div className="text-[11px] text-stone-500 font-mono pt-1">
                    ✓ Thúc đẩy tích cực cảm nhận và nhận thức học thuật của người học.
                  </div>
                </div>

                {/* Friction: Potential Bottleneck */}
                <div className="bg-[#FFFDFB] border border-amber-200/80 rounded-lg p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#784A29]">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Điểm nghẽn tiềm ẩn (Potential Friction)</span>
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed font-sans">
                    {activeStep.potentialFriction}
                  </p>
                  <div className="text-[11px] text-stone-500 font-mono pt-1">
                    ⚠ Dữ liệu phản ánh từ tập dữ liệu khảo sát phân tích n=72 (từ 85 phản hồi tiếp nhận).
                  </div>
                </div>

              </div>
            </div>

            {/* Farm Tour Real Field Evidence Showcase (TT02 primary, TT08 secondary, TT03 optional) */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#164E37]">
                  <Eye className="w-4 h-4" />
                  <span>Bằng chứng thực địa hành trình Farm Tour (TT02 · TT08 · TT03)</span>
                </div>
                <span className="text-xs text-stone-400 font-mono">19.09.2026</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Primary: TT02 (Toàn cảnh khu chăn thả) */}
                <div className="md:col-span-6 space-y-2">
                  <EvidenceImage
                    code="TT02"
                    aspectRatio="aspect-16/10"
                    caption="TT02 — Toàn cảnh khu chăn thả và không gian sinh thái Ba Vì, 19/09/2026."
                    showDate={true}
                  />
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Toàn cảnh không gian sinh thái mở — điểm đến trung tâm trong hành trình Arrive → Observe của du khách.
                  </p>
                </div>

                {/* Secondary: TT08 (Cổng khu chăn thả) */}
                <div className="md:col-span-3 space-y-2">
                  <EvidenceImage
                    code="TT08"
                    aspectRatio="aspect-4/3"
                    caption="TT08 — Cổng vào khu chăn thả và không gian sinh thái trải nghiệm, 19/09/2026."
                    showDate={false}
                  />
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Cổng phân định ranh giới giữa khu đón tiếp và khu chăn thả sinh thái mở.
                  </p>
                </div>

                {/* Optional: TT03 (Khu chăn thả và chuồng trại) */}
                <div className="md:col-span-3 space-y-2">
                  <EvidenceImage
                    code="TT03"
                    aspectRatio="aspect-4/3"
                    caption="TT03 — Khu chăn thả và quy hoạch chuồng trại an toàn sinh học, 19/09/2026."
                    showDate={false}
                  />
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Quy hoạch chuồng trại kết hợp bãi chăn thả bán tự nhiên, trạm dừng Learn & Observe.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= PART 2: AGRICULTURAL SPACE & PHYSICAL EVIDENCE (TT01, TT03, TT09) ================= */}
        <div className="space-y-6 pt-8 border-t border-stone-200/80">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold flex items-center gap-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5" />
              <span>Không gian sản xuất & Bằng chứng vật chất</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
              Agricultural Space & Physical Evidence
            </h3>
            <p className="text-stone-700 text-sm sm:text-base font-body leading-relaxed">
              Minh họa có chọn lọc không gian sản xuất thực tế, cảnh quan sinh thái và nhận diện địa điểm tại Ba Vì dưới góc nhìn kinh tế – không gian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TT01: Đàn cừu khu chăn thả */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3">
              <EvidenceImage
                code="TT01"
                aspectRatio="aspect-4/3"
                caption="TT01 — Đàn cừu tại khu chăn thả tự nhiên Detrang Farm, 19/09/2026."
                showDate={true}
              />
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Đàn cừu gặm cỏ trên đồi sinh thái Ba Vì: không gian sản xuất đồng thời là cảnh quan trải nghiệm mở.
              </p>
            </div>

            {/* TT03: Chuồng trại & Chăn thả an toàn */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3">
              <EvidenceImage
                code="TT03"
                aspectRatio="aspect-4/3"
                caption="TT03 — Khu chăn thả và quy hoạch chuồng trại an toàn sinh học, 19/09/2026."
                showDate={true}
              />
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Hạ tầng chuồng trại sàn gỗ thông thoáng đảm bảo an toàn dịch bệnh trong điều kiện tiếp khách tham quan thường xuyên.
              </p>
            </div>

            {/* TT09: Nhận diện Ba Vì Detrang */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3">
              <EvidenceImage
                code="TT09"
                aspectRatio="aspect-4/3"
                caption="TT09 — Biển hiệu nhận diện và chỉ dẫn không gian Detrang Farm Ba Vì, 19/09/2026."
                showDate={true}
              />
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Hệ thống biển hiệu nhận diện và định vị nông trại giáo dục tại vùng vành đai sinh thái Ba Vì.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
