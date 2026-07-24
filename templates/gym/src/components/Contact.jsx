import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useInView } from './useInView'

const info = [
  { icon: MapPin, label: 'Address', value: '15 MG Road, Bengaluru, Karnataka 560001' },
  { icon: Phone, label: 'Phone', value: '+91 80 2345 6789', href: 'tel:+918023456789' },
  { icon: Mail, label: 'Email', value: 'hello@ironforge.in', href: 'mailto:hello@ironforge.in' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sun: 5:00 AM – 11:00 PM' },
]

export default function Contact() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Contact
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            FIND US
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="text-brand" size={22} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-lg font-medium dark:text-white hover:text-brand transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20 h-80 lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.596!2d77.610!3d12.972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE5LjIiTiA3N8KwMzYnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
