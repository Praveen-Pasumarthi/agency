import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Membership from './components/Membership'
import Trainers from './components/Trainers'
import Transformations from './components/Transformations'
import BMICalculator from './components/BMICalculator'
import FreeTrial from './components/FreeTrial'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Membership />
      <Trainers />
      <Transformations />
      <BMICalculator />
      <FreeTrial />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
