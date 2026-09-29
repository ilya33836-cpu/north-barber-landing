import Contacts from './components/Contacts'
import CtaBooking from './components/CtaBooking'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Masters from './components/Masters'
import MobileBar from './components/MobileBar'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import TrustBlock from './components/TrustBlock'
import WhyUs from './components/WhyUs'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-bronze focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Перейти к содержимому
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBlock />
        <Services />
        <Masters />
        <Gallery />
        <WhyUs />
        <Pricing />
        <Process />
        <Testimonials />
        <Faq />
        <CtaBooking />
        <Contacts />
      </main>
      <Footer />
      <MobileBar />
    </div>
  )
}
