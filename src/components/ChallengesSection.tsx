import React from 'react';
import { STUDENT_CHALLENGES } from '../data/fieldStudyData';
import { AlertCircle, GraduationCap, ShieldAlert, Compass, ExternalLink, Target, Heart, Award } from 'lucide-react';
import { useEvidenceLightbox } from '../context/EvidenceLightboxContext';

export const ChallengesSection: React.FC = () => {
  const { openEvidence } = useEvidenceLightbox();

  // Reconstructed exactly from seminar evidence slide TD01
  const td01Challenges = [
    {
      group: '01',
      title: 'Yếu tố sinh học / Cây trồng – Vật nuôi',
      engTitle: 'Biological System & Living Asset Risks',
      content: 'Chăn nuôi đàn gia súc sống (dê sữa, đà điểu) và trồng trọt rau hữu cơ đòi hỏi quy trình an toàn sinh học và phòng dịch nghiêm ngặt. Rủi ro dịch bệnh và thời tiết cực đoan Ba Vì tác động trực tiếp đến sức khỏe vật nuôi.',
      riskImpact: 'Nguy cơ gián đoạn hoạt động tham quan nếu phát sinh dịch bệnh; chi phí thú y và kiểm định sinh học cao.',
      mitigation: 'Thiết kế chuồng trại sàn gỗ cách ly mặt đất, vệ sinh tiêu độc hàng ngày và kiểm tra thú y định kỳ.'
    },
    {
      group: '02',
      title: 'Diện tích lớn / Bài toán vận hành & Điều phối',
      engTitle: 'Large Spatial Scale & Multi-Zone Management',
      content: 'Trang trại có quy mô diện tích rộng lớn với nhiều phân khu chức năng (chăn nuôi, đồng cỏ, vườn rau, nhà hàng, farmstay, hội trường). Việc kiểm soát an ninh, duy trì vệ sinh cảnh quan và điều phối giao thông nội bộ là áp lực lớn.',
      riskImpact: 'Nguy cơ lạc khách, ùn ứ cục bộ tại các điểm nóng và hao mòn chi phí duy tu cơ sở hạ tầng trên diện rộng.',
      mitigation: 'Trang bị phương tiện vận tải nội bộ, bố trí biển chỉ dẫn không gian và phân luồng hướng dẫn viên.'
    },
    {
      group: '03',
      title: 'Biến động mùa vụ / Lượng khách không đều',
      engTitle: 'Seasonality & Visitor Flow Fluctuation',
      content: 'Lượng khách tập trung đột biến vào mùa dã ngoại của các trường học (tháng 3–5 và tháng 9–11) và các ngày thứ Bảy, Chủ nhật. Ngày thường công suất dịch vụ ẩm thực và lưu trú bị dư thừa.',
      riskImpact: 'Lãng phí chi phí khấu hao mặt bằng và khó duy trì đội ngũ nhân sự chuyên môn cơ hữu quanh năm.',
      mitigation: 'Đẩy mạnh thu hút các gói nghiên cứu chuyên đề, hội thảo B2B của các trường đại học vào ngày thường.'
    }
  ];

  return (
    <section id="challenges" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= PART 1: OPERATIONAL CHALLENGES (TD01) ================= */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Rào cản vận hành — Tái dựng từ slide TD01</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
                12. Operational Challenges
              </h2>
              <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
                Tái dựng khoa học thành <span className="font-semibold text-stone-950">3 nhóm khó khăn cốt lõi từ nguồn tọa đàm TD01</span> của ban giám đốc, đối chiếu trực diện với dữ liệu phản ánh từ tập dữ liệu khảo sát chuẩn hóa (n = 72 analyzed responses).
              </p>
            </div>

            {/* View source evidence TD01 */}
            <div className="shrink-0">
              <button
                onClick={() => openEvidence('TD01')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#784A29]/30 text-[#784A29] hover:bg-[#784A29]/5 text-xs font-mono font-semibold shadow-2xs transition-all cursor-pointer hover:border-[#784A29]"
              >
                <span>View source evidence TD01</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Challenge Cards from TD01 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {td01Challenges.map((item) => (
              <div
                key={item.group}
                className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs hover:border-[#784A29] transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-amber-50 text-[#784A29] border border-amber-200 rounded">
                      Nhóm {item.group} · TD01
                    </span>
                    <ShieldAlert className="w-4 h-4 text-[#784A29]" />
                  </div>

                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h3>
                  <div className="font-mono text-[11px] text-stone-500">
                    {item.engTitle}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                    {item.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-2 text-xs font-sans">
                  <div className="bg-[#FAF9F5] p-3 rounded border border-stone-200/70">
                    <strong className="text-stone-900 block mb-0.5">Rủi ro tác động:</strong>
                    <span className="text-stone-600">{item.riskImpact}</span>
                  </div>
                  <div className="text-stone-500 text-[11px]">
                    <strong>Biện pháp giảm thiểu:</strong> {item.mitigation}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Student Perspective Comparison (KS n=72) */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#164E37]" />
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900">
                  Đối chiếu phản ánh từ Sinh viên (Khảo sát n=72 analyzed responses)
                </h3>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 bg-emerald-50 text-[#164E37] border border-emerald-200 rounded font-semibold">
                Dữ liệu sơ cấp KS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STUDENT_CHALLENGES.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F5] border border-stone-200/80 rounded-lg p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#164E37] font-semibold">KS</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                  <div className="pt-2 border-t border-stone-200/60 text-[11px] text-stone-500 font-sans">
                    <strong>Góc nhìn:</strong> {item.businessContext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= PART 2: VISION / MISSION / VALUES (TD06) ================= */}
        <div className="space-y-6 pt-8 border-t border-stone-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5 font-mono">
                <Compass className="w-3.5 h-3.5" />
                <span>Định vị triết lý doanh nghiệp — Nguồn TD06</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                Tầm Nhìn · Sứ Mệnh · Giá Trị Cốt Lõi
              </h3>
              <p className="text-stone-700 text-sm sm:text-base font-body leading-relaxed">
                Tư liệu hỗ trợ từ slide TD06 định hình khung triết lý và hệ giá trị bền vững định hướng cho mọi hoạt động tích hợp tại Detrang Farm.
              </p>
            </div>

            {/* View source evidence TD06 */}
            <div className="shrink-0">
              <button
                onClick={() => openEvidence('TD06')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#164E37]/30 text-[#164E37] hover:bg-[#164E37]/5 text-xs font-mono font-semibold shadow-2xs transition-all cursor-pointer hover:border-[#164E37]"
              >
                <span>View source evidence TD06</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Tầm nhìn */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <div className="flex items-center gap-2 text-[#164E37] font-bold text-sm font-editorial">
                  <Target className="w-4 h-4 text-[#164E37]" />
                  <span>Tầm Nhìn (Vision)</span>
                </div>
                <span className="font-mono text-[10px] text-stone-400">TD06</span>
              </div>
              <p className="text-sm font-serif text-stone-900 leading-relaxed font-medium">
                Trở thành tổ hợp nông trại giáo dục thực nghiệm và sinh thái kiểu mẫu hàng đầu miền Bắc, tiên phong ứng dụng kinh tế nông nghiệp tuần hoàn kết hợp du lịch trải nghiệm học tập chuẩn mực.
              </p>
            </div>

            {/* Card 2: Sứ mệnh */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <div className="flex items-center gap-2 text-[#784A29] font-bold text-sm font-editorial">
                  <Heart className="w-4 h-4 text-[#784A29]" />
                  <span>Sứ Mệnh (Mission)</span>
                </div>
                <span className="font-mono text-[10px] text-stone-400">TD06</span>
              </div>
              <p className="text-sm font-serif text-stone-900 leading-relaxed font-medium">
                Kiến tạo không gian học tập ngoài trời sống động, giúp thế hệ trẻ bồi dưỡng tình yêu thiên nhiên, thấu hiểu giá trị lao động nông nghiệp và cung cấp nguồn thực phẩm sạch, an lành cho cộng đồng.
              </p>
            </div>

            {/* Card 3: Giá trị cốt lõi */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm font-editorial">
                  <Award className="w-4 h-4 text-blue-700" />
                  <span>Giá Trị Cốt Lõi (Core Values)</span>
                </div>
                <span className="font-mono text-[10px] text-stone-400">TD06</span>
              </div>
              <div className="space-y-1.5 text-xs text-stone-700 font-sans">
                <div>🌱 <strong>Sinh thái tuần hoàn:</strong> Tôn trọng quy luật tự nhiên, tái tạo nguồn lực.</div>
                <div>📖 <strong>Giáo dục thực chất:</strong> Học tập qua hành động và quan sát thực chứng.</div>
                <div>🤝 <strong>Nông nghiệp tử tế:</strong> Minh bạch quy trình, an toàn vì sức khỏe con người.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
