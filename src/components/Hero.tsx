import { m } from 'framer-motion'
import { ArrowRight, Clock, Images, Star } from 'lucide-react'
import { FREE_SLOTS } from '../data/content'
import { IMG } from '../lib/images'
import { EASE, stagger } from '../lib/motion'
import Photo from './ui/Photo'

const STATS = [
  { value: '12', label: 'лет практики' },
  { value: '4', label: 'мастера' },
  { value: '4.9', label: 'рейтинг гостей' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-svh overflow-hidden bg-ink pt-24 sm:pt-28 md:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_85%_at_85%_15%,rgba(200,155,90,0.16),transparent_58%),radial-gradient(90%_70%_at_10%_90%,rgba(200,155,90,0.07),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden opacity-[0.16] [background-image:linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(75%_60%_at_50%_40%,#000,transparent)] md:block"
      />

      <div className="shell relative grid items-center gap-10 pb-20 sm:gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28">
        <m.div
          variants={stagger(0.11, 0.15)}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <m.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-3 border border-bronze/30 bg-bronze/[0.07] px-4 py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-bronze" />
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.3em] text-bronze-soft">
              Премиальный барбершоп
            </span>
          </m.div>

          <m.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
            }}
            className="mt-6 text-[clamp(2.35rem,7.4vw,4.9rem)] leading-[0.98] text-bone sm:mt-7 sm:text-[clamp(2.6rem,6.4vw,4.9rem)]"
          >
            Стрижка,
            <br />
            которая{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-bronze">говорит</span>
              <svg
                viewBox="0 0 240 14"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-3 w-full text-bronze/45"
              >
                <path
                  d="M2 10C60 4 120 2 238 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            за тебя.
          </m.h1>

          <m.p
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-mute sm:mt-7 md:text-[1.06rem]"
          >
            Современные мужские стрижки, бритьё и уход в атмосфере настоящего барбершопа.
          </m.p>

          <m.div
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
          >
            <a href="#booking" className="btn btn-gold group">
              Записаться
              <ArrowRight
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </a>
            <a href="#gallery" className="btn btn-outline group">
              <Images className="h-4 w-4" strokeWidth={1.6} />
              Смотреть работы
            </a>
          </m.div>

          <m.ul
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t border-white/[0.07] pt-6 sm:mt-14 sm:gap-4 sm:pt-7"
          >
            {STATS.map((stat) => (
              <li key={stat.label}>
                <div className="font-display text-[1.4rem] font-extrabold text-bone sm:text-2xl md:text-[1.75rem]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[0.68rem] leading-snug text-mute sm:text-[0.7rem]">
                  {stat.label}
                </div>
              </li>
            ))}
          </m.ul>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
          className="relative"
        >
          <div className="absolute -inset-2 border border-bronze/15 sm:-inset-4" aria-hidden="true" />
          <div
            className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-bronze/50 sm:-left-6 sm:-top-6 sm:h-24 sm:w-24"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-3 -right-3 h-20 w-20 border-r border-b border-bronze/50 sm:-bottom-6 sm:-right-6 sm:h-24 sm:w-24"
            aria-hidden="true"
          />

          <div className="relative bg-ink-3">
            <Photo
              photo={IMG.heroBarber}
              alt="Барбер укладывает волосы клиенту в кресле NORTH BARBER"
              sizes="(min-width: 1024px) 44vw, (min-width: 640px) 60vw, 92vw"
              priority
              ratioClass="aspect-[4/5]"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
            />
          </div>

          <m.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="absolute -bottom-6 left-2 w-[min(17rem,calc(100%-1rem))] border border-bronze/25 bg-ink-2/95 p-4 backdrop-blur-md sm:-bottom-8 sm:-left-8 sm:w-[15.5rem] sm:p-5 lg:-left-10"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-bronze" strokeWidth={1.8} />
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.24em] text-mute">
                Сегодня свободно
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {FREE_SLOTS.map((slot) => (
                <a
                  key={slot}
                  href="#booking"
                  className="border border-white/12 px-3 py-1.5 font-display text-[0.8rem] font-bold text-bone transition-colors duration-300 hover:border-bronze hover:bg-bronze hover:text-ink"
                >
                  {slot}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5 border-t border-white/[0.07] pt-3">
              <Star className="h-3 w-3 fill-bronze text-bronze" />
              <span className="text-[0.7rem] text-mute">4.9 — 214 отзывов</span>
            </div>
          </m.div>

          <div
            className="absolute -right-8 top-10 hidden flex-col items-center gap-3 text-[0.6rem] uppercase tracking-[0.28em] text-mute lg:flex"
            aria-hidden="true"
          >
            <span className="h-16 w-px bg-gradient-to-b from-bronze/60 to-transparent" />
            Москва
          </div>
        </m.div>
      </div>
    </section>
  )
}
