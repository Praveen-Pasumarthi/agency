import { motion } from 'framer-motion'
import { Monitor, Dumbbell, TreePine, BookOpen, Bus, Utensils } from 'lucide-react'

const facilities = [
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Interactive digital boards and modern learning tools', color: 'text-blue-500', bg: 'bg-blue-100', img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80' },
  { icon: Dumbbell, title: 'Sports Ground', desc: 'Spacious play area with cricket, football & basketball', color: 'text-green-500', bg: 'bg-green-100', img: 'https://images.unsplash.com/photo-1562552052-c77b10d48d80?w=600&q=80' },
  { icon: TreePine, title: 'Garden Campus', desc: 'Green, eco-friendly campus with outdoor learning spaces', color: 'text-emerald-500', bg: 'bg-emerald-100', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
  { icon: BookOpen, title: 'Library', desc: '2000+ books and a cozy reading corner for young readers', color: 'text-purple-500', bg: 'bg-purple-100', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80' },
  { icon: Bus, title: 'Transport', desc: 'GPS-tracked safe school buses covering all major routes', color: 'text-orange-500', bg: 'bg-orange-100', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80' },
  { icon: Utensils, title: 'Cafeteria', desc: 'Hygienic meals with nutritious lunch options daily', color: 'text-pink-500', bg: 'bg-pink-100', img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            OUR <span className="text-blue-600">FACILITIES</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            State-of-the-art infrastructure for holistic development of every child.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
