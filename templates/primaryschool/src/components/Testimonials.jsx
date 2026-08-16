import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Priya Sharma', role: 'Parent of Class 3', text: 'My daughter has transformed since joining Sunshine. She loves coming to school every day and her confidence has grown immensely.', rating: 5 },
  { name: 'Rahul Verma', role: 'Parent of LKG', text: 'The teachers are incredibly caring and patient. My son learned so much in just one term. Best decision we made for our child!', rating: 5 },
  { name: 'Anita Reddy', role: 'Parent of Class 5', text: 'Excellent school with great values. My son scored 98% in his board exam. The faculty truly cares about every child.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            WHAT PARENTS <span className="text-blue-600">SAY</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our happy parent community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-blue-50 rounded-2xl p-8 relative">
              <Quote className="h-10 w-10 text-blue-200 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-gray-800">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
