import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import Pricing from './components/Pricing'
import Party from './components/Party'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="dark">
      <div className="bg-gradient-game min-h-screen text-white">
        <Navbar />
        <Hero />
        <Games />
        <Pricing />
        <Party />
        <Gallery />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
