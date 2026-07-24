import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useInView } from './useInView'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    text: 'An absolute gem! The truffle risotto was the best I\'ve ever had. The ambiance is perfect for a special evening out.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    name: 'Arjun Mehta',
    role: 'Regular Guest',
    text: 'We celebrate all our milestones here. The staff remembers our names and the wagyu never disappoints. Truly exceptional.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=68',
  },
  {
    name: 'Neha Kapoor',
    role: 'Event Planner',
    text: 'I hosted a corporate dinner for 30 guests. Flawless service, stunning presentation, and guests couldn\'t stop raving.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=45',
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 relative"
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
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
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
