import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { FAQ } from '../data/content'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './ui/Primitives'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section tone="raised" className="py-16 sm:py-20 md:py-28">
      <div className="shell grid gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Частые <span className="text-bronze">вопросы</span>
              </>
            }
            lead="Если ответа нет — позвоните или напишите, мастера ответят лично."
          />
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-[0.8rem] text-mute sm:mt-8"
          >
            +7 (999) 123-45-67
          </m.p>
        </div>

        <m.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="border-t border-white/[0.08]"
        >
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <m.li key={item.q} variants={fadeUp} className="border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex min-h-[3.25rem] w-full items-start justify-between gap-4 py-5 text-left sm:gap-6 sm:py-6"
                >
                  <span
                    className={`font-display text-[0.98rem] font-bold tracking-tight transition-colors duration-300 sm:text-[1.12rem] ${
                      isOpen ? 'text-bronze' : 'text-bone'
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center border transition-all duration-500 ${
                      isOpen
                        ? 'rotate-45 border-bronze bg-bronze text-ink'
                        : 'border-white/15 text-mute'
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <m.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pr-6 text-[0.9rem] leading-relaxed text-mute sm:pb-7 sm:pr-10">
                        {item.a}
                      </p>
                    </m.div>
                  ) : null}
                </AnimatePresence>
              </m.li>
            )
          })}
        </m.ul>
      </div>
    </Section>
  )
}
