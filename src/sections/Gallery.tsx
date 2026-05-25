import { AnimatePresence, motion } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { gallery } from '../data/gallery'
import useLightbox from '../hooks/useLightbox'
import SectionBadge from '../components/ui/SectionBadge'

export default function Gallery() {
  const { selectedIndex, setSelectedIndex, isOpen } = useLightbox(gallery)

  return (
    <section className="py-[130px] bg-bakshala-shore" id="gallery">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[720px] mx-auto mb-[72px]">
          <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
          <SectionBadge>Галерея</SectionBadge>
          <h2
            className="font-serif font-light tracking-tight mt-4"
            style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
          >
            Атмосфера <em className="text-bakshala-sand">Бакшали</em>
          </h2>
          <p className="mt-5 text-bakshala-text/60 leading-[1.7] text-[15px]">
            Природа, відпочинок і незабутні моменти.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="break-inside-avoid mb-4 relative overflow-hidden block w-full group"
            >
              <img
                src={src}
                alt={`Бакшала ${i + 1}`}
                loading="lazy"
                className="w-full h-auto transition-all duration-[800ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03] group-hover:brightness-75"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <ZoomIn size={22} strokeWidth={1.4} className="text-bakshala-text" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(15, 13, 10, 0.96)' }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={gallery[selectedIndex]}
              alt=""
              className="max-w-[92vw] max-h-[88vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-7 right-7 w-13 h-13 w-[52px] h-[52px] rounded-full border border-white/15 bg-white/8 flex items-center justify-center text-white hover:bg-white/18 transition-colors"
              aria-label="Закрити"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex((i) =>
                  i !== null ? (i - 1 + gallery.length) % gallery.length : null
                )
              }}
              className="absolute left-7 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full border border-white/15 bg-white/8 flex items-center justify-center text-white hover:bg-white/18 transition-colors"
              aria-label="Попереднє"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex((i) => (i !== null ? (i + 1) % gallery.length : null))
              }}
              className="absolute right-7 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full border border-white/15 bg-white/8 flex items-center justify-center text-white hover:bg-white/18 transition-colors"
              aria-label="Наступне"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
