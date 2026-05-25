import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'
import { houses } from '../data/houses'
import PageHero from '../components/shared/PageHero'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

export default function Houses() {
  return (
    <PageTransition>
      <PageHero
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop"
        title="Наші"
        titleEm="будиночки"
        badge="Проживання"
        subtitle="Чотири простори для відпочинку — від затишного для двох до преміального коттеджу."
      />

      <section className="py-[130px] bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[720px] mx-auto mb-[72px]">
            <div className="w-14 h-px bg-bakshala-sand mx-auto mb-5" />
            <SectionBadge>Оберіть свій варіант</SectionBadge>
            <h2
              className="font-serif font-light tracking-tight mt-4"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.05 }}
            >
              Для кожного <em className="text-bakshala-sand">гостя</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {houses.map((house) => (
              <Link
                key={house.id}
                to={`/houses/${house.id}`}
                className="group block overflow-hidden border border-bakshala-text/10 hover:border-bakshala-lake transition-colors duration-300"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={house.image}
                    alt={house.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] tracking-[0.24em] uppercase text-bakshala-sand">
                      {house.area}
                    </span>
                    <div className="flex items-center gap-1.5 text-bakshala-text/50 text-[13px]">
                      <Users size={14} />
                      {house.capacity}
                    </div>
                  </div>
                  <h3 className="font-serif font-light text-[28px] leading-tight mb-2">
                    {house.name}
                  </h3>
                  <p className="text-bakshala-text/60 text-[14px] leading-relaxed mb-5">
                    {house.description}
                  </p>
                  <div className="flex items-end justify-between pt-4 border-t border-bakshala-text/10">
                    <div>
                      <span className="font-serif text-[28px] font-light leading-none">
                        ₴&nbsp;{house.priceNum.toLocaleString('uk-UA')}
                      </span>
                      <span className="text-[12px] text-bakshala-text/50 ml-2">/ ніч</span>
                    </div>
                    <span className="text-[12px] tracking-widest uppercase text-bakshala-lake border-b border-bakshala-lake pb-0.5 group-hover:border-bakshala-dark group-hover:text-bakshala-dark transition-colors">
                      Детальніше →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
