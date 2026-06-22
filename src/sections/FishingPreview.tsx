import { Fish, Sunrise, Target, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionBadge from '../components/ui/SectionBadge'

const FEATURES = [
  { Icon: Fish, text: 'Короп КОЇ, білий амур, товстолоб, стерлядь, осетри' },
  { Icon: Sunrise, text: 'Рибалка світловий день' },
  { Icon: Target, text: 'Оренда спорядження, корма та наживки' },
  { Icon: Star, text: 'Рибальські турніри' },
]

export default function FishingPreview() {
  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2"
      id="fishing"
      style={{ background: 'var(--tw-color-bakshala-fog, #EEF3F6)' }}
    >
      {/* Left — full-bleed photo */}
      <div className="relative min-h-[480px] md:min-h-[640px] overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}fishing.webp`}
          alt="Рибалка на водоймі"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right — text content */}
      <div className="relative flex items-center">
        {/* dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(91,143,168,.12) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="relative px-6 md:px-12 py-[clamp(40px,5vw,60px)] max-w-[600px]">
          <SectionBadge>Рибальський рай</SectionBadge>
          <h2
            className="font-serif font-light tracking-tight mt-3.5 mb-7"
            style={{ fontSize: 'clamp(36px, 4.6vw, 58px)', lineHeight: 1.05 }}
          >
            Водойма, <em className="text-bakshala-lake">де клює</em> завжди
          </h2>
          <p className="text-bakshala-text/70 leading-[1.78] text-[15px] mb-4">
            Наша приватна водойма площею 10 гектарів — справжній рай для рибалок. Тут водяться
            короп КОЇ, білий амур, товстолоб, стерлядь, осетр сибірський та осетр-альбінос. Тихі береги і ранковий туман над
            поверхнею створюють неповторну атмосферу.
          </p>
          <p className="text-bakshala-text/70 leading-[1.78] text-[15px] mb-9">
            Ми пропонуємо оренду спорядження, обладнані рибальські місця та можливість
            рибалити світловий день. Для груп організовуємо рибальські турніри.
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
    </section>
  )
}
