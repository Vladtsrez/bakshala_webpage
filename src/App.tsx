import { useState, useEffect } from 'react'
import { openBooking } from './lib/openBooking'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/shared/ScrollToTop'
import BookingModal from './components/shared/BookingModal'
import Home from './pages/Home'
import Houses from './pages/Houses'
import HouseDetail from './pages/HouseDetail'
import Fishing from './pages/Fishing'
import Leisure from './pages/Leisure'
import Pier from './pages/Pier'
import Contacts from './pages/Contacts'

export default function App() {
  const location = useLocation()
  const [bookingOpen, setBookingOpen] = useState(false)

  useEffect(() => {
    const handler = () => setBookingOpen(true)
    window.addEventListener('bakshala:book', handler)
    return () => window.removeEventListener('bakshala:book', handler)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/houses/:id" element={<HouseDetail />} />
            <Route path="/fishing" element={<Fishing />} />
            <Route path="/leisure" element={<Leisure />} />
            <Route path="/pier" element={<Pier />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Floating booking button */}
      <button
        onClick={openBooking}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 bg-bakshala-sand text-white text-[11px] tracking-widest uppercase px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-lg hover:bg-bakshala-sand/90 transition-all hover:shadow-xl active:scale-95"
        aria-label="Відкрити бронювання"
      >
        Забронювати
      </button>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
