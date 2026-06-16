import {
  Waves, Ruler, Anchor, Droplet, Shield, Fish, Target, Check, Scale,
  BedDouble, Star, Camera, AlertTriangle, ShoppingBag, ChevronDown,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/shared/PageTransition'

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

const WB_STATS = [
  { Icon: Waves,   num: '10',   unit: ' ГА',    label: 'Площа ставку' },
  { Icon: Ruler,   num: '1840', unit: ' м',      label: 'Берегова лінія' },
  { Icon: Anchor,  num: '390',  unit: ' м',      label: 'Ширина' },
  { Icon: Droplet, num: '4',    unit: ' / 8 м',  label: 'Глибина · макс' },
  { Icon: Shield,  num: 'Глина', unit: '',        label: 'Дно — глиняно-листове' },
]

const PEACEFUL = [
  { name: 'короп', rare: false },
  { name: 'дзеркальний короп', rare: false },
  { name: 'короп КОЇ', rare: true },
  { name: 'сазан', rare: false },
  { name: 'білий амур', rare: true },
  { name: 'товстолоб', rare: true },
  { name: 'карась', rare: false },
  { name: 'плотва', rare: false },
  { name: 'краснопірка', rare: false },
  { name: 'лин', rare: false },
  { name: 'лящ', rare: false },
  { name: 'густера', rare: false },
  { name: 'стерлядь', rare: true },
  { name: 'осетр сибірський', rare: true },
  { name: 'осетр-альбінос', rare: true },
]

const INCLUDED = [
  { label: 'Короповий мат', Icon: Check },
  { label: 'Антисептик', Icon: Droplet },
  { label: 'Мішок для зберігання риби', Icon: Check },
  { label: 'Відерце для рибалки', Icon: Check },
  { label: 'Ваги — за потреби', Icon: Scale },
]

const RULE_CARDS = [
  {
    Icon: Target,
    title: 'Умови ловлі',
    items: [
      'Ловимо лише у межах свого сектора або пірсу — не перехрещуємо снасті',
      'Як основну волосінь — лише волосінь, без шнура, щоб не травмувати рибу',
      'До 4 вудилищ на пірс, на кожному — лише 1 гачок',
      'Дозволені коропові та флет-методні монтажі, тільки безпечні',
    ],
  },
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
    title: 'Фотографування',
    items: [
      'Пійману рибу відпускаємо одразу після фото',
      'Не торкаємось зябрових кришок і не вставляємо пальці у зябра',
      'Фото — лише над матом-люлькою',
      'Фото стоячи з рибою заборонене',
    ],
  },
  {
    Icon: Droplet,
    title: 'Маніпуляції з рибою',
    items: [
      'Після вилову обробляємо місце гачка антисептиком',
      'Рибу кладемо лише на змочений водою короповий мат',
      'Зберігання риби заборонено',
      'Виняток — риба, яку дозволено забрати із собою',
    ],
  },
]

const BUY = [
  { label: 'Монтажі', Icon: Target },
  { label: 'Наживка', Icon: Fish },
  { label: 'Корм і прикормка', Icon: ShoppingBag },
  { label: 'Бойли та поп-апи', Icon: Check },
  { label: 'Рибальські аксесуари', Icon: Anchor },
]

const ALLOW_FEED = [
  'Варена конопля',
  'Дрібні зернові (рапс, пшениця, просо) — лише вареними',
  'Кукурудза та тигровий горіх — подрібнені й варені',
  'Сипучі кормові суміші, бойли, пелетс',
]
const DENY_FEED = [
  'Цільний тигровий горіх',
  'Будь-які зернові у необробленому (сирому) вигляді',
]

