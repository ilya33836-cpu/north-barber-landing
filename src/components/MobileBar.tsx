import { Phone } from 'lucide-react'
import { CONTACT } from '../data/content'
import { useScrolled } from '../lib/hooks'

export default function MobileBar() {
  const visible = useScrolled(560)

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-white/[0.08] bg-ink-2/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <a
          href={CONTACT.phoneHref}
          aria-label="Позвонить"
          className="grid h-12 w-12 shrink-0 place-items-center border border-white/12 text-bone"
        >
          <Phone className="h-[1.05rem] w-[1.05rem] text-bronze" strokeWidth={1.6} />
        </a>
        <a href="#booking" className="btn btn-gold h-12 flex-1 !px-4">
          Записаться
        </a>
      </div>
    </div>
  )
}
