import React, { useState } from 'react';
import { REPORT_METADATA } from '../data/fieldStudyData';
import { FileText, Download, BookOpen, Database, ExternalLink, Printer } from 'lucide-react';

interface ReportSourcesSectionProps {
  onOpenReportModal: () => void;
}

export const ReportSourcesSection: React.FC<ReportSourcesSectionProps> = ({ onOpenReportModal }) => {
  const [activeTab, setActiveTab] = useState<'outline' | 'methodology' | 'references'>('outline');

  return (
    <section id="full-report" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nền tảng học thuật & Tài liệu đầy đủ</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            17. Explore the Full Report
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Website là Digital Companion bổ trợ cho bản báo cáo giấy 86 trang đã nộp tại Khoa Kinh tế Chính trị. Dưới đây là mục lục, phương pháp luận và danh mục tài liệu tham khảo chính thức.
          </p>
        </div>

        {/* Primary Download / Open Reader Banner */}
        <div className="bg-[#FAF9F5] border border-stone-300 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500">
              <span className="bg-[#164E37] text-white px-2 py-0.5 rounded font-semibold">Báo cáo chính thức</span>
              <span>·</span>
              <span>86 trang</span>
              <span>·</span>
              <span>UEB – VNU 2026</span>
              <span>·</span>
              <span className="text-[#164E37] font-semibold">SV: Đinh Xuân Trường (25050428)</span>
            </div>
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900">
              {REPORT_METADATA.title}
            </h3>
            <p className="text-xs text-stone-600 font-sans max-w-xl">
              {REPORT_METADATA.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#164E37] hover:bg-[#0F3827] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Đọc toàn văn / In báo cáo</span>
            </button>
          </div>
        </div>

        {/* Tabs for Outline, Methodology, References */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
            <button
              onClick={() => setActiveTab('outline')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'outline'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Cấu trúc mục lục (07 chương)
            </button>
            <button
              onClick={() => setActiveTab('methodology')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'methodology'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ghi chú phương pháp & Khảo sát
            </button>
            <button
              onClick={() => setActiveTab('references')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'references'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tài liệu tham khảo (Citations)
            </button>
          </div>

          {/* Tab 1: Outline */}
          {activeTab === 'outline' && (
            <div className="bg-white border border-stone-200 rounded-xl divide-y divide-stone-100 shadow-2xs">
              {REPORT_METADATA.outline.map((ch, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#164E37]">{ch.section}</span>
                      <span className="font-bold text-stone-900 text-sm font-editorial">{ch.title}</span>
                    </div>
                    <p className="text-stone-600 font-sans">{ch.desc}</p>
                  </div>
                  <span className="font-mono text-stone-400 shrink-0 self-start sm:self-center">
                    {ch.pages}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Methodology */}
          {activeTab === 'methodology' && (
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4 text-xs">
              <h4 className="font-editorial text-lg font-bold text-stone-900">
                Phương pháp nghiên cứu & Quy trình chuẩn hóa dữ liệu
              </h4>
              <p className="text-stone-700 leading-relaxed font-sans">
                Nghiên cứu sử dụng phương pháp <strong>Nghiên cứu tình huống đơn (Single Case Study)</strong> kết hợp giữa dữ liệu định tính và định lượng theo nguyên lý Tam giác hóa (Triangulation). Dữ liệu được thu thập trực tiếp tại thực địa ngày 19/09/2026.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FAF9F5] rounded border border-stone-200 space-y-1.5">
                  <div className="font-semibold text-[#164E37] uppercase font-mono text-[11px]">
                    1. Mẫu khảo sát định lượng (Survey Note):
                  </div>
                  <ul className="space-y-1 text-stone-600">
                    <li>· Mẫu phân tích: n = 72 phản hồi làm sạch (từ 85 phản hồi tiếp nhận).</li>
                    <li>· Đối tượng: A large multi-class student cohort participated in the field-study programme.</li>
                    <li>· Phương thức: Khảo sát mẫu thuận tiện trực tuyến sau chuyến đi.</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#FAF9F5] rounded border border-stone-200 space-y-1.5">
                  <div className="font-semibold text-[#784A29] uppercase font-mono text-[11px]">
                    2. Mã hóa bằng chứng (Evidence Index):
                  </div>
                  <ul className="space-y-1 text-stone-600">
                    <li>· Mã TT (Thực tế): 10 hình ảnh quan sát hiện trường (TT01 – TT10).</li>
                    <li>· Mã TD (Tọa đàm): 07 slide tư liệu từ Ban Giám đốc (TD01 – TD07).</li>
                    <li>· Mã KS (Khảo sát): 72 bản ghi phân tích từ tập dữ liệu làm sạch.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: References */}
          {activeTab === 'references' && (
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs space-y-4 text-xs">
              <h4 className="font-editorial text-lg font-bold text-stone-900">
                Danh mục tài liệu tham khảo chính thức
              </h4>
              <div className="space-y-3">
                {REPORT_METADATA.academicReferences.map((ref, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded border border-stone-200/80 space-y-1">
                    <div className="text-stone-900 font-medium">
                      <strong>{ref.author}.</strong> <em>{ref.title}</em>. {ref.publisher}.
                    </div>
                    <div className="text-stone-500 italic text-[11px]">
                      Ghi chú: {ref.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
