import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE, fadeUp, stagger, viewportOnce } from '../../lib/motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'span' | 'section'
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Comp = motion[as]
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
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <motion.p variants={fadeUp} className={`eyebrow ${centered ? 'justify-center' : ''}`}>
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-5 text-[clamp(2rem,5vw,3.6rem)] text-bone"
      >
        {title}
      </motion.h2>
      {lead ? (
        <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-mute md:text-lg">
          {lead}
        </motion.p>
      ) : null}
    </motion.div>
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
