import { useState } from 'react'
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
import Lake from './pages/Lake'
import Contacts from './pages/Contacts'

export default function App() {
  const location = useLocation()
  const [bookingOpen, setBookingOpen] = useState(false)

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
            <Route path="/lake" element={<Lake />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Floating booking button */}
      <button
        onClick={() => setBookingOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-bakshala-sand text-white text-[11px] tracking-widest uppercase px-5 py-3 rounded-full shadow-lg hover:bg-bakshala-sand/90 transition-all hover:shadow-xl active:scale-95"
        aria-label="Відкрити бронювання"
      >
        Забронювати
      </button>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
