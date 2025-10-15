import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // fine even if not used; harmless

export default defineConfig({
  root: '.',           // client/ is the root
  plugins: [react()],
  build: {
    outDir: 'dist',    // outputs to client/dist
    emptyOutDir: true
  },
});
