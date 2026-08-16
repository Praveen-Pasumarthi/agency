import { motion } from 'framer-motion'
import { Baby, Palette, BookOpen, FlaskConical, Music, Globe } from 'lucide-react'

const programs = [
  { icon: Baby, name: 'Nursery', ages: '3-4 yrs', desc: 'Play-based learning with focus on motor skills and social development', color: 'from-pink-400 to-rose-500' },
  { icon: Palette, name: 'LKG', ages: '4-5 yrs', desc: 'Introduction to alphabet, numbers, and creative expression', color: 'from-purple-400 to-indigo-500' },
  { icon: BookOpen, name: 'UKG', ages: '5-6 yrs', desc: 'Pre-primary readiness with reading, writing and math basics', color: 'from-blue-400 to-cyan-500' },
  { icon: FlaskConical, name: 'Class 1-2', ages: '6-8 yrs', desc: 'Strong foundation in core subjects with activity-based learning', color: 'from-green-400 to-emerald-500' },
  { icon: Music, name: 'Class 3-4', ages: '8-10 yrs', desc: 'Advanced academics with arts, sports, and leadership programs', color: 'from-yellow-400 to-orange-500' },
  { icon: Globe, name: 'Class 5', ages: '10-11 yrs', desc: 'Preparatory year for middle school with critical thinking focus', color: 'from-red-400 to-pink-500' },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            OUR <span className="text-blue-600">PROGRAMS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Age-appropriate curriculum designed to spark curiosity and build strong academic foundations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card-hover bg-white rounded-2xl p-8 border border-gray-100">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                <program.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-gray-800">{program.name}</h3>
                <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{program.ages}</span>
              </div>
              <p className="text-gray-600">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
