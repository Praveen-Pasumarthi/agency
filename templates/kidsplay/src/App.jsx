import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Pricing from './components/Pricing'
import Birthday from './components/Birthday'
import Safety from './components/Safety'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="dark">
      <div className="bg-gradient-play min-h-screen text-gray-800">
        <Navbar />
        <Hero />
        <Activities />
        <Pricing />
        <Birthday />
        <Safety />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
