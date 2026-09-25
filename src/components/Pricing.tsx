import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PLANS } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './ui/Primitives'

export default function Pricing() {
  return (
    <Section id="pricing" className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Цены"
          title={
            <>
              Понятные <span className="text-bronze">цены</span>
            </>
          }
          lead="Фиксированная стоимость без доплат и скрытых условий. Детская стрижка — до 12 лет, королевское бритьё — только по записи."
          align="center"
        />

        <motion.ul
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {PLANS.map((plan) => (
            <motion.li key={plan.name} variants={fadeUp} className="h-full">
              <article
                className={`card group relative flex h-full flex-col overflow-hidden p-7 md:p-8 ${
                  plan.featured ? 'border-bronze/45 bg-ink-3' : ''
                }`}
              >
                {plan.featured ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent"
                    />
                    <span className="absolute right-6 top-6 bg-bronze px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-ink">
                      Популярный
                    </span>
                  </>
                ) : null}

                <span
                  className={`text-[0.65rem] font-medium uppercase tracking-[0.28em] ${
                    plan.featured ? 'text-bronze' : 'text-mute'
                  }`}
                >
                  {plan.name}
                </span>

                <h3 className="mt-4 text-lg font-bold tracking-tight text-bone">{plan.service}</h3>

                <div className="mt-7 flex items-baseline gap-1.5">
                  <span className="font-display text-[2.6rem] font-extrabold leading-none text-bone">
                    {plan.price}
                  </span>
                  <span className="font-display text-[1.7rem] font-bold leading-none text-bronze">
                    {plan.unit}
                  </span>
                </div>

                <div className="hairline my-7" />

                <ul className="flex-1 space-y-3.5">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.85rem] text-mute">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          plan.featured ? 'text-bronze' : 'text-bronze/60'
                        }`}
                        strokeWidth={2.2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className={`btn mt-9 w-full ${plan.featured ? 'btn-gold' : 'btn-outline'}`}
                >
                  Записаться
                </a>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 text-center text-[0.78rem] text-mute"
        >
          Цены действуют для гостей барбершопа и не являются публичной офертой.
        </motion.p>
      </div>
    </Section>
  )
}
