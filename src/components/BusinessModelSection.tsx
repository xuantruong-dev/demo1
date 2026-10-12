import React, { useState } from 'react';
import { VALUE_LOOP_STEPS } from '../data/fieldStudyData';
import { ArrowDown, RefreshCw, PieChart, Repeat, ExternalLink, Compass, Home, Utensils, Sprout } from 'lucide-react';
import { useEvidenceLightbox } from '../context/EvidenceLightboxContext';

export const BusinessModelSection: React.FC = () => {
  const { openEvidence } = useEvidenceLightbox();

  // 4 Core Groups reconstructed from seminar evidence slide TD05
  const fourCorePillars = [
    {
      id: 'tour-experience',
      title: 'Tham quan / Trải nghiệm',
      engTitle: 'Guided Tours & Hands-on Activities',
      icon: <Compass className="w-5 h-5 text-[#164E37]" />,
      summary: 'Khảo sát thực tế nông trại, tương tác vật nuôi và giáo dục ngoại khóa STEM.',
      items: [
        'Tour nông trại có hướng dẫn viên chuyên môn thuyết minh',
        'Hoạt động nông vụ nhí: cho dê ăn, vắt sữa dê, nhổ cỏ vườn',
        'Trò chơi dân gian, trượt cỏ, kéo co, teambuilding sinh thái',
        'Xưởng làm bánh cuốn truyền thống và trải nghiệm thủ công'
      ],
      revenueStream: 'Vé vào cổng, phí hướng dẫn tour, gói hoạt động ngoại khóa trường học'
    },
    {
      id: 'farmstay',
      title: 'Farmstay & Nghỉ dưỡng',
      engTitle: 'Eco-Lodging & Overnight Retreats',
      icon: <Home className="w-5 h-5 text-[#784A29]" />,
      summary: 'Lưu trú sinh thái giữa thiên nhiên Ba Vì, kết hợp đêm lửa trại và tĩnh dưỡng.',
      items: [
        'Hệ thống nhà sàn dân tộc truyền thống sức chứa đoàn đông',
        'Phòng nghỉ bungalow sinh thái hướng đồi cỏ và vườn cây',
        'Dịch vụ giao lưu văn hóa bản địa, tiệc nướng BBQ ngoài trời',
        'Không gian phục hồi năng lượng và giải tỏa áp lực số ven đô'
      ],
      revenueStream: 'Phí thuê phòng nghỉ đêm, combo trọn gói nghỉ dưỡng cuối tuần'
    },
    {
      id: 'food-agri',
      title: 'Ẩm thực / Nông sản',
      engTitle: 'Farm-to-Table Dining & Products',
      icon: <Utensils className="w-5 h-5 text-emerald-700" />,
      summary: 'Chuỗi cung ứng khép kín tại chỗ từ nguyên liệu sạch đến bàn ăn thực khách.',
      items: [
        'Nhà hàng sinh thái phục vụ đặc sản dê Ba Vì, gà đồi, cá suối',
        'Sữa dê thanh trùng nguyên chất, sữa chua dê lên men tự nhiên',
        'Rau củ hữu cơ thu hoạch trong ngày phục vụ bữa ăn tại farm',
        'Gian hàng nông sản đóng gói và quà tặng sinh thái mang về'
      ],
      revenueStream: 'Doanh thu nhà hàng ẩm thực, bán lẻ nông sản thanh trùng'
    },
    {
      id: 'plants-livestock',
      title: 'Cây trồng / Vật nuôi',
      engTitle: 'Biological Resources & Circular Flora/Fauna',
      icon: <Sprout className="w-5 h-5 text-green-800" />,
      summary: 'Nền tảng tài nguyên sinh học sống động tạo tiền đề cho toàn bộ chuỗi dịch vụ.',
      items: [
        'Đàn dê sữa giống Saanen & Bách Thảo sinh sản ổn định',
        'Đàn đà điểu, cừu, ngựa phục vụ cả sản xuất và trải nghiệm',
        'Vườn rau hữu cơ vi sinh và khu dược liệu bản địa Ba Vì',
        'Bể ủ phân compost vi sinh tuần hoàn tái tạo dinh dưỡng đất'
      ],
      revenueStream: 'Cung cấp con giống, phân hữu cơ, nguyên liệu đầu vào cho hệ thống'
    }
  ];

  return (
    <section id="business-model" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= SECTION 05: BUSINESS MODEL MAP / DETRANG FARM CÓ GÌ? ================= */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5">
                <PieChart className="w-3.5 h-3.5" />
                <span>Tái dựng từ tư liệu tọa đàm TD05</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
                05. “Detrang Farm Có Gì?” — Hệ Sản Phẩm & Dịch Vụ
              </h2>
              <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
                Tái dựng khoa học từ slide tọa đàm của ban giám đốc: Detrang Farm không bán nông sản thô đơn lẻ, mà phát triển tổ hợp tích hợp gồm <span className="font-semibold text-stone-900">4 nhóm dịch vụ và sản phẩm trọng tâm</span>.
              </p>
            </div>

            {/* Lightbox Trigger for TD05 Source Evidence */}
            <div className="shrink-0">
              <button
                onClick={() => openEvidence('TD05')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#784A29]/30 text-[#784A29] hover:bg-[#784A29]/5 text-xs font-mono font-semibold shadow-2xs transition-all cursor-pointer hover:border-[#784A29]"
              >
                <span>View source evidence TD05</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Reconstructed Clean Infographic Cards (4 Pillars from TD05) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourCorePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs hover:border-[#164E37] transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 group-hover:bg-[#164E37]/10 transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-stone-100 rounded text-stone-600">
                      TD05
                    </span>
                  </div>

                  <div>
                    <h3 className="font-editorial text-xl font-bold text-stone-900 leading-tight">
                      {pillar.title}
                    </h3>
                    <div className="font-mono text-[11px] text-stone-500 mt-0.5">
                      {pillar.engTitle}
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {pillar.summary}
                  </p>

                  <div className="pt-2 border-t border-stone-100 space-y-1.5">
                    <div className="text-[11px] font-mono font-semibold uppercase text-stone-700 tracking-wider">
                      Thành phần chính:
                    </div>
                    <ul className="space-y-1 text-xs text-stone-600">
                      {pillar.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#164E37] font-bold">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FAF9F5] p-3 rounded-lg border border-stone-200/70 text-[11px] font-sans">
                  <span className="font-semibold text-stone-800 block mb-0.5">Dòng thặng dư kinh tế:</span>
                  <span className="text-[#164E37] font-medium">{pillar.revenueStream}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Evidence Callout */}
          <div className="bg-white p-4 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600 font-sans">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-[#784A29] px-2 py-0.5 bg-amber-50 rounded border border-amber-200">
                TD05 · SEMINAR EVIDENCE
              </span>
              <span>Dữ liệu sơ cấp trích xuất nguyên bản từ bài trình bày của Ban Giám đốc Detrang Farm.</span>
            </div>
            <button
              onClick={() => openEvidence('TD05')}
              className="text-[#784A29] hover:underline font-mono font-semibold cursor-pointer shrink-0"
            >
              Mở slide TD05 gốc trong Lightbox →
            </button>
          </div>
        </div>

        {/* ================= SECTION 06: VALUE CREATION LOOP ================= */}
        <div className="space-y-8 pt-8 border-t border-stone-200/80">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold flex items-center gap-1.5">
              <Repeat className="w-3.5 h-3.5" />
              <span>Cơ chế tuần hoàn thặng dư</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              06. From Resource to Experience
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
              Giải thích <span className="font-semibold text-stone-900">cơ chế tuần hoàn</span>: Cách một nguồn lực tự nhiên đi qua các mắt xích để sinh ra thặng dư, và quay trở lại củng cố chính nguồn lực ban đầu.
            </p>
          </div>

          {/* Cyclic Interactive Loop Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUE_LOOP_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-stone-200 rounded-lg p-5 shadow-2xs hover:border-[#164E37] transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                  <span className="text-[#164E37] font-bold text-sm">Step {step.step}</span>
                  <span className="text-stone-600 font-medium">{step.engTitle}</span>
                </div>
                <h3 className="font-editorial text-lg font-bold text-stone-900 group-hover:text-[#164E37] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#F4F3EC] p-4 rounded-lg border border-stone-200/80 flex items-center gap-3 text-xs text-stone-700">
            <RefreshCw className="w-5 h-5 text-[#164E37] shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
            <span>
              <strong>Vòng lặp khép kín:</strong> Dòng tiền thặng dư từ dịch vụ và vé được trang trại tái đầu tư trực tiếp vào hệ thống xử lý phân vi sinh, cải tạo đất hữu cơ và nâng cao chất lượng phúc lợi đàn dê — duy trì chất lượng thật cho chu kỳ kế tiếp.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
