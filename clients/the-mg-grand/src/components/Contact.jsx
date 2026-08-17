import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useInView } from './useInView'

const info = [
  { icon: MapPin, label: 'Address', value: 'S.V. Plaza, Gollapalle Ringroad, Old National Hwy, Madanapalle, Andhra Pradesh 517325' },
  { icon: Phone, label: 'Phone', value: '+91 98511 13311', href: 'tel:+919851113311' },
  { icon: Mail, label: 'Email', value: 'info@themggrand.in', href: 'mailto:info@themggrand.in' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sun: 11:00 AM – 10:30 PM' },
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
          <span className="text-brand text-sm font-medium tracking-[0.3em] uppercase">
            Contact Us
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            Visit Us Today
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
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

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20 h-80 lg:h-auto flex flex-col"
          >
            <iframe
              src="https://www.google.com/maps?q=The+MG+Grand+Premium+Multicuisine+Restaurant+Madanapalle+Andhra+Pradesh&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, flex: 1, minHeight: '320px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The MG Grand Location"
            />
            <a
              href="https://maps.app.goo.gl/PDxZ43trRcCPHmbk9"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 bg-brand text-white font-semibold text-sm tracking-wide uppercase hover:bg-brand-dark transition-colors"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
