import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173,
    allowedHosts: ['digital-ramayana.onrender.com'],
    host: '0.0.0.0'
  },
  plugins: [react()],
})





