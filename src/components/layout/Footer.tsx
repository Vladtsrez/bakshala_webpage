import type React from 'react'
import { Link } from 'react-router-dom'
import { Send, Phone, MapPin } from 'lucide-react'

const IcoInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const IcoFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const NAV = [
  { label: 'Про нас', href: '#about-section' },
  { label: 'Будиночки', to: '/houses' },
  { label: 'Рибалка', to: '/fishing' },
  { label: 'Альтанки', to: '/leisure' },
  { label: 'Контакти', to: '/contacts' },
]

export default function Footer() {
  return (
    <footer className="bg-[#15140f] text-white/78" id="contacts">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-10 md:gap-16 py-14 md:py-[88px]">
          {/* Brand */}
          <div>
            <div className="font-serif font-medium text-[18px] tracking-[0.32em] uppercase text-white">
              Ранчо <span className="text-bakshala-sand">Бакшала</span>
            </div>
            <p className="mt-5 font-serif text-[22px] font-light leading-[1.35] text-white max-w-xs">
              Відпочинок на березі водойми в&nbsp;серці природи.
            </p>
            <div className="flex gap-3 mt-7 text-white ">
              {([
                { el: <IcoInstagram />, label: 'Instagram', href: 'https://www.instagram.com/bakshala_rancho/' },
                { el: <IcoFacebook />, label: 'Facebook', href: 'https://www.facebook.com/people/Rancho-Bakshala/61581525818906/' },
                { el: <Send size={18} />, label: 'Telegram', href: 'https://t.me/bakshalaranch_bot' },
              ] as { el: React.ReactNode; label: string; href: string }[]).map(({ el, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-[42px] h-[42px] rounded-full border border-white/18 flex items-center justify-center hover:bg-bakshala-sand hover:border-bakshala-sand hover:text-[#15140f] transition-all duration-200"
                >
                  {el}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-serif font-semibold text-xl text-white mb-5">Навігація</h5>
            <ul className="flex flex-col gap-3">
              {NAV.map((link) => (
                <li key={link.label}>
                  {'to' in link ? (
                    <Link
                      to={link.to!}
                      className="text-[14px] text-white/60 hover:text-bakshala-sand transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-bakshala-sand transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h5 className="font-serif font-semibold text-xl text-white mb-5">Контакти</h5>
            <ul className="flex flex-col gap-4 text-white">
              <li className="flex gap-3.5 text-[14px] text-white/72 leading-relaxed">
                <Phone size={16} className="text-bakshala-sand flex-shrink-0 mt-0.5" />
                <a href="tel:+380770737300" className="hover:text-bakshala-sand transition-colors">
                  +38 (077) 073 73 00
                  <br />
                  <span className="text-white/50">Щодня · 08:00 — 17:00</span>
                </a>
              </li>
              <li className="flex gap-3.5 text-[14px] text-white/72 leading-relaxed">
                <MapPin size={16} className="text-bakshala-sand flex-shrink-0 mt-0.5" />
                <a
                  href="https://share.google/h16KFrV3fmArtW48o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bakshala-sand transition-colors"
                >
                  Миколаївська обл., Вознесенський р-н
                  <br />
                  <span className="text-white/50">Прибузька громада</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <iframe
        className="w-full h-[320px] border-0"
        style={{ filter: 'grayscale(0.6) invert(0.88) contrast(0.85)' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.582382733123!2d31.218221099999997!3d47.692529799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cfa1bb269a972b%3A0x2d7a77a080829571!2z0KDQkNCd0KfQniDQkdCQ0JrQqNCQ0JvQkCDQoNC40LHQvtC70L7QstC70Y8v0JHRg9C00LjQvdC60Lgv0JDQu9GM0YLQsNC90LrQuA!5e0!3m2!1suk!2sua!4v1781604400750!5m2!1suk!2sua"
        title="Мапа — Ранчо Бакшала"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="max-w-[1280px] mx-auto px-8">
        <div className="py-6 border-t border-white/8 flex justify-between flex-wrap gap-3 text-[12px] tracking-widest uppercase text-white/50">
          <div>© 2025 Ранчо «Бакшала». Усі права захищені.</div>
          <div>Розроблено в Україні 🇺🇦</div>
        </div>
      </div>
    </footer>
  )
}
