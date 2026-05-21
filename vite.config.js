import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Restaurante-Casa-Nadia/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs'
  }
<<<<<<< HEAD
})
=======
})
>>>>>>> 50350ca1ae349aed6467e43d5a1737892752f16c
