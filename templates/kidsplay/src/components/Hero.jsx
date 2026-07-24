import { motion } from 'framer-motion'
import { Star, Users, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 opacity-90"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-lg">
            WHERE KIDS<br />
            <span className="text-yellow-300">HAVE FUN!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Trampolines, slides, ball pits & more. The safest and funnest play zone in Vizag.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#pricing" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg">
              View Prices
            </a>
            <a href="#activities" className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all">
              Explore Activities
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Star className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">4.5</p>
              <p className="text-white/80 text-sm">Rating</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Users className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">5000+</p>
              <p className="text-white/80 text-sm">Happy Kids</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Shield className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-white/80 text-sm">Safe</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
