import { motion } from 'framer-motion'
import { Leaf, Heart, Truck, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-stone-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic">
              Our <span className="text-amber-400">Story</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Born from a passion for perfect brews and warm conversations. We source the finest beans from South Indian farms and bake fresh every morning.
            </p>
            <p className="text-gray-400 text-lg mb-8">
              Whether you're catching up with friends, working remotely, or enjoying a quiet moment alone - our cozy space is your home away from home.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Leaf className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-bold">Ethically Sourced</h4>
                  <p className="text-gray-400 text-sm">Direct from farms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-bold">Made with Love</h4>
                  <p className="text-gray-400 text-sm">Freshly brewed daily</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-bold">Free Delivery</h4>
                  <p className="text-gray-400 text-sm">On orders above ₹300</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h4 className="font-bold">Open 12 Hours</h4>
                  <p className="text-gray-400 text-sm">10:30 AM - 10:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative">
              <img src="/about-cafe.jpg" alt="Our Cafe" className="rounded-3xl w-full h-96 object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white rounded-2xl p-6">
                <p className="text-3xl font-bold">126+</p>
                <p className="text-sm">Happy Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
