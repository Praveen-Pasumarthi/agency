import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Departments from './components/Departments'
import Doctors from './components/Doctors'
import Facilities from './components/Facilities'
import Appointment from './components/Appointment'
import Insurance from './components/Insurance'
import Testimonials from './components/Testimonials'
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
      <Departments />
      <Doctors />
      <Facilities />
      <Appointment />
      <Insurance />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
