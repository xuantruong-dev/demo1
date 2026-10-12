import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Compass } from 'lucide-react';
import { FontFamilyMode, FontSizeMode, LineHeightMode, ContrastMode } from '../types';

interface NavbarProps {
  onOpenReportModal: () => void;
  fontFamilyMode?: FontFamilyMode;
  onChangeFontFamily?: (mode: FontFamilyMode) => void;
  fontSizeMode?: FontSizeMode;
  onChangeFontSize?: (size: FontSizeMode) => void;
  lineHeightMode?: LineHeightMode;
  onChangeLineHeight?: (mode: LineHeightMode) => void;
  contrastMode?: ContrastMode;
  onChangeContrast?: (mode: ContrastMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReportModal }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, Math.round(currentProgress))));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Study', href: '#field-study' },
    { label: 'Tam giác N–G–T', href: '#ngt-triangle' },
    { label: 'Mô hình giá trị', href: '#business-model' },
    { label: 'Hành trình', href: '#visitor-journey' },
    { label: 'Khảo sát', href: '#survey-dashboard' },
    { label: 'Đối chiếu bằng chứng', href: '#evidence-triangulation' },
    { label: 'Phản tư học thuật', href: '#reflection' },
  ];

  return (
    <>
      {/* Reading Progress Indicator line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/20 z-50">
        <div
          className="h-full bg-emerald-400 transition-[width] duration-150 ease-out shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Bar: Adaptive between Dark Emerald Hero and Light Content */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBFBF7]/95 backdrop-blur-md border-b border-stone-200/80 text-stone-900 shadow-2xs'
            : 'bg-[#04140C]/90 backdrop-blur-md border-b border-white/10 text-white'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Zone 1: Brand wordmark (Fixed width / no shrink) */}
          <a
            href="#"
            className="group flex items-center gap-2 transition-colors shrink-0"
          >
            <Compass className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-45 ${
              isScrolled ? 'text-[#164E37]' : 'text-[#E6B980]'
            }`} />
            <span className={`font-editorial text-sm sm:text-base lg:text-lg font-bold tracking-normal transition-colors whitespace-nowrap ${
              isScrolled ? 'text-[#164E37]' : 'text-white'
            }`}>
              DETRANG FARM FIELD STUDY 2026
            </span>
          </a>

          {/* Zone 2: Navigation links distributed across the entire horizontal bar */}
          <nav className="hidden lg:flex flex-1 items-center justify-around xl:justify-evenly px-2 gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 px-1.5 whitespace-nowrap text-center text-xs xl:text-sm hover:underline underline-offset-4 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-[#164E37] decoration-[#164E37]/50' 
                    : 'text-stone-200 hover:text-white decoration-emerald-400/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Fixed width / no shrink) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenReportModal}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors shadow-2xs cursor-pointer whitespace-nowrap ${
                isScrolled
                  ? 'text-white bg-[#164E37] hover:bg-[#0F3827]'
                  : 'text-stone-900 bg-[#E6B980] hover:bg-[#DDA568]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Báo cáo PDF</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 focus:outline-hidden cursor-pointer ${
                isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-4 py-4 space-y-3 shadow-lg transition-colors ${
            isScrolled
              ? 'border-stone-200 bg-[#FBFBF7] text-stone-800'
              : 'border-white/10 bg-[#071F14] text-stone-100'
          }`}>
            <div className={`text-xs uppercase tracking-widest font-sans ${
              isScrolled ? 'text-stone-400' : 'text-stone-400'
            }`}>
              Các đề mục báo cáo
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-stone-800 hover:text-[#164E37]' : 'text-stone-100 hover:text-[#E6B980]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className={`pt-3 border-t flex items-center justify-between text-xs ${
              isScrolled ? 'border-stone-200 text-stone-500' : 'border-white/10 text-stone-400'
            }`}>
              <span>UEB · Khoa Kinh tế Chính trị</span>
              <span className="font-mono">{scrollProgress}% đã đọc</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
