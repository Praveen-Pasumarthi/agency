import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-12 text-white">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80" alt="School campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/80"></div>
          <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                ENROLL YOUR CHILD <span className="text-yellow-300">TODAY!</span>
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Give your child the gift of quality education. Admissions now open for 2026-27 session.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-yellow-300" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-yellow-300" />
                  <span>info@sunshineprimary.edu</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-yellow-300" />
                  <span>123 Education Lane, Banjara Hills, Hyderabad</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Mon - Sat: 8:00 AM - 3:00 PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919876543210" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-gray-100 text-center">
                  Call Now
                </a>
                <a href="https://wa.me/919876543210" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-green-600 text-center">
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form className="bg-white rounded-2xl p-8 text-gray-800">
                <h3 className="text-2xl font-bold mb-6">Admission Inquiry</h3>
                <input type="text" placeholder="Child's Name" className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Parent's Phone" className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Class</option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                </select>
                <textarea placeholder="Message (optional)" rows="3" className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
