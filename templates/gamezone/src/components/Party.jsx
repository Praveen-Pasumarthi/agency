import { motion } from 'framer-motion'
import { Cake, Music, Gift, Camera } from 'lucide-react'

export default function Party() {
  return (
    <section id="party" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              HOST YOUR <span className="text-purple-500">EPIC PARTY</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Birthday parties, corporate events, or family celebrations. We make every moment unforgettable with games, food, and fun.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Cake className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Birthday Parties</h4>
                  <p className="text-gray-400 text-sm">Custom packages for all ages</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Music className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Corporate Events</h4>
                  <p className="text-gray-400 text-sm">Team building activities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <Gift className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Special Packages</h4>
                  <p className="text-gray-400 text-sm">Festival & holiday specials</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Camera className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Photo Booths</h4>
                  <p className="text-gray-400 text-sm">Capture your memories</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all">
              Book Your Party
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl p-8 border border-purple-500/30">
              <img src="/party-zone.jpg" alt="Party Zone" className="rounded-2xl w-full h-80 object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-gray-800 rounded-2xl p-4 border border-gray-700">
                <p className="text-2xl font-bold text-purple-400">500+</p>
                <p className="text-gray-400 text-sm">Parties Hosted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
