import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="dark">
      <div className="bg-gradient-cafe min-h-screen text-white">
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
