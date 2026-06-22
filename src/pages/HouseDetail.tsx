import { useParams, Link, Navigate } from 'react-router-dom'
import { Users, ArrowLeft, Wifi, Bath, Coffee, Flame, Car, Waves, ArrowRight, Tv, Wind, X } from 'lucide-react'
import { openBooking } from '../lib/openBooking'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { houses } from '../data/houses'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

const ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  WiFi: Wifi, Душ: Bath, Ванна: Bath, 'Кухонна зона': Coffee, Мангал: Flame,
  Паркінг: Car, Тераса: Waves, 'Дитяче місце': Users, Джакузі: Bath,
  Камін: Flame, Причал: Waves, Телевізор: Tv, Кондиціонер: Wind,
}

export default function HouseDetail() {
  const { id } = useParams<{ id: string }>()
  const house = houses.find((h) => h.id === id)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  if (!house) return <Navigate to="/houses" replace />

  const allImages = [house.image, ...house.images]

  const openLightbox = (i: number) => setLightboxIdx(i)
  const closeLightbox = () => setLightboxIdx(null)
  const prev = () => setLightboxIdx((i) => (i! - 1 + allImages.length) % allImages.length)
  const next = () => setLightboxIdx((i) => (i! + 1) % allImages.length)

  return (
    <PageTransition>
      {/* ── Page header (no background image) ── */}
      <div className="bg-bakshala-deep pt-32 pb-14 px-8">
        <div className="max-w-[1280px] mx-auto">
          <Link
            to="/houses"
            className="inline-flex items-center gap-2 text-bakshala-mist/70 text-[12px] tracking-widest uppercase hover:text-bakshala-mist transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Всі будиночки
          </Link>
          <div className="text-[11px] tracking-[0.28em] uppercase text-bakshala-sand mb-3">
            Ранчо Бакшала
          </div>
          <h1
            className="font-serif font-light text-white leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
          >
            {house.name}
          </h1>
          <div className="flex items-center gap-6 mt-5 text-bakshala-mist/60 text-[14px]">
            <div className="flex items-center gap-2"><Users size={15} /> {house.capacity}</div>
            <div>·</div>
            <div>{house.area}</div>
            <div>·</div>
            <div className="text-bakshala-sand font-light">{house.price}</div>
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className="bg-[#111] p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {allImages.map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden cursor-zoom-in group"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`${house.name} — фото ${i + 1}`}
                loading={i < 3 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
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
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-6 text-white/70 hover:text-white text-4xl leading-none transition-colors select-none"
            >
              ‹
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={allImages[lightboxIdx]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-6 text-white/70 hover:text-white text-4xl leading-none transition-colors select-none"
            >
              ›
            </button>
            <div className="absolute bottom-6 text-white/40 text-[13px] tracking-widest">
              {lightboxIdx + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Content ── */}
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

              <p className="text-bakshala-text/70 leading-[1.8] text-[15px] mb-10 whitespace-pre-line">
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
                <div className="text-[13px] text-bakshala-text/50 mb-8">за добу</div>

                <button
                  onClick={openBooking}
                  className="block w-full text-center bg-bakshala-sand text-white py-4 text-[12px] tracking-widest uppercase hover:bg-bakshala-sand/90 transition-colors mb-3"
                >
                  Забронювати
                </button>
                <button
                  onClick={openBooking}
                  className="block w-full text-center border border-bakshala-text py-4 text-[12px] tracking-widest uppercase hover:bg-bakshala-text hover:text-white transition-all"
                >
                  Запитати
                </button>

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
                        <span className="text-bakshala-text/50">₴&nbsp;{h.priceNum.toLocaleString('uk-UA')}</span>
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
            <button onClick={openBooking} className="flex items-center gap-2 text-[13px] tracking-widest uppercase text-bakshala-lake">
              Забронювати <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
