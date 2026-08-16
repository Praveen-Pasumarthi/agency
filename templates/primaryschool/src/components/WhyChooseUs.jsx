import { motion } from 'framer-motion'
import { CheckCircle, Shield, Users, TrendingUp, Clock, Award } from 'lucide-react'

const reasons = [
  { icon: CheckCircle, title: 'CBSE Affiliated', desc: 'Officially recognized curriculum' },
  { icon: Shield, title: 'Safe Campus', desc: 'CCTV monitored with secure entry' },
  { icon: Users, title: 'Low Ratios', desc: '25:1 student-teacher ratio' },
  { icon: TrendingUp, title: 'Results', desc: '98%+ Distinction rate annually' },
  { icon: Clock, title: 'Extended Care', desc: 'After-school supervision till 5 PM' },
  { icon: Award, title: 'Awards', desc: 'Best School Award 2024 & 2025' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              WHY PARENTS <span className="text-blue-600">CHOOSE US</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We don't just teach subjects — we shape character, build confidence, and create lifelong learners.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {reasons.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-3xl overflow-hidden h-96 relative">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80" alt="Kids in classroom" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-lg font-display">EXCELLENCE IN EDUCATION</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
              <p className="text-2xl font-bold text-blue-600">15+</p>
              <p className="text-gray-500 text-sm">Years of Trust</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
