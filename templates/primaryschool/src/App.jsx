import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Facilities from './components/Facilities'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="dark">
      <div className="bg-gradient-school min-h-screen text-gray-800">
        <Navbar />
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
