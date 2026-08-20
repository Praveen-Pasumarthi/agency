import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { ShieldCheck } from 'lucide-react'

const partners = [
  { name: 'Star Health', color: 'from-blue-500 to-blue-600' },
  { name: 'ICICI Lombard', color: 'from-orange-500 to-red-500' },
  { name: 'Bajaj Allianz', color: 'from-green-500 to-emerald-600' },
  { name: 'New India Assurance', color: 'from-purple-500 to-indigo-600' },
  { name: 'HDFC ERGO', color: 'from-blue-600 to-cyan-500' },
  { name: 'Care Health', color: 'from-rose-500 to-pink-500' },
  { name: 'Niva Bupa', color: 'from-teal-500 to-cyan-600' },
  { name: 'Aditya Birla', color: 'from-red-500 to-orange-500' },
]

export default function Insurance() {
  const [ref, isInView] = useInView(0.05)

  return (
    <section id="insurance" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-semibold tracking-[0.2em] uppercase block mb-3"
          >
            We Accept
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Insurance & TPA <span className="text-gradient">Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg"
          >
            Cashless treatment available for all major insurance providers. We also
            offer EMI options for self-pay patients.
          </motion.p>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              className="group flex items-center justify-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand/30 dark:hover:border-brand/30 transition-all duration-300"
            >
              <div className={`w-full h-16 bg-gradient-to-r ${partner.color} rounded-xl flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity`}>
                <span className="text-white font-bold text-sm text-center px-2">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cashless badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand/5 dark:bg-brand/10 border border-brand/10 rounded-full">
            <ShieldCheck size={20} className="text-brand" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              100% Cashless treatment available at our facility
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
