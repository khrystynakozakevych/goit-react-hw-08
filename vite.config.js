import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      yup: 'yup/dist/yup.esm.js',
    },
  },
  optimizeDeps: {
    include: ['yup'],
  },
  build: {
    sourcemap: true,
  },
});
