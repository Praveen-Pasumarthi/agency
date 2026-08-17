import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useInView } from './useInView'

const testimonials = [
  {
    name: 'Kaushik Karthikeyan',
    initials: 'KK',
    role: 'Google Reviewer',
    text: 'Amazing atmosphere and premium ambience. Delicious food with assured lip smacking taste. Ample amount of vehicle parking. Easy access to the restaurant with Google location just at your finger tip.',
    rating: 5,
  },
  {
    name: 'Naveen Raju Kuppam',
    initials: 'NK',
    role: 'Google Reviewer',
    text: 'Smiley welcome staff as well as service was good with good ambience. I ordered veg food and it was good, finally special curd was excellent!',
    rating: 5,
  },
  {
    name: 'Ravi Babu',
    initials: 'RB',
    role: 'Google Reviewer',
    text: 'We had Phulka, Dal Tadka, Veg Biryani and Ice Creams. Taste was good, Service was Excellent. The restaurant has great ambience and is very well maintained.',
    rating: 5,
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
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <span className="text-brand font-bold text-sm">{t.initials}</span>
                </div>
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
