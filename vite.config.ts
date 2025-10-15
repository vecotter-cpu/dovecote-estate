import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: '.', // root of project
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // "@/..." → ./src
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
