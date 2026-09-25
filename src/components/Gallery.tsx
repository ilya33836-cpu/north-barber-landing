import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { GALLERY } from '../data/content'
import { useLockBody } from '../lib/hooks'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './ui/Primitives'

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

  return (
    <Section id="gallery" className="py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Галерея"
            title={
              <>
                Работы <span className="text-bronze">мастеров</span>
              </>
            }
            lead="Стрижки, бороды, кресла и инструменты — то, что формирует атмосфению NORTH BARBER."
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="shrink-0 text-[0.75rem] uppercase tracking-[0.24em] text-mute md:text-right"
          >
            {GALLERY.length} кадров
          </motion.p>
        </div>

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
        >
          {GALLERY.map((shot, index) => (
            <motion.button
              key={shot.id}
              variants={fadeUp}
              type="button"
              onClick={() => setActive(index)}
              className="group relative block w-full break-inside-avoid overflow-hidden bg-ink-3 text-left"
              aria-label={`Открыть: ${shot.caption}`}
            >
              <img
                src={shot.src}
                alt={shot.caption}
                width={900}
                height={1200}
                loading="lazy"
                style={{ aspectRatio: shot.ratio }}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-90 place-items-center border border-bronze/70 bg-ink/70 text-bronze opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="absolute bottom-0 left-0 flex w-full translate-y-2 items-center justify-between gap-3 p-4 text-[0.7rem] uppercase tracking-[0.2em] text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {shot.caption}
                <span className="text-bronze">{String(index + 1).padStart(2, '0')}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/94 p-5 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={GALLERY[active].caption}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/15 text-bone transition-colors duration-300 hover:border-bronze hover:text-bronze"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.figure
              key={GALLERY[active].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="max-h-[82vh] w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={GALLERY[active].srcLarge}
                alt={GALLERY[active].caption}
                className="max-h-[74vh] w-full object-contain"
              />
              <figcaption className="mt-5 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.22em] text-mute">
                <span className="text-bone">{GALLERY[active].caption}</span>
                <span>
                  {active + 1} / {GALLERY.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
