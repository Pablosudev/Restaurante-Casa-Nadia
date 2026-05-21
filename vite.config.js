import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
<<<<<<< HEAD
  base: '/Restaurante-Casa-Nadia/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs'
  }
})
=======
  plugins: [react(), tailwindcss()],
})
>>>>>>> a108583dd779e44ade1189f059ac5670073bdbae
