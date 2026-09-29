const UNSPLASH = 'https://images.unsplash.com'

export type Photo = {
  id: string
  /** ширина / высота */
  ratio: number
  /** кандидаты ширины для srcset */
  widths: number[]
  q: number
}

type UrlOpts = { w: number; h?: number; q?: number }

function url(id: string, { w, h, q }: UrlOpts): string {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    fm: 'jpg',
    q: String(q ?? 70),
    w: String(w),
  })
  if (h) params.set('h', String(h))
  return `${UNSPLASH}/${id}?${params.toString()}`
}

export function photo(id: string, ratio: number, widths: number[], q = 68): Photo {
  return { id, ratio, widths, q }
}

export function photoUrl(p: Photo, w: number): string {
  return url(p.id, { w, h: Math.round(w / p.ratio), q: p.q })
}

export function photoSrcSet(p: Photo): string {
  return p.widths.map((w) => `${photoUrl(p, w)} ${w}w`).join(', ')
}

/** Крошечная превью-картинка: пока грузится основная, фон не выглядит пустым. */
export function photoLqip(p: Photo): string {
  return url(p.id, { w: 24, h: Math.round(24 / p.ratio), q: 25 })
}

export const GALLERY_WIDTHS = [320, 480, 720, 1080]
export const GALLERY_LARGE_WIDTHS = [720, 1200, 1800]
export const CARD_WIDTHS = [360, 540, 720, 960]
export const HERO_WIDTHS = [420, 640, 900, 1200]

export const IMG = {
  heroBarber: photo('photo-1605497788044-5a32c7078486', 4 / 5, HERO_WIDTHS, 70),
  interiorRow: photo('photo-1536520002442-39764a41e987', 4 / 5, CARD_WIDTHS, 66),
} as const
