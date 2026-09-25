import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { FAQ } from '../data/content'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './ui/Primitives'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section tone="raised" className="py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-[0.8rem] text-mute"
          >
            +7 (999) 123-45-67
          </motion.p>
        </div>

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="border-t border-white/[0.08]"
        >
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.li key={item.q} variants={fadeUp} className="border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`font-display text-[1.02rem] font-bold tracking-tight transition-colors duration-300 md:text-[1.12rem] ${
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
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-10 text-[0.9rem] leading-relaxed text-mute">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </Section>
  )
}
