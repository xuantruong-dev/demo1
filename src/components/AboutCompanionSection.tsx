import React from 'react';
import { Info, ShieldAlert, Cpu, BookOpen, CheckCircle, GraduationCap, Calendar, User, Building, Compass } from 'lucide-react';

export const AboutCompanionSection: React.FC = () => {
  return (
    <section id="about-companion" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5 font-mono">
            <Info className="w-3.5 h-3.5" />
            <span>Academic Project Provenance</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            About This Digital Companion
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Chứng nhận bản quyền học thuật, nguồn gốc đề tài và tính minh bạch công nghệ của dự án số hóa.
          </p>
        </div>

        {/* Primary Narrative Card & Disclaimer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Declaration Narrative */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-stone-100">
              <Compass className="w-5 h-5 text-[#164E37]" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Mục đích & Bản chất học thuật của Website
              </h3>
            </div>

            <div className="space-y-4 text-sm text-stone-700 leading-relaxed font-sans">
              <p>
                <strong>This Digital Companion was developed specifically for the internship report on Detrang Farm</strong> conducted on 19 September 2026 by a student of the Faculty of Political Economy, University of Economics and Business – Vietnam National University, Hanoi.
              </p>
              
              <div className="p-4 rounded-lg bg-amber-500/10 border-l-4 border-amber-600 text-amber-950 font-medium text-xs sm:text-sm">
                <strong>Quan trọng:</strong> The website is not an official website of Detrang Farm. It is an academic student project created to visualize and extend the analysis presented in the written internship report.
              </div>

              <p>
                The materials used in this website include field photographs, seminar evidence, direct observation, a post-visit student survey, and analytical models developed specifically for this report.
              </p>
            </div>

            {/* AI Transparency Note */}
            <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
              <Cpu className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <p className="font-sans leading-normal">
                <span className="font-semibold text-stone-700">AI Transparency:</span> Website implementation supported by AI tools; research design, field evidence, survey, analytical framework and content curation by the author.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Project Information Specification */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
              <GraduationCap className="w-5 h-5 text-[#784A29]" />
              <h3 className="font-editorial text-lg font-bold text-stone-900">
                Project Information
              </h3>
            </div>

            <div className="divide-y divide-stone-100 text-xs font-mono">
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-stone-500">Project type:</span>
                <span className="font-bold text-stone-900 text-right">Academic Digital Companion</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-stone-500">Field study:</span>
                <span className="font-bold text-[#164E37] text-right">Detrang Farm</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-stone-500">Date:</span>
                <span className="font-bold text-stone-900">19.09.2026</span>
              </div>
              <div className="py-2.5 flex flex-col gap-1">
                <span className="text-stone-500">Author:</span>
                <span className="font-bold text-stone-900 font-sans text-sm">Đinh Xuân Trường</span>
                <span className="text-stone-600 font-mono text-xs">Mã Sinh Viên: <strong className="text-[#164E37]">25050428</strong></span>
              </div>
              <div className="py-2.5 flex flex-col gap-1">
                <span className="text-stone-500">Institution:</span>
                <span className="font-medium text-stone-800 font-sans">
                  Faculty of Political Economy<br />
                  University of Economics and Business – VNU
                </span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-stone-500">Version:</span>
                <span className="font-bold text-stone-900">1.0</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-stone-500">Last updated:</span>
                <span className="font-bold text-stone-900">September 2026</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-stone-500 font-mono italic">
              All rights reserved. Created solely for academic evaluation and pedagogical case study.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
