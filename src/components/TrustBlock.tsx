import { m } from 'framer-motion'
import { FEATURES } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function TrustBlock() {
  return (
    <section className="relative border-y border-white/[0.07] bg-ink-2 py-9 sm:py-12 md:py-16">
      <div className="shell">
        <m.ul
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <m.li
                key={feature.title}
                variants={fadeUp}
                className="group relative bg-ink-2 p-5 transition-colors duration-500 hover:bg-ink-3 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center border border-bronze/30 bg-bronze/[0.08] text-bronze transition-colors duration-500 group-hover:bg-bronze group-hover:text-ink sm:h-11 sm:w-11">
                    <Icon className="h-[1.05rem] w-[1.05rem] sm:h-[1.15rem] sm:w-[1.15rem]" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-[0.6rem] font-bold tracking-[0.3em] text-white/15 transition-colors duration-500 group-hover:text-bronze/50">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-[0.95rem] font-bold tracking-tight text-bone sm:mt-6 sm:text-[1.05rem]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[0.82rem] leading-relaxed text-mute sm:text-[0.875rem]">
                  {feature.text}
                </p>
              </m.li>
            )
          })}
        </m.ul>
      </div>
    </section>
  )
}
