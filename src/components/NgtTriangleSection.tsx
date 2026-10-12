import React, { useState } from 'react';
import { NGT_NODES } from '../data/fieldStudyData';
import { NgtVertexKey } from '../types';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { EvidenceImage } from './EvidenceImage';

export const NgtTriangleSection: React.FC = () => {
  const [activeKey, setActiveKey] = useState<NgtVertexKey>('integrated');
  const activeData = NGT_NODES[activeKey];

  return (
    <section id="ngt-triangle" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vũ khí số 1 — Khung phân tích cốt lõi</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            03. The N–G–T Value Triangle
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Tam giác giá trị <strong className="text-stone-900 font-semibold">Nông nghiệp – Giáo dục – Trải nghiệm</strong> là mô hình hóa cách Detrang Farm tích hợp 3 chức năng trên cùng một nền tảng không gian và tài nguyên sinh thái.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#164E37]/8 border border-[#164E37]/20 text-[#164E37] text-xs font-mono font-medium">
            <span>Khung phân tích được phát triển riêng cho nghiên cứu tình huống trong báo cáo này.</span>
            <span className="hidden sm:inline text-stone-400">|</span>
            <span className="hidden sm:inline text-stone-600 font-sans italic text-[11px]">Analytical framework developed for this field-study report (not an official Detrang Farm model).</span>
          </div>
        </div>

        {/* Interactive Interactive Diagram + Detail Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive SVG Triangle Canvas */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs flex flex-col items-center justify-center relative">
            <div className="w-full text-center pb-2 text-xs uppercase tracking-wider text-stone-400 font-mono">
              Nhấp vào đỉnh hoặc tâm điểm để kích hoạt góc nhìn
            </div>

            {/* SVG Triangle Visual */}
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <svg
                viewBox="0 0 400 380"
                className="w-full h-full select-none"
              >
                <defs>
                  {/* Subtle triangle fill gradient */}
                  <linearGradient id="triangleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#164E37" stopOpacity="0.06" />
                    <stop offset="50%" stopColor="#784A29" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#164E37" stopOpacity="0.08" />
                  </linearGradient>

                  <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.12" />
                  </filter>
                </defs>

                {/* Connecting Triangle Geometry */}
                <polygon
                  points="200,50 60,310 340,310"
                  fill="url(#triangleGrad)"
                  stroke="#164E37"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="transition-all duration-300"
                />

                {/* Lines radiating to center */}
                <line x1="200" y1="50" x2="200" y2="210" stroke="#784A29" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="60" y1="310" x2="200" y2="210" stroke="#164E37" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="340" y1="310" x2="200" y2="210" stroke="#164E37" strokeWidth="1.5" strokeOpacity="0.4" />

                {/* Vertex 1: Top = GIÁO DỤC (Education) */}
                <g
                  onClick={() => setActiveKey('education')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="200"
                    cy="50"
                    r={activeKey === 'education' ? '38' : '32'}
                    fill={activeKey === 'education' ? '#164E37' : '#FFFFFF'}
                    stroke="#164E37"
                    strokeWidth="3"
                    filter="url(#subtleGlow)"
                    className="transition-all duration-300"
                  />
                  <text
                    x="200"
                    y="54"
                    textAnchor="middle"
                    fill={activeKey === 'education' ? '#FFFFFF' : '#164E37'}
                    className="text-[11px] sm:text-xs font-bold font-sans pointer-events-none tracking-wide"
                  >
                    GIÁO DỤC
                  </text>
                  <text
                    x="200"
                    y="14"
                    textAnchor="middle"
                    fill="#164E37"
                    className="text-xs font-mono font-bold"
                  >
                    Education
                  </text>
                </g>

                {/* Vertex 2: Bottom Left = NÔNG NGHIỆP (Agriculture) */}
                <g
                  onClick={() => setActiveKey('agriculture')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="60"
                    cy="310"
                    r={activeKey === 'agriculture' ? '38' : '32'}
                    fill={activeKey === 'agriculture' ? '#164E37' : '#FFFFFF'}
                    stroke="#164E37"
                    strokeWidth="3"
                    filter="url(#subtleGlow)"
                    className="transition-all duration-300"
                  />
                  <text
                    x="60"
                    y="314"
                    textAnchor="middle"
                    fill={activeKey === 'agriculture' ? '#FFFFFF' : '#164E37'}
                    className="text-[10px] sm:text-[11px] font-bold font-sans pointer-events-none"
                  >
                    NÔNG NGHIỆP
                  </text>
                  <text
                    x="60"
                    y="358"
                    textAnchor="middle"
                    fill="#164E37"
                    className="text-xs font-mono font-bold"
                  >
                    Agriculture
                  </text>
                </g>

                {/* Vertex 3: Bottom Right = TRẢI NGHIỆM (Experience) */}
                <g
                  onClick={() => setActiveKey('experience')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="340"
                    cy="310"
                    r={activeKey === 'experience' ? '38' : '32'}
                    fill={activeKey === 'experience' ? '#164E37' : '#FFFFFF'}
                    stroke="#164E37"
                    strokeWidth="3"
                    filter="url(#subtleGlow)"
                    className="transition-all duration-300"
                  />
                  <text
                    x="340"
                    y="314"
                    textAnchor="middle"
                    fill={activeKey === 'experience' ? '#FFFFFF' : '#164E37'}
                    className="text-[10px] sm:text-[11px] font-bold font-sans pointer-events-none"
                  >
                    TRẢI NGHIỆM
                  </text>
                  <text
                    x="340"
                    y="358"
                    textAnchor="middle"
                    fill="#164E37"
                    className="text-xs font-mono font-bold"
                  >
                    Experience
                  </text>
                </g>

                {/* Center Node: INTEGRATED VALUE */}
                <g
                  onClick={() => setActiveKey('integrated')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="200"
                    cy="210"
                    r={activeKey === 'integrated' ? '42' : '36'}
                    fill={activeKey === 'integrated' ? '#784A29' : '#FAF9F5'}
                    stroke="#784A29"
                    strokeWidth="3"
                    filter="url(#subtleGlow)"
                    className="transition-all duration-300"
                  />
                  <text
                    x="200"
                    y="206"
                    textAnchor="middle"
                    fill={activeKey === 'integrated' ? '#FFFFFF' : '#784A29'}
                    className="text-[11px] font-bold font-sans uppercase pointer-events-none"
                  >
                    INTEGRATED
                  </text>
                  <text
                    x="200"
                    y="222"
                    textAnchor="middle"
                    fill={activeKey === 'integrated' ? '#FFFFFF' : '#784A29'}
                    className="text-[11px] font-bold font-sans uppercase pointer-events-none"
                  >
                    VALUE
                  </text>
                </g>

              </svg>
            </div>

            {/* Quick Segment Selector Buttons */}
            <div className="grid grid-cols-4 gap-1.5 w-full mt-4 pt-4 border-t border-stone-200">
              <button
                onClick={() => setActiveKey('agriculture')}
                className={`py-1.5 text-xs font-medium rounded transition-colors ${
                  activeKey === 'agriculture' ? 'bg-[#164E37] text-white' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                Nông nghiệp
              </button>
              <button
                onClick={() => setActiveKey('education')}
                className={`py-1.5 text-xs font-medium rounded transition-colors ${
                  activeKey === 'education' ? 'bg-[#164E37] text-white' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                Giáo dục
              </button>
              <button
                onClick={() => setActiveKey('experience')}
                className={`py-1.5 text-xs font-medium rounded transition-colors ${
                  activeKey === 'experience' ? 'bg-[#164E37] text-white' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                Trải nghiệm
              </button>
              <button
                onClick={() => setActiveKey('integrated')}
                className={`py-1.5 text-xs font-medium rounded transition-colors ${
                  activeKey === 'integrated' ? 'bg-[#784A29] text-white' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                Tích hợp
              </button>
            </div>
          </div>

          {/* Right Column: Deep Academic Detail Inspector Card */}
          <div className="lg:col-span-6 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#784A29] font-mono">
                  Chi tiết phân tích đỉnh
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                  {activeData.label}
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-0.5">{activeData.subLabel}</p>
              </div>

              {/* Evidence Code References */}
              <div className="flex items-center gap-1.5">
                {activeData.evidenceCodes.map((code) => (
                  <span
                    key={code}
                    className="font-mono text-xs px-2 py-0.5 bg-stone-100 border border-stone-200 rounded text-stone-700 font-semibold"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-sm sm:text-base text-stone-700 font-medium">
              {activeData.tagline}
            </p>

            {/* Elements List */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
                Các thành tố cấu thành quan sát được:
              </div>
              <ul className="space-y-2">
                {activeData.elements.map((el, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#164E37] shrink-0 mt-0.5" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Economic Meaning & Academic Quote Callout */}
            <div className="bg-[#FAF9F5] border-l-3 border-[#164E37] p-4 rounded-r space-y-2 text-xs sm:text-sm">
              <div className="font-semibold text-[#164E37] uppercase tracking-wider text-[11px]">
                Góc nhìn Kinh tế Chính trị:
              </div>
              <p className="text-stone-800 italic">
                “{activeData.academicQuote}”
              </p>
              <div className="text-stone-600 text-xs pt-1 border-t border-stone-200">
                <span className="font-medium text-stone-900">Hàm ý kinh tế:</span> {activeData.economicMeaning}
              </div>
            </div>

            {/* Real Evidence Pairing: TT05 (Main Field Image) + TD04 (Supporting Seminar Thumbnail) */}
            <div className="pt-3 border-t border-stone-100 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider text-stone-500">
                <span>Minh chứng Tam giác N–G–T:</span>
                <span className="text-stone-400 font-normal">Nông nghiệp → Giáo dục → Trải nghiệm</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
                {/* TT05: Main Visual */}
                <div className="sm:col-span-8">
                  <EvidenceImage
                    code="TT05"
                    aspectRatio="aspect-16/10"
                    caption="TT05 — Khu vực vật nuôi tại Detrang Farm, 19/09/2026."
                    showCaption={true}
                  />
                </div>
                {/* TD04: Supporting Seminar Thumbnail */}
                <div className="sm:col-span-4 space-y-1">
                  <EvidenceImage
                    code="TD04"
                    aspectRatio="aspect-4/3"
                    caption="TD04 — Slide tọa đàm: vật nuôi và định hướng giáo dục trải nghiệm."
                    showCaption={false}
                  />
                  <div className="text-[11px] font-mono text-stone-500 leading-tight">
                    TD04 · Tọa đàm định hướng giáo dục
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
