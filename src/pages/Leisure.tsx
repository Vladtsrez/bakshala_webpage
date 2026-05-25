import { Flame, Music, Tent, Bike, TreePine, Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

const GAZEBOS = [
  {
    name: 'Мала беседка',
    capacity: 'до 6 осіб',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop',
    desc: 'Затишна відкрита беседка біля самого берега. Оснащена мангалом та зоною для відпочинку.',
    price: '₴400 / день',
  },
  {
    name: 'Велика беседка',
    capacity: 'до 15 осіб',
    img: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?w=600&h=400&fit=crop',
    desc: 'Простора криті беседка з повним облаштуванням, ідеальна для вечірок та корпоративів.',
    price: '₴900 / день',
  },
  {
    name: 'VIP-беседка',
    capacity: 'до 20 осіб',
    img: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop',
    desc: 'Преміальна закрита беседка з опаленням, розеткою, обладнаною кухнею та приватним пірсом.',
    price: '₴1 600 / день',
  },
]

const ACTIVITIES = [
  { Icon: Flame, name: 'Вогнище', desc: 'Місця для вогнища з зонами для відпочинку та смаження маршмелоу' },
  { Icon: Bike, name: 'Велопрогулянки', desc: 'Оренда велосипедів для прогулянок по мальовничій місцевості' },
  { Icon: Music, name: 'Живі виступи', desc: 'По вихідних — жива музика в головній беседці' },
  { Icon: Tent, name: 'Кемпінг', desc: 'Майданчик для наметів з усіма зручностями' },
  { Icon: TreePine, name: 'Прогулянки лісом', desc: 'Пішохідні маршрути по 5 гектарах власної лісової зони' },
  { Icon: Coffee, name: 'Кафе та бар', desc: 'Свіжозварена кава, місцеві страви та авторський бар' },
]

export default function Leisure() {
  return (
    <PageTransition>
      <PageHero
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop"
        title="Дозвілля та"
        titleEm="беседки"
        badge="Відпочинок"
        subtitle="Вогнища, беседки, велосипеди та жива музика — відпочинок для кожного."
      />

      {/* Gazebos */}
      <section className="py-[130px] bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[720px] mx-auto mb-[72px]">
            <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
            <SectionBadge>Беседки</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-4"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
            >
              Оберіть свою <em className="text-bakshala-sand">беседку</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {GAZEBOS.map((g) => (
              <div key={g.name} className="group overflow-hidden border border-bakshala-text/10 hover:border-bakshala-lake transition-colors">
                <div className="overflow-hidden aspect-[3/2]">
                  <img
                    src={g.img}
                    alt={g.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1s] ease-[cubic-bezier(.22,.61,.36,1)]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif font-light text-[26px]">{g.name}</h3>
                    <span className="text-[11px] tracking-widest uppercase text-bakshala-sand">{g.capacity}</span>
                  </div>
                  <p className="text-bakshala-text/60 text-[13.5px] leading-relaxed mb-4">{g.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-bakshala-text/10">
                    <span className="font-serif text-[22px] font-light">{g.price}</span>
                    <Link to="/contacts" className="text-[12px] tracking-widest uppercase text-bakshala-lake border-b border-bakshala-lake pb-0.5 hover:gap-2 transition-all">
                      Орендувати
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Activities */}
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
            <SectionBadge>Активності</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-4"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
            >
              Чим <em className="text-bakshala-sand">зайнятись</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map(({ Icon, name, desc }) => (
              <div key={name} className="flex gap-5 p-6 border border-bakshala-text/10 hover:border-bakshala-lake transition-colors">
                <Icon size={28} className="text-bakshala-sand flex-shrink-0 mt-1" strokeWidth={1.2} />
                <div>
                  <h4 className="font-serif text-[22px] font-light mb-1.5">{name}</h4>
                  <p className="text-[13.5px] text-bakshala-text/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
