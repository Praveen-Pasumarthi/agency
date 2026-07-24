import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold text-white">
              Praveen Dev
            </span>
            <p className="text-sm mt-1">Premium website design for local businesses.</p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-brand transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-brand transition-colors">Work</a>
            <a href="#process" className="hover:text-brand transition-colors">Process</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Praveen Dev. All rights reserved.</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-brand fill-brand" /> for businesses that want to grow
          </p>
        </div>
      </div>
    </footer>
  )
}
