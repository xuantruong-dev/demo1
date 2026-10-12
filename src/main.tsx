// Safe fetch descriptor guard for strict-mode & extension environments
try {
  const currentFetch = typeof window !== 'undefined' && window.fetch ? window.fetch.bind(window) : null;
  let storedFetch = currentFetch;
  const desc = {
    configurable: true,
    enumerable: true,
    get() {
      return storedFetch;
    },
    set(fn: typeof window.fetch) {
      storedFetch = fn;
    },
  };
  try {
    Object.defineProperty(window, 'fetch', desc);
  } catch {
    // ignore
  }
  if (typeof Window !== 'undefined' && Window.prototype) {
    try {
      Object.defineProperty(Window.prototype, 'fetch', desc);
    } catch {
      // ignore
    }
  }
  if (typeof globalThis !== 'undefined' && globalThis !== window) {
    try {
      Object.defineProperty(globalThis, 'fetch', desc);
    } catch {
      // ignore
    }
  }
} catch {
  // ignore
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
