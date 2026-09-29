import {
  Award,
  Blend,
  CalendarClock,
  CalendarCheck,
  Check,
  Crown,
  Droplet,
  Gem,
  LayoutGrid,
  MessageCircle,
  Music,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from 'lucide-react'
import { CARD_WIDTHS, GALLERY_WIDTHS, photo, type Photo } from '../lib/images'

export const CONTACT = {
  address: 'г. Москва, ул. Примерная, 24',
  phone: '+7 (999) 123-45-67',
  phoneHref: 'tel:+79991234567',
  hours: 'Пн–Вс',
  hoursValue: '10:00–22:00',
  mapsUrl:
    'https://yandex.ru/maps/?text=' + encodeURIComponent('Москва, ул. Примерная, 24'),
} as const

export const NAV = [
  { label: 'Услуги', href: '#services' },
  { label: 'Мастера', href: '#masters' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
] as const

export const SECTION_IDS = [
  'services',
  'masters',
  'gallery',
  'pricing',
  'contacts',
] as const

export const FREE_SLOTS = ['13:00', '15:30', '18:00'] as const

type Feature = {
  icon: LucideIcon
  title: string
  text: string
}

export const FEATURES: Feature[] = [
  {
    icon: Award,
    title: 'Опытные барберы',
    text: 'Индивидуальный подход к каждому клиенту.',
  },
  {
    icon: Sparkles,
    title: 'Премиальная косметика',
    text: 'Используем профессиональные средства.',
  },
  {
    icon: CalendarCheck,
    title: 'Онлайн запись',
    text: 'Быстрое бронирование удобного времени.',
  },
  {
    icon: Music,
    title: 'Атмосфера',
    text: 'Музыка, кофе и комфортное пространство.',
  },
]

export type Service = {
  icon: LucideIcon
  title: string
  text: string
  price: string
  duration: string
}

export const SERVICES: Service[] = [
  {
    icon: Scissors,
    title: 'Мужская стрижка',
    text: 'Классическая форма, чистые контуры и укладка.',
    price: 'от 1 500 ₽',
    duration: '45 мин',
  },
  {
    icon: Blend,
    title: 'Fade',
    text: 'Плавный переход от коротких волос к длинным.',
    price: 'от 1 700 ₽',
    duration: '60 мин',
  },
  {
    icon: Sparkles,
    title: 'Стрижка + борода',
    text: 'Полный образ: стрижка, моделирование и уход.',
    price: 'от 2 200 ₽',
    duration: '90 мин',
  },
  {
    icon: Droplet,
    title: 'Опасное бритьё',
    text: 'Горячее полотенце, пена, опасная бритва.',
    price: 'от 1 300 ₽',
    duration: '40 мин',
  },
  {
    icon: Crown,
    title: 'Королевское бритьё',
    text: 'Бритьё королевским методом с уходом и массажем.',
    price: 'от 1 900 ₽',
    duration: '75 мин',
  },
  {
    icon: Smile,
    title: 'Детская стрижка',
    text: 'Спокойно, быстро и с первого раза без слёз.',
    price: 'от 1 200 ₽',
    duration: '30 мин',
  },
]

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title)

export const MASTERS = [
  {
    name: 'Алекс Рид',
    role: 'Senior Barber',
    text: '12 лет в профессии. Классика, форма и работа с текстурой.',
    photo: photo('master-alex', 3 / 4, CARD_WIDTHS),
    alt: 'Барбер Алекс Рид работает с клиентом',
  },
  {
    name: 'Максим Блейк',
    role: 'Fade Specialist',
    text: 'Фирменные переходы и машинка без размытых линий.',
    photo: photo('master-max', 3 / 4, CARD_WIDTHS),
    alt: 'Барбер Максим Блейк выполняет стрижку',
  },
  {
    name: 'Данил Норт',
    role: 'Beard Artist',
    text: 'Скульптура бороды: чёткая линия, форма, симметрия.',
    photo: photo('master-danil', 3 / 4, CARD_WIDTHS),
    alt: 'Барбер Данил Норт моделирует бороду',
  },
]

type Shot = { id: string; ratio: number; caption: string }

const rawShots: Shot[] = [
  { id: 'gal-01', ratio: 4 / 5, caption: 'Бритьё опасной бритвой' },
  { id: 'gal-02', ratio: 3 / 4, caption: 'Чистый градиент' },
  { id: 'gal-03', ratio: 3 / 4, caption: 'Интерьер зала' },
  { id: 'gal-04', ratio: 4 / 5, caption: 'Проработка деталей' },
  { id: 'gal-05', ratio: 1, caption: 'Кресло NORTH' },
  { id: 'gal-06', ratio: 1, caption: 'Борода в деталях' },
  { id: 'gal-07', ratio: 4 / 5, caption: 'Стрижка ножницами' },
  { id: 'gal-08', ratio: 1, caption: 'Инструменты' },
  { id: 'gal-09', ratio: 4 / 5, caption: 'Горячее полотенце' },
  { id: 'gal-10', ratio: 1, caption: 'Текстура' },
  { id: 'gal-11', ratio: 3 / 4, caption: 'Гость в кресле' },
  { id: 'gal-12', ratio: 1, caption: 'Работа машинкой' },
]

export const GALLERY: { id: string; caption: string; photo: Photo }[] = rawShots.map(
  (shot) => ({
    id: shot.id,
    caption: shot.caption,
    photo: photo(shot.id, shot.ratio, GALLERY_WIDTHS),
  }),
)

export const WHY_POINTS: Feature[] = [
  {
    icon: UserCheck,
    title: 'Индивидуальный стиль',
    text: 'Подбираем форму под черты лица и образ жизни.',
  },
  {
    icon: Award,
    title: 'Профессиональные мастера',
    text: 'Команда с опытом более 10 лет и постоянным обучением.',
  },
  {
    icon: ShieldCheck,
    title: 'Чистота и стерильность',
    text: 'Инструменты стерилизуются после каждого клиента.',
  },
  {
    icon: Gem,
    title: 'Премиальный сервис',
    text: 'Кофе, музыка и внимание к каждой детали.',
  },
]

export type Plan = {
  name: string
  service: string
  price: string
  unit: string
  featured?: boolean
  includes: string[]
}

export const PLANS: Plan[] = [
  {
    name: 'Classic',
    service: 'Мужская стрижка',
    price: '1 500',
    unit: '₽',
    includes: ['Консультация и форма', 'Мытьё и укладка', 'Один мастер на всё время'],
  },
  {
    name: 'Premium',
    service: 'Стрижка + борода',
    price: '2 200',
    unit: '₽',
    featured: true,
    includes: ['Всё из Classic', 'Моделирование бороды', 'Уход маслом и бальзамом'],
  },
  {
    name: 'Royal',
    service: 'Королевское бритьё',
    price: '1 900',
    unit: '₽',
    includes: ['Горячее полотенце и пена', 'Бритьё опасной бритвой', 'Массаж и уход'],
  },
  {
    name: 'Kids',
    service: 'Детская стрижка',
    price: '1 200',
    unit: '₽',
    includes: ['Знакомство с мастером', 'Стрижка без спешки', 'Фото для первого визита'],
  },
]

export const PROCESS = [
  { step: '01', title: 'Выберите услугу', text: 'Смотрите цены и записывайтесь на удобное время.' },
  { step: '02', title: 'Оставьте заявку', text: 'Заполните короткую форму — это займёт меньше минуты.' },
  { step: '03', title: 'Подтвердите время', text: 'Мы перезвоним и подтвердим бронь в течение 15 минут.' },
  { step: '04', title: 'Приходите в барбершоп', text: 'Кофе, музыка и работа без спешки.' },
] as const

export const PROCESS_ICONS = [LayoutGrid, MessageCircle, CalendarClock, Check] as const

export const TESTIMONIALS = [
  {
    text: 'Лучший барбершоп по атмосфере и качеству обслуживания.',
    name: 'Дмитрий',
    role: 'Клиент NORTH BARBER',
  },
  {
    text: 'Fade сделан безупречно. Стригусь третий раз — ни разу не пришлось поправлять дома.',
    name: 'Артём',
    role: 'Клиент NORTH BARBER',
  },
  {
    text: 'Бороду ведут здесь уже полгода. Форма идеальная, мастер запомнил все нюансы.',
    name: 'Игорь',
    role: 'Клиент NORTH BARBER',
  },
] as const

export const FAQ = [
  {
    q: 'Нужно ли записываться заранее?',
    a: 'Да, онлайн-запись лучше всего работает: вы выбираете время и мастера заранее. Но если подходящее окно есть, мы примем вас и без записи — позвоните или напишите нам.',
  },
  {
    q: 'Сколько длится стрижка?',
    a: 'Стрижка занимает около 45 минут, fade — 60, стрижка с бородой — 90 минут. Мы не торопим: лучше потратить чуть больше времени и сделать форму сразу идеальной.',
  },
  {
    q: 'Можно ли прийти с ребёнком?',
    a: 'Да. У нас есть детская стрижка для мальчиков до 12 лет, а в зале можно остаться родителю. Для детской стрижки рекомендуем выбирать первое утро в будний день.',
  },
  {
    q: 'Какие средства используете?',
    a: 'Только профессиональную косметику: шампуни, пены для бритья, масла и бальзамы для бороды. Всё стерилизуется и обновляется между клиентами.',
  },
  {
    q: 'Есть ли подарочные сертификаты?',
    a: 'Да, сертификаты на любую сумму и на конкретную услугу. Оформим в барбершопе за пять минут или пришлём в электронном виде.',
  },
] as const

export const MARQUEE = [
  'Мужская стрижка',
  'Fade',
  'Борода',
  'Опасное бритьё',
  'Кофе',
  'Музыка',
  'Кожаное кресло',
  'Горячее полотенце',
] as const
