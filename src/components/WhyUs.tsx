import { m } from 'framer-motion'
import { WHY_POINTS } from '../data/content'
import { IMG } from '../lib/images'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import Photo from './ui/Photo'
import { Section } from './ui/Primitives'

export default function WhyUs() {
  return (
    <Section tone="raised" className="overflow-hidden py-16 sm:py-20 md:py-28">
      <div className="shell grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <m.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative">
            <Photo
              photo={IMG.interiorRow}
              alt="Интерьер NORTH BARBER: ряд кресел у зеркал"
              sizes="(min-width: 1024px) 46vw, 92vw"
              ratioClass="aspect-[4/5] md:aspect-[4/4.4]"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink-2/70 via-transparent to-ink/30"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-32 w-32 border-b border-r border-bronze/30 md:-bottom-7 md:-right-7 md:h-56 md:w-56"
          />

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="absolute -bottom-5 left-3 border border-bronze/25 bg-ink/95 px-5 py-4 backdrop-blur-md sm:-bottom-6 sm:left-8 sm:px-7 sm:py-6"
          >
            <div className="font-display text-[2.1rem] font-extrabold leading-none text-bronze sm:text-[2.6rem]">
              10
            </div>
            <div className="mt-1.5 text-[0.66rem] uppercase tracking-[0.2em] text-mute sm:text-[0.7rem]">
              лет NORTH BARBER
            </div>
          </m.div>
        </m.div>

        <div className="order-1 lg:order-2">
          <m.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <m.p variants={fadeUp} className="eyebrow">
              Философия
            </m.p>
            <m.h2
              variants={fadeUp}
              className="mt-4 text-[clamp(1.85rem,5vw,3.4rem)] text-bone sm:mt-5"
            >
              Детали создают{' '}
              <span className="text-bronze">стиль</span>
            </m.h2>
            <m.p
              variants={fadeUp}
              className="mt-5 text-[0.95rem] leading-relaxed text-mute sm:mt-6 md:text-[1.05rem]"
            >
              Мы не спешим и не ходим по шаблону. Каждый визит начинается с разговора: как вы
              ведёте образ, что для вас важно, где хочется видеть чёткость, а где мягкий переход.
              Форму подбираем под чёрты лица, а не под фотографию из интернета.
            </m.p>
            <m.p
              variants={fadeUp}
              className="mt-4 text-[0.95rem] leading-relaxed text-mute md:text-[1.05rem]"
            >
              В зале нет суеты: тёмный интерьер, кожаные кресла, хороший свет и музыка, которая
              не мешает разговору. Инструменты стерилизуются после каждого гостя, а расходники
              обновляются регулярно.
            </m.p>

            <m.ul
              variants={stagger(0.08, 0.15)}
              className="mt-8 grid gap-x-8 gap-y-6 sm:mt-11 sm:gap-y-7 sm:grid-cols-2"
            >
              {WHY_POINTS.map((point) => {
                const Icon = point.icon
                return (
                  <m.li key={point.title} variants={fadeUp} className="group flex gap-4">
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
                  </m.li>
                )
              })}
            </m.ul>
          </m.div>
        </div>
      </div>
    </Section>
  )
}
