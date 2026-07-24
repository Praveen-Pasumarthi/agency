import { motion } from 'framer-motion'
import { Cake, Gift, Music, Camera, PartyPopper, Users } from 'lucide-react'

export default function Birthday() {
  return (
    <section id="birthday" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              MAGICAL <span className="text-orange-500">BIRTHDAYS</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Give your child the best birthday ever! We handle everything so you can enjoy the celebration.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Cake, title: 'Custom Cakes', desc: 'Themed cakes available' },
                { icon: Gift, title: 'Return Gifts', desc: 'Goodie bags for all kids' },
                { icon: Music, title: 'DJ & Games', desc: 'Music and party games' },
                { icon: Camera, title: 'Photo Coverage', desc: 'Capture every moment' },
                { icon: PartyPopper, title: 'Decorations', desc: 'Themed party decor' },
                { icon: Users, title: 'Party Host', desc: 'Dedicated event host' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all">
              Book Birthday Party
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
              <img src="/birthday-party.jpg" alt="Birthday Party" className="rounded-2xl w-full h-80 object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-orange-500">500+</p>
                <p className="text-gray-500 text-sm">Happy Birthdays</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
