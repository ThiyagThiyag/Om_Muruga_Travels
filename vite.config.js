import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import fs from 'fs'
import path from 'path'

const inlineCssPlugin = () => ({
  name: 'inline-css-plugin',
  enforce: 'post',
  generateBundle(_, bundle) {
    let cssContent = '';
    const cssFileNames = [];
    for (const [fileName, asset] of Object.entries(bundle)) {
      if (fileName.endsWith('.css') && asset.type === 'asset') {
        cssContent += asset.source;
        cssFileNames.push(fileName);
      }
    }
    for (const [, asset] of Object.entries(bundle)) {
      if (asset.fileName === 'index.html' && asset.type === 'asset') {
        for (const cssFile of cssFileNames) {
          const regex = new RegExp(`<link[^>]*href="[/]?[^"]*${cssFile.replace('.', '\\.')}"[^>]*>`, 'g');
          asset.source = asset.source.replace(regex, '');
        }
        asset.source = asset.source.replace('</head>', `<style>${cssContent}</style></head>`);
      }
    }
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'vendor-react';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
