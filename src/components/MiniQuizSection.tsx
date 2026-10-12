import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/fieldStudyData';
import { CheckCircle2, XCircle, RotateCcw, Award, ChevronRight } from 'lucide-react';

export const MiniQuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="mini-quiz" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#784A29] font-bold">
            Kiểm tra tri thức học thuật
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
            16. Test Your Understanding
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-body max-w-2xl mx-auto leading-relaxed">
            5 câu hỏi trắc nghiệm ngắn giúp củng cố các luận điểm kinh tế chính trị, cấu trúc Tam giác N–G–T và cơ chế chuyển hóa giá trị.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
          {!quizFinished ? (
            <div className="space-y-6">
              
              {/* Progress & Question Count */}
              <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-100 pb-3">
                <span>Câu hỏi {currentIdx + 1} / {QUIZ_QUESTIONS.length}</span>
                <span>Điểm tích lũy: {score} / {QUIZ_QUESTIONS.length}</span>
              </div>

              {/* Question Statement */}
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900 leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200';
                  
                  if (isAnswered) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                    } else if (idx === selectedOption) {
                      btnStyle = 'bg-red-50 border-red-400 text-red-900';
                    } else {
                      btnStyle = 'bg-stone-50 text-stone-400 border-stone-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              {isAnswered && (
                <div className="pt-4 border-t border-stone-100 space-y-4 animate-in fade-in duration-200">
                  <div className="bg-[#FAF9F5] border-l-2 border-[#164E37] p-3.5 rounded-r text-xs text-stone-700 leading-relaxed font-sans">
                    <strong className="text-stone-900 block mb-0.5">Giải thích khoa học:</strong>
                    {currentQ.explanation}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-5 py-2 bg-[#164E37] hover:bg-[#0F3827] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                    >
                      <span>{currentIdx + 1 === QUIZ_QUESTIONS.length ? 'Xem kết quả' : 'Câu hỏi tiếp theo'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            // Quiz Completion State
            <div className="text-center py-8 space-y-5">
              <div className="w-12 h-12 rounded-full bg-[#164E37]/10 text-[#164E37] mx-auto flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                  You have completed the Detrang Farm Field Study.
                </h3>
                <p className="text-stone-600 text-sm font-body">
                  Bạn đã trả lời đúng <strong className="text-stone-900">{score} / {QUIZ_QUESTIONS.length}</strong> câu hỏi. Hiểu sâu sắc logic tích hợp N–G–T và phương pháp tiếp cận kinh tế chính trị đối với nông nghiệp đa chức năng.
                </p>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-50 rounded-md transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Làm lại bài kiểm tra</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
