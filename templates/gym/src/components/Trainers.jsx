import { motion } from 'framer-motion'
import { useInView } from './useInView'

const trainers = [
  {
    name: 'Raj Malhotra',
    specialty: 'Strength & Conditioning',
    experience: '12 years',
    certifications: 'NSCA-CSCS, ACE',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=80',
  },
  {
    name: 'Ananya Desai',
    specialty: 'Yoga & Flexibility',
    experience: '8 years',
    certifications: 'RYT-500, ACE',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80',
  },
  {
    name: 'Vikram Singh',
    specialty: 'HIIT & Functional',
    experience: '10 years',
    certifications: 'ACE, Kettlebell Cert',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80',
  },
  {
    name: 'Priya Nair',
    specialty: 'Nutrition & Weight Loss',
    experience: '9 years',
    certifications: 'ISSN, ACE',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80',
  },
]

export default function Trainers() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="trainers" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Our Trainers
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            MEET THE TEAM
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/70 text-xs uppercase tracking-wider">{t.certifications}</p>
                </div>
              </div>
              <h3 className="font-bold text-lg dark:text-white">{t.name}</h3>
              <p className="text-brand font-semibold text-sm">{t.specialty}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{t.experience} experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
