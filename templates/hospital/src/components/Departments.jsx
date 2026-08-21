import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Heart, Brain, Bone, Baby, Stethoscope, Activity, Eye, Scissors, ChevronLeft, ChevronRight } from 'lucide-react'

const departments = [
  { icon: Heart, name: 'Cardiology', desc: 'Heart surgery, interventional cardiology, and cardiac rehabilitation.' },
  { icon: Brain, name: 'Neurology', desc: 'Brain, spine, and nervous system diagnosis and treatment.' },
  { icon: Bone, name: 'Orthopedics', desc: 'Joint replacement, sports injuries, and spine surgery.' },
  { icon: Baby, name: 'Pediatrics', desc: 'Complete care for newborns, children, and adolescents.' },
  { icon: Stethoscope, name: 'General Medicine', desc: 'Primary care, health checkups, and chronic disease management.' },
  { icon: Activity, name: 'Emergency', desc: '24/7 trauma and critical care with rapid response teams.' },
  { icon: Eye, name: 'Ophthalmology', desc: 'Cataract, LASIK, glaucoma, and retinal treatments.' },
  { icon: Scissors, name: 'Surgery', desc: 'Minimally invasive and laparoscopic procedures.' },
]

export default function Departments() {
  const [ref, isInView] = useInView(0.05)
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section id="departments" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-brand-light to-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header — large editorial */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-brand text-sm font-semibold tracking-[0.2em] uppercase block mb-3"
            >
              Specialties
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            >
              Find the right care
              <br />
              <span className="text-gradient">for you</span>
            </motion.h2>
          </div>

          {/* Arrow buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden sm:flex items-center gap-2"
          >
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
            <a
              href="#appointment"
              className="ml-2 px-5 py-2.5 border-2 border-brand text-brand font-semibold text-sm rounded-full hover:bg-brand hover:text-white transition-all duration-300"
            >
              Get Care Now
            </a>
          </motion.div>
        </div>

        {/* Horizontal scroll row */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="scroll-row"
        >
          {departments.map((dept, i) => {
            const Icon = dept.icon
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                className="w-64 flex-shrink-0 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-brand hover:border-brand transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon size={22} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{dept.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors">{dept.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-8 text-center">
          <a href="#appointment" className="inline-flex px-6 py-3 bg-brand text-white font-semibold rounded-full">
            Get Care Now
          </a>
        </div>
      </div>
    </section>
  )
}
