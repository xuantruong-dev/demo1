import React, { useState } from 'react';
import { FIELD_STUDY_METADATA, STUDY_TIMELINE } from '../data/fieldStudyData';
import { MapPin, Calendar, Users, Microscope, ChevronRight, FileCheck, Info, ArrowRight } from 'lucide-react';
import { EvidenceImage } from './EvidenceImage';

export const FieldStudySection: React.FC = () => {
  // Default to SEMINAR stage (index 3)
  const [activeStepId, setActiveStepId] = useState<string>(STUDY_TIMELINE[3]?.id || STUDY_TIMELINE[0].id);
  const activeStep = STUDY_TIMELINE.find((t) => t.id === activeStepId) || STUDY_TIMELINE[0];

  // Visual stages order requested by the official specification
  const visualStages = [
    { code: 'ASSEMBLY', label: 'Tập trung', time: '05:40', id: 'tl-1' },
    { code: 'DEPARTURE', label: 'Khởi hành', time: '05:50', id: 'tl-2' },
    { code: 'CHECK-IN', label: 'Check-in', time: '07:30', id: 'tl-3' },
    { code: 'SEMINAR', label: 'Tọa đàm', time: '08:00–10:30', id: 'tl-4' },
    { code: 'FARM TOUR', label: 'Farm Tour', time: '10:30–11:30', id: 'tl-5' },
    { code: 'LUNCH', label: 'Ăn trưa', time: '12:00–13:30', id: 'tl-6' },
    { code: 'REST', label: 'Nghỉ trưa', time: '13:00–14:30', id: 'tl-7' },
    { code: 'EXPERIENCE', label: 'Trải nghiệm', time: '14:30–17:00', id: 'tl-8' },
    { code: 'RETURN', label: 'Trở về', time: '17:00 (Exp)', id: 'tl-9' },
  ];

  return (
    <section id="field-study" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2.5">
          <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold">
            Phần 1: Tổng quan hoạt động kiến tập
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            01. The Field Study
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Thiết kế nghiên cứu thực địa kết hợp giữa đối thoại chuyên gia với ban điều hành trang trại và phương pháp quan sát thực chứng, phục vụ đối chiếu trực tiếp giữa lý thuyết và thực tiễn sản xuất.
          </p>
        </div>

        {/* 4 Essential Data Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-[#164E37] text-xs font-semibold uppercase tracking-wider font-mono">
              <MapPin className="w-4 h-4" />
              <span>Địa điểm thực địa</span>
            </div>
            <div className="font-editorial text-xl font-bold text-stone-900">
              Detrang Farm – Ba Vì
            </div>
            <div className="text-sm text-stone-700 leading-relaxed font-sans">
              Thôn Ké Mới, Xã Tản Lĩnh, Huyện Ba Vì, Hà Nội. Nằm trong vành đai sinh thái nông nghiệp ven đô.
            </div>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-[#164E37] text-xs font-semibold uppercase tracking-wider font-mono">
              <Calendar className="w-4 h-4" />
              <span>Thời gian thực hiện</span>
            </div>
            <div className="font-editorial text-xl font-bold text-stone-900">
              19.09.2026
            </div>
            <div className="text-sm text-stone-700 leading-relaxed font-sans">
              05:40 – 17:00 (dự kiến). Lịch trình khảo sát trọn vẹn theo đúng kế hoạch kiến tập thực tế chính thức.
            </div>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-[#164E37] text-xs font-semibold uppercase tracking-wider font-mono">
              <Users className="w-4 h-4" />
              <span>Đối tượng tham gia</span>
            </div>
            <div className="font-editorial text-xl font-bold text-stone-900">
              Khoa Kinh tế Chính trị – UEB
            </div>
            <div className="text-sm text-stone-700 leading-relaxed font-sans">
              A large multi-class student cohort participated in the field-study programme (Đoàn sinh viên quy mô lớn từ nhiều lớp cùng các giảng viên hướng dẫn).
            </div>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-[#164E37] text-xs font-semibold uppercase tracking-wider font-mono">
              <Microscope className="w-4 h-4" />
              <span>Phương pháp thu thập</span>
            </div>
            <div className="font-editorial text-xl font-bold text-stone-900">
              Tam giác dữ liệu đa phương
            </div>
            <div className="text-sm text-stone-700 leading-relaxed font-sans">
              Tọa đàm chuyên gia + Quan sát thực địa + Bằng chứng hình ảnh (TD/TT/SK) + Khảo sát trực tuyến sau chuyến đi.
            </div>
          </div>

        </div>

        {/* Real Evidence Context: TD07 (Seminar) + TT02 (Farm Tour) + TT05 (Experience) + SK01 (Field Context) */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164E37] font-mono">
              <FileCheck className="w-4 h-4" />
              <span>Bằng chứng hình ảnh xác thực các chặng kiến tập (Verified Evidence Context)</span>
            </div>
            <span className="text-xs text-stone-500 font-mono">19.09.2026 · Detrang Farm, Ba Vì</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* SEMINAR -> TD07 */}
            <div className="space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <EvidenceImage
                  code="TD07"
                  aspectRatio="aspect-16/10"
                  caption="TD07 — SEMINAR: Backdrop tọa đàm kiến tập thực tế tại Detrang Farm ngày 19/09/2026."
                  showDate={true}
                />
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#164E37]">
                  <span className="px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded">08:00–10:30</span>
                  <span>SEMINAR</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Tọa đàm với lãnh đạo Farm về mô hình trải nghiệm giáo dục và tọa đàm chuyên ngành cùng lãnh đạo Khoa KTCT.
                </p>
              </div>
            </div>

            {/* FARM TOUR -> TT02 */}
            <div className="space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <EvidenceImage
                  code="TT02"
                  aspectRatio="aspect-16/10"
                  caption="TT02 — FARM TOUR: Toàn cảnh khu chăn thả và không gian sinh thái Ba Vì."
                  showDate={true}
                />
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#164E37]">
                  <span className="px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded">10:30–11:30</span>
                  <span>FARM TOUR</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Sinh viên tham quan trang trại theo nhóm lớp, quan sát chuồng trại và cấu trúc phân bổ không gian sinh thái.
                </p>
              </div>
            </div>

            {/* EXPERIENCE -> TT05 */}
            <div className="space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <EvidenceImage
                  code="TT05"
                  aspectRatio="aspect-16/10"
                  caption="TT05 — EXPERIENCE: Tương tác xúc giác trực tiếp và quan sát tập tính vật nuôi."
                  showDate={true}
                />
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#164E37]">
                  <span className="px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded">14:30–17:00</span>
                  <span>EXPERIENCE</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Sinh viên tự do trải nghiệm tiếp xúc vật nuôi, trực tiếp cảm nhận giá trị tương tác xúc giác tại nông trại.
                </p>
              </div>
            </div>

            {/* FIELD CONTEXT -> SK01 */}
            <div className="space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <EvidenceImage
                  code="SK01"
                  aspectRatio="aspect-16/10"
                  caption="SK01 — FIELD CONTEXT: Đoàn sinh viên Khoa Kinh tế Chính trị tại Detrang Farm."
                  showDate={true}
                />
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#164E37]">
                  <span className="px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded">FIELD CONTEXT</span>
                  <span>ĐOÀN KHẢO SÁT</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Bối cảnh thực tế của đoàn sinh viên quy mô lớn từ nhiều lớp tham gia học tập thực nghiệm tại Ba Vì.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Official Field-Study Itinerary Section */}
        <div className="space-y-6 pt-2">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-3">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E37]">
                Official Field-Study Timeline · Lịch trình chính thức
              </div>
              <h3 className="font-editorial text-2xl font-bold text-stone-900 mt-0.5">
                Tiến trình 9 chặng thực địa (Official 9-Stage Itinerary)
              </h3>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              Bắt đầu: 05:40 · Kết thúc: 17:00 (Dự kiến)
            </span>
          </div>

          {/* Timeline Visual Stages Pipeline (ASSEMBLY → DEPARTURE → CHECK-IN → SEMINAR → FARM TOUR → LUNCH → REST → EXPERIENCE → RETURN) */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#164E37]" />
              <span className="font-semibold">Chuỗi chuyển giao giai đoạn thực địa (Visual Stages):</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin text-xs font-mono">
              {visualStages.map((stage, sIdx) => {
                const isSelected = activeStepId === stage.id;
                return (
                  <React.Fragment key={stage.code}>
                    <button
                      onClick={() => setActiveStepId(stage.id)}
                      className={`px-3 py-2 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer flex flex-col items-start gap-0.5 ${
                        isSelected
                          ? 'bg-[#164E37] text-white shadow-xs'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/70'
                      }`}
                    >
                      <span className="text-[10px] opacity-80">{stage.time}</span>
                      <span className="text-xs tracking-wide">{stage.code}</span>
                    </button>
                    {sIdx < visualStages.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0 mx-0.5" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Subtle Methodology / Source Note Banner */}
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-lg p-3.5 sm:p-4 text-xs font-sans text-stone-800 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-mono font-bold text-amber-900 uppercase text-[11px] tracking-wider">
                Ghi chú nguồn dữ liệu lịch trình (Methodology / Source Note)
              </div>
              <p className="leading-relaxed text-stone-700">
                “Timeline reproduced from the official field-study itinerary. Lunch and rest periods overlap between 13:00–13:30 in the source document.”
              </p>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                (Lịch trình được tái hiện nguyên văn từ văn bản kế hoạch kiến tập chính thức của đoàn sinh viên. Khung thời gian ăn trưa 12:00–13:30 và nghỉ trưa 13:00–14:30 có đoạn gối chồng 13:00–13:30 trong tài liệu gốc và được giữ nguyên tính trung thực học thuật).
              </p>
            </div>
          </div>

          {/* 9 Timeline Selectors Track */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 bg-stone-100/90 p-2 rounded-lg border border-stone-200">
            {STUDY_TIMELINE.map((item, idx) => {
              const isActive = item.id === activeStepId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveStepId(item.id)}
                  className={`text-left p-2.5 rounded-md transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white shadow-xs border border-[#164E37]/30 text-stone-900 ring-1 ring-[#164E37]'
                      : 'hover:bg-white/70 text-stone-700 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-1">
                    <span className="font-bold">0{idx + 1}</span>
                    <span className="text-[10px] text-[#164E37] font-semibold">{item.phase}</span>
                  </div>
                  <div className="text-xs font-bold truncate text-stone-900">{item.phase}</div>
                  <div className="text-[11px] font-mono text-stone-600 truncate mt-0.5">{item.time}</div>
                </button>
              );
            })}
          </div>

          {/* Active Timeline Item Inspector Card */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 font-mono">
                  <span className="bg-[#164E37] text-white px-2 py-0.5 rounded font-bold">{activeStep.time}</span>
                  <span>·</span>
                  <span className="font-semibold text-stone-900">Giai đoạn: {activeStep.phase}</span>
                  <span>·</span>
                  <span>Địa điểm: {activeStep.location}</span>
                </div>

                <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                  {activeStep.title}
                </h4>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {activeStep.description}
                </p>

                {activeStep.notes && (
                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded text-xs text-stone-700 font-mono">
                    <span className="font-bold text-amber-800">Source Note:</span> {activeStep.notes}
                  </div>
                )}

                <div className="bg-[#FAF9F5] border-l-3 border-[#784A29] p-4 rounded-r text-sm space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#784A29]">
                    Quan sát kinh tế chính trị cốt lõi:
                  </div>
                  <p className="text-stone-900 italic font-medium leading-relaxed">
                    “{activeStep.keyObservation}”
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#F4F3EC] p-5 rounded-lg border border-stone-200/60 space-y-3.5 text-sm">
                <div className="font-semibold text-stone-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#164E37]" />
                  <span>Ý nghĩa phương pháp</span>
                </div>
                <div className="text-stone-700 leading-relaxed font-sans text-xs sm:text-sm">
                  Thuộc phân đoạn <strong className="text-stone-900">{activeStep.academicTag}</strong>. Góp phần tích lũy bằng chứng thực nghiệm giải thích cơ chế tương tác đa mục tiêu tại Detrang Farm.
                </div>
                
                <div className="pt-2.5 border-t border-stone-200 space-y-1.5 text-xs text-stone-600 font-mono">
                  <div className="flex justify-between">
                    <span>Mã bằng chứng:</span>
                    <span className="font-bold text-[#164E37]">{activeStep.evidenceCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Đối tượng:</span>
                    <span className="font-bold text-stone-800">Sinh viên & Giảng viên</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trạng thái:</span>
                    <span className="text-emerald-700 font-bold">Xác thực chính thức</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
