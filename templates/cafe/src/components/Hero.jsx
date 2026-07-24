import { motion } from 'framer-motion'
import { Coffee, Star, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 italic">
            Brew &<br />
            <span className="text-amber-400">Bean</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Artisan coffee, fresh bakes, and a cozy space to unwind. Your daily escape in Vizag.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#menu" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105">
              Explore Menu
            </a>
            <a href="#contact" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/20 px-8 py-4 rounded-full text-lg font-bold transition-all">
              Visit Us
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Coffee className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-gray-400 text-sm">Coffee Varieties</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Star className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">4.3</p>
              <p className="text-gray-400 text-sm">Rating</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Clock className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">12hrs</p>
              <p className="text-gray-400 text-sm">Open Daily</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
