import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useInView } from './useInView'

const testimonials = [
  {
    name: 'Deepak Verma',
    role: 'Member since 2022',
    text: 'Lost 25kg in 8 months. The trainers here don\'t just push you — they educate you. Best decision I ever made.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    name: 'Meera Iyer',
    role: 'Member since 2023',
    text: 'The group classes are addictive! I\'ve made so many friends here. The energy is unmatched.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    name: 'Suresh Patel',
    role: 'Member since 2021',
    text: 'I\'ve tried 5 gyms before this. IronForge is different — the community, the equipment, the results. Nothing compares.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=53',
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            MEMBER STORIES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 relative shadow-lg shadow-black/5 dark:shadow-black/20"
            >
              <Quote className="absolute top-6 right-6 text-brand/10" size={48} />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-brand text-brand" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold dark:text-white">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
