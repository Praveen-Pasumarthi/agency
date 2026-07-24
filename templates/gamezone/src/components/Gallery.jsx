import { motion } from 'framer-motion'
import { Gamepad2, Car, Box, Swords, Eye, Joystick } from 'lucide-react'

const items = [
  { icon: Eye, name: 'VR Zone', gradient: 'from-purple-500 to-indigo-600' },
  { icon: Gamepad2, name: 'Arcade', gradient: 'from-cyan-500 to-blue-600' },
  { icon: Car, name: 'Bumper Cars', gradient: 'from-yellow-500 to-orange-600' },
  { icon: Box, name: '5D Cinema', gradient: 'from-pink-500 to-rose-600' },
  { icon: Swords, name: 'Horror House', gradient: 'from-red-500 to-red-700' },
  { icon: Joystick, name: 'Bowling', gradient: 'from-green-500 to-emerald-600' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            THE <span className="text-purple-500">EXPERIENCE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A sneak peek into the fun that awaits you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl aspect-square bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center`}>
              <item.icon className="h-16 w-16 text-white/80 mb-4" />
              <p className="text-white font-bold text-lg">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
