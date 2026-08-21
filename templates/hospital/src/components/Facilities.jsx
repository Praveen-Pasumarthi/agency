import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Bed, FlaskConical, Pill, Ambulance, Droplets, ScanLine, Wind, Microscope } from 'lucide-react'

const facilities = [
  { icon: Bed, title: 'ICU & Critical Care', desc: 'Fully equipped ICUs with ventilators and continuous monitoring.' },
  { icon: ScanLine, title: 'MRI & CT Scan', desc: 'Advanced 3T MRI and multi-slice CT for accurate diagnostics.' },
  { icon: FlaskConical, title: 'Diagnostic Lab', desc: 'NABL-accredited laboratory with same-day test results.' },
  { icon: Pill, title: 'In-House Pharmacy', desc: '24/7 pharmacy with all essential and specialty medications.' },
  { icon: Ambulance, title: 'Ambulance Service', desc: 'Fleet of fully equipped ambulances with paramedic support.' },
  { icon: Droplets, title: 'Blood Bank', desc: 'NABH-certified blood bank with round-the-clock availability.' },
  { icon: Wind, title: 'Operation Theaters', desc: 'Modular OTs with laminar airflow and advanced equipment.' },
  { icon: Microscope, title: 'Pathology Lab', desc: 'Full-service histopathology, cytology, and molecular diagnostics.' },
]

export default function Facilities() {
  const [ref, isInView] = useInView(0.05)

  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Editorial heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-semibold tracking-[0.2em] uppercase block mb-3"
          >
            Infrastructure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          >
            Built for <span className="text-gradient">excellence</span>
          </motion.h2>
        </div>

        {/* Alternating left-right layout — NOT uniform grid */}
        <div className="space-y-8">
          {facilities.map((fac, i) => {
            const Icon = fac.icon
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`flex items-center gap-6 p-6 rounded-2xl border border-gray-100 hover:border-brand/20 transition-all duration-300 ${
                  isEven ? '' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={26} className="text-brand" />
                </div>
                <div className={isEven ? '' : 'sm:text-right'}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{fac.title}</h3>
                  <p className="text-sm text-gray-500">{fac.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
