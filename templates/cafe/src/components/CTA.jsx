import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-stone-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-amber-900/50 to-stone-800/50 rounded-3xl p-12 border border-amber-700/30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic">
                VISIT <span className="text-amber-400">US</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Drop by for a cup of happiness. Dine-in, takeaway, or order online.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>+91 88667 78842</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>North Extension, Seethammadara, Vizag</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-amber-400" />
                  <span>Daily: 10:30 AM - 10:30 PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+918866778842" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all text-center">
                  Call Now
                </a>
                <a href="https://wa.me/918866778842" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all text-center">
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700/50">
                <h3 className="text-2xl font-bold mb-6">Reserve a Table</h3>
                <input type="text" placeholder="Your Name" className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <input type="date" className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <select className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Number of Guests</option>
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3-4 People</option>
                  <option>5+ People</option>
                </select>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold transition-all">
                  Reserve Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
