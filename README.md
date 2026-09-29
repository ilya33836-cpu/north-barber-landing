# NORTH BARBER — landing page

Одностраничный сайт премиального мужского барбершопа в тёмной эстетике.

## Стек

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React
- oxlint

## Скрипты

```bash
npm install
npm run dev      # dev-сервер
npm run build    # tsc -b && vite build
npm run preview  # предпросмотр сборки
npm run lint     # oxlint
```

## Структура

```
src/
  components/     секции лендинга и UI-примитивы
  data/content.ts весь контент (тексты, услуги, цены, FAQ, отзывы)
  lib/            хуки, анимации, изображения
  App.tsx         порядок секций
  index.css       дизайн-система и глобальные стили
```

## Секции

Header · Hero · TrustBlock · Services · Masters · Gallery · WhyUs · Pricing ·
Process · Testimonials · Faq · CtaBooking · Contacts · Footer

## Деплой

### GitHub Pages (активный)

Сайт: **https://ilya33836-cpu.github.io/north-barber-landing/**

Деплой автоматический: workflow `.github/workflows/deploy-pages.yml` собирает
проект на каждом push в `main` и публикует его через GitHub Pages.
Базовый путь передаётся в сборку через `VITE_BASE` (см. `vite.config.ts`),
поэтому локальная разработка работает с обычным `/`.

Ручной перезапуск деплоя: вкладка **Actions → Deploy to GitHub Pages → Run workflow**.

### Vercel (альтернатива)

1. На https://vercel.com → **Add New… → Project** → импортировать репозиторий.
2. Настройки по умолчанию: Framework Preset **Vite**, Build Command `npm run build`,
   Output Directory `dist` (зафиксировано в `vercel.json`).
3. **Deploy**. Push в `main` даёт production-деплой, PR — preview.

Через CLI:

```bash
npm install -g vercel
vercel login
vercel link --repo
vercel deploy --prod
```

## Заметки

- Backend не используется: форма записи работает как локальное success-state.
- Изображения лежат локально в `public/images` (WebP, 3.6 МБ на 17 картинок × несколько ширин). Внешний Unsplash недоступен из РФ, поэтому hotlink-ссылок в проекте больше нет. Перегенерировать: переписать ключи в `src/lib/images.ts` / `src/data/content.ts` и заново нарезать файлы `<key>-<width>.webp` в `public/images` плюс `public/images/lqip/<key>.webp`.
- `srcset`/`sizes` собирает компонент `src/components/ui/Photo.tsx`, LQIP — 24px-превью под каждым lazy-изображением.
- Шрифты Manrope и Inter лежат локально в `src/assets/fonts` (кириллический и латинский сабсеты, `font-display: swap`); внешних запросов к Google Fonts нет.
- Мобильная оптимизация: sticky-бар «Записаться/Позвонить», галерея превращается в свайп-карусель, у полей ввода 16px (iOS не зумит страницу при фокусе), тяжёлые `backdrop-filter` и полноэкранное зерно отключены на телефонах.
