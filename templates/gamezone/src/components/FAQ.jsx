import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'What are the opening hours?', a: 'We are open daily from 10:00 AM to 10:00 PM. Holiday hours may vary.' },
  { q: 'Is there an age limit?', a: 'No! We have games for all ages - from toddlers to adults. Some VR games may have height/age requirements.' },
  { q: 'Can I book for a birthday party?', a: 'Yes! We offer amazing birthday party packages. Contact us for custom party planning.' },
  { q: 'Do I need to book in advance?', a: 'Walk-ins are welcome, but we recommend booking for parties and peak hours to ensure availability.' },
  { q: 'Is parking available?', a: 'Yes, we have ample parking space for both two-wheelers and four-wheelers.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            GOT <span className="text-purple-500">QUESTIONS?</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-purple-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
