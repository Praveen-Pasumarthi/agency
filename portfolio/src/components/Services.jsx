import { motion } from 'framer-motion'
import { Globe, Palette, Smartphone, Zap, Search, MessageCircle } from 'lucide-react'
import { useInView } from './useInView'

const services = [
  {
    icon: Globe,
    title: 'Premium Websites',
    desc: 'Custom-designed, modern websites that look premium and load fast. Built for conversions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Every website is fully responsive and optimized for mobile devices where 70% of traffic comes from.',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Consistent branding across your website that matches your business personality and builds trust.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Optimized for speed with 95+ Lighthouse scores. Fast websites rank higher and convert better.',
  },
  {
    icon: Search,
    title: 'SEO Ready',
    desc: 'Built with SEO best practices so customers can find you on Google without paid ads.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    desc: 'One-click WhatsApp button so customers can reach you instantly. Perfect for local businesses.',
  },
]

export default function Services() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            Services Built for Growth
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Everything your business needs to succeed online
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors">
                <s.icon className="text-brand" size={22} />
              </div>
              <h3 className="text-lg font-bold dark:text-white mb-2">{s.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
