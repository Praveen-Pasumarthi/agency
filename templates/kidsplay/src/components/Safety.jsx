import { motion } from 'framer-motion'
import { Shield, Eye, Droplets, ThermometerSun } from 'lucide-react'

export default function Safety() {
  return (
    <section id="safety" className="py-20 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            YOUR CHILD'S <span className="text-green-500">SAFETY</span> FIRST
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We maintain the highest safety standards so parents can relax.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Padded Floors', desc: 'Soft cushioning everywhere', color: 'text-blue-500', bg: 'bg-blue-100' },
            { icon: Eye, title: '24/7 Supervision', desc: 'Trained staff at all times', color: 'text-purple-500', bg: 'bg-purple-100' },
            { icon: Droplets, title: 'Regular Sanitization', desc: 'Equipment cleaned hourly', color: 'text-cyan-500', bg: 'bg-cyan-100' },
            { icon: ThermometerSun, title: 'Temperature Control', desc: 'Comfortable AC environment', color: 'text-orange-500', bg: 'bg-orange-100' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
