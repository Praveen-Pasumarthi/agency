import { Dumbbell, Heart } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'Plans', href: '#membership' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Results', href: '#transformations' },
  ],
  'More': [
    { label: 'Free Trial', href: '#trial' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="text-brand" size={24} />
              <span className="font-[family-name:var(--font-heading)] text-2xl text-white tracking-wider">
                IRONFORGE
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Where iron meets willpower. Premium fitness center dedicated to transforming lives through fitness.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-brand transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} IronForge. All rights reserved.</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-brand fill-brand" /> for fitness
          </p>
        </div>
      </div>
    </footer>
  )
}
