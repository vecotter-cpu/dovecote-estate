import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // config file is inside client/, so '.' == client/
  root: '.',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
});
