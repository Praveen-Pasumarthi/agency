import { motion } from 'framer-motion'
import { Star, Users, Award, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80" alt="Kids learning" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-lg">
            WHERE LEARNING<br />
            <span className="text-yellow-300">COMES ALIVE!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Nurturing young minds from Nursery to Class 5 with love, care, and world-class education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#programs" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg">
              Our Programs
            </a>
            <a href="#about" className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all">
              About Us
            </a>
          </div>

          <div className="grid grid-cols-4 gap-8 max-w-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Star className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">4.8</p>
              <p className="text-white/80 text-sm">Rating</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Users className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">800+</p>
              <p className="text-white/80 text-sm">Students</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Award className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-white/80 text-sm">Years</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <BookOpen className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-white/80 text-sm">Teachers</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
