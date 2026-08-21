import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const info = [
  { icon: MapPin, label: 'Address', value: '123 Health Avenue, Medical District, Visakhapatnam - 530001' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, label: 'Email', value: 'info@medcare.com' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 8AM - 10PM | Sun: 9AM - 6PM' },
]

export default function Contact() {
  const [ref, isInView] = useInView(0.05)

  return (
    <section id="contact" className="py-24 sm:py-32 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-semibold tracking-[0.2em] uppercase block mb-3"
          >
            Reach Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            We're here to help. Reach out for appointments, emergencies, or general inquiries.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {info.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-0.5">{item.label}</div>
                    <div className="text-gray-900 font-medium">{item.value}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MedCare Hospital Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
