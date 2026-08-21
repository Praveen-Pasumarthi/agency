import { Globe, Heart } from 'lucide-react'

const footerLinks = {
  'Navigate': [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservation' },
  ],
  'Connect': [
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="dark:bg-surface bg-surface-light dark:border-t border-t-black/5 border-white/5 pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-brand">
              La Maison
            </span>
            <p className="mt-4 text-sm dark:text-white/30 text-black/30 leading-relaxed">
              Where culinary artistry meets timeless elegance. Creating unforgettable dining experiences since 2018.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 dark:border-white/10 border-black/10 flex items-center justify-center hover:border-brand hover:text-brand dark:text-white/30 text-black/30 transition-all duration-500" aria-label="Instagram">
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 dark:border-white/10 border-black/10 flex items-center justify-center hover:border-brand hover:text-brand dark:text-white/30 text-black/30 transition-all duration-500" aria-label="Facebook">
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 dark:border-white/10 border-black/10 flex items-center justify-center hover:border-brand hover:text-brand dark:text-white/30 text-black/30 transition-all duration-500" aria-label="Website">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="dark:text-white text-black font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm dark:text-white/30 text-black/30 hover:text-brand transition-colors duration-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="dark:border-t border-t-black/5 border-t-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm dark:text-white/20 text-black/20">
            &copy; {new Date().getFullYear()} La Maison. All rights reserved.
          </p>
          <p className="text-sm dark:text-white/20 text-black/20 flex items-center gap-1">
            Crafted with <Heart size={12} className="text-brand fill-brand" /> care
          </p>
        </div>
      </div>
    </footer>
  )
}
