import {
  Users, Anchor, Target, Check, Fish, Camera, Clock,
  AlertTriangle, Star, Shield, Droplet, ShoppingBag, Scale,
  BedDouble, ChevronDown, X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/shared/PageTransition'

const BASE = import.meta.env.BASE_URL

const GALLERY = [
  `${BASE}pier-2.webp`,
  `${BASE}pier-3.webp`,
  `${BASE}pier-4.webp`,
  `${BASE}pier-5.webp`,
  `${BASE}pier-6.webp`,
]

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

const INCLUDED = [
  { Icon: Check,       label: 'Короповий мат' },
  { Icon: Droplet,     label: 'Антисептик' },
  { Icon: ShoppingBag, label: 'Мішок для зберігання' },
  { Icon: Scale,       label: 'Ваги — за потреби' },
]

const LIMITS = [
  { Icon: Users,  num: '2', label: 'особи максимум на одному пірсі' },
  { Icon: Anchor, num: '2', label: 'вудилища, кожне — з одним гачком' },
  { Icon: Target, num: '1', label: 'сектор — ловля лише у його межах' },
]

const RULE_CARDS = [
  {
    Icon: Fish,
    title: 'Поводження з рибою',
    items: [
      'Усі дії з рибою — виключно над короповим матом',
      'Інші мати — лише з дозволу адміністрації',
      'Заборонено класти рибу на землю',
      'Сторонні підсаки, транспортування й утримання риби заборонені',
    ],
  },
  {
    Icon: Camera,
    title: 'Фотографування риби',
    items: [
      'Відпускаємо рибу у ставок одразу після фото',
      'Не торкаємось зябрових кришок і не вставляємо пальці у зябра',
      'Фото — лише над матом-люлькою',
      'Фото стоячи з рибою заборонене',
    ],
  },
  {
    Icon: Clock,
    title: 'Маніпуляції з рибою',
    items: [
      'Усі дії з рибою — не довше 5 хвилин',
      'Місце гачка обробляємо антисептиком після вилову',
      'Рибу кладемо лише на змочений водою короповий мат',
      'Зберігання заборонено, окрім риби, яку забираєте із собою',
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Pier() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const closeLightbox = () => setLightboxIdx(null)
  const prev = () => setLightboxIdx((i) => (i! - 1 + GALLERY.length) % GALLERY.length)
  const next = () => setLightboxIdx((i) => (i! + 1) % GALLERY.length)

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
            src={`${BASE}pier-hero.webp`}
            alt="Окремий пірс"
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
            <Link to="/fishing" className="text-white/70 hover:text-white transition-colors">Риболовля</Link>
            <span className="opacity-50">/</span>
            <span>Окремий пірс</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] tracking-[0.28em] uppercase text-bakshala-sand mb-4 mt-2"
          >
            Особистий простір на воді
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif font-light text-[clamp(44px,6vw,84px)] leading-tight tracking-tight"
          >
            Риболовля на<br />
            <em className="italic text-bakshala-sand/90">окремому пірсі</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-white/80 text-[15px] leading-relaxed max-w-2xl mx-auto"
          >
            Власний обладнаний пірс на світловий день — тиша, простір і повна дисципліна
            у поводженні з рибою. Усе для зосередженої ловлі за принципом «зловив — відпусти».
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex gap-3.5 justify-center flex-wrap mt-8"
          >
            <a
              href="#price"
              className="bg-bakshala-sand text-white border border-bakshala-sand px-7 py-3.5 text-[13px] tracking-wider rounded-full hover:bg-bakshala-sand/90 transition-colors"
            >
              Вартість та умови
            </a>
            <a
              href="#conditions"
              className="bg-transparent text-white border border-white/60 px-7 py-3.5 text-[13px] tracking-wider rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Правила ловлі
            </a>
          </motion.div>
        </div>

        <a
          href="#price"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-[10px] tracking-widest uppercase hover:text-white transition-colors"
        >
          <span>SCROLL</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-[#111] p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden cursor-zoom-in group"
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={src}
                alt={`Пірс — фото ${i + 1}`}
                loading={i < 2 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        {GALLERY[4] && (
          <div
            className="mt-3 aspect-[16/5] overflow-hidden cursor-zoom-in group"
            onClick={() => setLightboxIdx(4)}
          >
            <img
              src={GALLERY[4]}
              alt="Пірс — фото 5"
              loading="lazy"
              className="w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-300"
            />
          </div>
        )}
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
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
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-6 text-white/70 hover:text-white text-4xl leading-none transition-colors select-none">‹</button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={GALLERY[lightboxIdx]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-6 text-white/70 hover:text-white text-4xl leading-none transition-colors select-none">›</button>
            <div className="absolute bottom-6 text-white/40 text-[13px] tracking-widest">{lightboxIdx + 1} / {GALLERY.length}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PRICE ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-[#FAFAFA]" id="price">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Вартість риболовлі
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Один пірс — <em className="italic text-bakshala-sand">світловий день</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Окремий обладнаний пірс у вашому розпорядженні на весь світловий день.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch">
            {/* Price card */}
            <Reveal>
              <div className="bg-bakshala-deep text-white p-12 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute right-[-40px] bottom-[-40px] w-[180px] h-[180px] rounded-full border border-white/10 pointer-events-none" />
                <div className="text-[11px] tracking-[0.22em] uppercase text-bakshala-mist">
                  Оренда окремого пірсу · світловий день
                </div>
                <div className="font-serif font-light text-[clamp(52px,7vw,78px)] leading-none mt-3.5 mb-1.5">
                  2 000<small className="text-[0.42em] text-bakshala-mist"> грн</small>
                </div>
                <p className="text-[14px] text-white/70 leading-relaxed mt-[18px] max-w-sm">
                  Вартість риболовлі на світловий день з орендою облаштованого пірсу.
                </p>
                <div className="mt-6 pt-[22px] border-t border-white/[0.14] inline-flex items-center gap-2.5 text-[13px] text-bakshala-sand tracking-[0.04em]">
                  <BedDouble size={16} strokeWidth={1.5} />
                  Безкоштовно при бронюванні альтанки або будинку
                </div>
              </div>
            </Reveal>

            {/* Included */}
            <Reveal delay={0.08}>
              <div className="flex flex-col justify-center h-full">
                <h3 className="font-serif font-normal text-[26px] mb-2">Що входить у вартість</h3>
                <p className="text-[14px] text-[#6b7682] leading-relaxed mb-6">
                  Усе необхідне для дбайливого поводження з рибою — вже на пірсі.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                  {INCLUDED.map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 text-[14.5px] text-[#2a3845] py-3 border-b border-bakshala-text/10"
                    >
                      <span className="text-bakshala-lake flex-shrink-0">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CATCH & RELEASE ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-lake text-white relative overflow-hidden" id="catch">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="text-[12px] tracking-[0.24em] uppercase text-white/75 mb-5">
                Принцип риболовлі
              </div>
              <div className="font-serif font-light text-[clamp(44px,6vw,78px)] leading-none tracking-tight">
                Зловив —<br />
                <em className="italic text-bakshala-shore">відпусти</em>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-[18px]">
              <div className="flex gap-4 items-start p-5 bg-white/10 border border-white/[0.18]">
                <span className="flex-shrink-0 mt-0.5 text-bakshala-shore">
                  <Star size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h4 className="text-[13px] tracking-[0.14em] uppercase mb-1.5">Бонус від ранчо</h4>
                  <p className="text-[14.5px] leading-relaxed text-white/90">
                    Дозволено вилов 2 рибин загальною вагою до 10&nbsp;кг — як приємний подарунок гостям.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-5 bg-white/10 border border-white/[0.18]">
                <span className="flex-shrink-0 mt-0.5 text-bakshala-shore">
                  <Shield size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h4 className="text-[13px] tracking-[0.14em] uppercase mb-1.5">Завжди відпускаємо</h4>
                  <p className="text-[14.5px] leading-relaxed text-white/90">
                    Короп КОЇ, товстолоб та осетрові всіх видів — забирати заборонено.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="conditions">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Умови ловлі
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Правила <em className="italic text-bakshala-sand">на пірсі</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Чіткі ліміти зберігають комфорт і безпеку — для вас, сусідів і риби. Дозволені лише безпечні монтажі.
            </p>
          </Reveal>

          {/* Limit grid */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-bakshala-text/[0.12] mb-8">
              {LIMITS.map(({ Icon, num, label }, i) => (
                <div
                  key={i}
                  className="px-7 py-10 text-center flex flex-col items-center gap-3.5 border-b border-bakshala-text/[0.12] sm:border-b-0 sm:border-r last:border-r-0"
                >
                  <span className="text-bakshala-lake">
                    <Icon size={26} strokeWidth={1.4} />
                  </span>
                  <div className="font-serif font-light text-[clamp(44px,5vw,60px)] leading-none text-bakshala-text">
                    {num}
                  </div>
                  <div className="text-[12px] tracking-[0.14em] uppercase text-bakshala-text/50 max-w-[140px]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Montage chips */}
          <Reveal delay={0.08}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-7 bg-white border border-bakshala-text/10">
              <span className="text-[12px] tracking-[0.18em] uppercase text-bakshala-sand font-medium flex-shrink-0">
                Рекомендовані монтажі
              </span>
              <div className="flex flex-wrap gap-3">
                {['Флет-методні монтажі', 'Класичні коропові монтажі'].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-bakshala-text/[0.18] rounded-full text-[13.5px] text-[#2a3845] bg-white"
                  >
                    <Check size={14} strokeWidth={2} className="text-bakshala-lake" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HANDLING RULES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="handling">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Поводження з рибою
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Дисципліна, що береже <em className="italic text-bakshala-sand">рибу</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Кожна риба має повернутись у воду здоровою. Прості правила роблять це можливим.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
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

          <Reveal>
            <div
              className="flex gap-5 items-start bg-white p-8 max-w-[920px] mx-auto"
              style={{ border: '1px solid rgba(28,46,56,0.18)', borderLeft: '3px solid #A89060' }}
            >
              <span className="flex-shrink-0 text-[#8A7248] mt-0.5">
                <AlertTriangle size={30} strokeWidth={1.5} />
              </span>
              <p className="text-[15px] leading-[1.7] text-[#2a3845]">
                <strong className="text-bakshala-text font-semibold">За умисне вбивство риби передбачено штраф.</strong>{' '}
                За порушення правил риболовлі адміністрація Ранчо «Бакшала» залишає за собою право застосувати
                штрафні санкції та відмовити у подальшому перебуванні на території комплексу.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </PageTransition>
  )
}
