const BASE = import.meta.env.BASE_URL

export type Photo = {
  key: string
  ratio: number
  widths: number[]
}

type PhotoArgs = [key: string, ratio: number, widths: number[]]

function file(path: string): string {
  return `${BASE}images/${path}.webp`
}

export function photo(...args: PhotoArgs): Photo {
  const [key, ratio, widths] = args
  return { key, ratio, widths }
}

export function photoUrl(p: Photo, w: number): string {
  return file(`${p.key}-${w}`)
}

export function photoSrcSet(p: Photo): string {
  return p.widths.map((w) => `${photoUrl(p, w)} ${w}w`).join(', ')
}

export function photoLqip(p: Photo): string {
  return file(`lqip/${p.key}`)
}

export const GALLERY_WIDTHS = [320, 480, 720, 1080, 1600]
export const CARD_WIDTHS = [360, 540, 720, 960]
export const HERO_WIDTHS = [420, 640, 900, 1200]

export const IMG = {
  heroBarber: photo('hero', 4 / 5, HERO_WIDTHS),
  interiorRow: photo('interior', 4 / 5, CARD_WIDTHS),
} as const
