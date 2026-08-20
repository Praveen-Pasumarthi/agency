import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'Book Appointment', href: '#appointment' },
]

const deptLinks = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'General Surgery',
]

export default function Footer() {
  return (
    <footer className="relative bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand — wider column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                  <path d="M12 4v16M4 12h16" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">MedCare</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Advanced healthcare with a compassionate touch. Your trusted partner
              for comprehensive medical care in Visakhapatnam.
            </p>
            <div className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand flex-shrink-0" />
                <span>info@medcare.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-brand flex-shrink-0" />
                <span>123 Health Avenue, Visakhapatnam - 530001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Departments</h4>
            <ul className="space-y-2.5">
              {deptLinks.map((dept) => (
                <li key={dept}>
                  <a href="#departments" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors">
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Emergency</h4>
            <div className="p-4 rounded-xl bg-emergency/5 border border-emergency/10">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                24/7 emergency care available.
              </p>
              <a href="tel:1800XXXXXXX" className="inline-flex items-center gap-2 px-4 py-2 bg-emergency text-white text-xs font-semibold rounded-full hover:bg-red-700 transition-colors">
                <Phone size={12} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} MedCare Hospital. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
