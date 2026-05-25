import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'

interface Props {
  image: string
  title: string
  titleEm?: string
  subtitle?: string
  badge?: string
}

export default function PageHero({ image, title, titleEm, subtitle, badge }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[480px] overflow-hidden text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge light>{badge}</SectionBadge>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif font-light text-[clamp(40px,6vw,80px)] leading-tight tracking-tight mt-4"
        >
          {title}
          {titleEm && (
            <>
              {' '}
              <em className="italic text-bakshala-sand/90">{titleEm}</em>
            </>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/80 text-[16px] leading-relaxed max-w-lg mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
