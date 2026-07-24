import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useInView } from './useInView'

const transformations = [
  {
    name: 'Rahul, 28',
    duration: '6 months',
    weightLost: '18 kg',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    quote: 'IronForge changed my life. I went from being overweight to running my first marathon.',
  },
  {
    name: 'Sneha, 32',
    duration: '4 months',
    weightLost: '12 kg',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80',
    quote: 'The trainers here actually care. They designed a plan just for me.',
  },
  {
    name: 'Amit, 35',
    duration: '8 months',
    weightLost: '22 kg',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
    quote: 'Best investment I ever made. The community here keeps me motivated.',
  },
  {
    name: 'Kavitha, 26',
    duration: '5 months',
    weightLost: '15 kg',
    image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80',
    quote: 'I finally found a gym where I feel like family. Results speak for themselves.',
  },
]

export default function Transformations() {
  const [current, setCurrent] = useState(0)
  const [ref, isInView] = useInView(0.1)

  const next = () => setCurrent((c) => (c + 1) % transformations.length)
  const prev = () => setCurrent((c) => (c - 1 + transformations.length) % transformations.length)

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Transformations
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            REAL RESULTS
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={transformations[current].image}
                  alt={transformations[current].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="text-2xl font-bold dark:text-white">{transformations[current].duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Weight Lost</p>
                    <p className="text-2xl font-bold text-brand">{transformations[current].weightLost}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-3">{transformations[current].name}</h3>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  &ldquo;{transformations[current].quote}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-all"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? 'bg-brand w-8' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-all"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
