import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Clock, Images, Star } from 'lucide-react'
import { FREE_SLOTS } from '../data/content'
import { IMG } from '../lib/images'
import { EASE, stagger } from '../lib/motion'

const STATS = [
  { value: '12', label: 'лет практики' },
  { value: '4', label: 'мастера' },
  { value: '4.9', label: 'рейтинг гостей' },
]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-ink pt-28 md:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_85%_at_85%_15%,rgba(200,155,90,0.16),transparent_58%),radial-gradient(90%_70%_at_10%_90%,rgba(200,155,90,0.07),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(75%_60%_at_50%_40%,#000,transparent)]"
      />

      <div className="shell relative grid items-center gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28">
        <motion.div
          variants={stagger(0.11, 0.15)}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-3 border border-bronze/30 bg-bronze/[0.07] px-4 py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-bronze" />
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.3em] text-bronze-soft">
              Премиальный барбершоп
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
            }}
            className="mt-7 text-[clamp(2.6rem,6.4vw,4.9rem)] leading-[0.98] text-bone"
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
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-mute md:text-[1.06rem]"
          >
            Современные мужские стрижки, бритьё и уход в атмосфере настоящего барбершопа.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
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
          </motion.div>

          <motion.ul
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="mt-14 grid max-w-md grid-cols-3 gap-4 border-t border-white/[0.07] pt-7"
          >
            {STATS.map((stat) => (
              <li key={stat.label}>
                <div className="font-display text-2xl font-extrabold text-bone md:text-[1.75rem]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[0.7rem] leading-snug text-mute">{stat.label}</div>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-bronze/15" aria-hidden="true" />
          <div className="absolute -left-6 -top-6 h-24 w-24 border-l border-t border-bronze/50" aria-hidden="true" />
          <div
            className="absolute -bottom-6 -right-6 h-24 w-24 border-r border-b border-bronze/50"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] overflow-hidden bg-ink-3">
            <motion.img
              src={IMG.heroBarber}
              alt="Барбер укладывает волосы клиенту в кресле NORTH BARBER"
              width={1200}
              height={1500}
              fetchPriority="high"
              initial={reduce ? undefined : { scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="absolute -bottom-8 -left-4 w-[15.5rem] border border-bronze/25 bg-ink-2/95 p-5 backdrop-blur-md sm:-left-8 lg:-left-10"
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
          </motion.div>

          <div
            className="absolute -right-8 top-10 hidden flex-col items-center gap-3 text-[0.6rem] uppercase tracking-[0.28em] text-mute lg:flex"
            aria-hidden="true"
          >
            <span className="h-16 w-px bg-gradient-to-b from-bronze/60 to-transparent" />
            Москва
          </div>
        </motion.div>
      </div>
    </section>
  )
}
