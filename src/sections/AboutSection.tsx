import { Fish, Bed, Waves, Leaf, Flame, UtensilsCrossed } from 'lucide-react'
import SectionBadge from '../components/ui/SectionBadge'

const SERVICES = [
  { name: 'Рибалка', desc: 'Власна водойма, пірс та рибалка (світловий день)', Icon: Fish },
  { name: 'Проживання', desc: '9 затишних будиночків', Icon: Bed },
  { name: 'Водойма', desc: 'Сап-дошки, каяки, власний пляж', Icon: Waves },
  { name: 'Природа', desc: '60 гектарів власної території', Icon: Leaf },
  { name: 'Дозвілля', desc: 'Альтанка, САП дошки, каяки, катамарани, мінізоопарк', Icon: Flame },
  { name: 'Кухонна зона', desc: 'Замовлення їжі · готовність 1–1,5 год', Icon: UtensilsCrossed },
]

const STATS = [
  { num: '120+', label: 'Задоволених гостей' },
  { num: '60 га', label: 'Власна територія' },
  { num: '1', label: 'Власна водойма' },
  { num: '9', label: 'Затишних будиночки' },
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
        reverse ? 'lg:flex-row-reverse lg:text-right' : ''
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
    <section className="py-[clamp(48px,5vw,72px)] bg-white/40" id="about-section">
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
          <div className="mt-5 text-bakshala-text/60 leading-[1.7] text-[15px] text-left space-y-4">
            <p>
              На Миколаївщині, серед мальовничих берегів Південного Бугу, в самому серці Прибузької
              громади Вознесенського району, народилося місце, де природа диктує свій ритм, а люди
              згадують, що таке справжній відпочинок.
            </p>
            <p className="text-bakshala-text/80 font-medium">
              Сучасний комплекс відпочинку РАНЧО БАКШАЛА
            </p>
            <p>
              Тут немає міського шуму, поспіху чи метушні. Лише світанки над водою, спів птахів,
              легкий вітер над плесом і відчуття, ніби час сповільнюється. Саме тому для багатьох
              гостей РАНЧО БАКШАЛА стає не просто місцем відпочинку, а місцем, куди хочеться
              повертатися знову.
            </p>
            <p>
              Серце комплексу — власна водойма площею 10 гектарів. Це не просто озеро, а створена з
              любов'ю екосистема, де мирно співіснують різні види риби. Тут збираються як досвідчені
              рибалки, так і ті, хто вперше бере до рук вудку, адже головний улов тут — не лише
              риба, а й внутрішній спокій.
            </p>
            <p>
              На березі водойми розташовані сучасні панорамні будиночки та затишні альтанки з
              власними пірсами. Ранкова кава з видом на воду, вечірні заходи сонця, сімейні свята,
              зустрічі з друзями чи романтичні вихідні — кожен знаходить тут свою особливу історію.
            </p>
            <p>
              Особливого шарму РАНЧО БАКШАЛА додає його розташування. Поруч знаходяться справжні
              природні перлини Миколаївщини: Національний природний парк «Бузький Гард», Трикратський
              ліс, Актовський та Петропавлівський каньйони. Саме тому відпочинок тут легко поєднати
              з подорожами та відкриттям краси українського степового краю.
            </p>
            <p>
              Сьогодні РАНЧО БАКШАЛА — це єдиний на Миколаївщині комплекс, який поєднує власну
              велику водойму для спортивної риболовлі, панорамні будинки та альтанки на березі,
              комфортний сімейний відпочинок і неповторну атмосферу єднання з природою.
            </p>
            <p className="text-bakshala-text/80 font-medium">
              РАНЧО БАКШАЛА — місце, де природа залишається головною, а найціннішими стають прості
              моменти: тиша, вода, світанок і люди поруч.
            </p>
          </div>
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
              src={`${import.meta.env.BASE_URL}about-center.jpg`}
              alt="Ранчо Бакшала — пірс на водоймі"
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
