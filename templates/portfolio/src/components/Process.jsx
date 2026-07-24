import { motion } from 'framer-motion'
import { Search, Palette, Code, Rocket, CheckCircle } from 'lucide-react'
import { useInView } from './useInView'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    desc: 'We analyze your business, competitors, and target audience to understand what works best.',
    time: 'Day 1',
  },
  {
    icon: Palette,
    title: 'Design',
    desc: 'Custom design tailored to your brand, colors, and business goals. You approve before we code.',
    time: 'Day 2-3',
  },
  {
    icon: Code,
    title: 'Development',
    desc: 'We build your website with clean code, fast loading, and mobile-first responsive design.',
    time: 'Day 4-6',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'We deploy your website, set up hosting, and ensure everything works perfectly. You go live!',
    time: 'Day 7',
  },
]

export default function Process() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="process" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            From Zero to Live in 7 Days
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 dark:bg-gray-800" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center mb-6 relative z-10">
                <step.icon className="text-brand" size={28} />
              </div>
              <span className="text-brand text-xs font-bold uppercase tracking-wider">{step.time}</span>
              <h3 className="text-lg font-bold dark:text-white mt-2 mb-2">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-bold text-lg dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            Every Project Includes
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Fully responsive design',
              'SEO optimization',
              'Fast loading speed',
              'Contact form',
              'WhatsApp integration',
              'Google Maps',
              'Dark mode support',
              'Free 1-month support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle size={14} className="text-green-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
