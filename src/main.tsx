// Safe fetch descriptor guard for strict-mode environments
try {
  const currentFetch = window.fetch ? window.fetch.bind(window) : null;
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
} catch {
  // ignore
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { EvidenceLightboxProvider } from './context/EvidenceLightboxContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EvidenceLightboxProvider>
      <App />
    </EvidenceLightboxProvider>
  </StrictMode>,
);
