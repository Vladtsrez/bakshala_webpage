import { useParams, Link, Navigate } from 'react-router-dom'
import { Users, ArrowLeft, Wifi, Bath, Coffee, Flame, Car, Waves, ArrowRight, Tv, Wind } from 'lucide-react'
import { useState } from 'react'
import { houses } from '../data/houses'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

const ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  WiFi: Wifi, Душ: Bath, Ванна: Bath, Кухня: Coffee, Мангал: Flame,
  Паркінг: Car, Тераса: Waves, 'Дитяче місце': Users, Джакузі: Bath,
  Камін: Flame, Причал: Waves, Телевізор: Tv, Кондиціонер: Wind,
}

export default function HouseDetail() {
  const { id } = useParams<{ id: string }>()
  const house = houses.find((h) => h.id === id)
  const [activeImg, setActiveImg] = useState(0)

  if (!house) return <Navigate to="/houses" replace />

  const allImages = [house.image, ...house.images]

  return (
    <PageTransition>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img
          src={allImages[activeImg]}
          alt={house.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

        <Link
          to="/houses"
          className="absolute top-24 left-8 flex items-center gap-2 text-white text-[13px] tracking-widest uppercase hover:gap-4 transition-[gap] duration-200"
        >
          <ArrowLeft size={16} /> Всі будиночки
        </Link>

        <div className="absolute bottom-8 left-8 text-white">
          <div className="text-[11px] tracking-[0.24em] uppercase text-bakshala-sand/90 mb-2">
            Ранчо Бакшала
          </div>
          <h1
            className="font-serif font-light leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            {house.name}
          </h1>
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          {allImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-16 h-12 overflow-hidden border-2 transition-colors ${
                i === activeImg ? 'border-bakshala-sand' : 'border-white/30 hover:border-white/70'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="py-[90px] bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            {/* Main */}
            <div>
              <SectionBadge>Детальний опис</SectionBadge>
              <h2
                className="font-serif font-light tracking-tight mt-3 mb-7"
                style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1 }}
              >
                {house.name}
              </h2>

              <div className="flex items-center gap-6 mb-8 text-bakshala-text/60 text-[14px]">
                <div className="flex items-center gap-2">
                  <Users size={16} /> {house.capacity}
                </div>
                <div>·</div>
                <div>{house.area}</div>
              </div>

              <p className="text-bakshala-text/70 leading-[1.8] text-[15px] mb-10">
                {house.longDescription}
              </p>

              <div className="w-14 h-px bg-bakshala-sand mb-8" />
              <h3 className="font-serif font-light text-2xl mb-6">Зручності</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {house.amenities.map((a) => {
                  const Ico = ICONS[a] ?? Wifi
                  return (
                    <div key={a} className="flex items-center gap-3 text-[14px] text-bakshala-text/70 p-3 border border-bakshala-text/10">
                      <Ico size={18} className="text-bakshala-sand" />
                      {a}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="border border-bakshala-text/15 p-8 sticky top-24">
                <div className="font-serif font-light text-[44px] leading-none mb-1">
                  ₴&nbsp;{house.priceNum.toLocaleString('uk-UA')}
                </div>
                <div className="text-[13px] text-bakshala-text/50 mb-8">за добу · сніданок включено</div>

                <Link
                  to="/contacts"
                  className="block w-full text-center bg-bakshala-sand text-white py-4 text-[12px] tracking-widest uppercase hover:bg-bakshala-sand/90 transition-colors mb-3"
                >
                  Забронювати
                </Link>
                <Link
                  to="/contacts"
                  className="block w-full text-center border border-bakshala-text py-4 text-[12px] tracking-widest uppercase hover:bg-bakshala-text hover:text-white transition-all"
                >
                  Запитати
                </Link>

                <div className="mt-8 pt-8 border-t border-bakshala-text/10">
                  <div className="text-[12px] text-bakshala-text/50 mb-3 tracking-widest uppercase">Інші варіанти</div>
                  <div className="flex flex-col gap-2">
                    {houses.filter((h) => h.id !== house.id).map((h) => (
                      <Link
                        key={h.id}
                        to={`/houses/${h.id}`}
                        className="flex items-center justify-between text-[13px] py-2 border-b border-bakshala-text/8 hover:text-bakshala-lake transition-colors"
                      >
                        <span>{h.name}</span>
                        <span className="text-bakshala-text/50">
                          ₴&nbsp;{h.priceNum.toLocaleString('uk-UA')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-bakshala-text/10 flex justify-between">
            <Link to="/houses" className="flex items-center gap-2 text-[13px] tracking-widest uppercase text-bakshala-text/60 hover:text-bakshala-text transition-colors">
              <ArrowLeft size={14} /> Всі будиночки
            </Link>
            <Link to="/contacts" className="flex items-center gap-2 text-[13px] tracking-widest uppercase text-bakshala-lake">
              Забронювати <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
