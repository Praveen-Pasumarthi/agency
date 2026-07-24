import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useInView } from './useInView'

const faqs = [
  {
    q: 'Do I need to be fit to join?',
    a: 'Not at all! We welcome all fitness levels. Our trainers will create a program tailored to your current ability and goals.',
  },
  {
    q: 'Is there a joining fee?',
    a: 'No hidden charges. You only pay your monthly membership. We believe in transparent pricing.',
  },
  {
    q: 'Can I freeze my membership?',
    a: 'Yes, you can freeze your membership for up to 3 months per year at no extra cost.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes! Our certified trainers offer 1-on-1 sessions. Pro members get 1 session/week, Elite members get 4.',
  },
  {
    q: 'What are the gym timings?',
    a: 'We\'re open Monday to Sunday, 5:00 AM to 11:00 PM. Elite members get 24/7 access.',
  },
  {
    q: 'Is there parking available?',
    a: 'Yes, we have free parking for both two-wheelers and four-wheelers.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, isInView] = useInView(0.1)

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            GOT QUESTIONS?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                open === i
                  ? 'border-brand dark:border-brand'
                  : 'border-gray-200 dark:border-gray-800'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold dark:text-white pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-brand' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
