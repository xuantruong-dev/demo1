import React, { useState } from 'react';
import { FileText, ArrowDown, Sparkles, Maximize2, ShieldCheck } from 'lucide-react';
import { useEvidenceLightbox } from '../context/EvidenceLightboxContext';
import heroBgImage from '../assets/images/nha_detrang_farm_1790333789839.jpg';
import tt10Image from '../assets/images/TT10_nha-detrang-farm.jpg';

interface HeroSectionProps {
  onOpenReportModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReportModal }) => {
  const { openEvidence } = useEvidenceLightbox();
  const [bgImage, setBgImage] = useState<string>(heroBgImage);

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#04140C] text-white">
      
      {/* 1. Static Full-Bleed Background Photography Layer (Không zoom động, giữ tĩnh) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <img
          src={bgImage}
          alt="Nhà nông trại màu đỏ đặc trưng tại Detrang Farm"
          className="w-full h-full object-cover object-[center_35%] lg:object-[68%_center] filter brightness-[0.92] contrast-[1.05]"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== tt10Image) {
              target.src = tt10Image;
            }
          }}
        />
      </div>

      {/* 2. Deep Forest-Green / Emerald Gradient Scrim Overlays (Exact Screenshot Effect) */}
      {/* Horizontal Gradient: deep dark emerald on the left 55%, smoothly revealing pasture and barn on the right */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(3, 16, 10, 0.96) 0%, rgba(5, 24, 15, 0.92) 35%, rgba(6, 30, 19, 0.78) 55%, rgba(7, 34, 21, 0.42) 75%, rgba(5, 22, 14, 0.15) 100%)'
        }}
      />

      {/* Vertical Vignette: Darkens top for header contrast and darkens bottom for smooth transition */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(3, 14, 9, 0.75) 0%, rgba(3, 14, 9, 0.05) 25%, rgba(3, 14, 9, 0.15) 70%, rgba(3, 14, 9, 0.92) 100%)'
        }}
      />

      {/* Radial soft ambient vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 15% 45%, rgba(18, 64, 42, 0.4) 0%, transparent 70%)'
        }}
      />

      {/* 3. Top Metadata Bar (Inside Hero - Matching screenshot) */}
      <div className="relative z-10 w-full border-b border-white/10 px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="text-stone-300 font-bold tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>19.09.2026</span>
          </div>

          <div className="text-stone-200/90 font-sans uppercase font-bold tracking-widest text-[11px] sm:text-xs">
            UEB · KHOA KINH TẾ CHÍNH TRỊ
          </div>

          <div className="hidden sm:flex items-center gap-2 text-stone-300 text-[11px]">
            <span>Detrang Farm, Ba Vì</span>
          </div>
        </div>
      </div>

      {/* 4. Main Foreground Hero Narrative (Aligned to the left on the dark gradient) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-18 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          
          {/* Subtitle Badge (Gold/Amber Tracked Text from screenshot) */}
          <div className="space-y-1.5 gsap-hero-badge">
            <div className="inline-flex items-center gap-2 text-[#E6B980] text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#E6B980]" />
              <span>DIGITAL COMPANION · INTERNSHIP REPORT</span>
            </div>
            <p className="text-xs sm:text-[13px] font-sans text-stone-300/90 italic tracking-wide">
              Phiên bản số hóa được xây dựng riêng cho Báo cáo kiến tập Detrang Farm 2026.
              <span className="hidden sm:inline text-stone-400 font-normal"> · A student-built Digital Companion for the Detrang Farm Field Study Report.</span>
            </p>
          </div>

          {/* Massive Editorial Serif Title */}
          <div className="space-y-1 gsap-hero-title">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.04] drop-shadow-md">
              Detrang Farm <br />
              Field Study 2026
            </h1>
          </div>

          {/* Triple Pillar Subtitle with Multiplication symbols */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-stone-200 gsap-hero-pillars">
            <span>AGRICULTURE</span>
            <span className="text-[#E6B980] font-serif text-base leading-none">×</span>
            <span>EDUCATION</span>
            <span className="text-[#E6B980] font-serif text-base leading-none">×</span>
            <span>EXPERIENCE</span>
          </div>

          {/* Author & Project Metadata Provenance Block */}
          <div className="p-3.5 sm:p-4 rounded-lg bg-black/35 backdrop-blur-md border border-white/15 max-w-xl text-xs font-mono text-stone-300 space-y-1.5 gsap-hero-author">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
              <span className="text-[#E6B980] font-bold uppercase tracking-wider text-[11px]">Academic Field-Study Project</span>
              <span className="text-stone-400 text-[11px]">Date: 19.09.2026</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] pt-0.5">
              <div>
                <span className="text-stone-400">Author:</span> <span className="text-white font-semibold">Đinh Xuân Trường</span>
                <div className="text-stone-400 text-[11px]">Mã Sinh Viên: <span className="text-[#E6B980] font-semibold">25050428</span></div>
              </div>
              <div>
                <span className="text-stone-400">Field Study:</span> <span className="text-white">Detrang Farm</span>
              </div>
              <div className="sm:col-span-2 text-stone-300 pt-0.5">
                <span className="text-stone-400">Institution:</span> Faculty of Political Economy · University of Economics and Business – VNU
              </div>
            </div>
          </div>

          {/* Academic Lead Text */}
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans text-balance gsap-hero-lead">
            Một nghiên cứu tình huống từ chuyến kiến tập thực tế tại Detrang Farm — phản chiếu cấu trúc học thuật của Khoa Kinh tế Chính trị: <span className="text-white font-medium">Tổng quan hoạt động → Phân tích mô hình giá trị → Đúc kết bài học & kỹ năng</span>.
          </p>

          {/* Central Research Question Box with Vertical Line Effect (From screenshot) */}
          <div className="border-l-2 border-[#E6B980] pl-5 sm:pl-6 py-2 my-2 bg-black/15 backdrop-blur-[2px] rounded-r-md max-w-2xl gsap-hero-quote">
            <blockquote className="font-editorial italic text-lg sm:text-2xl text-stone-100 font-normal leading-relaxed text-balance">
              “Khi một trang trại không chỉ tạo ra nông sản mà còn tạo ra tri thức và trải nghiệm, giá trị kinh tế của nó được mở rộng như thế nào?”
            </blockquote>
          </div>

          {/* Interactive CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-7 gsap-hero-cta">
            {/* Scroll down trigger matching screenshot style */}
            <a
              href="#field-study"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-white border-b-2 border-white/80 pb-1.5 hover:border-[#E6B980] hover:text-[#E6B980] transition-all cursor-pointer"
            >
              <span>KHÁM PHÁ NGHIÊN CỨU</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            {/* Read PDF Report button */}
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white text-xs font-mono font-medium transition-all backdrop-blur-xs border border-white/15 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#E6B980]" />
              <span>Báo cáo nghiên cứu PDF</span>
            </button>
          </div>

        </div>
      </div>

      {/* 5. Bottom Metadata & Photographic Evidence Footnote */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-4 border-t border-white/10 bg-black/20 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          
          {/* Left: View evidence info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openEvidence('TT10')}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-stone-300 hover:text-white hover:underline cursor-pointer"
              title="Phóng to ảnh bằng chứng TT10"
            >
              <Maximize2 className="w-3 h-3 text-[#E6B980]" />
              <span>Bằng chứng thực địa TT10 · Nhà nông trại Detrang Farm</span>
            </button>
            <span className="text-white/20">|</span>
            <span className="text-stone-400 text-[11px] font-mono">Ba Vì, Hà Nội</span>
          </div>

          {/* Right: Caption from screenshot */}
          <div className="text-stone-300/80 text-xs font-sans tracking-wide">
            Một nghiên cứu tình huống từ chuyến kiến tập thực tế tại Detrang Farm.
          </div>

        </div>
      </div>

    </section>
  );
};