export default function Fishing() {
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
            src={`${import.meta.env.BASE_URL}pier-3.JPG`}
            alt="Риболовля"
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
            <span>Риболовля</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] tracking-[0.28em] uppercase text-bakshala-sand mb-4 mt-2"
          >
            Зловив — відпусти
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif font-light text-[clamp(44px,6vw,84px)] leading-tight tracking-tight"
          >
            Риболовля на<br />
            <em className="italic text-white">нашій водоймі</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-white/80 text-[15px] leading-relaxed max-w-2xl mx-auto"
          >
            Десять гектарів чистої води, багате зариблення та обладнані пірси. Спокій, дисципліна
            й повага до риби — основа справжнього відпочинку на воді.
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
              href="#species"
              className="bg-transparent text-white border border-white/60 px-7 py-3.5 text-[13px] tracking-wider rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Хто водиться
            </a>
          </motion.div>
        </div>

        <a
          href="#waterbody"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-[10px] tracking-widest uppercase hover:text-white transition-colors"
          aria-label="Прокрутити"
        >
          <span>SCROLL</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ── WATERBODY ── */}
      <section
        className="py-[clamp(48px,5vw,72px)] bg-bakshala-deep relative overflow-hidden"
        id="waterbody"
      >
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
              Характеристики водойми
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5 text-white">
              Водойма площею <em className="italic text-bakshala-sand">10 гектарів</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-white/60">
              Велике, глибоке й доглянуте — ставок розрахований на комфортну ловлю з пірсів по всьому периметру.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-white/[0.12]">
              {WB_STATS.map(({ Icon, num, unit, label }, i) => (
                <div
                  key={i}
                  className="px-7 py-10 text-center flex flex-col items-center gap-3.5 border-b border-white/[0.12] lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0"
                >
                  <span className="text-bakshala-mist">
                    <Icon size={26} strokeWidth={1.4} />
                  </span>
                  <div className="font-serif font-light text-[clamp(34px,4vw,50px)] leading-none text-white">
                    {num}
                    {unit && (
                      <small className="text-[0.5em] text-bakshala-mist tracking-[0.04em]">{unit}</small>
                    )}
                  </div>
                  <div className="text-[11.5px] tracking-[0.16em] uppercase text-white/55">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SPECIES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="species">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Видовий склад зариблення
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Хто водиться <em className="italic text-bakshala-sand">у водоймі</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Короп, амур, осетрові та інші. Рідкісні види охороняються — їх відпускають завжди.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {PEACEFUL.map(({ name, rare }) => (
                <span
                  key={name}
                  className={`px-4 py-2 rounded-full text-[13.5px] bg-white transition-all duration-[250ms] hover:-translate-y-0.5 cursor-default ${
                    rare
                      ? 'border border-bakshala-sand text-[#8A7248]'
                      : 'border border-bakshala-text/[0.18] text-[#2a3845] hover:border-bakshala-lake hover:text-bakshala-dark'
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRICE ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-[#FAFAFA]" id="price">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Вартість та оренда пірсу
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Один пірс — <em className="italic text-bakshala-sand">цілий день</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              За умови бронювання альтанки або будинку риболовля входить у вартість відпочинку.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch">
            {/* Price card */}
            <Reveal>
              <div className="bg-bakshala-deep text-white p-12 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute right-[-40px] bottom-[-40px] w-[180px] h-[180px] rounded-full border border-white/10 pointer-events-none" />
                <div className="text-[11px] tracking-[0.22em] uppercase text-bakshala-mist">
                  Світловий день · оренда пірсу
                </div>
                <div className="font-serif font-light text-[clamp(52px,7vw,78px)] leading-none mt-3.5 mb-1.5">
                  2 000<small className="text-[0.42em] text-bakshala-mist"> грн</small>
                </div>
                <p className="text-[14px] text-white/70 leading-relaxed mt-[18px] max-w-sm">
                  Вартість риболовлі на світловий день з орендою облаштованого пірсу.
                </p>
                <div className="mt-6 pt-[22px] border-t border-white/[0.14] inline-flex items-center gap-2.5 text-[13px] text-bakshala-sand tracking-[0.04em]">
                  <BedDouble size={16} strokeWidth={1.5} />
                  Безкоштовно для гостей альтанок та будинків
                </div>
              </div>
            </Reveal>

            {/* Included items */}
            <Reveal delay={0.08}>
              <div className="flex flex-col justify-center h-full">
                <h3 className="font-serif font-normal text-[26px] mb-2">При оренді пірсу безкоштовно</h3>
                <p className="text-[14px] text-[#6b7682] leading-relaxed mb-6">
                  Усе необхідне для дбайливого поводження з рибою вже на місці.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                  {INCLUDED.map(({ label, Icon }) => (
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
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-lake text-white relative overflow-hidden">
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
                    Дозволено вилов риби загальною вагою до 10&nbsp;кг. Особини від 5&nbsp;кг повертаються у водойму.
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
                    Короп КОЇ, товстолоб, білий амур та осетрові всіх видів — забирати заборонено.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RULES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="rules">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Умови риболовлі
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Правила, що бережуть <em className="italic text-bakshala-sand">рибу</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Прості й чіткі — щоб кожна риба повернулась у воду здоровою, а сусіди на пірсах залишались задоволеними.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
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

          {/* Warning callout */}
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
                штрафні санкції та/або відмовити у подальшому перебуванні на території комплексу.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RENTAL ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="rental">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}Rod.jpg`}
                  alt="Рибальське спорядження"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute pointer-events-none"
                  style={{ inset: '-1px', border: '1px solid #5B8FA8', transform: 'translate(-18px, 18px)' }}
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-3.5 text-bakshala-sand">
                Оренда та купівля
              </div>
              <h2 className="font-serif font-light text-[clamp(34px,4.4vw,54px)] leading-[1.05] tracking-tight mb-6">
                Усе спорядження — <em className="italic text-bakshala-lake">на місці</em>
              </h2>
              <p className="text-[15px] leading-[1.78] text-[#2a3845] mb-5">
                На Ранчо «Бакшала» доступна оренда рибальського спорядження для комфортної ловлі.
                Приїжджайте без зайвого багажу — необхідне знайдеться на місці.
              </p>
              <p className="text-[15px] leading-[1.78] text-[#2a3845] mb-4">
                За потреби тут же можна придбати все потрібне:
              </p>
              <div className="flex flex-wrap gap-3">
                {BUY.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-bakshala-text/[0.18] rounded-full text-[13.5px] text-[#2a3845] bg-white"
                  >
                    <Icon size={15} strokeWidth={1.5} className="text-bakshala-sand" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FEED RULES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-[#FAFAFA]" id="feed">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Правила використання корму
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Чим <em className="italic text-bakshala-sand">годувати</em> можна
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Правильно підготовлений корм безпечний для риби. Сирі зерна забороняємо — вони шкодять травленню.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-9 border border-bakshala-text/10 bg-bakshala-fog h-full">
                <div className="flex items-center gap-3 mb-6 pb-[18px] border-b border-bakshala-text/10">
                  <span className="w-9 h-9 rounded-full bg-bakshala-lake flex items-center justify-center text-white flex-shrink-0">
                    <Check size={18} strokeWidth={2} />
                  </span>
                  <h3 className="font-serif font-normal text-[25px]">Дозволено</h3>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {ALLOW_FEED.map((item) => (
                    <li key={item} className="flex gap-3 text-[14.5px] leading-[1.5] text-[#2a3845]">
                      <Check size={18} strokeWidth={1.5} className="text-bakshala-lake flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="p-9 border border-bakshala-text/10 bg-white h-full">
                <div className="flex items-center gap-3 mb-6 pb-[18px] border-b border-bakshala-text/10">
                  <span className="w-9 h-9 rounded-full bg-bakshala-sand flex items-center justify-center text-white flex-shrink-0">
                    <AlertTriangle size={18} strokeWidth={2} />
                  </span>
                  <h3 className="font-serif font-normal text-[25px]">Заборонено</h3>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {DENY_FEED.map((item) => (
                    <li key={item} className="flex gap-3 text-[14.5px] leading-[1.5] text-[#2a3845]">
                      <AlertTriangle size={18} strokeWidth={1.5} className="text-[#8A7248] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </PageTransition>
  )
}
