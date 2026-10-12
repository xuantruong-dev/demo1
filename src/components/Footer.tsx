import React from 'react';
import { Compass, GraduationCap, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenReportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReportModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Project Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span className="font-editorial text-xl font-bold">
                DETRANG FARM FIELD STUDY 2026
              </span>
            </div>
            
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              Digital Companion – Phiên bản số hóa bổ trợ Báo cáo kiến tập thực tế tại Detrang Farm (Ba Vì). Nghiên cứu tình huống về sự chuyển hóa giá trị kinh tế theo mô hình Nông nghiệp × Giáo dục × Trải nghiệm.
            </p>

            <div className="pt-2 text-xs text-stone-500 font-mono space-y-1">
              <div>Faculty of Political Economy · UEB – VNU</div>
              <div>Field Study Date: 19.09.2026 · Ba Vì, Hà Nội</div>
            </div>
          </div>

          {/* Academic Structure Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Trục nội dung báo cáo
            </div>
            <ul className="space-y-2 text-xs text-stone-400 font-sans">
              <li>
                <a href="#field-study" className="hover:text-white transition-colors">
                  01. The Field Study (Tổng quan)
                </a>
              </li>
              <li>
                <a href="#ngt-triangle" className="hover:text-white transition-colors">
                  03. Tam giác N–G–T (Vũ khí #1)
                </a>
              </li>
              <li>
                <a href="#visitor-journey" className="hover:text-white transition-colors">
                  08. Visitor Journey (Điểm chạm)
                </a>
              </li>
              <li>
                <a href="#survey-dashboard" className="hover:text-white transition-colors">
                  09. Survey Dashboard
                </a>
              </li>
              <li>
                <a href="#evidence-triangulation" className="hover:text-white transition-colors">
                  10. Three Sources. One Insight.
                </a>
              </li>
              <li>
                <a href="#reflection" className="hover:text-white transition-colors">
                  14. What Changed in My Thinking?
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Credential & Report Action */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Báo cáo đầy đủ
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Bản báo cáo hoàn chỉnh dài 86 trang đã được thẩm định và lưu trữ tại văn phòng Khoa Kinh tế Chính trị.
            </p>
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-white rounded transition-colors cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#164E37]" />
              <span>Xem tóm lược & Mục lục</span>
            </button>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar (Strict Compliance with Provenance requirements) */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <div className="space-y-1">
            <div className="font-semibold text-stone-300 font-mono">
              Digital Companion to the Detrang Farm Internship Report · 2026
            </div>
            <div className="text-stone-400">
              Author: <strong className="text-stone-200">Đinh Xuân Trường</strong> (MSV: 25050428) · Faculty of Political Economy · University of Economics and Business – VNU
            </div>
          </div>

          <div className="text-[12px] text-stone-400 max-w-md sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-amber-600/60 pl-2.5 sm:pl-0 sm:pr-2.5">
            This is an academic student project and not an official website of Detrang Farm.
          </div>
        </div>

      </div>
    </footer>
  );
};
