import { m } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './ui/Primitives'

export default function Testimonials() {
  return (
    <Section className="py-16 sm:py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Отзывы"
          title={
            <>
              Говорят <span className="text-bronze">гости</span>
            </>
          }
          lead="Демонстрационные отзывы для концепции сайта. Формы и имена — вымышленные."
        />

        <m.ul
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((item) => (
            <m.li
              key={item.name}
              variants={fadeUp}
              className="card group relative flex flex-col p-6 sm:p-7 md:p-8"
            >
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-bronze/12 transition-colors duration-500 group-hover:text-bronze/25 sm:right-7 sm:top-7"
                strokeWidth={1.2}
                aria-hidden="true"
              />

              <div className="flex gap-1" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-bronze text-bronze" />
                ))}
              </div>

              <p className="mt-6 flex-1 text-[0.98rem] leading-relaxed text-bone/90">
                «{item.text}»
              </p>

              <div className="mt-7 flex items-center gap-3.5 border-t border-white/[0.07] pt-5 sm:mt-8 sm:pt-6">
                <span className="grid h-10 w-10 place-items-center border border-bronze/30 bg-bronze/10 font-display text-sm font-bold text-bronze">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <div className="text-[0.9rem] font-semibold text-bone">{item.name}</div>
                  <div className="mt-0.5 text-[0.68rem] uppercase tracking-[0.18em] text-mute">
                    {item.role}
                  </div>
                </div>
              </div>
            </m.li>
          ))}
        </m.ul>
      </div>
    </Section>
  )
}
