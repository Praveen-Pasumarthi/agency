import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedDishes from './components/FeaturedDishes'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="bg-surface min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedDishes />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
