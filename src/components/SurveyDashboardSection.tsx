import React, { useState } from 'react';
import { SURVEY_KPIS, SURVEY_CHARTS } from '../data/fieldStudyData';
import { Eye, EyeOff, Sparkles, TrendingUp, ArrowDown, FileText, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export const SurveyDashboardSection: React.FC = () => {
  // Keep track of which charts have insight expanded
  const [expandedInsights, setExpandedInsights] = useState<Record<string, boolean>>({
    'chart-a': true,
    'chart-b': true,
    'chart-c': true,
    'chart-d': true,
  });

  const toggleInsight = (chartId: string) => {
    setExpandedInsights((prev) => ({
      ...prev,
      [chartId]: !prev[chartId],
    }));
  };

  return (
    <section id="survey-dashboard" className="py-12 sm:py-16 border-b border-stone-200/80 bg-[#FBFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#164E37] font-bold flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Phần 9: Phân tích thực nghiệm định lượng</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            09. What Did Students Say?
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            Dữ liệu sơ cấp được thu thập độc lập từ khảo sát trực tuyến sau chuyến đi. <strong className="text-stone-900 font-semibold">Post-field-study student survey conducted by the author.</strong>
          </p>

          {/* Survey Provenance & Methodology Statement */}
          <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-stone-200/90 text-xs text-stone-700 space-y-1">
            <div className="font-mono font-bold text-[#164E37] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Nguồn gốc & Phương pháp khảo sát (Survey Provenance):</span>
            </div>
            <p className="font-sans leading-relaxed">
              Khảo sát do tác giả trực tiếp thiết kế và thực hiện với các sinh viên tham gia đợt kiến tập. Tiếp nhận: <strong className="text-stone-900 font-mono">85 phản hồi</strong> (Responses received: 85); đưa vào phân tích: <strong className="text-stone-900 font-mono">72 phản hồi hợp lệ</strong> (Responses analyzed: 72) sau khi sàng lọc làm sạch.
            </p>
            <div className="text-[11px] font-mono text-stone-500 italic">
              * Không tính toán tỷ lệ phản hồi (response rate %) do tổng số lượng người tham gia chưa được xác minh chính thức từ phía nhà trường/nông trại.
            </div>
          </div>
        </div>

        {/* 4 KPI Cards Grid (Strictly no response rate %, no 85/200, no 85/250, no 200+ numerical KPI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* KPI 1 */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2 hover:border-[#164E37]/50 transition-all">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Responses received
            </div>
            <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#164E37] tabular-nums">
              85
            </div>
            <div className="text-xs font-semibold text-[#784A29]">
              Submitted responses
            </div>
            <p className="text-xs text-stone-600 font-sans leading-normal pt-1 border-t border-stone-100">
              Tổng số phản hồi thu thập qua phiếu khảo sát trực tuyến sau chuyến đi thực địa.
            </p>
          </div>

          {/* KPI 2 */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2 hover:border-[#164E37]/50 transition-all">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Responses analyzed
            </div>
            <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#164E37] tabular-nums">
              72
            </div>
            <div className="text-xs font-semibold text-[#784A29]">
              Cleaned analytical dataset (n = 72)
            </div>
            <p className="text-xs text-stone-600 font-sans leading-normal pt-1 border-t border-stone-100">
              Tập dữ liệu chuẩn hóa đưa vào phân tích sau quy trình kiểm tra chất lượng và làm sạch.
            </p>
          </div>

          {/* KPI 3 */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2 hover:border-[#164E37]/50 transition-all">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Field-study context
            </div>
            <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#164E37] tabular-nums">
              19.09.2026
            </div>
            <div className="text-xs font-semibold text-[#784A29]">
              Ba Vì, Hà Nội
            </div>
            <p className="text-xs text-stone-600 font-sans leading-normal pt-1 border-t border-stone-100">
              Chương trình kiến tập thực tế chính thức của Khoa Kinh tế Chính trị – UEB – VNU.
            </p>
          </div>

          {/* KPI 4 */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2 hover:border-[#164E37]/50 transition-all">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Post-field-study survey
            </div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#164E37] leading-tight pt-1">
              Convenience sample
            </div>
            <div className="text-xs font-semibold text-[#784A29]">
              Mẫu thuận tiện sau thực địa
            </div>
            <p className="text-xs text-stone-600 font-sans leading-normal pt-1 border-t border-stone-100">
              Mẫu thuận tiện phục vụ đối chiếu thực nghiệm; không tính tỷ lệ phản hồi tổng thể.
            </p>
          </div>

        </div>

        {/* Survey Data Flow + Survey Note Methodology Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Methodological Visual: Survey Data Flow */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164E37] font-mono border-b border-stone-100 pb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Survey Data Flow · Luồng xử lý dữ liệu</span>
              </div>
              <p className="text-xs text-stone-600 font-sans mt-2">
                Quy trình làm sạch dữ liệu khoa học bảo đảm tính đại diện của mẫu phân tích.
              </p>
            </div>

            {/* Clean, academic visual flow */}
            <div className="flex flex-col items-center justify-center space-y-2 py-2">
              
              {/* Box 1 */}
              <div className="w-full max-w-xs bg-stone-50 border border-stone-300 rounded-lg p-3 text-center shadow-2xs">
                <div className="text-lg font-bold font-mono text-stone-900">85</div>
                <div className="text-xs font-mono uppercase font-semibold text-stone-600 tracking-wider">
                  RESPONSES RECEIVED
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5 font-sans">
                  Thu nhận qua biểu mẫu trực tuyến
                </div>
              </div>

              {/* Down Arrow 1 */}
              <div className="flex items-center justify-center text-stone-400">
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </div>

              {/* Box 2 */}
              <div className="w-full max-w-xs bg-emerald-50/70 border border-emerald-300/80 rounded-lg p-2.5 text-center shadow-2xs">
                <div className="text-xs font-mono uppercase font-bold text-emerald-900 tracking-wider flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>DATA QUALITY CHECK</span>
                </div>
                <div className="text-[11px] text-emerald-800 mt-0.5 font-sans">
                  Kiểm định tính hợp lệ, loại bỏ phiếu trống hoặc trùng lặp
                </div>
              </div>

              {/* Down Arrow 2 */}
              <div className="flex items-center justify-center text-stone-400">
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </div>

              {/* Box 3 */}
              <div className="w-full max-w-xs bg-[#164E37] text-white rounded-lg p-3 text-center shadow-xs">
                <div className="text-lg font-bold font-mono text-white">72</div>
                <div className="text-xs font-mono uppercase font-semibold text-emerald-100 tracking-wider">
                  RESPONSES ANALYZED
                </div>
                <div className="text-[11px] text-emerald-200 mt-0.5 font-sans">
                  Bộ dữ liệu phân tích chuẩn hóa chính thức (n = 72)
                </div>
              </div>

            </div>

            <div className="text-[11px] text-stone-500 font-mono text-center pt-2 border-t border-stone-100">
              Chuẩn hóa mẫu: Loại 13 phiếu không đáp ứng kiểm định chất lượng
            </div>
          </div>

          {/* Visible but Unobtrusive Methodology Card: SURVEY NOTE */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#784A29] font-mono border-b border-stone-100 pb-2">
                <FileText className="w-4 h-4" />
                <span>SURVEY NOTE · Ghi chú phương pháp luận khảo sát</span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-sans">
                <div className="p-3 bg-stone-50 rounded border border-stone-200/80 space-y-1">
                  <span className="font-mono font-bold text-stone-700 uppercase text-[10px] tracking-wider block">
                    Population
                  </span>
                  <span className="text-stone-900 font-medium">
                    Students participating in the Detrang Farm field study.
                  </span>
                </div>

                <div className="p-3 bg-stone-50 rounded border border-stone-200/80 space-y-1">
                  <span className="font-mono font-bold text-stone-700 uppercase text-[10px] tracking-wider block">
                    Method
                  </span>
                  <span className="text-stone-900 font-medium">
                    Online post-visit convenience survey.
                  </span>
                </div>

                <div className="p-3 bg-stone-50 rounded border border-stone-200/80 space-y-1">
                  <span className="font-mono font-bold text-stone-700 uppercase text-[10px] tracking-wider block">
                    Responses received
                  </span>
                  <span className="text-stone-900 font-bold font-mono text-sm">
                    85
                  </span>
                </div>

                <div className="p-3 bg-emerald-50/60 rounded border border-emerald-200 space-y-1">
                  <span className="font-mono font-bold text-emerald-800 uppercase text-[10px] tracking-wider block">
                    Responses analyzed
                  </span>
                  <span className="text-emerald-900 font-bold font-mono text-sm">
                    72
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-stone-700 font-sans">
                <div className="space-y-1">
                  <strong className="text-stone-900 block font-mono text-[11px] uppercase tracking-wider">
                    Purpose:
                  </strong>
                  <p className="leading-relaxed">
                    To supplement field observation with student perceptions of the educational and experiential model.
                  </p>
                </div>

                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 font-mono text-[11px] uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                    <span>Limitation:</span>
                  </div>
                  <p className="leading-relaxed text-stone-700 text-xs">
                    The exact total number of field-study participants was not independently verified. Therefore no survey response rate is calculated, and findings should not be interpreted as representative of all participants or all Detrang Farm customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-stone-500 font-mono pt-2 border-t border-stone-100 flex items-center justify-between">
              <span>Chuẩn mực nghiên cứu: UEB – VNU</span>
              <span>Dataset size: n = 72</span>
            </div>
          </div>

        </div>

        {/* 4 Analytical Charts Grid (All strictly based on cleaned analytical dataset n = 72) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-2">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-stone-900">
                Phân tích định lượng chuyên sâu (Analytical Charts)
              </h3>
              <p className="text-xs text-stone-600 font-sans mt-0.5">
                Percentages calculated from the cleaned analytical dataset (n = 72).
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-stone-100 text-stone-700 rounded border border-stone-200">
              Cleaned sample: n = 72
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
            {SURVEY_CHARTS.map((chart) => {
              const isInsightOpen = expandedInsights[chart.id];

              return (
                <div
                  key={chart.id}
                  className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Chart Title and Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-editorial text-xl font-bold text-stone-900">
                          {chart.title}
                        </h3>
                        <p className="text-xs text-stone-500 font-mono mt-0.5">
                          {chart.subtitle}
                        </p>
                      </div>

                      {/* Toggle Insight Button */}
                      <button
                        onClick={() => toggleInsight(chart.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer shrink-0 ${
                          isInsightOpen
                            ? 'bg-[#164E37] text-white'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                        }`}
                        title="Xem kết luận phân tích học thuật"
                      >
                        {isInsightOpen ? (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            <span>Ẩn insight</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5" />
                            <span>View insight</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* SVG Bar / Visual Representation */}
                    <div className="space-y-3 pt-2">
                      {chart.chartType === 'horizontal_bar' ? (
                        // Horizontal Likert Bar
                        chart.items.map((item, i) => {
                          const widthPct = Math.round((item.score / 5.0) * 100);
                          return (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-xs text-stone-700">
                                <span className="font-medium">{item.label}</span>
                                <span className="font-mono text-stone-900 font-bold tabular-nums">
                                  {item.score} {item.unit}
                                </span>
                              </div>
                              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#164E37] rounded-full transition-all duration-500"
                                  style={{ width: `${widthPct}%` }}
                                />
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        // Standard Proportion Bars (percentages from n = 72)
                        chart.items.map((item, i) => {
                          const maxVal = Math.max(...chart.items.map((x) => x.score));
                          const barWidth = Math.round((item.score / maxVal) * 100);
                          return (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-xs text-stone-700">
                                <span className="font-medium">{item.label}</span>
                                <span className="font-mono text-stone-900 font-bold tabular-nums">
                                  {item.score} {item.unit || '%'}
                                </span>
                              </div>
                              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    i === 0 ? 'bg-[#164E37]' : i === 1 ? 'bg-[#22674B]' : 'bg-[#784A29]'
                                  }`}
                                  style={{ width: `${barWidth}%` }}
                                />
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  {/* Chart denominator badge & Analytical Insight Box */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                      <span>Mẫu phân tích: n = 72 analyzed responses</span>
                      <span>Nguồn: Khảo sát sơ cấp</span>
                    </div>

                    {isInsightOpen && (
                      <div className="bg-[#FAF9F5] border-l-3 border-[#784A29] p-3.5 rounded-r text-xs space-y-1 transition-all">
                        <div className="font-semibold text-[#784A29] uppercase tracking-wider text-[10px] flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Kết luận rút ra (Analytical Insight):</span>
                        </div>
                        <p className="text-stone-800 leading-relaxed font-sans">
                          {chart.insight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
