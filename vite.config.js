import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { readFileSync } from 'node:fs';

// The root pages use this classic script. Vite leaves its <script> tags intact,
// so explicitly emit the source at the URL those pages already request.
const classicScript = {
  name: 'emit-classic-site-script',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'script.js',
      source: readFileSync(path.resolve(__dirname, 'script.js'))
    });
  }
};

export default defineConfig({
  plugins: [react(), classicScript],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
   build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        form: path.resolve(__dirname, 'form.html'),
        city: path.resolve(__dirname, 'city.html')
      }
    }
  },
});
