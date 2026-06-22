import { Link } from 'react-router-dom'
import {
  Users, Phone, Send, MessageCircle, AlertTriangle, X, Ban,
  Zap, PawPrint, Clock, Shield, Key, Flame, Volume2,
  Siren, Cctv, TreePine, BedDouble, Star,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { houses } from '../data/houses'
import PageHero from '../components/shared/PageHero'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

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

const STEPS = [
  ['01', 'Оберіть та забронюйте', 'Будиночки, альтанки й риболовлю бронюйте телефоном або в месенджері — Telegram чи Instagram.'],
  ['02', 'Внесіть передоплату', 'Бронювання підтверджується після передоплати 50% від вартості будинку або альтанки.'],
  ['03', 'Оформлення при заїзді', 'За паспортом чи документом, що посвідчує особу. За потреби — анкета при оренді спорядження.'],
]

const PERKS = [
  { Icon: Zap,     title: 'Світло завжди',        desc: 'Під час відключень працюють генератори та інверторні акумулятори — світло є навіть під час тривалих відключень.', tag: null },
  { Icon: PawPrint, title: 'Можна з улюбленцем', desc: 'Розміщення з тваринами — за погодженням і наявності вільного будиночка. Потрібні паспорт тварини та довідка про щеплення.', tag: null },
  { Icon: Clock,   title: 'Ранній / пізній заїзд', desc: 'Можливий, якщо до або після вас немає інших гостей — цей час потрібен на прибирання.', tag: null },
]

const RULE_CARDS = [
  {
    Icon: Shield,
    title: 'Дбайливе ставлення',
    items: [
      'Бережіть майно будинку — за пошкодження гість відшкодовує повну вартість',
      'Посуд, техніку та меблі використовуйте лише за призначенням',
      'Дотримуйтесь пожежної безпеки та санітарних норм',
      'Не залишайте дітей і тварин без нагляду',
    ],
  },
  {
    Icon: Key,
    title: 'Перед виїздом',
    items: [
      'Зачиніть двері та перекрийте водопровідні крани',
      'Вимкніть світло й електроприлади',
      'Меблі не переміщуйте й не виносьте без дозволу',
      'Повідомте рецепцію за 30 хв до розрахункового часу',
    ],
  },
  {
    Icon: Flame,
    title: 'Безпека та куріння',
    items: [
      'Куріння — лише у спеціально відведених місцях',
      'У кожному будиночку є вогнегасник',
      'Заборонено сушити речі на каміні',
      'При пожежі — повідомте адміністрацію та службу 101',
    ],
  },
]

const DENIED = [
  'Куріння сигарет, вейпів, IQOS і кальянів у будинках та альтанках',
  'Запрошувати сторонніх, передавати ключі або селити інших осіб',
  'Гучні вечірки та святкування без погодження з адміністрацією',
  'Зброя, боєприпаси, легкозаймисті, токсичні та хімічні речовини',
  'Наркотичні та психотропні речовини',
  'Електронагрівальні прилади поза комплектацією будинку',
  'Кидати сторонні предмети в унітаз',
  'Ходити по газонах, рвати квіти, кущі та плоди дерев',
]

const FINES = [
  { Icon: Flame,    name: 'Куріння у будиночках та альтанках',       amt: '2 500 ₴', note: 'за випадок' },
  { Icon: Volume2,  name: 'Порушення тиші (23:00–08:00)',             amt: '1 000 ₴', note: 'за випадок' },
  { Icon: Users,    name: 'Незареєстрований гість у будинку',         amt: '50%',     note: 'вартості будинку' },
  { Icon: PawPrint, name: 'Непогоджена тварина в будинку',            amt: '2 500 ₴', note: null },
  { Icon: Star,     name: 'Салют, феєрверки, конфеті на території',  amt: '5 000 ₴', note: null },
  { Icon: Key,      name: 'Втрата ключа від будинку',                 amt: '500 ₴',   note: null },
  { Icon: Shield,   name: 'Пошкодження майна',                        amt: '100%',    note: 'відшкодування збитків' },
]

const SAFE = [
  {
    Icon: Volume2,
    title: 'Тиша та комендантська',
    items: [
      'Тиша — з 23:00 до 08:00',
      'Комендантська година — з 00:00 до 05:00, пересування заборонене',
      'Гучна музика й телевізор у нічний час заборонені',
    ],
  },
  {
    Icon: Siren,
    title: 'Повітряна тривога',
    items: [
      'На території є укриття — розташування підкажуть при заселенні',
      'При сигналі зачиніть вікна, візьміть документи та цінні речі',
      'Виходьте евакуаційними шляхами (схема у будинку)',
    ],
  },
  {
    Icon: Cctv,
    title: 'Безпека та паркування',
    items: [
      'Територія під відеоспостереженням (окрім будинків і санвузлів)',
      'Паркування — лише на відведених місцях',
      'Купання — у спеціально відведеному місці, діти до 14 — під наглядом',
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Houses() {
  return (
    <PageTransition>

      {/* ── HERO ── */}
      <PageHero
        image={`${import.meta.env.BASE_URL}House-hero.webp`}
        title="Будиночки та"
        titleEm="умови проживання"
        badge="Проживання"
        subtitle="Оберіть свій будиночок та ознайомтесь з усім, що потрібно знати перед заїздом."
      />

      {/* ── HOUSE CARDS ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[720px] mx-auto mb-[72px]">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <SectionBadge>Оберіть свій варіант</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-4"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
            >
              Для кожного <em className="text-bakshala-sand">гостя</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {houses.map((house) => (
              <Link
                key={house.id}
                to={`/houses/${house.id}`}
                className="group block overflow-hidden border border-bakshala-text/10 hover:border-bakshala-lake transition-colors duration-300"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={house.image}
                    alt={house.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] tracking-[0.24em] uppercase text-bakshala-sand">{house.area}</span>
                    <div className="flex items-center gap-1.5 text-bakshala-text/50 text-[13px]">
                      <Users size={14} />
                      {house.capacity}
                    </div>
                  </div>
                  <h3 className="font-serif font-light text-[28px] leading-tight mb-2">{house.name}</h3>
                  <p className="text-bakshala-text/60 text-[14px] leading-relaxed mb-5">{house.description}</p>
                  <div className="flex items-end justify-between pt-4 border-t border-bakshala-text/10">
                    <div>
                      <span className="font-serif text-[28px] font-light leading-none">
                        ₴&nbsp;{house.priceNum.toLocaleString('uk-UA')}
                      </span>
                      <span className="text-[12px] text-bakshala-text/50 ml-2">/ ніч</span>
                    </div>
                    <span className="text-[12px] tracking-widest uppercase text-bakshala-lake border-b border-bakshala-lake pb-0.5 group-hover:border-bakshala-dark group-hover:text-bakshala-dark transition-colors">
                      Детальніше →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELCOME QUOTE ── */}
      <section className="pt-[clamp(48px,5vw,72px)] pb-0 bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal>
            <div className="text-center max-w-[760px] mx-auto">
              <p
                className="font-serif font-light italic leading-[1.35] tracking-tight text-bakshala-text"
                style={{ fontSize: 'clamp(24px, 3.2vw, 36px)' }}
              >
                «Вітаємо у Ранчо{' '}
                <span className="text-bakshala-lake not-italic">«Бакшала»</span>!
                Просимо дотримуватись простих правил,
                щоб ваш відпочинок був комфортним і безпечним.»
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
              Як забронювати <em className="italic text-bakshala-sand">відпочинок</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Три прості кроки — і будиночок ваш. Без передоплати поселення можливе лише за наявності вільних місць.
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
                <div className="flex items-start gap-2.5 text-[13.5px] text-white/78 leading-[1.55]">
                  <span className="text-bakshala-sand flex-shrink-0 mt-0.5">
                    <AlertTriangle size={17} strokeWidth={1.5} />
                  </span>
                  Передоплата не повертається при скасуванні менш ніж за 7 днів до заїзду або в день заїзду.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CHECK-IN / CHECK-OUT TIMES ── */}
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
              Час заїзду та виїзду
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5 text-white">
              Коли заселятись <em className="italic text-bakshala-sand">і виїжджати</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-white/60">
              Проживання менше доби оплачується як повна доба. Про виїзд повідомте рецепцію за 30 хвилин.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {/* Cabins */}
              <div className="border border-white/[0.14] p-9">
                <div className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.16em] uppercase text-bakshala-sand mb-6">
                  <BedDouble size={16} strokeWidth={1.5} />
                  Будиночки
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Заїзд з</span>
                  <span className="font-serif font-light text-[38px] leading-none text-white">15:00</span>
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Виїзд до</span>
                  <span className="font-serif font-light text-[38px] leading-none text-white">11:00</span>
                </div>
              </div>
              {/* Gazebos */}
              <div className="border border-white/[0.14] p-9">
                <div className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.16em] uppercase text-bakshala-sand mb-6">
                  <TreePine size={16} strokeWidth={1.5} />
                  Альтанки
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Заїзд з</span>
                  <span className="font-serif font-light text-[38px] leading-none text-white">12:00</span>
                </div>
                <div className="flex items-baseline justify-between py-3.5 border-t border-white/10">
                  <span className="text-[14px] text-white/65 tracking-[0.03em]">Виїзд до</span>
                  <span className="font-serif font-light text-[38px] leading-none text-white">23:00</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="perks">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Переваги для гостей
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Дрібниці, що роблять <em className="italic text-bakshala-sand">краще</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Кілька приємних умов, про які варто знати заздалегідь.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PERKS.map(({ Icon, title, desc, tag }, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex gap-4 items-start p-7 border border-bakshala-text/10 bg-white hover:border-bakshala-lake hover:-translate-y-0.5 transition-all duration-[350ms] h-full">
                  <span className="w-11 h-11 rounded-full bg-bakshala-fog flex items-center justify-center text-bakshala-lake flex-shrink-0">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="font-serif font-normal text-[21px] leading-[1.15] mb-1.5">{title}</h4>
                    <p className="text-[14px] leading-[1.6] text-[#2a3845]">{desc}</p>
                    {tag && (
                      <span className="inline-block mt-2.5 font-serif font-medium text-[26px] text-[#8A7248] leading-none">
                        {tag}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RULES ── */}
      <section className="py-[clamp(48px,5vw,72px)] bg-[#FAFAFA]" id="rules">
        <div className="max-w-[1280px] mx-auto px-8">
          <Reveal className="text-center mb-14">
            <div className="w-px h-10 bg-bakshala-sand mx-auto mb-5" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-medium mb-4 text-bakshala-sand">
              Правила проживання
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5">
              Прості правила <em className="italic text-bakshala-sand">для всіх</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-bakshala-text/55">
              Вони бережуть майно, ваш спокій і комфорт сусідів. Дякуємо, що дотримуєтесь.
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
              Адміністрація має право відмовити в подальшому перебуванні за систематичні порушення.
            </p>
          </Reveal>

          <Reveal>
            <div className="p-9 border border-bakshala-text/10 bg-white mb-10">
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

          <Reveal>
            <div
              className="flex gap-5 items-start bg-white p-8 max-w-[920px] mx-auto"
              style={{ border: '1px solid rgba(28,46,56,0.18)', borderLeft: '3px solid #A89060' }}
            >
              <span className="flex-shrink-0 text-[#8A7248] mt-0.5">
                <AlertTriangle size={30} strokeWidth={1.5} />
              </span>
              <p className="text-[15px] leading-[1.7] text-[#2a3845]">
                <strong className="text-bakshala-text font-semibold">
                  Адміністрація може відмовити в поселенні або виселити без повернення коштів
                </strong>{' '}
                гостей у стані сильного сп'яніння, без документів, при спробі поселитись більшою кількістю осіб,
                ніж дозволено, або при систематичному порушенні правил.
              </p>
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
              Прозорий перелік санкцій — щоб правила залишались зрозумілими для кожного гостя.
            </p>
          </Reveal>

          <Reveal>
            <div
              className="border border-bakshala-text/[0.18] bg-white"
            >
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
              Тиша · тривога · безпека
            </div>
            <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-tight mb-5 text-white">
              Спокій та <em className="italic text-bakshala-sand">безпека</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto text-white/60">
              Кілька важливих орієнтирів на випадок нічного часу та надзвичайних ситуацій.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {SAFE.map(({ Icon, title, items }, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="border border-white/[0.14] p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-bakshala-mist/[0.12] flex items-center justify-center text-bakshala-mist mb-5">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif font-normal text-[23px] text-white mb-3.5">{title}</h4>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-[14px] leading-[1.55] text-white/78">
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
