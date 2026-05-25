import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

interface FormState {
  name: string
  phone: string
  email: string
  date: string
  guests: string
  house: string
  message: string
}

export default function Contacts() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '', date: '', guests: '2', house: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `
Ім'я: ${form.name}
Телефон: ${form.phone}
Email: ${form.email}
Дата заїзду: ${form.date}
Кількість гостей: ${form.guests}
Будиночок: ${form.house || 'Не вказано'}
Повідомлення: ${form.message}
    `.trim()
    window.location.href = `mailto:info@bakshala.com.ua?subject=Бронювання — Ранчо Бакшала&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inputCls =
    'w-full border border-bakshala-text/20 bg-white/60 px-4 py-3 text-[14px] text-bakshala-text focus:outline-none focus:border-bakshala-lake transition-colors placeholder:text-bakshala-text/40'

  return (
    <PageTransition>
      <PageHero
        image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&h=1080&fit=crop"
        title="Звʼяжіться з"
        titleEm="нами"
        badge="Контакти"
        subtitle="Забронюйте місце або задайте будь-яке запитання — відповімо протягом дня."
      />

      <section className="py-[130px] bg-bakshala-shore">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
            {/* Info */}
            <div>
              <div className="w-14 h-px bg-bakshala-sand mb-5" />
              <SectionBadge>Як нас знайти</SectionBadge>
              <h2
                className="font-serif font-light tracking-tight mt-4 mb-8"
                style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.1 }}
              >
                Контактна <em className="text-bakshala-sand">інформація</em>
              </h2>

              <ul className="flex flex-col gap-6 mb-10">
                {[
                  { Icon: Phone, label: '+38 (067) 123-45-67', sub: 'Щодня · 08:00 — 22:00' },
                  { Icon: Mail, label: 'info@bakshala.com.ua', sub: 'Бронювання та запити' },
                  { Icon: MapPin, label: 'Україна, Вінницька обл.', sub: 'с. Бакшала' },
                  { Icon: Clock, label: 'Заїзд з 14:00', sub: 'Виїзд до 12:00' },
                ].map(({ Icon, label, sub }) => (
                  <li key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-bakshala-lake/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-bakshala-lake" />
                    </div>
                    <div>
                      <div className="font-medium text-bakshala-text text-[15px]">{label}</div>
                      <div className="text-bakshala-text/50 text-[13px] mt-0.5">{sub}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map */}
              <iframe
                className="w-full h-[280px] border-0"
                style={{ filter: 'grayscale(0.3) contrast(0.9)' }}
                src="https://maps.google.com/maps?q=48.9,28.8&z=13&output=embed"
                title="Мапа — Ранчо Бакшала"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Form */}
            <div>
              <div className="w-14 h-px bg-bakshala-sand mb-5" />
              <SectionBadge>Форма бронювання</SectionBadge>
              <h2
                className="font-serif font-light tracking-tight mt-4 mb-8"
                style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.1 }}
              >
                Забронювати <em className="text-bakshala-sand">місце</em>
              </h2>

              {sent ? (
                <div className="border border-bakshala-lake/30 bg-bakshala-lake/5 p-8 text-center">
                  <div className="font-serif text-[28px] font-light mb-3 text-bakshala-lake">Дякуємо!</div>
                  <p className="text-bakshala-text/70">Ваш запит відправлено. Ми звʼяжемося з вами найближчим часом.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name" type="text" required placeholder="Ваше імʼя *"
                      value={form.name} onChange={handleChange} className={inputCls}
                    />
                    <input
                      name="phone" type="tel" required placeholder="Телефон *"
                      value={form.phone} onChange={handleChange} className={inputCls}
                    />
                  </div>
                  <input
                    name="email" type="email" placeholder="Email"
                    value={form.email} onChange={handleChange} className={inputCls}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="date" type="date" required
                      value={form.date} onChange={handleChange} className={inputCls}
                    />
                    <select name="guests" value={form.guests} onChange={handleChange} className={inputCls}>
                      {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === '1' ? 'гість' : 'гостей'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <select name="house" value={form.house} onChange={handleChange} className={inputCls}>
                    <option value="">Будь-який будиночок</option>
                    <option value="house-1">Будиночок №1 — ₴1 800</option>
                    <option value="house-2">Будиночок №2 — ₴2 200</option>
                    <option value="house-3">Будиночок №3 — ₴2 800</option>
                    <option value="luxury">Люкс Коттедж — ₴4 500</option>
                  </select>
                  <textarea
                    name="message" rows={4} placeholder="Побажання або запитання"
                    value={form.message} onChange={handleChange}
                    className={`${inputCls} resize-none`}
                  />
                  <button
                    type="submit"
                    className="w-full bg-bakshala-sand text-white py-4 text-[12px] tracking-widest uppercase hover:bg-bakshala-sand/90 transition-colors"
                  >
                    Надіслати запит
                  </button>
                  <p className="text-[12px] text-bakshala-text/40 text-center">
                    Ми звʼяжемося з вами протягом 2 годин у робочий час
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
