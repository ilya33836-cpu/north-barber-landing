import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MASTERS } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import Photo from './ui/Photo'
import { Section, SectionHeading } from './ui/Primitives'

export default function Masters() {
  return (
    <Section id="masters" tone="raised" className="py-16 sm:py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Мастера"
          title={
            <>
              Наши <span className="text-bronze">мастера</span>
            </>
          }
          lead="Три барбера с разной специализацией. Каждый ведёт свою технику и придерживается своих стандартов формы."
          align="center"
          className="[&_.eyebrow]:justify-center"
        />

        <m.ul
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3"
        >
          {MASTERS.map((master, i) => (
            <m.li key={master.name} variants={fadeUp}>
              <article className="card group h-full overflow-hidden">
                <div className="relative">
                  <Photo
                    photo={master.photo}
                    alt={master.alt}
                    sizes="(min-width: 768px) 31vw, 92vw"
                    position="top center"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-3 via-ink-3/25 to-transparent"
                  />
                  <span className="absolute left-5 top-5 font-display text-[0.6rem] font-bold tracking-[0.3em] text-bronze/70">
                    0{i + 1}
                  </span>
                </div>

                <div className="-mt-14 relative p-6 sm:-mt-16 sm:p-7">
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-bronze">
                    {master.role}
                  </span>
                  <h3 className="mt-2.5 text-xl font-extrabold tracking-tight text-bone sm:text-2xl">
                    {master.name}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-mute">{master.text}</p>

                  <a
                    href="#booking"
                    className="link-underline mt-5 inline-flex min-h-[2.75rem] items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-bone transition-colors duration-300 hover:text-bronze"
                  >
                    Подробнее
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </a>
                </div>
              </article>
            </m.li>
          ))}
        </m.ul>
      </div>
    </Section>
  )
}
