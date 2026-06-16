import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Users, Wifi, Bath, Coffee, Flame, Car, Waves } from 'lucide-react'
import { houses } from '../data/houses'
import { openBooking } from '../lib/openBooking'
import SectionBadge from '../components/ui/SectionBadge'
import LearnMoreButton from '../components/ui/LearnMoreButton'

const ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  WiFi: Wifi,
  Душ: Bath,
  Ванна: Bath,
  Кухня: Coffee,
  Мангал: Flame,
  Паркінг: Car,
  Тераса: Waves,
  'Дитяче місце': Users,
  Джакузі: Bath,
  Камін: Flame,
  Причал: Waves,
}

export default function HousesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const prevIndex = useRef(0)
  const house = houses[activeIndex]
  const direction = activeIndex > prevIndex.current ? 1 : -1

  const handleTab = (i: number) => {
    prevIndex.current = activeIndex
    setActiveIndex(i)
  }

  return (
    <section className="py-[130px] bg-bakshala-shore" id="houses">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Head */}
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
          <SectionBadge>Проживання</SectionBadge>
          <h2
            className="font-serif font-light tracking-tight mt-4"
            style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
          >
            Оберіть свій <em className="text-bakshala-sand">будиночок</em>
          </h2>
          <p className="mt-5 text-bakshala-text/60 leading-[1.7] text-[15px]">
            Чотири затишних простори для відпочинку — кожен зі своїм характером.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {houses.map((h, i) => (
            <button
              key={h.id}
              onClick={() => handleTab(i)}
              className={`px-5 py-3 border rounded-full text-[13px] tracking-[0.04em] transition-all duration-200 ${
                activeIndex === i
                  ? 'bg-bakshala-lake border-bakshala-lake text-white'
                  : 'border-bakshala-text/20 text-bakshala-text/70 hover:border-bakshala-text'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
              center: { opacity: 1, x: 0 },
              exit: (dir: number) => ({ opacity: 0, x: dir * -48 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
            className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 items-center"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] group">
              <span className="absolute top-4 left-4 z-10 bg-white/92 backdrop-blur-sm px-3.5 py-2 text-[11px] tracking-[0.18em] uppercase">
                №&nbsp;0{activeIndex + 1}&nbsp;/&nbsp;04
              </span>
              <img
                src={house.image}
                alt={house.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]"
              />
            </div>

            {/* Info */}
            <div>
              <SectionBadge>Розкішне проживання</SectionBadge>
              <h3
                className="font-serif font-light tracking-tight mt-3.5"
                style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1.05 }}
              >
                {house.name}
              </h3>
              <div className="flex items-center gap-2 text-bakshala-text/60 mt-3.5 text-[14px]">
                <Users size={16} />
                <span>
                  {house.capacity} · {house.area}
                </span>
              </div>
              <p className="text-bakshala-text/70 leading-[1.75] mt-6 mb-7 text-[15px]">
                {house.description}
              </p>

              <div className="grid grid-cols-2 gap-3.5">
                {house.amenities.map((a) => {
                  const Ico = ICONS[a] ?? Wifi
                  return (
                    <div key={a} className="flex items-center gap-3 text-[13.5px] text-bakshala-text/70">
                      <Ico size={18} className="text-bakshala-sand flex-shrink-0" />
                      {a}
                    </div>
                  )
                })}
              </div>

              <div className="flex items-end justify-between gap-6 mt-8 pt-7 border-t border-bakshala-text/10 flex-wrap">
                <div>
                  <div className="font-serif font-light text-[38px] leading-none">
                    ₴&nbsp;{house.priceNum.toLocaleString('uk-UA')}
                  </div>
                  <div className="text-[13px] text-bakshala-text/50 mt-1.5">
                    за добу · сніданок включено
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={openBooking}
                    className="bg-bakshala-sand text-white px-7 py-3.5 text-[12px] tracking-widest uppercase rounded-full hover:bg-bakshala-sand/90 transition-colors"
                  >
                    Забронювати
                  </button>
                  <LearnMoreButton to={`/houses/${house.id}`} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
