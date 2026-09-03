import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'
import { useInView } from './useInView'

const projects = [
  {
    title: 'La Maison',
    category: 'Restaurant',
    desc: 'Premium fine dining website with online menu, reservation system, gallery, and WhatsApp integration. Dark mode support, smooth animations, and mobile-first design.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    features: ['Online Menu', 'Reservations', 'Gallery', 'Dark Mode', 'WhatsApp'],
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'IronForge',
    category: 'Gym',
    desc: 'Bold, high-energy gym website with membership plans, trainer profiles, transformation gallery, BMI calculator, and free trial form.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    features: ['Membership Plans', 'Trainer Profiles', 'BMI Calculator', 'Free Trial', 'Testimonials'],
    color: 'from-red-500/20 to-pink-500/20',
  },
]

export default function Portfolio() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-wider uppercase">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            Templates That Convert
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Premium website templates designed for real businesses
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="group relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-800/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {p.features.slice(0, 3).map((f) => (
                    <span key={f} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-brand text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-2xl font-bold dark:text-white">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`../restaurant/index.html`}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-brand hover:text-white transition-all"
                      aria-label="View live"
                    >
                      <Eye size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.features.map((f) => (
                    <span key={f} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
