import { motion } from 'framer-motion'
import { useInView } from './useInView'

const doctors = [
  { name: 'Dr. Rajesh Kumar', specialty: 'Cardiology', qual: 'MD, DM Cardiology', exp: '18 years', color: 'from-blue-500 to-cyan-400' },
  { name: 'Dr. Priya Sharma', specialty: 'Neurology', qual: 'MD, DM Neurology', exp: '15 years', color: 'from-purple-500 to-pink-400' },
  { name: 'Dr. Arjun Mehta', specialty: 'Orthopedics', qual: 'MS, DNB Orthopedics', exp: '20 years', color: 'from-emerald-500 to-teal-400' },
  { name: 'Dr. Sneha Reddy', specialty: 'Pediatrics', qual: 'MD Pediatrics', exp: '12 years', color: 'from-orange-500 to-amber-400' },
  { name: 'Dr. Vikram Patel', specialty: 'General Surgery', qual: 'MS, FRCS', exp: '22 years', color: 'from-rose-500 to-red-400' },
  { name: 'Dr. Ananya Das', specialty: 'Ophthalmology', qual: 'MS, Fellowship', exp: '10 years', color: 'from-indigo-500 to-violet-400' },
]

export default function Doctors() {
  const [ref, isInView] = useInView(0.05)

  return (
    <section id="doctors" className="relative py-24 sm:py-32 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left — sticky label + heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-brand text-sm font-semibold tracking-[0.2em] uppercase block mb-3"
              >
                Our Team
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              >
                Meet our
                <br />
                <span className="text-gradient">specialists</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-500 text-lg leading-relaxed"
              >
                Our doctors bring decades of experience across every major specialty,
                delivering personalized, evidence-based care.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6"
              >
                <span className="text-5xl font-bold text-brand">50+</span>
                <span className="text-sm text-gray-500 block mt-1">Expert Doctors</span>
              </motion.div>
            </div>
          </div>

          {/* Right — staggered masonry cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={`group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-brand/30 transition-all duration-300 ${
                  i % 3 === 0 ? 'sm:row-span-1' : ''
                }`}
              >
                {/* Avatar */}
                <div className={`h-36 bg-gradient-to-br ${doc.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold text-white">
                      {doc.name.split(' ').slice(-1)[0][0]}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{doc.name}</h3>
                      <p className="text-brand text-sm font-medium">{doc.specialty}</p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">{doc.exp}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{doc.qual}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
