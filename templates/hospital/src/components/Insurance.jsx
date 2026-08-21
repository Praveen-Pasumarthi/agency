import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { ShieldCheck } from 'lucide-react'

const partners = [
  {
    name: 'Star Health',
    textColor: '#0054A6',
    logo: (
      <svg viewBox="0 0 140 36" fill="none" className="w-[140px] h-[36px]">
        <rect x="0" y="6" width="24" height="24" rx="4" fill="#0054A6"/>
        <path d="M8 18h8M12 14v8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <text x="30" y="16" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="13" fill="#0054A6">STAR</text>
        <text x="30" y="29" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="13" fill="#0054A6">HEALTH</text>
      </svg>
    ),
  },
  {
    name: 'ICICI Lombard',
    textColor: '#F58220',
    logo: (
      <svg viewBox="0 0 140 36" fill="none" className="w-[140px] h-[36px]">
        <text x="0" y="15" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="14" fill="#F58220">ICICI</text>
        <text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" fill="#333">LOMBARD</text>
      </svg>
    ),
  },
  {
    name: 'Bajaj Allianz',
    textColor: '#007A33',
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="w-[160px] h-[36px]">
        <circle cx="14" cy="18" r="13" fill="#007A33"/>
        <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="10" fill="white">B</text>
        <text x="32" y="16" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="12" fill="#007A33">BAJAJ</text>
        <text x="32" y="29" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="11" fill="#333">ALLIANZ</text>
      </svg>
    ),
  },
  {
    name: 'New India Assurance',
    textColor: '#8B1A1A',
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="w-[160px] h-[36px]">
        <rect x="0" y="4" width="28" height="28" rx="14" fill="#8B1A1A"/>
        <text x="7" y="23" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="12" fill="white">NI</text>
        <text x="34" y="15" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="10" fill="#8B1A1A">NEW INDIA</text>
        <text x="34" y="28" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="10" fill="#333">ASSURANCE</text>
      </svg>
    ),
  },
  {
    name: 'HDFC ERGO',
    textColor: '#004B8D',
    logo: (
      <svg viewBox="0 0 140 36" fill="none" className="w-[140px] h-[36px]">
        <rect x="0" y="2" width="32" height="32" rx="4" fill="#004B8D"/>
        <text x="4" y="23" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="11" fill="white">HDFC</text>
        <text x="38" y="16" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="14" fill="#004B8D">ERGO</text>
        <text x="38" y="30" fontFamily="Arial,sans-serif" fontSize="8" fill="#666">General Insurance</text>
      </svg>
    ),
  },
  {
    name: 'Care Health',
    textColor: '#E31837',
    logo: (
      <svg viewBox="0 0 140 36" fill="none" className="w-[140px] h-[36px]">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="18" fill="#E31837">CARE</text>
        <text x="72" y="15" fontFamily="Arial,sans-serif" fontSize="8" fill="#666">Health</text>
        <text x="72" y="26" fontFamily="Arial,sans-serif" fontSize="8" fill="#666">Insurance</text>
      </svg>
    ),
  },
  {
    name: 'Niva Bupa',
    textColor: '#00838F',
    logo: (
      <svg viewBox="0 0 140 36" fill="none" className="w-[140px] h-[36px]">
        <circle cx="14" cy="18" r="13" fill="#00838F"/>
        <path d="M9 18h10M14 13v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <text x="32" y="16" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="12" fill="#00838F">Niva</text>
        <text x="32" y="29" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="12" fill="#00838F">Bupa</text>
      </svg>
    ),
  },
  {
    name: 'Aditya Birla',
    textColor: '#C41E3A',
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="w-[160px] h-[36px]">
        <rect x="0" y="2" width="8" height="32" fill="#C41E3A"/>
        <rect x="10" y="2" width="4" height="32" fill="#F4A100"/>
        <rect x="16" y="2" width="8" height="32" fill="#C41E3A"/>
        <text x="30" y="15" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="10" fill="#333">Aditya Birla</text>
        <text x="30" y="28" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="#C41E3A">HEALTH</text>
      </svg>
    ),
  },
]

export default function Insurance() {
  const [ref, isInView] = useInView(0.05)

  return (
    <section id="insurance" className="py-24 sm:py-32 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-semibold tracking-[0.2em] uppercase block mb-3"
          >
            We Accept
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Insurance & TPA <span className="text-gradient">Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Cashless treatment available for all major insurance providers. We also
            offer EMI options for self-pay patients.
          </motion.p>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              className="group flex items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>

        {/* Cashless badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand/5 border border-brand/10 rounded-full">
            <ShieldCheck size={20} className="text-brand" />
            <span className="text-sm font-medium text-gray-700">
              100% Cashless treatment available at our facility
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
