type MarkProps = {
  className?: string
}

export function LogoMark({ className = 'h-9 w-9' }: MarkProps) {
  return (
    <span
      className={`grid place-items-center border border-bronze/45 bg-bronze/10 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="#C89B5A" strokeWidth="1.6">
        <circle cx="6" cy="17" r="2.6" />
        <circle cx="17.4" cy="17" r="2.6" />
        <path d="M7.9 15.4 18.4 4.6M15.6 15.4 5.1 4.6" strokeLinecap="round" />
      </svg>
    </span>
  )
}

type WordmarkProps = {
  className?: string
  compact?: boolean
}

export function Wordmark({ className = '', compact = false }: WordmarkProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={compact ? 'h-8 w-8' : 'h-9 w-9'} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.98rem] font-extrabold tracking-[0.24em] text-bone">
          NORTH
        </span>
        <span className="mt-1 text-[0.53rem] font-medium tracking-[0.42em] text-bronze">
          BARBER
        </span>
      </span>
    </span>
  )
}

export function InstagramGlyph({ className = 'h-4 w-4' }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TelegramGlyph({ className = 'h-4 w-4' }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.4 4.3 2.9 11.5c-.9.35-.88 1.63.03 1.94l4.3 1.5 1.66 5.1c.23.7 1.14.88 1.63.32l2.35-2.72 4.6 3.35c.63.46 1.54.13 1.72-.62l3.1-14.9c.2-.8-.6-1.5-1.4-1.2zM9.6 14.4l8.2-5.9-6.7 6.6-.3 3.2-1.2-3.9z" />
    </svg>
  )
}
