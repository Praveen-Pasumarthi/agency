import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react'

const FORM_ENDPOINT = 'https://formsubmit.co/yourgmail@gmail.com'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ childName: '', phone: '', date: '', package: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('_gotcha', '')

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Submission failed')

      setSubmitted(true)
      setForm({ childName: '', phone: '', date: '', package: '' })
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                COME PLAY <span className="text-yellow-300">WITH US!</span>
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Walk in for instant fun or book a birthday party for a memorable celebration.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-yellow-300" />
                  <span>+91 79899 37705</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-yellow-300" />
                  <span>2nd Floor, NH16, above Tata Motors, Maddilapalem, Vizag</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Daily: 11:00 AM - 9:00 PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+917989937705" className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-gray-100 text-center">
                  Call Now
                </a>
                <a href="https://wa.me/917989937705" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-green-600 text-center">
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-gray-800 text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Inquiry Sent!</h3>
                  <p className="text-gray-500">We&apos;ll contact you soon to plan the perfect party!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-gray-800">
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
                    style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />
                  <h3 className="text-2xl font-bold mb-6">Book a Birthday</h3>
                  <input type="text" name="childName" required value={form.childName} onChange={handleChange}
                    placeholder="Child&apos;s Name" className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="Parent&apos;s Phone" className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <input type="date" name="date" required value={form.date} onChange={handleChange}
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <select name="package" required value={form.package} onChange={handleChange}
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="">Select Package</option>
                    <option value="basic">Basic Party (10 kids)</option>
                    <option value="deluxe">Deluxe Party (20 kids)</option>
                    <option value="ultimate">Ultimate Party (30 kids)</option>
                  </select>
                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3 mb-4">{error}</p>
                  )}
                  <button type="submit" disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Inquiry'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
