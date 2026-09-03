import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useInView } from './useInView'

const testimonials = [
  {
    name: 'Coming Soon',
    role: 'Restaurant Owner',
    text: 'This is a placeholder for your first client testimonial. Once you land your first client, replace this with their actual review.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-wider uppercase">
            Client Love
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-10 text-center relative"
        >
          <Quote className="absolute top-6 left-6 text-brand/10" size={48} />
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} size={20} className="fill-brand text-brand" />
            ))}
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed mb-8 max-w-2xl mx-auto">
            &ldquo;{testimonials[0].text}&rdquo;
          </p>
          <div>
            <p className="font-bold dark:text-white">{testimonials[0].name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[0].role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
