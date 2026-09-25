import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { SERVICES } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './ui/Primitives'

export default function Services() {
  return (
    <Section id="services" className="py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Услуги"
            title={
              <>
                Наши <span className="text-bronze">услуги</span>
              </>
            }
            lead="Шесть базовых направлений. Любую услугу можно дополнить уходом или моделированием бороды."
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="shrink-0 text-[0.8rem] text-mute md:text-right"
          >
            Цены указаны от минимальной
            <br />
            Оплата после визита
          </motion.p>
        </div>

        <motion.ul
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.li key={service.title} variants={fadeUp}>
                <a
                  href="#booking"
                  className="card group flex h-full flex-col p-7 hover:-translate-y-1.5 md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-white/10 text-bronze transition-all duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 -translate-x-1 translate-y-1 text-white/20 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-bronze group-hover:opacity-100"
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-bone">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-mute">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-end justify-between border-t border-white/[0.07] pt-5">
                    <div>
                      <div className="font-display text-[1.35rem] font-extrabold text-bone">
                        {service.price}
                      </div>
                      <div className="mt-1.5 flex items-center gap-1.5 text-[0.7rem] text-mute">
                        <Clock className="h-3 w-3" strokeWidth={1.6} />
                        {service.duration}
                      </div>
                    </div>
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-bronze opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Записаться
                    </span>
                  </div>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </Section>
  )
}
