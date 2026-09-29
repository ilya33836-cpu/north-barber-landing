import { AnimatePresence, m } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CONTACT, NAV, SECTION_IDS } from '../data/content'
import { useActiveSection, useLockBody, useScrolled } from '../lib/hooks'
import { EASE } from '../lib/motion'
import { Wordmark } from './ui/Brand'

const SECTION_LIST = [...SECTION_IDS]

export default function Header() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_LIST)

  useLockBody(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <m.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/[0.07] bg-ink/95 md:bg-ink/80 md:backdrop-blur-lg'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div
          className={`shell flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16 md:h-[72px]' : 'h-[4.5rem] md:h-24'
          }`}
        >
          <a href="#hero" className="shrink-0" aria-label="NORTH BARBER — на главную">
            <Wordmark compact={scrolled} />
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Основная навигация">
            {NAV.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-bronze' : 'text-mute hover:text-bone'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2.5 md:gap-3">
            <a
              href={CONTACT.phoneHref}
              aria-label="Позвонить"
              className="grid h-11 w-11 place-items-center border border-white/12 text-bone transition-colors duration-300 hover:border-bronze/60 hover:text-bronze sm:hidden"
            >
              <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
            </a>
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 text-[0.8125rem] text-mute transition-colors duration-300 hover:text-bone xl:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-bronze" strokeWidth={1.6} />
              {CONTACT.phone}
            </a>
            <a href="#booking" className="btn btn-gold hidden !px-6 !py-3 md:inline-flex">
              Записаться
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center border border-white/12 text-bone transition-colors duration-300 hover:border-bronze/60 hover:text-bronze lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {open ? (
          <m.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-40 bg-ink lg:hidden"
          >
            <div className="shell flex h-full flex-col justify-center pt-20 pb-10">
              <nav className="flex flex-col" aria-label="Мобильная навигация">
                {NAV.map((item, i) => (
                  <m.a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * i + 0.06, ease: EASE }}
                    className="flex items-baseline gap-4 border-b border-white/[0.07] py-4 font-display text-[1.75rem] font-extrabold tracking-tight text-bone min-h-[3.25rem] sm:py-5 sm:text-3xl"
                  >
                    <span className="text-[0.6rem] font-medium tracking-[0.3em] text-bronze">
                      0{i + 1}
                    </span>
                    {item.label}
                  </m.a>
                ))}
              </nav>

              <m.a
                href="#booking"
                onClick={close}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.36, ease: EASE }}
                className="btn btn-gold mt-8 h-12 w-full"
              >
                Записаться
              </m.a>
              <m.a
                href={CONTACT.phoneHref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.42, ease: EASE }}
                className="mt-3 flex min-h-[3rem] items-center justify-center gap-2 py-3 text-sm text-mute"
              >
                <Phone className="h-4 w-4 text-bronze" strokeWidth={1.6} />
                {CONTACT.phone}
              </m.a>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
