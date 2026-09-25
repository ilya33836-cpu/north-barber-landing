import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { CONTACT, MARQUEE, NAV } from '../data/content'
import { InstagramGlyph, TelegramGlyph, Wordmark } from './ui/Brand'

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', Glyph: InstagramGlyph },
  { label: 'Telegram', href: 'https://telegram.org', Glyph: TelegramGlyph },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink-2">
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee gap-10 border-b border-white/[0.07] py-4 whitespace-nowrap"
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-10" aria-hidden={copy === 1}>
            {MARQUEE.map((word) => (
              <span
                key={word}
                className="flex items-center gap-10 text-[0.7rem] uppercase tracking-[0.34em] text-white/25"
              >
                {word}
                <span className="h-1 w-1 rounded-full bg-bronze/60" />
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-xs text-[0.88rem] leading-relaxed text-mute">
            Премиальный барбершоп для мужчин. Стрижка, бритьё и уход в атмосфере настоящего
            барбершопа.
          </p>

          <div className="mt-8 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center border border-white/10 text-mute transition-colors duration-400 hover:border-bronze hover:bg-bronze hover:text-ink"
              >
                <social.Glyph className="h-[1.05rem] w-[1.05rem]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-bronze">
            Навигация
          </h3>
          <ul className="mt-6 space-y-3.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-[0.9rem] text-mute transition-colors duration-300 hover:text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-bronze">
            Контакты
          </h3>
          <ul className="mt-6 space-y-3.5 text-[0.9rem] text-mute">
            <li>{CONTACT.address}</li>
            <li>
              <a
                href={CONTACT.phoneHref}
                className="link-underline transition-colors duration-300 hover:text-bone"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>
              {CONTACT.hours} · {CONTACT.hoursValue}
            </li>
          </ul>

          <a
            href="#booking"
            className="btn btn-gold mt-8 w-full sm:w-auto"
          >
            Записаться
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="shell flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
          <p className="text-[0.75rem] text-mute">
            © 2026 NORTH BARBER — Concept Website
          </p>
          <motion.a
            href="#hero"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-mute transition-colors duration-300 hover:text-bronze"
          >
            Наверх
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.8} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
