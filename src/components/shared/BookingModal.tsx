import { AnimatePresence, motion } from 'framer-motion'
import { X, Phone } from 'lucide-react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const PHONE = '+380770737300'
const PHONE_DISPLAY = '+38 (077) 073 73 00'
const VIBER_LINK = `viber://chat?number=${PHONE}`
const TELEGRAM_LINK = 'https://t.me/bakshalaranch_bot'

const IcoViber = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.995 2C6.5 2 2.01 6.49 2.01 11.99c0 1.79.48 3.55 1.38 5.09L2 22l5.07-1.37c1.49.83 3.17 1.27 4.925 1.27C17.5 21.9 22 17.41 22 11.91 22 6.41 17.5 2 11.995 2zm.005 18.1c-1.55 0-3.07-.42-4.39-1.22l-.31-.19-3.23.87.87-3.16-.2-.32C3.45 14.83 3 13.43 3 11.99 3 7.03 7.04 3 12 3s9 4.03 9 8.99-4.04 9.11-9 9.11zm4.97-6.75c-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.35-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.13-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z"/>
  </svg>
)

const IcoTelegram = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.9c-.12.56-.46.7-.93.43l-2.56-1.89-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.63 4.74-4.28c.21-.18-.04-.28-.32-.1L7.9 14.17l-2.53-.79c-.55-.17-.56-.55.12-.82l9.88-3.81c.46-.17.85.11.27.05z"/>
  </svg>
)

const CONTACTS = [
  {
    label: 'Зателефонуй',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
    bg: 'bg-bakshala-sand',
    Icon: () => <Phone size={26} />,
  },
  {
    label: 'Напиши на Вайбер',
    value: PHONE_DISPLAY,
    href: VIBER_LINK,
    bg: 'bg-[#7360F2]',
    Icon: IcoViber,
  },
  {
    label: 'Написати в Телеграм-бот',
    value: '@bakshalaranch_bot',
    href: TELEGRAM_LINK,
    bg: 'bg-[#29A8E9]',
    Icon: IcoTelegram,
  },
]

export default function BookingModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative bg-bakshala-deep w-full max-w-md z-10 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              aria-label="Закрити"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <h3 className="font-serif font-light text-white text-[clamp(24px,3vw,32px)] leading-tight mb-2">
              Забронювати можна:
            </h3>
            <div className="w-full h-px bg-white/15 mb-7" />

            {/* Contact rows */}
            <div className="flex flex-col gap-3">
              {CONTACTS.map(({ label, value, href, bg, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/[0.07] hover:bg-white/[0.13] transition-colors duration-200 group"
                >
                  <div className={`${bg} w-[72px] h-[72px] flex items-center justify-center text-white flex-shrink-0`}>
                    <Icon />
                  </div>
                  <div>
                    <div className="text-white/60 text-[13px] tracking-wide group-hover:text-white/80 transition-colors">
                      {label}
                    </div>
                    <div className="text-white font-medium text-[17px] tracking-wide leading-tight">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
