import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { useInView } from './useInView'

export default function CTA() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
              Get a premium website that attracts more customers. Free consultation, no obligation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:praveen.buildss@gmail.com"
                className="group px-8 py-4 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={18} />
                praveen.buildss@gmail.com
              </a>
              <a
                href="https://instagram.com/praveen.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                DM on Instagram
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="text-brand" />
                Online Worldwide
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Phone size={14} className="text-brand" />
                Quick Response
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <ArrowRight size={14} className="text-brand" />
                7-Day Delivery
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
