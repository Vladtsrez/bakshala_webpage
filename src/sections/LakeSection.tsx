import ScrollExpandMedia from '../components/ui/scroll-expansion-hero'
import SectionBadge from '../components/ui/SectionBadge'

const LAKE_BG = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop'
const LAKE_MEDIA = 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop'

export default function LakeSection() {
  return (
    <>
      {/* Section head */}
      <section className="py-[130px] pb-[60px] bg-bakshala-shore" id="lake">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[720px] mx-auto">
            <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
            <SectionBadge>Озеро та територія</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-4"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
            >
              Пʼять гектарів <em className="text-bakshala-sand">краси</em>
            </h2>
            <p className="mt-5 text-bakshala-text leading-[1.7] text-[15px]">
              Власне озеро, берегова лінія, лісова зона та простір для відпочинку. Прокрутіть,
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
        title="Озеро Бакшала"
        date="5 га"
        scrollToExpand="Прокрутіть для перегляду"
        textBlend
      >
        <div className="max-w-3xl mx-auto text-center ">
          <SectionBadge>Наша природа</SectionBadge>
          <h3
            className="font-serif font-light tracking-tight mt-4 mb-7 text-bakshala-text"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1 }}
          >
            Чиста вода, тінисті береги,{' '}
            <em className="text-bakshala-sand">незаймана природа</em>
          </h3>
          <p className="text-bakshala-text leading-[1.8] text-[15px] mb-5 ">
            Озеро площею 5 гектарів з піщаним дном і прозорою водою — серце Ранчо Бакшала.
            Тінисті дерева вздовж берегової лінії, тихі куточки для відпочинку та власна
            лісова зона з пішохідними стежками.
          </p>
          <p className="text-bakshala-text leading-[1.8] text-[15px]">
            Взимку озеро замерзає — відкриваючи сезон ковзанів і зимової рибалки. Чотири
            пори року, кожна зі своїм настроєм і красою.
          </p>
        </div>
      </ScrollExpandMedia>
    </>
  )
}
