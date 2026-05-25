import type { Testimonial } from '../data/testimonials'
import { testimonials } from '../data/testimonials'
import SectionBadge from '../components/ui/SectionBadge'

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-2xl border border-white/8 p-7 flex flex-col gap-5 backdrop-blur-sm bg-white/4">
      <p className="font-serif text-[19px] leading-[1.5] font-normal text-white/92 italic">
        «{t.text}»
      </p>
      <div className="flex items-center gap-3">
        <img
          src={t.img}
          alt={t.name}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="text-[14px] font-medium text-white">{t.name}</div>
          <div className="text-[12px] text-bakshala-mist mt-0.5">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

const cols = [[], [], []] as Testimonial[][]
testimonials.forEach((t, i) => cols[i % 3].push(t))

const ANIMATION: Record<string, string> = {
  '0': 'animate-[scrollUp_38s_linear_infinite]',
  '1': 'animate-[scrollDown_44s_linear_infinite]',
  '2': 'animate-[scrollUp_50s_linear_infinite]',
}

export default function Testimonials() {
  return (
    <section className="py-[130px] overflow-hidden bg-bakshala-deep">
      <style>{`
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="w-14 h-px bg-bakshala-mist mx-auto mb-5" />
          <SectionBadge light>Відгуки гостей</SectionBadge>
          <h2
            className="font-serif font-light tracking-tight mt-4 text-white"
            style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
          >
            Що кажуть <em className="text-bakshala-sand">наші гості</em>
          </h2>
          <p className="mt-5 text-white/60 leading-[1.7] text-[15px]">
            Реальні враження людей, які вже відпочили на Бакшалі.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            maxHeight: '740px',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)',
          }}
        >
          {cols.map((col, i) => (
            <div key={i} className={`flex flex-col gap-6 ${ANIMATION[String(i)]}`}>
              {[...col, ...col].map((t, j) => (
                <TestimonialCard t={t} key={j} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
