import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const FONT_ASSETS = ['inter-cyrillic', 'inter-latin', 'manrope-cyrillic', 'manrope-latin']

function preloadFonts(): Plugin {
  return {
    name: 'preload-fonts',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const base = process.env.VITE_BASE ?? '/'
      const html = bundle['index.html']
      if (!html || html.type !== 'asset' || typeof html.source !== 'string') return

      const links = Object.keys(bundle)
        .filter((file) => FONT_ASSETS.some((name) => file.includes(name)))
        .map(
          (file) =>
            `<link rel="preload" as="font" type="font/woff2" crossorigin href="${base}${file}">`,
        )
        .join('\n    ')

      html.source = html.source.replace('</head>', `    ${links}\n  </head>`)
    },
  }
}

// На GitHub Pages проект живёт по адресу /<имя-репозитория>/,
// поэтому базовый путь задаётся через переменную окружения.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss(), preloadFonts()],
  build: {
    target: 'es2020',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return 'motion'
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react'
        },
      },
    },
  },
})
