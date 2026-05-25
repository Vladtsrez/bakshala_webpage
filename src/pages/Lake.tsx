import { Waves, Leaf, Wind } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'
import LakeSection from '../sections/LakeSection'

const GALLERY = [
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&fit=crop',
  'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&fit=crop',
]

export default function Lake() {
  return (
    <PageTransition>
      <PageHero
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
        title="Наше"
        titleEm="озеро"
        badge="Озеро та територія"
        subtitle="5 гектарів чистої води, зеленої берегової лінії та незайманої природи."
      />

      {/* Info */}
      <section className="py-[130px] bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <div className="w-14 h-px bg-bakshala-sand mb-5" />
              <SectionBadge>Про озеро</SectionBadge>
              <h2
                className="font-serif font-light tracking-tight mt-4 mb-7"
                style={{ fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.08 }}
              >
                Серце <em className="text-bakshala-sand">Бакшали</em>
              </h2>
              <p className="text-bakshala-text/70 leading-[1.8] text-[15px] mb-5">
                Озеро на Ранчо Бакшала — це живий природний водойм площею 5 гектарів. Чиста
                прозора вода з піщаним дном, берегова лінія вкрита тінистими деревами.
              </p>
              <p className="text-bakshala-text/70 leading-[1.8] text-[15px] mb-8">
                Навколо озера — власна лісова зона: 5 гектарів пішохідних стежок, місць для
                пікніку та тихих куточків для відпочинку. Взимку озеро замерзає — катання на
                ковзанах та зимова рибалка.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { Icon: Waves, label: '5 га', sub: 'площа озера' },
                  { Icon: Leaf, label: '5 га', sub: 'лісова зона' },
                  { Icon: Wind, label: '4 сезони', sub: 'відпочинок' },
                ].map(({ Icon, label, sub }) => (
                  <div key={label + sub} className="text-center p-5 border border-bakshala-text/10">
                    <Icon size={24} className="text-bakshala-lake mx-auto mb-3" strokeWidth={1.2} />
                    <div className="font-serif text-[28px] font-light">{label}</div>
                    <div className="text-[12px] text-bakshala-text/50 tracking-widest uppercase mt-1">{sub}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/contacts"
                className="inline-flex items-center bg-bakshala-sand text-white px-7 py-4 text-[12px] tracking-widest uppercase hover:bg-bakshala-sand/90 transition-colors"
              >
                Забронювати
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {GALLERY.map((src, i) => (
                <div key={i} className="overflow-hidden aspect-square">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parallax */}
      <LakeSection />
    </PageTransition>
  )
}
