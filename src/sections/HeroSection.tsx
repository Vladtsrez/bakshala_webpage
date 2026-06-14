import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionBadge from '../components/ui/SectionBadge'

const EASE = [0.22, 0.61, 0.36, 1] as [number, number, number, number]

const item = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: EASE } },
})

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden text-white flex items-center justify-center" id="top">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}Hero.jpg`}
          alt="Ранчо Бакшала — вид на озеро"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[980px] mx-auto">
        <motion.div {...item(0)}>
          <SectionBadge light>Панорамні будинки · Альтанки · Рибалка · Еко відпочинок</SectionBadge>
        </motion.div>

        <motion.h1
          {...item(0.15)}
          className="font-serif font-light mt-5 mb-6 leading-[1.02] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(44px, 7.2vw, 104px)' }}
        >
          Відпочинок 
          <br />
          <em className="text-bakshala-mist not-italic">біля водойми</em>
          <br />
        </motion.h1>

        <motion.p
          {...item(0.28)}
          className="text-white/86 max-w-[560px] mx-auto mb-9 leading-relaxed"
          style={{ fontSize: 'clamp(15px, 1.4vw, 18px)' }}
        >
          Затишні будиночки, власне озеро та незабутня рибалка в&nbsp;серці України.
        </motion.p>

        <motion.div
          {...item(0.40)}
          className="flex gap-3.5 justify-center flex-wrap"
        >
          <Link
            to="/houses"
            className="inline-flex items-center gap-2.5 bg-bakshala-lake text-white border border-bakshala-lake px-7 py-3.5 text-[12px] tracking-[0.18em] uppercase rounded-full hover:bg-bakshala-lake/90 transition-colors backdrop-blur-sm"
          >
            Переглянути будиночки
          </Link>
          <a
            href="#about-section"
            className="inline-flex items-center gap-2.5 border border-white/70 px-7 py-3.5 text-[12px] tracking-[0.18em] uppercase rounded-full hover:bg-white hover:text-bakshala-text transition-all backdrop-blur-sm bg-white/4"
          >
            Дізнатись більше
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about-section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 text-white/70 text-[10px] tracking-[0.24em]"
        aria-label="Прокрутити"
      >
        <span>SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-transparent to-white/60 animate-[cue_2.4s_ease-in-out_infinite]" />
      </a>
    </section>
  )
}
