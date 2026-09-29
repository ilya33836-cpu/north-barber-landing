import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// На GitHub Pages проект живёт по адресу /<имя-репозитория>/,
// поэтому базовый путь задаётся через переменную окружения.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
