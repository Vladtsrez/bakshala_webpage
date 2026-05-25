import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import SectionBadge from '../components/ui/SectionBadge'

const IMAGES = [
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop',
  'https://images.unsplash.com/photo-1455218873509-8097305ee378?w=1280&h=720&fit=crop',
]

const TARGET_SCALES = [4, 5, 6, 5, 6, 8, 9]

// Position styles matching the original prototype layout
const POSITIONS: React.CSSProperties[] = [
  { width: '25vw', height: '25vh', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
  { width: '35vw', height: '30vh', left: '5vw', top: '30vh' },
  { width: '20vw', height: '45vh', left: '70vw', top: '60vh' },
  { width: '25vw', height: '25vh', left: '75vw', top: '30vh' },
  { width: '20vw', height: '25vh', left: '5vw', top: '75vh' },
  { width: '25vw', height: '25vh', left: '50vw', top: '75vh', transform: 'translate(-50%, -50%)' },
  { width: '30vw', height: '25vh', left: '60vw', top: '20vh' },
]

function ParallaxItem({
  src,
  targetScale,
  positionStyle,
  scrollYProgress,
}: {
  src: string
  targetScale: number
  positionStyle: React.CSSProperties
  scrollYProgress: MotionValue<number>
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const { transform: _t, ...rest } = positionStyle
  return (
    <div className="absolute overflow-hidden" style={{ ...rest, transform: positionStyle.transform ?? undefined }}>
      <motion.div style={{ scale, width: '100%', height: '100%', transformOrigin: 'center center' }}>
        <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  )
}

export default function LakeSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  })

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
            <p className="mt-5 text-bakshala-text/60 leading-[1.7] text-[15px]">
              Власне озеро, берегова лінія, лісова зона та простір для відпочинку. Прокрутіть,
              щоб відчути простір крізь оптику нашого обʼєктива.
            </p>
          </div>
        </div>
      </section>

      {/* Zoom parallax */}
      <div ref={wrapRef} style={{ height: '300vh', position: 'relative' }}>
        <div
          className="sticky top-0 overflow-hidden"
          style={{ height: '100vh', background: '#1C2E38' }}
        >
          {IMAGES.map((src, i) => (
            <ParallaxItem
              key={i}
              src={src}
              targetScale={TARGET_SCALES[i]}
              positionStyle={POSITIONS[i]}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </>
  )
}
