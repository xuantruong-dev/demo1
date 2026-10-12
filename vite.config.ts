import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

// Plugin to duplicate index.html to 404.html so GitHub Pages handles SPA routes without blank screens
function githubPagesSpaPlugin() {
  return {
    name: 'github-pages-spa-404',
    closeBundle() {
      try {
        const distDir = path.resolve(__dirname, 'dist');
        const indexPath = path.join(distDir, 'index.html');
        const notFoundPath = path.join(distDir, '404.html');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log('✓ Successfully generated 404.html for GitHub Pages fallback');
        }
      } catch (err) {
        console.warn('Notice: Could not copy 404.html:', err);
      }
    },
  };
}

// Automatically detect GitHub repo name (e.g. /demo1/) or fallback to relative base './'
const base = process.env.BASE_PATH || (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : './');

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    githubPagesSpaPlugin(),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
