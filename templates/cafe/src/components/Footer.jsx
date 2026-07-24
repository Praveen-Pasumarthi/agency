import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-500" />
              <span className="font-display text-2xl font-bold italic">Brew & Bean</span>
            </div>
            <p className="text-gray-400 text-sm">Artisan coffee and fresh bakes in a cozy atmosphere.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#menu" className="hover:text-amber-400">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-400">About</a></li>
              <li><a href="#gallery" className="hover:text-amber-400">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 88667 78842</li>
              <li>Seethammadara, Vizag</li>
              <li>Daily: 10:30AM - 10:30PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Brew & Bean. All rights reserved.</p>
          <p className="mt-2">Built with <span className="text-amber-400">Praveen Dev</span></p>
        </div>
      </div>
    </footer>
  )
}
