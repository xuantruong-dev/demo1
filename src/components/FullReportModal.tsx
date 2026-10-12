import React from 'react';
import { X, Printer, Download, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { REPORT_METADATA } from '../data/fieldStudyData';

interface FullReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullReportModal: React.FC<FullReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-300 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 border-b border-stone-200 bg-[#FBFBF7] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#164E37] text-white rounded">
              Academic Monograph
            </span>
            <span className="text-xs text-stone-500 font-mono hidden sm:inline-block">
              UEB – VNU · Khoa Kinh tế Chính trị · 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors cursor-pointer"
              title="In bản sao hoặc lưu dưới dạng PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In / Lưu PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-md cursor-pointer"
              aria-label="Đóng cửa sổ đọc báo cáo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scrollable Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto font-body space-y-8 text-stone-800 text-sm leading-relaxed max-w-3xl mx-auto">
          
          {/* Institutional Cover Header */}
          <div className="text-center space-y-3 border-b border-stone-200 pb-8">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              Đại học Quốc gia Hà Nội · Trường Đại học Kinh tế
            </div>
            <div className="text-xs uppercase tracking-widest text-[#164E37] font-semibold">
              Khoa Kinh tế Chính trị
            </div>
            
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 pt-2 leading-tight">
              BÁO CÁO KẾT QUẢ KIẾN TẬP THỰC TẾ TẠI DETRANG FARM
            </h2>
            <p className="font-editorial italic text-base sm:text-lg text-stone-600">
              Phân tích mô hình kinh tế Nông nghiệp – Giáo dục – Trải nghiệm dưới góc nhìn Kinh tế Chính trị
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-600 font-mono">
              <div>Sinh viên thực hiện: <strong className="text-stone-900">Đinh Xuân Trường</strong></div>
              <span>·</span>
              <div>Mã Sinh Viên: <strong className="text-[#164E37]">25050428</strong></div>
              <span>·</span>
              <span>19.09.2026</span>
              <span>·</span>
              <span>Mẫu phân tích: n = 72</span>
            </div>
          </div>

          {/* Visual Abstract */}
          <div className="bg-[#FAF9F5] border-l-3 border-[#164E37] p-5 rounded-r space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#164E37] font-mono">
              Tóm tắt nghiên cứu (Executive Abstract)
            </div>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed italic">
              Báo cáo này tiến hành mổ xẻ nghiên cứu tình huống tại Detrang Farm (Ba Vì) nhằm trả lời câu hỏi trung tâm: <em>“Khi một trang trại không chỉ tạo ra nông sản mà còn tạo ra tri thức và trải nghiệm, giá trị kinh tế của nó được mở rộng như thế nào?”</em> Thông qua việc kết hợp dữ liệu tọa đàm doanh nghiệp (TD), quan sát thực địa (TT) và tập dữ liệu khảo sát chuẩn hóa n = 72 (KS), nghiên cứu xác lập mô hình <strong>Tam giác N–G–T</strong> và chứng minh quy luật <strong>Nông nghiệp đa chức năng</strong>: Dịch vụ hóa giúp nhân bội giá trị sử dụng của đất đai và vật nuôi, giảm thiểu tính bấp bênh của nông nghiệp truyền thống.
            </p>
          </div>

          {/* Chapter Outline Summary */}
          <div className="space-y-6 pt-2">
            
            <div className="space-y-2">
              <h3 className="font-editorial text-xl font-bold text-stone-900 border-b border-stone-100 pb-1">
                Phần 1: Tổng quan hoạt động kiến tập thực tế
              </h3>
              <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                Chuyến kiến tập được tổ chức vào ngày 19/09/2026 tại Detrang Farm (Thôn Ké Mới, Ba Vì). A large multi-class student cohort participated in the field-study programme (Đoàn sinh viên quy mô lớn từ nhiều lớp cùng các giảng viên hướng dẫn chuyên môn Khoa Kinh tế Chính trị – UEB). Phương pháp thu thập dữ liệu đa phương bao gồm tọa đàm với ban giám đốc, ghi nhận hình ảnh thực địa và điều tra xã hội học sơ cấp.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-editorial text-xl font-bold text-stone-900 border-b border-stone-100 pb-1">
                Phần 2: Nội dung & Phân tích chuyên sâu (Khung Tam giác N–G–T)
              </h3>
              <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                Nông nghiệp đóng vai trò là chất dẫn vật chất (vật nuôi, cây trồng, đất đai); Giáo dục đóng vai trò tri thức hóa quy trình kỹ thuật; và Trải nghiệm đóng vai trò thương mại hóa cảm xúc. Điển hình như case study đàn dê sữa: cùng một con dê vừa tạo ra sữa thanh trùng (nông nghiệp), vừa là bài học an toàn sinh học (giáo dục), vừa là đối tượng tương tác cho ăn (trải nghiệm).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-editorial text-xl font-bold text-stone-900 border-b border-stone-100 pb-1">
                Phần 3: Bài học đúc kết về kiến thức và kỹ năng
              </h3>
              <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                Người học chuyển biến nhận thức căn bản: từ chỗ nhìn nhận nông nghiệp chỉ là sản xuất hàng hóa thô sang tư duy kinh tế chính trị về cách thức tổ chức nguồn lực để phân phối giá trị đa tầng. Đề xuất 3 khuyến nghị tư vấn: Quy hoạch trạm xoay tua giảm ùn tắc, số hóa thẻ học tập QR tại chuồng trại, và đóng gói chương trình học tập cho khối đại học vào ngày thường.
              </p>
            </div>

          </div>

          {/* Citations List */}
          <div className="pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-500 font-sans">
            <div className="font-bold text-stone-700 uppercase font-mono">Tài liệu tham khảo chính:</div>
            <p>1. OECD (2001), <em>Multifunctionality: Towards an Analytical Framework</em>, OECD Publishing, Paris.</p>
            <p>2. Khoa Kinh tế Chính trị – UEB – VNU (2025), <em>Giáo trình Kinh tế Chính trị Mác – Lênin</em>, NXB ĐHQGHN.</p>
            <p>3. Van der Ploeg, J. D. (2000), <em>Rural Development: From Practices and Policies towards Theory</em>, Sociologia Ruralis.</p>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-stone-200 bg-[#FBFBF7] flex items-center justify-between shrink-0 text-xs text-stone-500">
          <span>Phiên bản lưu trữ số: DF-UEB-2026-FINAL</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white rounded font-medium hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
