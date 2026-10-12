import React from 'react';
import { RESEARCH_QUESTIONS } from '../data/fieldStudyData';
import { HelpCircle, Layers, Users2, TrendingUp } from 'lucide-react';

export const ResearchQuestionSection: React.FC = () => {
  const rqIcons = [
    <Layers className="w-5 h-5 text-[#164E37]" key="1" />,
    <Users2 className="w-5 h-5 text-[#784A29]" key="2" />,
    <TrendingUp className="w-5 h-5 text-[#164E37]" key="3" />,
  ];

  return (
    <section id="research-question" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold">
            Định vị học thuật
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            02. The Research Question
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-body leading-relaxed">
            Hệ thống câu hỏi dẫn dắt toàn bộ cấu trúc báo cáo, biến chuyến đi thực tế thành một công trình nghiên cứu tình huống có phương pháp luận chặt chẽ.
          </p>
        </div>

        {/* Central Research Question Banner */}
        <div className="max-w-4xl mx-auto bg-stone-900 text-white rounded-xl p-6 sm:p-10 text-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-[#164E37]/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-stone-300 text-xs uppercase tracking-widest font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Central Inquiry</span>
          </div>

          <blockquote className="font-editorial text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-stone-100 max-w-3xl mx-auto">
            “How does a farm transform agricultural resources into educational and experiential value?”
          </blockquote>

          <div className="mt-4 pt-3.5 border-t border-stone-800 text-xs sm:text-sm text-stone-400 font-sans">
            Làm thế nào một trang trại chuyển hóa nguồn lực nông nghiệp thành giá trị giáo dục và giá trị trải nghiệm?
          </div>
        </div>

        {/* 3 Secondary Research Questions (RQ1, RQ2, RQ3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto pt-1">
          {RESEARCH_QUESTIONS.subQuestions.map((rq, idx) => (
            <div
              key={rq.code}
              className="bg-white border border-stone-200 rounded-lg p-6 hover:border-[#164E37]/50 transition-all shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-[#164E37]">
                    {rq.code}
                  </span>
                  {rqIcons[idx]}
                </div>
                
                <h3 className="font-editorial text-xl font-bold text-stone-900">
                  {rq.title}
                </h3>

                <p className="text-stone-800 text-sm font-medium leading-relaxed">
                  {rq.question}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-600 italic">
                {rq.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
