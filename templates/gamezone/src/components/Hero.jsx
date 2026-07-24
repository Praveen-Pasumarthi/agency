import { motion } from 'framer-motion'
import { Zap, Trophy, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124,58,237,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(245,158,11,0.2) 0%, transparent 50%)'}}></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-glow">
            LEVEL UP<br />
            <span className="text-purple-500">YOUR GAME</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            VR experiences, arcade games, bumper cars & more. The ultimate gaming destination in Vizag.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#pricing" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105">
              View Prices
            </a>
            <a href="#games" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 px-8 py-4 rounded-full text-lg font-bold transition-all">
              Explore Games
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-gray-400 text-sm">Games</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">4.5</p>
              <p className="text-gray-400 text-sm">Rating</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-gray-400 text-sm">Visitors</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
