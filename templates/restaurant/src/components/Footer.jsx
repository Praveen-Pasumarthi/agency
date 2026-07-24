import { Globe, Heart } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
  ],
  'More': [
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
              La Maison
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Where culinary artistry meets timeless elegance. Creating unforgettable dining experiences since 2018.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all" aria-label="Instagram">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all" aria-label="Facebook">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all" aria-label="TripAdvisor">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-brand transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Newsletter
            </h4>
            <p className="text-sm mb-4">Get updates on special events and seasonal menus.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-l-full text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-r-full hover:bg-brand-dark transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} La Maison. All rights reserved.
          </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
            Crafted with <Heart size={12} className="text-brand fill-brand" /> care
          </p>
        </div>
      </div>
    </footer>
  )
}
