import { m } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE, fadeUp, stagger, viewportOnce } from '../../lib/motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'span' | 'section'
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Comp = m[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </Comp>
  )
}

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  lead?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <m.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <m.p variants={fadeUp} className={`eyebrow ${centered ? 'justify-center' : ''}`}>
        {eyebrow}
      </m.p>
      <m.h2
        variants={fadeUp}
        className="mt-4 text-[clamp(1.8rem,5.4vw,3.6rem)] text-bone sm:mt-5"
      >
        {title}
      </m.h2>
      {lead ? (
        <m.p
          variants={fadeUp}
          className="mt-4 text-[0.95rem] leading-relaxed text-mute sm:mt-5 md:text-lg"
        >
          {lead}
        </m.p>
      ) : null}
    </m.div>
  )
}

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'base' | 'raised' | 'deep'
}

const TONE: Record<NonNullable<SectionProps['tone']>, string> = {
  base: 'bg-ink',
  raised: 'bg-ink-2',
  deep: 'bg-ink',
}

export function Section({ id, children, className = '', tone = 'base' }: SectionProps) {
  return (
    <section id={id} className={`relative ${TONE[tone]} ${className}`}>
      {children}
    </section>
  )
}
