import { m } from 'framer-motion'
import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { CONTACT } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section } from './ui/Primitives'

const ROWS = [
  { icon: MapPin, label: 'Адрес', value: CONTACT.address },
  { icon: Phone, label: 'Телефон', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Clock, label: 'Режим работы', value: `${CONTACT.hours} · ${CONTACT.hoursValue}` },
]

function StylizedMap() {
  return (
    <a
      href={CONTACT.mapsUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Открыть адрес в картах"
      className="group relative block aspect-[4/3] w-full overflow-hidden border border-white/[0.09] bg-ink-2 sm:aspect-[16/11] md:aspect-[16/11]"
    >
      <svg
        viewBox="0 0 640 440"
        className="absolute inset-0 h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        aria-hidden="true"
      >
        <rect width="640" height="440" fill="#121212" />

        {/* blocks */}
        <g fill="#191919">
          <rect x="18" y="18" width="150" height="112" />
          <rect x="192" y="18" width="118" height="112" />
          <rect x="334" y="18" width="140" height="112" />
          <rect x="498" y="18" width="124" height="112" />
          <rect x="18" y="154" width="150" height="96" />
          <rect x="192" y="154" width="118" height="96" />
          <rect x="334" y="154" width="140" height="96" />
          <rect x="498" y="154" width="124" height="96" />
          <rect x="18" y="274" width="150" height="148" />
          <rect x="192" y="274" width="118" height="70" />
          <rect x="334" y="274" width="140" height="70" />
          <rect x="498" y="274" width="124" height="70" />
          <rect x="192" y="368" width="118" height="54" />
          <rect x="334" y="368" width="140" height="54" />
          <rect x="498" y="368" width="124" height="54" />
        </g>

        {/* streets */}
        <g stroke="#1f1f1f" strokeWidth="14" strokeLinecap="square">
          <path d="M0 140H640" />
          <path d="M0 260H640" />
          <path d="M180 0V440" />
          <path d="M324 0V440" />
          <path d="M488 0V440" />
        </g>
        <g stroke="#282828" strokeWidth="1">
          <path d="M0 140H640" />
          <path d="M0 260H640" />
          <path d="M180 0V440" />
          <path d="M324 0V440" />
          <path d="M488 0V440" />
        </g>

        {/* diagonal avenue */}
        <g stroke="#1c1c1c" strokeWidth="9">
          <path d="M-20 430L300 20" />
        </g>

        {/* green park */}
        <rect x="18" y="274" width="150" height="148" fill="#16201a" />
        <circle cx="66" cy="322" r="15" fill="#1b2a21" />
        <circle cx="112" cy="366" r="19" fill="#1b2a21" />
        <circle cx="58" cy="392" r="12" fill="#1b2a21" />

        {/* building footprints */}
        <g fill="#1f1f1f">
          <rect x="205" y="31" width="92" height="86" />
          <rect x="347" y="31" width="114" height="86" />
          <rect x="205" y="167" width="92" height="70" />
          <rect x="511" y="167" width="98" height="70" />
        </g>

        {/* route */}
        <path
          d="M60 440 L60 260 L252 260 L252 218"
          fill="none"
          stroke="#C89B5A"
          strokeOpacity="0.5"
          strokeWidth="2.5"
          strokeDasharray="7 6"
        />

        {/* street labels */}
        <g fill="#4a4a4a" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1.4">
          <text x="22" y="133">ПРИМЕРНАЯ УЛ.</text>
          <text x="336" y="253">СЕВЕРНАЯ</text>
        </g>
        <text
          x="326"
          y="212"
          fill="#4a4a4a"
          fontSize="9"
          fontFamily="Inter, sans-serif"
          letterSpacing="1.4"
          transform="rotate(-54 326 212)"
        >
          ТВОРЧЕСКИЙ ПРОЕЗД
        </text>

        {/* pin halo */}
        <circle cx="252" cy="196" r="54" fill="#C89B5A" opacity="0.05" />
        <circle
          cx="252"
          cy="196"
          r="78"
          fill="none"
          stroke="#C89B5A"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeDasharray="3 8"
        />

        {/* pin */}
        <g transform="translate(252 196)">
          <path
            d="M0 24c-10.5 0-19-8.4-19-18.8C-19-10.4-10.5-22 0-22s19 11.6 19 27.2C19 15.6 10.5 24 0 24z"
            fill="#C89B5A"
          />
          <circle cy="-2" r="6.5" fill="#121212" />
        </g>
      </svg>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_40%_45%,transparent,rgba(13,13,13,0.75))]"
      />

      <div className="absolute left-4 top-4 border border-bronze/30 bg-ink/90 px-4 py-3 sm:left-5 sm:top-5">
        <div className="text-[0.6rem] uppercase tracking-[0.24em] text-mute">Мы здесь</div>
        <div className="mt-1 text-[0.85rem] font-semibold text-bone">ул. Примерная, 24</div>
      </div>

      <span className="absolute bottom-4 left-4 inline-flex min-h-[2.75rem] items-center gap-2 border border-white/12 bg-ink/90 px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.16em] text-bone transition-colors duration-300 group-hover:border-bronze group-hover:text-bronze sm:bottom-5 sm:left-auto sm:right-5">
        Построить маршрут
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
      </span>
    </a>
  )
}

export default function Contacts() {
  return (
    <Section id="contacts" className="py-16 sm:py-20 md:py-28">
      <div className="shell grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <m.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <m.p variants={fadeUp} className="eyebrow">
            Контакты
          </m.p>
          <m.h2
            variants={fadeUp}
            className="mt-4 text-[clamp(1.85rem,5vw,3.4rem)] text-bone sm:mt-5"
          >
            Приходите <span className="text-bronze">в NORTH</span>
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mute sm:mt-5"
          >
            В двух шагах от метро, с парковкой во дворе. Приходите за пятнадцать минут до начала — кофе
            и разговор с мастером включены в визит.
          </m.p>

          <m.ul variants={stagger(0.1, 0.15)} className="mt-8 border-t border-white/[0.08] sm:mt-10">
            {ROWS.map((row) => {
              const Icon = row.icon
              const content = (
                <>
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center border border-bronze/30 text-bronze transition-colors duration-500 group-hover:bg-bronze group-hover:text-ink">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-mute">
                      {row.label}
                    </span>
                    <span className="mt-1.5 block text-[0.98rem] font-semibold text-bone">
                      {row.value}
                    </span>
                  </span>
                </>
              )

              return (
                <m.li key={row.label} variants={fadeUp} className="border-b border-white/[0.08]">
                  {'href' in row && row.href ? (
                    <a
                      href={row.href}
                      className="group flex min-h-[4.25rem] items-center gap-4 py-5 transition-colors duration-300 sm:py-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex min-h-[4.25rem] items-center gap-4 py-5 sm:py-6">
                      {content}
                    </div>
                  )}
                </m.li>
              )
            })}
          </m.ul>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <StylizedMap />
          <p className="mt-4 text-[0.72rem] text-mute">
            Схема условная: барбершоп работает в демонстрационном режиме.
          </p>
        </m.div>
      </div>
    </Section>
  )
}
