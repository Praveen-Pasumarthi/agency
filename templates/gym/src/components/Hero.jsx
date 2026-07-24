import { motion } from 'framer-motion'
import { ChevronDown, Flame } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-red-950/30 to-gray-950" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70" />

      {/* Animated elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <Flame className="text-brand" size={20} />
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Transform Your Body
          </span>
          <Flame className="text-brand" size={20} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white leading-none tracking-wider mb-6"
        >
          NO LIMITS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Push beyond your boundaries. With world-class trainers and state-of-the-art equipment,
          your transformation starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#trial"
            className="px-10 py-4 bg-brand text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand/30"
          >
            Start Free Trial
          </a>
          <a
            href="#membership"
            className="px-10 py-4 border border-white/30 text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-white/10 transition-all duration-300"
          >
            View Plans
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#membership"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  )
}
