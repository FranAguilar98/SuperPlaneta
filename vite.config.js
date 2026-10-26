import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "base" debe coincidir con el nombre del repositorio en GitHub (para gh-pages)
export default defineConfig({
  plugins: [react()],
  base: '/super-inventario/',
})
