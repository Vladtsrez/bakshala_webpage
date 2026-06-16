import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { lenis } from '../../lib/lenis'
import { openBooking } from '../../lib/openBooking'

const NAV_LINKS = [
  { label: 'Про нас', to: '/', isScroll: true },
  { label: 'Будиночки', to: '/houses' },
  { label: 'Рибалка', to: '/fishing' },
  { label: 'Альтанки', to: '/leisure' },
  { label: 'Окремий пірс', to: '/pier' },
  { label: 'Контакти', to: '/contacts' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      lenis.scrollTo('#about-section')
    } else {
      navigate('/')
      setTimeout(() => lenis.scrollTo('#about-section'), 400)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-bakshala-mist'
            : 'bg-gradient-to-b from-black/50 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex items-center justify-between transition-all duration-300"
          style={{ paddingTop: scrolled ? '14px' : '22px', paddingBottom: scrolled ? '14px' : '22px' }}>
          <Link
            to="/"
            className={`font-serif font-light text-[18px] tracking-[0.32em] uppercase ${scrolled ? 'text-bakshala-text' : 'text-white'}`}
          >
            Ранчо&nbsp;Бакшала
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-[34px]">
            {NAV_LINKS.map((link) =>
              link.isScroll ? (
                <a
                  key={link.label}
                  href="#about-section"
                  onClick={handleAboutClick}
                  className={`text-[13px] transition-colors relative group py-1 ${scrolled ? 'text-bakshala-text/80 hover:text-bakshala-text' : 'text-white/85 hover:text-white'}`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-bakshala-lake scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-[13px] transition-colors relative group py-1 ${
                      isActive
                        ? scrolled ? 'text-bakshala-lake' : 'text-white'
                        : scrolled ? 'text-bakshala-text/80 hover:text-bakshala-text' : 'text-white/85 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-bakshala-lake scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={openBooking}
              className={`hidden md:block border text-[12px] tracking-[0.14em] uppercase px-[22px] py-[11px] rounded-full hover:bg-bakshala-lake hover:border-bakshala-lake hover:text-white transition-all duration-200 ${scrolled ? 'border-bakshala-text text-bakshala-text' : 'border-white/80 text-white'}`}
            >
              Забронювати
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className={`md:hidden w-11 h-11 flex items-center justify-center ${scrolled ? '' : 'text-white'}`}
              aria-label="Меню"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-[60] bg-bakshala-shore flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-[60px]">
              <span className="font-serif font-light text-[18px] tracking-[0.32em] uppercase">
                Ранчо <span className="text-bakshala-lake">Бакшала</span>
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-11 h-11 flex items-center justify-center"
                aria-label="Закрити"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-[22px]">
              {NAV_LINKS.map((link) =>
                link.isScroll ? (
                  <a
                    key={link.label}
                    href="#about-section"
                    onClick={(e) => {
                      handleAboutClick(e)
                      setDrawerOpen(false)
                    }}
                    className="font-serif font-light text-4xl"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setDrawerOpen(false)}
                    className="font-serif font-light text-4xl"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <button
              onClick={() => { setDrawerOpen(false); openBooking() }}
              className="mt-12 self-start border border-bakshala-text text-[12px] tracking-widest uppercase px-5 py-2.5 rounded-full"
            >
              Забронювати
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
