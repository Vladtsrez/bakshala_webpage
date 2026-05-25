import { Fish, Sunrise, Target, Star, Waves, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

const SPECIES = [
  { name: 'Короп', desc: 'До 15 кг, клює цілий рік' },
  { name: 'Щука', desc: 'До 5 кг, активна весною' },
  { name: 'Карась', desc: 'Чудово підходить для початківців' },
  { name: 'Лящ', desc: 'Донна ловля, гарна видобуток' },
]

const SERVICES = [
  { Icon: Fish, title: 'Оренда спорядження', desc: 'Вудки, котушки, наживка — усе є на місці' },
  { Icon: Sunrise, title: 'Цілодобова рибалка', desc: 'Доступ до озера 24/7, вночі теж клює' },
  { Icon: Target, title: 'Обладнані місця', desc: '8 підготовлених рибальських постів' },
  { Icon: Star, title: 'Турніри', desc: 'Організуємо змагання для груп від 6 осіб' },
  { Icon: Waves, title: 'Причал та човни', desc: 'Човни доступні для оренди по годинно' },
  { Icon: MapPin, title: 'Зручна локація', desc: 'Тихі береги, окремі зони для різних видів ловлі' },
]

export default function Fishing() {
  return (
    <PageTransition>
      <PageHero
        image="https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1920&h=1080&fit=crop"
        title="Рибалка на"
        titleEm="Бакшалі"
        badge="Рибальський рай"
        subtitle="Приватне озеро 5 га, де клює завжди. Короп, щука, карась, лящ."
      />

      {/* Main content */}
      <section className="py-[130px] bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            <div>
              <div className="w-14 h-px bg-bakshala-sand mb-5" />
              <SectionBadge>Про озеро</SectionBadge>
              <h2
                className="font-serif font-light tracking-tight mt-4 mb-7"
                style={{ fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.08 }}
              >
                Озеро, де клює <em className="text-bakshala-lake">завжди</em>
              </h2>
              <p className="text-bakshala-text/70 leading-[1.8] text-[15px] mb-5">
                Наше приватне озеро площею 5 гектарів — справжній рай для рибалок. Тут водяться
                короп, щука, карась та лящ. Прозора вода, тихі береги і ранковий туман над
                поверхнею створюють неповторну атмосферу.
              </p>
              <p className="text-bakshala-text/70 leading-[1.8] text-[15px] mb-8">
                Озеро засаджене регулярно, постійно ведеться моніторинг якості води та чисельності
                популяції риб. Ми гарантуємо, що ваша рибалка буде успішною незалежно від сезону
                та часу доби.
              </p>
              <Link
                to="/contacts"
                className="inline-flex items-center bg-bakshala-sand text-white px-7 py-4 text-[12px] tracking-widest uppercase hover:bg-bakshala-sand/90 transition-colors"
              >
                Забронювати місце
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=900&h=600&fit=crop"
                alt="Рибалка"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute pointer-events-none"
                style={{ inset: '-1px', border: '1px solid #A89060', transform: 'translate(18px, 18px)' }}
              />
            </div>
          </div>

          {/* Fish species */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
              <SectionBadge>Видовий склад</SectionBadge>
              <h2 className="font-serif font-light text-[40px] tracking-tight mt-4">
                Хто живе в <em className="text-bakshala-sand">озері</em>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 border border-bakshala-text/10">
              {SPECIES.map((s, i) => (
                <div
                  key={s.name}
                  className={`p-8 text-center ${i < SPECIES.length - 1 ? 'border-r border-bakshala-text/10' : ''}`}
                >
                  <Fish size={32} className="text-bakshala-sand mx-auto mb-4" strokeWidth={1.2} />
                  <div className="font-serif text-[24px] font-light mb-2">{s.name}</div>
                  <div className="text-[13px] text-bakshala-text/50">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services grid */}
          <div>
            <div className="text-center mb-12">
              <SectionBadge>Що ми пропонуємо</SectionBadge>
              <h2 className="font-serif font-light text-[40px] tracking-tight mt-4">
                Наші <em className="text-bakshala-sand">послуги</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(({ Icon, title, desc }) => (
                <div key={title} className="border border-bakshala-text/10 p-7 hover:border-bakshala-lake transition-colors group">
                  <Icon size={28} className="text-bakshala-sand mb-4 transition-transform group-hover:scale-110" strokeWidth={1.2} />
                  <h4 className="font-serif text-[22px] font-light mb-2">{title}</h4>
                  <p className="text-[13.5px] text-bakshala-text/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
