import ScrollExpandMedia from '../components/ui/scroll-expansion-hero'
import SectionBadge from '../components/ui/SectionBadge'

const BASE = import.meta.env.BASE_URL
const LAKE_BG = `${BASE}Озеро.webp`
const LAKE_MEDIA = `${BASE}Озеро.webp`

const STATS = [
  { value: '10 га', label: 'площа водойми' },
  { value: '1840 м', label: 'берегова лінія' },
  { value: '390 м', label: 'ширина' },
  { value: '8 м', label: 'найглибша точка' },
]

export default function LakeSection() {
  return (
    <>
      {/* Section head */}
      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore" id="lake">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[720px] mx-auto">
            <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
            <SectionBadge>Водойма та територія</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-4"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
            >
              Десять гектарів <em className="text-bakshala-sand">краси</em>
            </h2>
            <p className="mt-5 text-bakshala-text leading-[1.7] text-[15px]">
              Власна водойма, берегова лінія та простір для відпочинку. Прокрутіть,
              щоб відчути простір крізь оптику нашого обʼєктива.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll expansion */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={LAKE_MEDIA}
        bgImageSrc={LAKE_BG}
        title="Водойма Бакшала"
        date="10 га"
        scrollToExpand="Прокрутіть для перегляду"
        textBlend
      >
        <div className="max-w-3xl mx-auto text-center">
          <SectionBadge>Наша природа</SectionBadge>
          <h3
            className="font-serif font-light tracking-tight mt-4 mb-7 text-bakshala-text"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1 }}
          >
            Свій ставок. Простір.<br />
            <em className="text-bakshala-sand">Природа, яка живе за власними правилами</em>
          </h3>
          <p className="text-bakshala-text leading-[1.8] text-[15px] mb-5">
            Серце Ранчо Бакшала — водойма площею 10 гектарів з дном із глини та листя.
            Зарибленa білою (мирною) та хижою рибою, з береговою лінією 1840 м та
            середньою глибиною 4 м.
          </p>
          <p className="text-bakshala-text leading-[1.8] text-[15px] mb-10">
            Тінисті береги та тихі куточки для відпочинку, ідеальні умови для
            любительської риболовлі — чотири пори року, кожна зі своїм настроєм і красою.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-bakshala-text/10 bg-bakshala-text/10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-bakshala-shore px-6 py-7 text-center">
                <div className="font-serif text-[28px] font-light text-bakshala-text">{value}</div>
                <div className="text-[11px] tracking-widest uppercase text-bakshala-text/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollExpandMedia>
    </>
  )
}
