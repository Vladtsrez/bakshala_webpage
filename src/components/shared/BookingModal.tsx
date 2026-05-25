import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

interface FormState {
  name: string
  phone: string
  date: string
  guests: string
  message: string
}

export default function BookingModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Ім'я: ${form.name}\nТелефон: ${form.phone}\nДата заїзду: ${form.date}\nКількість гостей: ${form.guests}\nПовідомлення: ${form.message}`
    window.location.href = `mailto:info@bakshala.com.ua?subject=Бронювання — Ранчо Бакшала&body=${encodeURIComponent(body)}`
    onClose()
  }

  const inputCls =
    'w-full border border-bakshala-text/20 bg-white px-4 py-3 text-[14px] text-bakshala-text focus:outline-none focus:border-bakshala-lake transition-colors placeholder:text-bakshala-text/40'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-bakshala-deep/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative bg-bakshala-shore w-full max-w-lg z-10 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Закрити"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <div className="w-10 h-px bg-bakshala-sand mb-4" />
              <h3 className="font-serif font-light text-3xl">Забронювати</h3>
              <p className="text-bakshala-text/60 text-sm mt-1">Ми звʼяжемося з вами протягом дня</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                type="text"
                required
                placeholder="Ваше імʼя *"
                value={form.name}
                onChange={handleChange}
                className={inputCls}
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Телефон *"
                value={form.phone}
                onChange={handleChange}
                className={inputCls}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className={inputCls}
                />
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={inputCls}
                >
                  {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === '1' ? 'гість' : 'гостей'}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="Побажання або запитання"
                value={form.message}
                onChange={handleChange}
                className={`${inputCls} resize-none`}
              />
              <button
                type="submit"
                className="w-full bg-bakshala-sand text-white py-3.5 text-[12px] tracking-widest uppercase hover:bg-bakshala-sand/90 transition-colors mt-2"
              >
                Надіслати запит
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
