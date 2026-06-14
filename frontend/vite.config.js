import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {   // 🔥 THIS IS CORRECT
        target: "https://scheme-finder-6.onrender.com",
        changeOrigin: true,
        secure: false
      }
    }
  }
})