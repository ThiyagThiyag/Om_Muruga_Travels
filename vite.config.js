import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const asyncCssPlugin = () => ({
  name: 'async-css-plugin',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
      `<link rel="preload" as="style" href="$1" crossorigin>
    <link rel="stylesheet" href="$1" media="print" onload="this.media='all'" crossorigin>
    <noscript><link rel="stylesheet" href="$1" crossorigin></noscript>`
    );
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), asyncCssPlugin()],
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
