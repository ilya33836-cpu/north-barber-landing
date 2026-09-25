import { motion } from 'framer-motion'
import { FEATURES } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function TrustBlock() {
  return (
    <section className="relative border-y border-white/[0.07] bg-ink-2 py-12 md:py-16">
      <div className="shell">
        <motion.ul
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.li
                key={feature.title}
                variants={fadeUp}
                className="group relative bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center border border-bronze/30 bg-bronze/[0.08] text-bronze transition-colors duration-500 group-hover:bg-bronze group-hover:text-ink">
                    <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-[0.6rem] font-bold tracking-[0.3em] text-white/15 transition-colors duration-500 group-hover:text-bronze/50">
                    0{FEATURES.indexOf(feature) + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[1.05rem] font-bold tracking-tight text-bone">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-mute">
                  {feature.text}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
