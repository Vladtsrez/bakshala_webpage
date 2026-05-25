import type React from 'react'
import { Link } from 'react-router-dom'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

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
  { label: 'Озеро', to: '/lake' },
  { label: 'Беседки', to: '/leisure' },
  { label: 'Контакти', to: '/contacts' },
]

export default function Footer() {
  return (
    <footer className="bg-[#15140f] text-white/78" id="contacts">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-16 md:gap-16 py-20 md:py-[88px]">
          {/* Brand */}
          <div>
            <div className="font-serif font-light text-[18px] tracking-[0.32em] uppercase text-white">
              Ранчо <span className="text-bakshala-sand">Бакшала</span>
            </div>
            <p className="mt-5 font-serif text-[22px] font-light leading-[1.35] text-white/86 max-w-xs">
              Відпочинок на березі озера в&nbsp;серці природи.
            </p>
            <div className="flex gap-3 mt-7">
              {([
                { el: <IcoInstagram />, label: 'Instagram' },
                { el: <IcoFacebook />, label: 'Facebook' },
                { el: <Send size={18} />, label: 'Telegram' },
              ] as { el: React.ReactNode; label: string }[]).map(({ el, label }) => (
                <a
                  key={label}
                  href="#"
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
            <h5 className="font-serif font-normal text-xl text-white mb-5">Навігація</h5>
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
            <h5 className="font-serif font-normal text-xl text-white mb-5">Контакти</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3.5 text-[14px] text-white/72 leading-relaxed">
                <Phone size={16} className="text-bakshala-sand flex-shrink-0 mt-0.5" />
                <span>
                  +38 (067) 123-45-67
                  <br />
                  <span className="text-white/50">Щодня · 08:00 — 22:00</span>
                </span>
              </li>
              <li className="flex gap-3.5 text-[14px] text-white/72 leading-relaxed">
                <Mail size={16} className="text-bakshala-sand flex-shrink-0 mt-0.5" />
                <span>
                  info@bakshala.com.ua
                  <br />
                  <span className="text-white/50">Бронювання та запити</span>
                </span>
              </li>
              <li className="flex gap-3.5 text-[14px] text-white/72 leading-relaxed">
                <MapPin size={16} className="text-bakshala-sand flex-shrink-0 mt-0.5" />
                <span>
                  Україна, Вінницька обл.
                  <br />
                  <span className="text-white/50">с. Бакшала</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <iframe
        className="w-full h-[320px] border-0"
        style={{ filter: 'grayscale(0.6) invert(0.88) contrast(0.85)' }}
        src="https://maps.google.com/maps?q=48.9,28.8&z=13&output=embed"
        title="Мапа — Ранчо Бакшала"
        loading="lazy"
        allowFullScreen
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
