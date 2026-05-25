import PageTransition from '../components/shared/PageTransition'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import HousesSection from '../sections/HousesSection'
import FishingPreview from '../sections/FishingPreview'
import LakeSection from '../sections/LakeSection'
import Testimonials from '../sections/Testimonials'
import Gallery from '../sections/Gallery'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <HousesSection />
      <FishingPreview />
      <LakeSection />
      <Testimonials />
      <Gallery />
    </PageTransition>
  )
}
