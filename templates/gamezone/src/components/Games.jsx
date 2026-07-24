import { motion } from 'framer-motion'
import { Gamepad2, Car, Box, Swords, Eye, Joystick } from 'lucide-react'

const games = [
  { icon: Eye, name: 'VR Games', desc: 'Immersive virtual reality experiences', color: 'from-purple-500 to-indigo-600' },
  { icon: Gamepad2, name: 'Arcade Games', desc: 'Classic and modern arcade machines', color: 'from-cyan-500 to-blue-600' },
  { icon: Car, name: 'Bumper Cars', desc: 'Thrilling rides for all ages', color: 'from-yellow-500 to-orange-600' },
  { icon: Box, name: '5D Cinema', desc: 'Multi-sensory movie experience', color: 'from-pink-500 to-rose-600' },
  { icon: Swords, name: 'Horror House', desc: 'Spine-chilling horror adventure', color: 'from-red-500 to-red-700' },
  { icon: Joystick, name: 'Bowling', desc: 'Strike your way to victory', color: 'from-green-500 to-emerald-600' },
]

export default function Games() {
  return (
    <section id="games" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            CHOOSE YOUR <span className="text-purple-500">ADVENTURE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From VR thrills to classic arcade fun, we have something for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card-hover bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center mb-6`}>
                <game.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{game.name}</h3>
              <p className="text-gray-400">{game.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
