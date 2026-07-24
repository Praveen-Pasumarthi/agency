import { useState, useEffect } from 'react'
import { Gamepad2, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Games', href: '#games' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Parties', href: '#party' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Gamepad2 className={`h-8 w-8 ${scrolled ? 'text-purple-500' : 'text-white'}`} />
            <span className={`font-display text-2xl font-bold ${scrolled ? 'text-white' : 'text-white'}`}>LEVEL UP</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-purple-400 ${scrolled ? 'text-gray-300' : 'text-white'}`}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
              Book Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-gray-300 hover:text-purple-400 text-lg" onClick={() => setMobileOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="block bg-purple-600 text-white text-center py-3 rounded-full font-semibold" onClick={() => setMobileOpen(false)}>
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
