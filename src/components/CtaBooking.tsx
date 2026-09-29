import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SERVICE_OPTIONS } from '../data/content'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'

type Fields = {
  name: string
  phone: string
  service: string
}

const EMPTY: Fields = { name: '', phone: '', service: '' }

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (digits.length === 0) return ''
  const rest = digits.startsWith('8') ? digits.slice(1) : digits
  const tail = rest.startsWith('7') ? rest.slice(1) : rest
  const p = tail.slice(0, 3)
  const a = tail.slice(3, 6)
  const b = tail.slice(6, 8)
  const c = tail.slice(8, 10)
  let out = '+7'
  if (p) out += ` (${p}`
  if (p.length === 3) out += ')'
  if (a) out += ` ${a}`
  if (b) out += `-${b}`
  if (c) out += `-${c}`
  return out
}

export default function CtaBooking() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Partial<Record<keyof Fields, string>> = {}
    if (fields.name.trim().length < 2) next.name = 'Укажите имя'
    if (fields.phone.replace(/\D/g, '').length < 11) next.phone = 'Укажите телефон полностью'
    if (!fields.service) next.service = 'Выберите услугу'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  const update = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: key === 'phone' ? formatPhone(value) : value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-ink py-16 sm:py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,rgba(200,155,90,0.14),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/45 to-transparent"
      />

      <div className="shell relative grid gap-10 sm:gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        <m.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col justify-center"
        >
          <m.p variants={fadeUp} className="eyebrow">
            Запись
          </m.p>
          <m.h2
            variants={fadeUp}
            className="mt-4 text-[clamp(1.9rem,5.6vw,3.6rem)] text-bone sm:mt-5"
          >
            Готов обновить свой <span className="text-bronze">стиль?</span>
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mute sm:mt-6 md:text-[1.05rem]"
          >
            Оставьте заявку — мы свяжемся с вами для подтверждения записи.
          </m.p>

          <m.ul
            variants={stagger(0.1, 0.2)}
            className="mt-8 space-y-4 border-t border-white/[0.08] pt-7 sm:mt-11 sm:pt-9"
          >
            {[
              'Ответ в течение 15 минут в рабочее время',
              'Подберём удобное время и мастера',
              'Никакой предоплаты — оплата после визита',
            ].map((line) => (
              <m.li key={line} variants={fadeUp} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center border border-bronze/40 text-bronze">
                  <Check className="h-3 w-3" strokeWidth={2.4} />
                </span>
                <span className="text-[0.9rem] text-mute">{line}</span>
              </m.li>
            ))}
          </m.ul>

          <m.a
            variants={fadeUp}
            href="tel:+79991234567"
            className="mt-8 inline-flex min-h-[2.75rem] w-fit items-center gap-3 text-bone transition-colors duration-300 hover:text-bronze sm:mt-10"
          >
            <span className="grid h-11 w-11 place-items-center border border-bronze/35 text-bronze">
              <Phone className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block font-display text-lg font-bold tracking-tight">+7 (999) 123-45-67</span>
              <span className="mt-0.5 block text-[0.7rem] uppercase tracking-[0.2em] text-mute">
                Ежедневно 10:00–22:00
              </span>
            </span>
          </m.a>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 border border-bronze/12 sm:-inset-3"
          />
          <div className="relative border border-white/[0.09] bg-ink-2/80 p-6 sm:p-7 md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <m.div
                  key="success"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                >
                  <m.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                    className="grid h-16 w-16 place-items-center border border-bronze/45 bg-bronze/12 text-bronze"
                  >
                    <Check className="h-7 w-7" strokeWidth={2} />
                  </m.span>
                  <h3 className="mt-7 text-2xl font-extrabold text-bone">Заявка отправлена</h3>
                  <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-mute">
                    Спасибо, {fields.name.trim()}. Мы перезвоним на{' '}
                    <span className="text-bone">{fields.phone}</span> в течение 15 минут, чтобы
                    подтвердить запись.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setFields(EMPTY)
                    }}
                    className="btn btn-outline mt-9 h-12"
                  >
                    Отправить ещё одну
                  </button>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="space-y-4 sm:space-y-5"
                >
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-bronze">
                    Форма записи
                  </p>

                  <div>
                    <label htmlFor="name" className="mb-2 block text-[0.78rem] text-mute">
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Как к вам обращаться"
                      value={fields.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={`field ${errors.name ? 'field-error' : ''}`}
                    />
                    {errors.name ? (
                      <p className="mt-2 text-[0.72rem] text-[#d1796f]">{errors.name}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-[0.78rem] text-mute">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={fields.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={`field ${errors.phone ? 'field-error' : ''}`}
                    />
                    {errors.phone ? (
                      <p className="mt-2 text-[0.72rem] text-[#d1796f]">{errors.phone}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-[0.78rem] text-mute">
                      Услуга
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={fields.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={`field ${errors.service ? 'field-error' : ''}`}
                    >
                      <option value="">Выберите услугу</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service ? (
                      <p className="mt-2 text-[0.72rem] text-[#d1796f]">{errors.service}</p>
                    ) : null}
                  </div>

                  <button type="submit" className="btn btn-gold group mt-2 h-12 w-full">
                    Записаться
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </button>

                  <p className="text-center text-[0.7rem] leading-relaxed text-mute/70">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                  </p>
                </m.form>
              )}
            </AnimatePresence>
          </div>
        </m.div>
      </div>
    </section>
  )
}
