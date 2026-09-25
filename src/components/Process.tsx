import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PROCESS, PROCESS_ICONS } from '../data/content'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './ui/Primitives'

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 55%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section tone="raised" className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Процесс"
          title={
            <>
              Как проходит <span className="text-bronze">запись</span>
            </>
          }
          lead="Четыре шага — от выбора услуги до момента, когда вы откидываетесь в кресле."
          align="center"
        />

        <div ref={trackRef} className="relative mt-16">
          {/* desktop rail */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-white/10 lg:block"
          >
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: 'left' }}
              className="h-full bg-gradient-to-r from-bronze-deep via-bronze to-bronze"
            />
          </div>
          {/* mobile rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[1.15rem] top-6 w-px bg-white/10 lg:hidden"
          >
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: 'top' }}
              className="h-full w-full bg-gradient-to-b from-bronze to-bronze-deep"
            />
          </div>

          <motion.ol
            variants={stagger(0.14)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid gap-11 lg:grid-cols-4 lg:gap-8"
          >
            {PROCESS.map((item, i) => {
              const Icon = PROCESS_ICONS[i]
              return (
                <motion.li key={item.step} variants={fadeUp} className="relative flex gap-5 lg:block">
                  <div className="relative z-10 shrink-0">
                    <span className="grid h-[2.3rem] w-[2.3rem] place-items-center border border-bronze/40 bg-ink text-bronze">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="lg:mt-7">
                    <span className="font-display text-[0.7rem] font-bold tracking-[0.3em] text-bronze">
                      {item.step}
                    </span>
                    <h3 className="mt-2.5 text-[1.15rem] font-bold tracking-tight text-bone">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-[15rem] text-[0.85rem] leading-relaxed text-mute">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ol>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="mt-14 flex justify-center"
          >
            <a href="#booking" className="btn btn-outline">
              Забронировать время
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
