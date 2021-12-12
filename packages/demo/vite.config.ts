import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/index.html'
  },
  resolve: {
    alias: {
      '@whale/assets-modal-viewer': path.resolve(__dirname, './mock/assets-modal-viewer'),
      '@whale/whale-avatar': path.resolve(__dirname, './mock/whale-avatar'),
      "@whale/whale-uploader": path.resolve(__dirname, './mock/whale-uploader'),
    }
  }
})
