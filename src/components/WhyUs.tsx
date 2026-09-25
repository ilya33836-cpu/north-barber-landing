import { motion } from 'framer-motion'
import { WHY_POINTS } from '../data/content'
import { IMG } from '../lib/images'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section } from './ui/Primitives'

export default function WhyUs() {
  return (
    <Section tone="raised" className="overflow-hidden py-20 md:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-3 md:aspect-[4/4.4]">
            <img
              src={IMG.interiorRow}
              alt="Интерьер NORTH BARBER: ряд кресел у зеркал"
              width={1400}
              height={1050}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink-2/70 via-transparent to-ink/30"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-40 w-40 border-b border-r border-bronze/30 md:-bottom-7 md:-right-7 md:h-56 md:w-56"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="absolute -bottom-6 left-4 border border-bronze/25 bg-ink/95 px-7 py-6 backdrop-blur-md md:left-8"
          >
            <div className="font-display text-[2.6rem] font-extrabold leading-none text-bronze">
              10
            </div>
            <div className="mt-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-mute">
              лет NORTH BARBER
            </div>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp} className="eyebrow">
              Философия
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-[clamp(2rem,5vw,3.4rem)] text-bone"
            >
              Детали создают{' '}
              <span className="text-bronze">стиль</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[0.98rem] leading-relaxed text-mute md:text-[1.05rem]"
            >
              Мы не спешим и не ходим по шаблону. Каждый визит начинается с разговора: как вы
              ведёте образ, что для вас важно, где хочется видеть чёткость, а где мягкий переход.
              Форму подбираем под чёрты лица, а не под фотографию из интернета.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[0.98rem] leading-relaxed text-mute md:text-[1.05rem]"
            >
              В зале нет суеты: тёмный интерьер, кожаные кресла, хороший свет и музыка, которая
              не мешает разговору. Инструменты стерилизуются после каждого гостя, а расходники
              обновляются регулярно.
            </motion.p>

            <motion.ul
              variants={stagger(0.08, 0.15)}
              className="mt-11 grid gap-x-8 gap-y-7 sm:grid-cols-2"
            >
              {WHY_POINTS.map((point) => {
                const Icon = point.icon
                return (
                  <motion.li key={point.title} variants={fadeUp} className="group flex gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center border border-bronze/30 text-bronze transition-colors duration-500 group-hover:bg-bronze group-hover:text-ink">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-bold tracking-tight text-bone">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-mute">
                        {point.text}
                      </p>
                    </div>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
