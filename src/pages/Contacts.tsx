import { useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import PageTransition from '../components/shared/PageTransition'
import SectionBadge from '../components/ui/SectionBadge'

interface FormState {
  name: string
  phone: string
  date: string
  guests: string
  house: string
  message: string
}

export default function Contacts() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', date: '', guests: '2', house: '', message: '',
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
Дата заїзду: ${form.date}
Кількість гостей: ${form.guests}
Будиночок: ${form.house || 'Не вказано'}
Повідомлення: ${form.message}
    `.trim()
    window.location.href = `https://t.me/bakshalaranch_bot?text=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inputCls =
    'w-full border border-bakshala-text/20 bg-white/60 px-4 py-3 text-[14px] text-bakshala-text focus:outline-none focus:border-bakshala-lake transition-colors placeholder:text-bakshala-text/40'

  return (
    <PageTransition>
      <PageHero
        image={`${import.meta.env.BASE_URL}Озеро.webp`}
        title="Звʼяжіться з"
        titleEm="нами"
        badge="Контакти"
        subtitle="Забронюйте місце або задайте будь-яке запитання — відповімо протягом дня."
      />

      <section className="py-[clamp(48px,5vw,72px)] bg-bakshala-shore">
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
                  { Icon: Phone, label: '+38 (077) 073 73 00', sub: 'Щодня · 08:00 — 17:00' },
                  { Icon: MapPin, label: 'Миколаївська обл., Вознесенський р-н', sub: 'Прибузька громада' },
                  { Icon: Clock, label: 'Заїзд з 15:00', sub: 'Виїзд до 11:00' },
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.582382733123!2d31.218221099999997!3d47.692529799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cfa1bb269a972b%3A0x2d7a77a080829571!2z0KDQkNCd0KfQniDQkdCQ0JrQqNCQ0JvQkCDQoNC40LHQvtC70L7QstC70Y8v0JHRg9C00LjQvdC60Lgv0JDQu9GM0YLQsNC90LrQuA!5e0!3m2!1suk!2sua!4v1781604400750!5m2!1suk!2sua"
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
                    <option value="house-1">Будиночок на 6 осіб — ₴9 000</option>
                    <option value="house-2">Будиночок на 8-9 осіб (двоповерховий) — ₴11 000</option>
                    <option value="leisure-small">Альтанка до 8 осіб — ₴8 000</option>
                    <option value="leisure-big">Альтанка до 15 осіб — ₴10 000</option>
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
                    Натиснення відкриє Telegram-бот — надішліть повідомлення там
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
