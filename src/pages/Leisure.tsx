import {
  Clock, Leaf, Utensils, Flame, Volume2, Star, Shield, Ban, X,
  Waves, Cctv, Car, TreePine, Phone, Send, MessageCircle,
  ChevronDown, Wifi, Wind, Refrigerator, Tv, Sofa, Armchair,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'
import { openBooking } from '../lib/openBooking'

const BASE = import.meta.env.BASE_URL

function Reveal({
  children, delay = 0, className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const GAZEBOS = [
  {
    id: 'small',
    name: 'Мала альтанка',
    capacity: 'до 8–10 осіб',
    price: '8 000 ₴',
    desc: 'Панорамна закрита альтанка з мангальною зоною, кондиціонером та холодильником. У вартість входить риболовля — подарунок 2 рибини до 10 кг.',
    amenities: [
      { Icon: Wifi,         label: 'WiFi' },
      { Icon: Wind,         label: 'Кондиціонер' },
      { Icon: Refrigerator, label: 'Холодильник' },
      { Icon: Armchair,     label: 'Диван або крісла' },
      { Icon: Flame,        label: 'Мангал + приладдя' },
      { Icon: Waves,        label: 'Риболовля включена' },
    ],
    images: [
      `${BASE}Leisure-1_1.webp`,
      `${BASE}Leisure-1_2.webp`,
      `${BASE}Leisure-1_3.webp`,
      `${BASE}Leisure-1_4.webp`,
      `${BASE}Leisure-1_5.webp`,
      `${BASE}Leisure-1_6.webp`,
    ],
  },
  {
    id: 'big',
    name: 'Велика альтанка',
    capacity: 'до 15–17 осіб',
    price: '10 000 ₴',
    desc: 'Простора панорамна альтанка закритого типу з телевізором, кондиціонером, шезлонгами та великою мангальною групою. Ідеальна для вечірок та корпоративів.',
    amenities: [
      { Icon: Wifi,         label: 'WiFi' },
      { Icon: Tv,           label: 'Телевізор' },
      { Icon: Wind,         label: 'Кондиціонер' },
      { Icon: Refrigerator, label: 'Холодильник' },
      { Icon: Sofa,         label: 'Диван + 2 шезлонги' },
      { Icon: Flame,        label: 'Мангал + приладдя' },
    ],
    images: [
      `${BASE}Leisure-2_1.webp`,
      `${BASE}Leisure-2_2.webp`,
      `${BASE}Leisure-2_3.webp`,
      `${BASE}Leisure-2_4.webp`,
      `${BASE}Leisure-2_5.webp`,
      `${BASE}Leisure-2_6.webp`,
    ],
  },
]

const STEPS = [
  ['01', 'Оберіть та забронюйте', 'Альтанки бронюйте телефоном або в месенджері — Telegram чи Instagram. Без бронювання — за наявності вільних альтанок.'],
  ['02', 'Внесіть передоплату', 'Бронювання підтверджується після передоплати'],
  ['03', 'Залишитесь довше?', 'Якщо після відпочинку плануєте риболовлю чи інші розваги — додатково оплачується денне перебування.'],
]

const RULE_CARDS = [
  {
    Icon: Clock,
    title: 'Оренда та час',
    items: [
      'Оренда альтанки діє протягом заброньованого часу',
      'Продовження — лише за наявності вільних альтанок',
      'Про звільнення повідомте рецепцію за 30 хв',
    ],
  },
  {
    Icon: Leaf,
    title: 'Чистота та порядок',
    items: [
      'Після відпочинку залиште альтанку в охайному стані',
      'Сміття викидайте у спеціальні контейнери',
      'Бережіть газони, дерева та кущі на території',
    ],
  },
  {
    Icon: Utensils,
    title: 'Майно та куріння',
    items: [
      'Посуд, техніку та меблі використовуйте за призначенням',
      'Не переміщуйте шезлонги, стільці та інші меблі',
      'Куріння — лише у спеціально відведених місцях',
    ],
  },
]

const DENIED = [
  'Куріння сигарет та тютюнових виробів поза відведеними місцями',
  'Свічки та недопалки на території альтанок',
  'Розпалювати вогнища або використовувати дрова не за призначенням',
  'Стрибати у ставок, купати тварин у воді',
  'Вживати їжу та напої біля води',
  'Ходити по газонах, рвати квіти, кущі та плоди дерев',
  'Гучні вечірки без погодження з адміністрацією',
  'Зброя, спецзасоби та кидання сторонніх предметів в унітаз',
]

const FINES = [
  { Icon: Flame,   name: 'Куріння у будиночках та альтанках',    amt: '2 500 ₴', note: 'за випадок' },
  { Icon: Volume2, name: 'Порушення тиші (23:00–08:00)',          amt: '1 000 ₴', note: 'за випадок' },
  { Icon: Star,    name: 'Салют, феєрверки, конфеті на території', amt: '5 000 ₴', note: null },
  { Icon: Shield,  name: 'Пошкодження майна альтанки',            amt: '100%',    note: 'відшкодування збитків' },
]

const SAFE = [
  {
    Icon: Waves,
    title: 'Зона ставка та купання',
    items: [
      'Купання — лише у спеціально відведеному місці',
      'Діти до 14 років — під наглядом дорослих і з засобами безпеки',
      'Не стрибати з пірсу, не бігати й не штовхатись у воді',
    ],
  },
  {
    Icon: Cctv,
    title: 'Відеоспостереження',
    items: [
      'Територія, входи та сходи обладнані камерами',
      'Запис зберігається для безпеки гостей і майна',
    ],
  },
  {
    Icon: Car,
    title: 'Паркування',
    items: [
      'Паркування — лише на спеціально відведених місцях',
      'Не залишайте авто на в\'їздах та виїздах',
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Leisure() {
  const [lightbox, setLightbox] = useState<{ gazeboId: string; idx: number } | null>(null)

  const closeLightbox = () => setLightbox(null)
  const lightboxImages = lightbox ? GAZEBOS.find((g) => g.id === lightbox.gazeboId)!.images : []
  const prevImg = () => setLightbox((l) => l && ({ ...l, idx: (l.idx - 1 + lightboxImages.length) % lightboxImages.length }))
  const nextImg = () => setLightbox((l) => l && ({ ...l, idx: (l.idx + 1) % lightboxImages.length }))

  return (
    <PageTransition>

      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ height: '78vh', minHeight: '560px' }}
        id="top"
      >
        <div className="absolute inset-0">
          <img
            src={`${BASE}Leisure-hero.webp`}
            alt="Альтанки"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-[920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.22em] uppercase text-white/70 mb-2"
          >
            <Link to="/" className="text-white/70 hover:text-white transition-colors">Ранчо Бакшала</Link>
            <span className="opacity-50">/</span>
            <span>Альтанки</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] tracking-[0.28em] uppercase text-white/70 mb-4 mt-2"
          >
            Денний відпочинок · компанія · затишок
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif font-light text-[clamp(44px,6vw,84px)] leading-tight tracking-tight"
          >
            Альтанки для<br />
            <em className="italic text-white">вашого дня</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-white/80 text-[15px] leading-relaxed max-w-2xl mx-auto"
          >
            Все для справжнього відпочинку на природі: <br />
            вода поруч, мангал готовий, компанія в зборі.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex gap-3.5 justify-center flex-wrap mt-8"
          >
            <button
              onClick={openBooking}
              className="bg-bakshala-sand text-white border border-bakshala-sand px-7 py-3.5 text-[13px] tracking-wider rounded-full hover:bg-bakshala-sand/90 transition-colors"
            >
              Забронювати альтанку
            </button>
            <a
              href="#rules"
              className="bg-transparent text-white border border-white/60 px-7 py-3.5 text-[13px] tracking-wider rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Правила оренди
            </a>
          </motion.div>
        </div>

        <a
          href="#gazebos"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-[10px] tracking-widest uppercase hover:text-white transition-colors"
          aria-label="Прокрутити"
        >
          <span>SCROLL</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ── GAZEBO SECTIONS ── */}
      <section className="bg-bakshala-shore" id="gazebos">
        <div className="max-w-[1280px] mx-auto px-8 pt-[clamp(48px,5vw,72px)]">
          <div className="text-center max-w-[720px] mx-auto mb-[72px]">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <SectionBadge>Альтанки</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-4"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
            >
              Оберіть свою <em className="text-bakshala-sand">альтанку</em>
            </h2>
          </div>
        </div>

        {GAZEBOS.map((g, gi) => (
          <div key={g.id} className={`pb-[clamp(40px,5vw,60px)] ${gi > 0 ? 'border-t border-bakshala-text/10 pt-[clamp(40px,5vw,60px)]' : ''}`}>
            <div className="max-w-[1280px] mx-auto px-8">
              {/* Header */}
              <Reveal className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
                  <div>
                    <div className="text-[11px] tracking-[0.28em] uppercase text-bakshala-sand mb-2">{g.capacity}</div>
                    <h3
                      className="font-serif font-light tracking-tight"
                      style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.05 }}
                    >
                      {g.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="text-right">
                      <div className="font-serif font-light text-[36px] leading-none">{g.price}</div>
                      <div className="text-[12px] text-bakshala-text/50 mt-1">за день</div>
                    </div>
                    <button
                      onClick={openBooking}
                      className="bg-bakshala-sand text-white px-6 py-3 text-[12px] tracking-widest uppercase hover:bg-bakshala-sand/90 transition-colors whitespace-nowrap"
                    >
                      Орендувати
                    </button>
                  </div>
                </div>
                <p className="text-bakshala-text/60 text-[14.5px] leading-relaxed max-w-2xl">{g.desc}</p>
              </Reveal>

              {/* Gallery */}
              <div className="bg-[#111] p-3 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {g.images.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] overflow-hidden cursor-zoom-in group"
                      onClick={() => setLightbox({ gazeboId: g.id, idx: i })}
                    >
                      <img
                        src={src}
                        alt={`${g.name} — фото ${i + 1}`}
                        loading={gi === 0 && i < 2 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <Reveal>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {g.amenities.map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 text-[13px] text-bakshala-text/70 p-3 border border-bakshala-text/10 bg-white/50">
                      <Icon size={16} className="text-bakshala-sand flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImg() }}
              className="absolute left-6 text-white/70 hover:text-white text-4xl leading-none transition-colors select-none"
            >
              ‹
            </button>
            <motion.img
              key={`${lightbox.gazeboId}-${lightbox.idx}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={lightboxImages[lightbox.idx]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); nextImg() }}
              className="absolute right-6 text-white/70 hover:text-white text-4xl leading-none transition-colors select-none"
            >
              ›
            </button>
            <div className="absolute bottom-6 text-white/40 text-[13px] tracking-widest">
              {lightbox.idx + 1} / {lightboxImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── WELCOME QUOTE ── */}
      <section className="pt-[clamp(48px,5vw,72px)] pb-0 bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal>
            <div className="text-center max-w-[760px] mx-auto">
              <p
                className="font-serif font-light italic leading-[1.35] tracking-tight text-bakshala-text"
                style={{ fontSize: 'clamp(24px, 3.2vw, 36px)' }}
              >
                Альтанка — відпочинку на Ранчо{' '}
                <span className="text-bakshala-lake not-italic">БАКШАЛА</span>{' '}
                на день: зустрічайте гостей, готуйте на мангалі та відпочивайте біля водойми.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-[#FAFAFA]" id="booking">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Бронювання
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Як забронювати <em className="italic text-bakshala-sand">альтанку</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Три прості кроки. Передоплата не повертається при скасуванні менш ніж за 7 днів до заїзду або в день заїзду.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-14 items-stretch">
            {/* Steps */}
            <Reveal>
              <div className="flex flex-col">
                {STEPS.map(([no, title, desc], i) => (
                  <div
                    key={i}
                    className={`flex gap-5 items-start py-6 border-b border-bakshala-text/10 ${i === 0 ? 'pt-0' : ''}`}
                  >
                    <div className="font-serif font-light text-[30px] leading-none text-bakshala-sand w-11 flex-shrink-0">
                      {no}
                    </div>
                    <div>
                      <h4 className="text-[13px] tracking-[0.12em] uppercase mb-1.5 text-bakshala-text font-medium">
                        {title}
                      </h4>
                      <p className="text-[14.5px] leading-[1.62] text-[#2a3845]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Contact card */}
            <Reveal delay={0.08}>
              <div className="bg-bakshala-deep text-white p-10 flex flex-col justify-center gap-5 relative overflow-hidden h-full">
                <div className="absolute right-[-50px] top-[-50px] w-[170px] h-[170px] rounded-full border border-white/10 pointer-events-none" />
                <div className="text-[11px] tracking-[0.22em] uppercase text-bakshala-mist">Зв'язатися з нами</div>
                <h3 className="font-serif font-light text-[32px] leading-[1.1]">Бронюйте зручним способом</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+380770737300"
                    className="flex items-center gap-3.5 text-white text-[15.5px] pb-3.5 border-b border-white/[0.13] hover:text-bakshala-sand transition-colors"
                  >
                    <span className="text-bakshala-sand flex-shrink-0"><Phone size={18} strokeWidth={1.5} /></span>
                    +38 077 073 73 00
                  </a>
                  <a
                    href="https://t.me/bakshalaranch_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-white text-[15.5px] pb-3.5 border-b border-white/[0.13] hover:text-bakshala-sand transition-colors"
                  >
                    <span className="text-bakshala-sand flex-shrink-0"><Send size={18} strokeWidth={1.5} /></span>
                    Telegram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3.5 text-white text-[15.5px] pb-3.5 border-b border-white/[0.13] hover:text-bakshala-sand transition-colors"
                  >
                    <span className="text-bakshala-sand flex-shrink-0"><MessageCircle size={18} strokeWidth={1.5} /></span>
                    Instagram
                  </a>
                </div>
                {/* <div className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-[1.55]">
                  <span className="text-bakshala-sand flex-shrink-0 mt-0.5">
                    <AlertTriangle size={17} strokeWidth={1.5} />
                  </span>
                  Гучні вечірки та масштабні святкування — лише за попереднім погодженням з адміністрацією.
                </div> */}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TIMES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-deep relative overflow-hidden" id="times">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(168,197,214,.08) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-mist">
              Час оренди
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5 text-white">
              Коли діє <em className="italic text-bakshala-sand">ваша альтанка</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-white/60">
              Оренда діє протягом заброньованого часу. Про звільнення повідомте рецепцію за 30 хвилин.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[820px] mx-auto">
              <div className="border border-white/[0.14] p-12">
                <div className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.16em] uppercase text-bakshala-sand mb-6">
                  <TreePine size={16} strokeWidth={1.5} />
                  Альтанки
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Заїзд з</span>
                  <span className="font-serif font-light text-[38px] leading-none text-white">10:00</span>
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Виїзд до</span>
                  <span className="font-serif font-light text-[38px] leading-none text-white">22:00</span>
                </div>
              </div>
              <div className="border border-white/[0.14] p-12">
                <div className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.16em] uppercase text-bakshala-sand mb-6">
                  <Clock size={16} strokeWidth={1.5} />
                  Важливо
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Продовження</span>
                  <span className="font-serif font-light text-[20px] leading-none text-white">за наявності</span>
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Звільнення</span>
                  <span className="font-serif font-light text-[20px] leading-none text-white">−30 хв</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RULES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-[#FAFAFA]" id="rules">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Правила користування
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Прості правила <em className="italic text-bakshala-sand">відпочинку</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Вони бережуть затишок альтанки та комфорт усіх гостей. Дякуємо, що дотримуєтесь.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RULE_CARDS.map(({ Icon, title, items }, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="border border-bakshala-text/10 bg-white p-8 hover:border-bakshala-lake hover:-translate-y-0.5 transition-all duration-[350ms] h-full">
                  <div className="w-12 h-12 rounded-full bg-bakshala-fog flex items-center justify-center text-bakshala-lake mb-5">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif font-normal text-[23px] leading-[1.15] mb-4">{title}</h4>
                  <ul className="flex flex-col gap-3">
                    {items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-[14px] leading-[1.55] text-[#2a3845]">
                        <span className="w-1.5 h-1.5 rounded-full bg-bakshala-sand flex-shrink-0 mt-[7px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROHIBITED ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="prohibited">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Заборонено
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Чого робити <em className="italic text-bakshala-sand">не можна</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Заборонено проявляти агресію чи створювати загрозу для здоров'я, безпеки та майна інших гостей.
            </p>
          </Reveal>

          <Reveal>
            <div className="p-9 border border-bakshala-text/10 bg-white">
              <div className="flex items-center gap-3 mb-6 pb-[18px] border-b border-bakshala-text/10">
                <span className="w-9 h-9 rounded-full bg-bakshala-sand flex items-center justify-center text-white flex-shrink-0">
                  <Ban size={18} strokeWidth={2} />
                </span>
                <h3 className="font-serif font-normal text-[25px]">Суворо заборонено</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
                {DENIED.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-[1.5] text-[#2a3845]">
                    <X size={18} strokeWidth={1.5} className="text-[#8A7248] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-[#FAFAFA]" id="fines">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Штрафи
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Відповідальність за <em className="italic text-bakshala-sand">порушення</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Прозорий перелік санкцій, що діють на території комплексу Ранчо «Бакшала».
            </p>
          </Reveal>

          <Reveal>
            <div className="border border-bakshala-text/[0.18] bg-white">
              {FINES.map(({ Icon, name, amt, note }, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1fr_auto] gap-6 items-center px-7 py-[22px] border-b last:border-b-0 border-bakshala-text/10 ${
                    i % 2 === 0 ? 'bg-[#fcfaf6]' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4 text-[15px] text-bakshala-text leading-[1.45]">
                    <span className="text-[#8A7248] flex-shrink-0">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    {name}
                  </div>
                  <div
                    className="font-serif font-medium text-right whitespace-nowrap text-bakshala-dark"
                    style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
                  >
                    {amt}
                    {note && (
                      <small className="block font-sans font-normal text-[11px] tracking-[0.04em] text-[#6b7682] mt-0.5 whitespace-normal">
                        {note}
                      </small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SAFETY ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-deep relative overflow-hidden" id="safety">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(168,197,214,.08) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-mist">
              Територія та безпека
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5 text-white">
              Спокій біля <em className="italic text-bakshala-sand">води</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-white/60">
              Кілька орієнтирів, що роблять відпочинок на території безпечним для всіх.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAFE.map(({ Icon, title, items }, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="border border-white/[0.14] p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-bakshala-mist/[0.12] flex items-center justify-center text-bakshala-mist mb-5">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif font-normal text-[23px] text-white mb-3.5">{title}</h4>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-[14px] leading-[1.55] text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-bakshala-sand flex-shrink-0 mt-[7px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  )
}
