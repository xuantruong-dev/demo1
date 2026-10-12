import React from 'react';
import { Users2, School, Building2, UserCheck, Home, Compass, Sparkles, ExternalLink, Radio, MessageSquare, Globe, Users } from 'lucide-react';
import { useEvidenceLightbox } from '../context/EvidenceLightboxContext';

export const CustomerSegmentsSection: React.FC = () => {
  const { openEvidence } = useEvidenceLightbox();

  // Exact 2 columns specified by prompt from TD03
  const b2bSegments = [
    {
      title: 'Trường học / Trung tâm giáo dục',
      engTitle: 'Schools & Education Centers',
      icon: <School className="w-5 h-5 text-[#164E37]" />,
      demand: 'Chương trình dã ngoại kết hợp giáo dục STEM nông nghiệp an toàn cho học sinh các cấp.',
      touchpoints: 'Khu trải nghiệm nông vụ nhí, chuồng dê thân thiện, sân cỏ teambuilding.',
      economicRole: 'Nguồn thu chủ lực vào các ngày giữa tuần, tạo sự ổn định công suất cho nông trại.'
    },
    {
      title: 'Doanh nghiệp / Đoàn thể',
      engTitle: 'Corporations & Organizations',
      icon: <Building2 className="w-5 h-5 text-[#784A29]" />,
      demand: 'Hoạt động gắn kết đội ngũ (Teambuilding), hội thảo ngoài trời và ẩm thực đặc sản.',
      touchpoints: 'Bãi cỏ sinh thái trung tâm, nhà hàng nông sản Ba Vì, phòng hội thảo sinh thái.',
      economicRole: 'Quy mô chi tiêu bình quân trên người cao, thúc đẩy doanh thu dịch vụ ẩm thực F&B.'
    },
    {
      title: 'Trại hè / Ban phụ huynh',
      engTitle: 'Summer Camps & Parent Committees',
      icon: <UserCheck className="w-5 h-5 text-blue-700" />,
      demand: 'Khóa rèn luyện kỹ năng sinh tồn, thấu hiểu thiên nhiên và sinh hoạt tập thể dài ngày.',
      touchpoints: 'Khu lưu trú nhà sàn, trạm thực nghiệm sinh học, khu lửa trại đêm.',
      economicRole: 'Doanh thu gói dài ngày kết hợp lưu trú farmstay và các trạm học tập chuyên đề.'
    }
  ];

  const b2cSegments = [
    {
      title: 'Gia đình đa thế hệ',
      engTitle: 'Multi-generational Families',
      icon: <Home className="w-5 h-5 text-emerald-700" />,
      demand: 'Không gian thư giãn trong lành, gắn kết ông bà - cha mẹ - con cái cuối tuần.',
      touchpoints: 'Vườn hoa cảnh quan, khu cho thú ăn, nhà hàng sinh thái, khu nghỉ trưa.',
      economicRole: 'Lượng khách đông đảo vào các dịp thứ Bảy, Chủ nhật và ngày lễ tết.'
    },
    {
      title: 'Nhóm bạn trẻ / Sinh viên',
      engTitle: 'Youth & University Students',
      icon: <Compass className="w-5 h-5 text-amber-700" />,
      demand: 'Khám phá thiên nhiên, chụp ảnh lưu niệm (check-in), dã ngoại tự túc và học tập thực tế.',
      touchpoints: 'Đồi cỏ Ba Vì, trạm nông vụ, khu trượt cỏ, không gian cắm trại mở.',
      economicRole: 'Góp phần lan tỏa thương hiệu tự nhiên trên các nền tảng mạng xã hội.'
    },
    {
      title: 'Khách nghỉ dưỡng Farmstay',
      engTitle: 'Eco-Farmstay Leisure Travelers',
      icon: <Sparkles className="w-5 h-5 text-indigo-700" />,
      demand: 'Tĩnh dưỡng, rời xa ồn ào đô thị, thưởng thức thực phẩm hữu cơ và phong cảnh núi Ba Vì.',
      touchpoints: 'Bungalow sinh thái, đường dạo bộ đồng quê, tiệc nướng sinh thái tại chỗ.',
      economicRole: 'Biên lợi nhuận dịch vụ lưu trú cao, kéo dài thời gian lưu trú và tiêu dùng.'
    }
  ];

  return (
    <section id="customer-segments" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= PART 1: CUSTOMER SEGMENTS (TD03) ================= */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold flex items-center gap-1.5">
                <Users2 className="w-3.5 h-3.5" />
                <span>Cấu trúc thị trường mục tiêu — Tái dựng từ TD03</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
                07. Customer Segments (B2B & B2C)
              </h2>
              <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
                Tái dựng khoa học thành <span className="font-semibold text-stone-950">2 phân hệ đối trọng B2B và B2C</span>: Cân bằng luồng khách giữa ngày thường và ngày cuối tuần, tối ưu hóa công suất vận hành trang trại.
              </p>
            </div>

            {/* View source evidence TD03 */}
            <div className="shrink-0">
              <button
                onClick={() => openEvidence('TD03')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#784A29]/30 text-[#784A29] hover:bg-[#784A29]/5 text-xs font-mono font-semibold shadow-2xs transition-all cursor-pointer hover:border-[#784A29]"
              >
                <span>View source evidence TD03</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2-Column Layout Reconstructed as Requested */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Column 1: B2B (Doanh nghiệp & Trường học) */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase font-bold text-[#164E37] tracking-wider">
                    Phân hệ 01
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-stone-900">
                    B2B — Khách hàng Tổ chức
                  </h3>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 bg-emerald-50 text-[#164E37] border border-emerald-200 rounded-md font-bold">
                  B2B
                </span>
              </div>

              <div className="space-y-4">
                {b2bSegments.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAF9F5] border border-stone-200/80 rounded-lg p-5 space-y-2.5 hover:border-[#164E37]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-white border border-stone-200">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-editorial text-lg font-bold text-stone-900 leading-snug">
                          {item.title}
                        </h4>
                        <div className="text-[11px] font-mono text-stone-500">{item.engTitle}</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                      {item.demand}
                    </p>
                    <div className="pt-2 border-t border-stone-200/60 flex flex-col gap-1 text-[11px] text-stone-600 font-sans">
                      <span><strong>Điểm chạm:</strong> {item.touchpoints}</span>
                      <span className="text-[#164E37] font-medium"><strong>Vai trò kinh tế:</strong> {item.economicRole}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: B2C (Cá nhân & Gia đình) */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase font-bold text-[#784A29] tracking-wider">
                    Phân hệ 02
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-stone-900">
                    B2C — Khách hàng Cá nhân
                  </h3>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 bg-amber-50 text-[#784A29] border border-amber-200 rounded-md font-bold">
                  B2C
                </span>
              </div>

              <div className="space-y-4">
                {b2cSegments.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAF9F5] border border-stone-200/80 rounded-lg p-5 space-y-2.5 hover:border-[#784A29]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-white border border-stone-200">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-editorial text-lg font-bold text-stone-900 leading-snug">
                          {item.title}
                        </h4>
                        <div className="text-[11px] font-mono text-stone-500">{item.engTitle}</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                      {item.demand}
                    </p>
                    <div className="pt-2 border-t border-stone-200/60 flex flex-col gap-1 text-[11px] text-stone-600 font-sans">
                      <span><strong>Điểm chạm:</strong> {item.touchpoints}</span>
                      <span className="text-[#784A29] font-medium"><strong>Vai trò kinh tế:</strong> {item.economicRole}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= PART 2: COMMUNICATION CHANNELS (TD02) ================= */}
        <div className="space-y-8 pt-8 border-t border-stone-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" />
                <span>Kênh tiếp cận khách hàng — Tái dựng từ TD02</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
                Communication Channels
              </h2>
              <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
                Chiến lược tiếp cận thị trường của Detrang Farm dựa trên sự phân hóa sâu sắc: B2B chú trọng <strong className="text-stone-950 font-semibold">trải nghiệm thực chứng và quan hệ trực tiếp</strong>, trong khi B2C tối ưu hóa <strong className="text-stone-950 font-semibold">truyền thông số và hiệu ứng lan tỏa</strong>.
              </p>
            </div>

            {/* View source evidence TD02 */}
            <div className="shrink-0">
              <button
                onClick={() => openEvidence('TD02')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#164E37]/30 text-[#164E37] hover:bg-[#164E37]/5 text-xs font-mono font-semibold shadow-2xs transition-all cursor-pointer hover:border-[#164E37]"
              >
                <span>View source evidence TD02</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Communication Channels Reconstructed Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* B2B Channels */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 text-[#164E37] font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Kênh tiếp cận B2B (Tổ chức & Trường học)</span>
                </div>
                <span className="font-mono text-xs text-stone-400">TD02</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#164E37] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="font-editorial text-base font-bold text-stone-900">
                    Gặp mặt trực tiếp
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Làm việc trực tiếp với ban giám hiệu, công đoàn doanh nghiệp và hội đồng trường để thống nhất giáo trình.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#164E37] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="font-editorial text-base font-bold text-stone-900">
                    Giới thiệu truyền miệng
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Uy tín lan tỏa giữa các trường học trong quận/huyện qua các mùa dã ngoại thành công trước đó.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#164E37] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h4 className="font-editorial text-base font-bold text-stone-900">
                    Farmtrip khảo sát
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Mời ban giám hiệu và đại diện phụ huynh đến trải nghiệm thực tế cơ sở vật chất trước khi ký hợp đồng.
                  </p>
                </div>
              </div>
            </div>

            {/* B2C Channels */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 text-[#784A29] font-bold text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Kênh tiếp cận B2C (Cá nhân & Gia đình)</span>
                </div>
                <span className="font-mono text-xs text-stone-400">TD02</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-[#784A29] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="font-editorial text-base font-bold text-stone-900">
                    Kênh Online & Mạng xã hội
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Website, Fanpage cộng đồng, TikTok và các hội nhóm du lịch sinh thái ven đô Hà Nội chia sẻ hình ảnh tương tác sống động.
                  </p>
                </div>

                <div className="p-5 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-[#784A29] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="font-editorial text-base font-bold text-stone-900">
                    Truyền miệng & Giới thiệu
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Gia đình đã trải nghiệm trực tiếp giới thiệu cho bạn bè, người thân; học sinh về nhà chia sẻ sự hào hứng với bố mẹ.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
