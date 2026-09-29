import { AnimatePresence, m } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { GALLERY } from '../data/content'
import { useLockBody } from '../lib/hooks'
import { photoUrl } from '../lib/images'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import Photo from './ui/Photo'
import { Section, SectionHeading } from './ui/Primitives'

const SIZES = '(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 68vw'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const close = useCallback(() => setActive(null), [])

  const step = useCallback((direction: 1 | -1) => {
    setActive((current) => {
      if (current === null) return current
      return (current + direction + GALLERY.length) % GALLERY.length
    })
  }, [])

  useLockBody(active !== null)

  useEffect(() => {
    if (active === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close, step])

  const current = active === null ? null : GALLERY[active]

  return (
    <Section id="gallery" className="py-16 sm:py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Галерея"
            title={
              <>
                Работы <span className="text-bronze">мастеров</span>
              </>
            }
            lead="Стрижки, бороды, кресла и инструменты — то, что формирует атмосферу NORTH BARBER."
          />
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="shrink-0 text-[0.75rem] uppercase tracking-[0.24em] text-mute md:text-right"
          >
            {GALLERY.length} кадров
          </m.p>
        </div>
      </div>

      <m.div
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-auto sm:mt-14 sm:block sm:max-w-[88rem] sm:columns-2 sm:gap-4 sm:overflow-visible sm:px-10 xl:px-14 lg:columns-3 sm:[&>*]:mb-4"
      >
        {GALLERY.map((shot, index) => (
          <m.button
            key={shot.id}
            variants={fadeUp}
            type="button"
            onClick={() => setActive(index)}
            className="group relative block w-[82%] shrink-0 snap-start break-inside-avoid overflow-hidden bg-ink-3 text-left sm:mb-4 sm:w-full"
            aria-label={`Открыть: ${shot.caption}`}
          >
            <Photo
              photo={shot.photo}
              alt={shot.caption}
              sizes={SIZES}
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 hidden bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:block"
            />
            <span className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-90 place-items-center border border-bronze/70 bg-ink/70 text-bronze opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 sm:grid">
              <Maximize2 className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent p-3 text-[0.7rem] uppercase tracking-[0.2em] text-bone transition-opacity duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:p-4">
              {shot.caption}
              <span className="text-bronze">{String(index + 1).padStart(2, '0')}</span>
            </span>
          </m.button>
        ))}
      </m.div>

      <AnimatePresence>
        {current ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 sm:p-5"
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center border border-white/15 text-bone transition-colors duration-300 hover:border-bronze hover:text-bronze sm:right-5 sm:top-5"
            >
              <X className="h-5 w-5" />
            </button>

            <m.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={photoUrl(current.photoLarge, 1200)}
                srcSet={current.photoLarge.widths.map((w) => `${photoUrl(current.photoLarge, w)} ${w}w`).join(', ')}
                sizes="100vw"
                alt={current.caption}
                width={1200}
                height={Math.round(1200 / current.photoLarge.ratio)}
                className="max-h-[70svh] w-full object-contain"
              />
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-mute sm:mt-5 sm:text-[0.72rem] sm:tracking-[0.22em]">
                <span className="text-bone">{current.caption}</span>
                <span>
                  {active !== null ? active + 1 : 0} / {GALLERY.length}
                </span>
              </figcaption>
            </m.figure>
          </m.div>
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
