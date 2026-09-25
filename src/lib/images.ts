const UNSPLASH = 'https://images.unsplash.com'

type ImgOpts = {
  w: number
  h?: number
}

export function unsplash(id: string, { w, h }: ImgOpts): string {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    fm: 'jpg',
    q: '78',
    w: String(w),
  })
  if (h) params.set('h', String(h))
  return `${UNSPLASH}/${id}?${params.toString()}`
}

export const IMG = {
  heroInterior: unsplash('photo-1585747860715-2ba37e788b70', { w: 1400, h: 1750 }),
  heroBarber: unsplash('photo-1605497788044-5a32c7078486', { w: 1200, h: 1500 }),
  interiorRow: unsplash('photo-1536520002442-39764a41e987', { w: 1400, h: 1050 }),
  interiorSalon: unsplash('photo-1592647420148-bfcc177e2117', { w: 1200, h: 900 }),
  chairSilver: unsplash('photo-1621645582931-d1d3e6564943', { w: 1200, h: 900 }),
  exterior: unsplash('photo-1678356164573-9a534fe43958', { w: 1200, h: 800 }),
  toolsFlatlay: unsplash('photo-1621605815971-fbc98d665033', { w: 1200, h: 800 }),
  masterAlex: unsplash('photo-1567894340315-735d7c361db0', { w: 900, h: 1200 }),
  masterMax: unsplash('photo-1635273051937-a0ddef9573b6', { w: 900, h: 1200 }),
  masterDanil: unsplash('photo-1593702275687-f8b402bf1fb5', { w: 900, h: 1200 }),
} as const
