import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Emergency top bar */}
      <div className="bg-navy text-white text-sm py-2 hidden md:block relative z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emergency rounded-full animate-pulse" />
              Emergency: 1800-XXX-XXX
            </span>
            <span className="text-gray-400">24/7 Available</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span>Mon-Sat: 8AM - 10PM</span>
            <span className="text-gray-500">|</span>
            <span>Sun: 9AM - 6PM</span>
          </div>
        </div>
      </div>

      {/* Floating pill navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
      >
        <nav className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-xl shadow-black/5'
            : 'bg-white/40 backdrop-blur-md'
        }`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <path d="M12 4v16M4 12h16" />
              </svg>
            </div>
            <span className="text-lg font-bold text-navy tracking-tight">MedCare</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-brand rounded-full hover:bg-brand/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href="#appointment"
              className="hidden sm:inline-flex px-5 py-2 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-all hover:shadow-lg hover:shadow-brand/20"
            >
              Book
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile nav dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 mx-2 p-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl border border-gray-100"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand/5 hover:text-brand transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 px-4 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl text-center"
              >
                Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
