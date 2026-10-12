import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FBFBF7] text-[#1E221E] flex items-center justify-center p-4 font-sans">
          <div className="max-w-lg w-full bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-lg text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Đã có sự cố khi tải trang
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Ứng dụng gặp phải một lỗi hiển thị ngoài ý muốn. Vui lòng tải lại trang hoặc thử lại.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-left text-xs font-mono text-stone-600 overflow-x-auto max-h-32">
                {this.state.error.message}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#164E37] hover:bg-[#0F3827] rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Tải lại trang</span>
              </button>
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Thử khôi phục</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
