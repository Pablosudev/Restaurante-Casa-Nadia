import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Restaurante-Casa-Nadia/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs'
  }
})
