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

## Заметки

- Backend не используется: форма записи работает как локальное success-state.
- Изображения подключены по прямым URL Unsplash.
- Шрифты: Manrope, Inter (Google Fonts).
