import { motion } from 'framer-motion'
import { Heart, Target, Eye } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              ABOUT OUR <span className="text-blue-600">SCHOOL</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Sunshine Primary School has been a beacon of quality education since 2010. We believe every child is unique and deserves a nurturing environment where they can discover their passions and build a strong foundation for life.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our experienced faculty uses modern teaching methods combined with traditional values to create well-rounded individuals who are ready for the challenges of tomorrow.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Heart, title: 'Values', desc: 'Character building' },
                { icon: Target, title: 'Excellence', desc: 'Academic rigor' },
                { icon: Eye, title: 'Vision', desc: 'Future-ready kids' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-3xl overflow-hidden h-96 relative">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" alt="School building" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white/80 text-lg font-display">EST. 2010</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="text-gray-500 text-sm">Pass Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
