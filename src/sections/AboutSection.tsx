import { Fish, Bed, Waves, Leaf, Flame, UtensilsCrossed } from 'lucide-react'
import SectionBadge from '../components/ui/SectionBadge'

const SERVICES = [
  { name: 'Рибалка', desc: 'Власне озеро, цілодобовий доступ', Icon: Fish },
  { name: 'Проживання', desc: '4 затишних будиночки', Icon: Bed },
  { name: 'Озеро', desc: 'Чиста вода, пірси, човни', Icon: Waves },
  { name: 'Природа', desc: '5 гектарів власної території', Icon: Leaf },
  { name: 'Дозвілля', desc: 'Беседки, вогнище, активності', Icon: Flame },
  { name: 'Кухня', desc: 'Локальні страви, авторське меню', Icon: UtensilsCrossed },
]

const STATS = [
  { num: '120+', label: 'Задоволених гостей' },
  { num: '5 га', label: 'Власна територія' },
  { num: '1', label: 'Власне озеро' },
  { num: '4', label: 'Затишних будиночки' },
]

function ServiceCard({
  name,
  desc,
  Icon,
  reverse = false,
}: {
  name: string
  desc: string
  Icon: React.FC<{ size?: number; strokeWidth?: number }>
  reverse?: boolean
}) {
  return (
    <div
      className={`border border-bakshala-text/10 p-[22px_24px] flex items-center gap-4 bg-white/60 hover:border-bakshala-lake transition-all duration-250 hover:-translate-y-0.5 w-full ${
        reverse ? 'flex-row-reverse text-right' : ''
      }`}
    >
      <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-bakshala-lake text-white flex-shrink-0">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="font-serif font-normal text-[22px] leading-tight">{name}</h4>
        <p className="text-[12.5px] text-bakshala-text/60 mt-1">{desc}</p>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="py-[130px] bg-white/40" id="about-section">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Head */}
        <div className="text-center max-w-[720px] mx-auto mb-[72px]">
          <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
          <SectionBadge>Наша історія</SectionBadge>
          <h2
            className="font-serif font-light tracking-tight mt-4"
            style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
          >
            Про <em className="text-bakshala-sand">нас</em>
          </h2>
          <p className="mt-5 text-bakshala-text/60 leading-[1.7] text-[15px]">
            Ранчо «Бакшала» — це місце, де природа, тиша та затишок поєднуються в одне
            незабутнє враження. Ми пропонуємо відпочинок на березі власного озера, рибальські
            пригоди на світанку, вечори біля вогнища та справжній спокій далеко від міського шуму.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-10 items-center">
          <div className="flex flex-col gap-7">
            {SERVICES.slice(0, 3).map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </div>

          <div className="aspect-[2/3] overflow-hidden hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=900&fit=crop"
              alt="Природа Бакшали"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-7 lg:items-end">
            {SERVICES.slice(3, 6).map((s) => (
              <ServiceCard key={s.name} {...s} reverse />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-b border-bakshala-text/10">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 text-center border-bakshala-text/10 ${
                i < STATS.length - 1 ? 'border-r' : ''
              }`}
            >
              <div
                className="font-serif font-light leading-none text-bakshala-dark"
                style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
              >
                {s.num}
              </div>
              <div className="text-[12px] tracking-[0.16em] uppercase text-bakshala-text/50 mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
