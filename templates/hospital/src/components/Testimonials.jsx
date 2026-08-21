import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ramesh Verma',
    treatment: 'Cardiac Surgery',
    rating: 5,
    text: 'Dr. Kumar and his team saved my life. The cardiac surgery was performed flawlessly and the post-operative care was exceptional. I cannot thank MedCare enough.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Sunita Rao',
    treatment: 'Maternity Care',
    rating: 5,
    text: 'From prenatal to delivery, the entire journey was smooth and caring. The maternity ward staff treated me like family. My baby and I received the best care possible.',
    color: 'from-pink-500 to-rose-400',
  },
  {
    name: 'Mohammed Farhan',
    treatment: 'Orthopedic Surgery',
    rating: 5,
    text: 'Had a knee replacement surgery here. Dr. Mehta explained everything clearly and the recovery was faster than expected. The physiotherapy support was outstanding.',
    color: 'from-emerald-500 to-teal-400',
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView(0.05)

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-semibold tracking-[0.2em] uppercase block mb-3"
          >
            Patient Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          >
            Trusted by <span className="text-gradient">thousands</span>
          </motion.h2>
        </div>

        {/* Stacked paper cards — different from standard grid */}
        <div className="max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`relative mb-6 last:mb-0 p-8 rounded-2xl bg-gray-50 border border-gray-100 ${
                i === 0 ? 'ml-0 mr-0' : i === 1 ? 'ml-8 sm:ml-12' : 'ml-16 sm:ml-24'
              }`}
              style={{ zIndex: i }}
            >
              <div className="flex items-start gap-6">
                {/* Quote icon */}
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-brand/10 items-center justify-center flex-shrink-0">
                  <Quote size={20} className="text-brand" />
                </div>

                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-5">{t.text}</p>

                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-brand">{t.treatment}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
