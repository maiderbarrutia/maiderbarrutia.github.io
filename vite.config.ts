import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { imagetools } from 'vite-imagetools'; 

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    imagetools()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './public/data'),
    },
  },
  define: {
    'process.env': {
      EMAIL_USER: JSON.stringify(process.env.EMAIL_USER),
      EMAIL_PASS: JSON.stringify(process.env.EMAIL_PASS),
      RECIPIENT_EMAIL: JSON.stringify(process.env.RECIPIENT_EMAIL),
    },
  },
});
