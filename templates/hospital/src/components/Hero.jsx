import { motion } from 'framer-motion'
import { ArrowRight, HeartPulse, ShieldCheck, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background — editorial split */}
      <div className="absolute inset-0 bg-surface dark:bg-surface-dark" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/5 to-transparent dark:from-brand/8 hidden lg:block" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-grid opacity-50 dark:opacity-20" />

      {/* Floating accent shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] w-20 h-20 rounded-3xl bg-brand/10 border border-brand/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 right-[10%] w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left — editorial text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-brand" />
              <span className="text-brand text-sm font-semibold tracking-[0.2em] uppercase">
                Trusted Since 2009
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="heading-editorial text-navy dark:text-white mb-6"
            >
              Your Health,{' '}
              <br className="hidden sm:block" />
              Our <span className="text-gradient italic">Priority</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mb-10 leading-relaxed"
            >
              A team of 50+ specialists delivering advanced medical care
              with compassion. From routine checkups to complex surgeries —
              we're here for every step of your journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a
                href="#appointment"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-xl hover:shadow-brand/25"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#departments"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-brand hover:text-brand transition-all duration-300"
              >
                Explore Departments
              </a>
            </motion.div>

            {/* Trust badges — inline row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: HeartPulse, text: '10,000+ Patients Treated' },
                { icon: ShieldCheck, text: 'NABH Accredited' },
                { icon: Award, text: '15+ Years of Care' },
              ].map((badge) => {
                const Icon = badge.icon
                return (
                  <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Icon size={16} className="text-brand" />
                    <span>{badge.text}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right — large stat visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main stat circle */}
              <div className="aspect-square rounded-full bg-gradient-to-br from-brand/10 to-brand/5 dark:from-brand/15 dark:to-brand/5 border border-brand/10 flex flex-col items-center justify-center">
                <span className="text-7xl font-bold text-brand mb-1">50+</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">Expert Doctors</span>
              </div>

              {/* Floating mini cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow-xl shadow-brand/5 border border-gray-100 dark:border-gray-800"
              >
                <div className="text-2xl font-bold text-navy dark:text-white">20+</div>
                <div className="text-xs text-gray-500">Departments</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -left-6 bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow-xl shadow-brand/5 border border-gray-100 dark:border-gray-800"
              >
                <div className="text-2xl font-bold text-brand">24/7</div>
                <div className="text-xs text-gray-500">Emergency Care</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
