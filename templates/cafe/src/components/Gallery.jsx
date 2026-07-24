import { motion } from 'framer-motion'
import { Coffee, Cake, Sandwich, Cookie, IceCream, Croissant } from 'lucide-react'

const items = [
  { icon: Coffee, name: 'Espresso', gradient: 'from-amber-700 to-stone-800' },
  { icon: Cake, name: 'Cakes', gradient: 'from-pink-600 to-rose-700' },
  { icon: Sandwich, name: 'Snacks', gradient: 'from-green-600 to-emerald-700' },
  { icon: Cookie, name: 'Cookies', gradient: 'from-amber-600 to-orange-700' },
  { icon: IceCream, name: 'Desserts', gradient: 'from-purple-600 to-pink-700' },
  { icon: Croissant, name: 'Bakes', gradient: 'from-yellow-600 to-amber-700' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 italic">
            THE <span className="text-amber-400">VIBE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into our cozy space and handcrafted creations.
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
