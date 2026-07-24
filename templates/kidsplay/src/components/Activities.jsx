import { motion } from 'framer-motion'
import { Mountain, Puzzle, Music, TreePine, Gamepad2, Utensils } from 'lucide-react'

const activities = [
  { icon: Mountain, name: 'Slides & Climbing', desc: 'Multi-level slides and climbing structures', color: 'from-orange-400 to-red-500' },
  { icon: Puzzle, name: 'Soft Play Area', desc: 'Safe padded zone for toddlers', color: 'from-cyan-400 to-blue-500' },
  { icon: Music, name: 'Music Zone', desc: 'Interactive musical instruments', color: 'from-purple-400 to-pink-500' },
  { icon: TreePine, name: 'Ball Pit', desc: 'Thousands of colorful balls to dive in', color: 'from-green-400 to-emerald-500' },
  { icon: Gamepad2, name: 'Arcade Games', desc: 'Kid-friendly arcade machines', color: 'from-yellow-400 to-orange-500' },
  { icon: Utensils, name: 'Cafe Area', desc: 'Snacks and refreshments for parents', color: 'from-pink-400 to-rose-500' },
]

export default function Activities() {
  return (
    <section id="activities" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            FUN <span className="text-orange-500">ACTIVITIES</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything your child needs for a day of adventure and fun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card-hover bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6`}>
                <activity.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{activity.name}</h3>
              <p className="text-gray-600">{activity.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
