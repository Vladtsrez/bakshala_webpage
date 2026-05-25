import { Fish, Sunrise, Target, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionBadge from '../components/ui/SectionBadge'

const FEATURES = [
  { Icon: Fish, text: 'Короп, щука, карась, лящ' },
  { Icon: Sunrise, text: 'Рибалка цілодобово' },
  { Icon: Target, text: 'Оренда спорядження' },
  { Icon: Star, text: 'Рибальські турніри' },
]

export default function FishingPreview() {
  return (
    <section
      className="py-[130px] relative"
      id="fishing"
      style={{ background: 'var(--tw-color-bakshala-fog, #EEF3F6)' }}
    >
      {/* dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(91,143,168,.12) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="max-w-[1280px] mx-auto px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Framed image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=900&h=600&fit=crop"
              alt="Рибалка на озері"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {/* Gold offset frame */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-1px',
                border: '1px solid #A89060',
                transform: 'translate(18px, 18px)',
              }}
            />
          </div>

          {/* Info */}
          <div>
            <SectionBadge>Рибальський рай</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-3.5 mb-7"
              style={{ fontSize: 'clamp(36px, 4.6vw, 58px)', lineHeight: 1.05 }}
            >
              Озеро, <em className="text-bakshala-lake">де клює</em> завжди
            </h2>
            <p className="text-bakshala-text/70 leading-[1.78] text-[15px] mb-4">
              Наше приватне озеро площею 5 гектарів — справжній рай для рибалок. Тут водяться
              короп, щука, карась та лящ. Прозора вода, тихі береги і ранковий туман над
              поверхнею створюють неповторну атмосферу.
            </p>
            <p className="text-bakshala-text/70 leading-[1.78] text-[15px] mb-9">
              Ми пропонуємо оренду спорядження, обладнані рибальські місця та можливість
              рибалити цілодобово. Для груп організовуємо рибальські турніри.
            </p>

            <ul className="flex flex-col gap-0 mb-9">
              {FEATURES.map(({ Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3.5 py-4 border-b border-bakshala-text/10 text-[14.5px] list-none"
                >
                  <Icon size={18} className="text-bakshala-sand flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            <Link
              to="/fishing"
              className="inline-flex items-center gap-3 text-[13px] tracking-widest uppercase text-bakshala-lake border-b border-bakshala-lake pb-1 hover:gap-5 transition-[gap] duration-200"
            >
              Детально про рибалку <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
