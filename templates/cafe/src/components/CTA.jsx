import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react'

const FORM_ENDPOINT = 'https://formsubmit.co/yourgmail@gmail.com'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: '' })

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
      setForm({ name: '', phone: '', date: '', guests: '' })
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

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
              {submitted ? (
                <div className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700/50 text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Table Reserved!</h3>
                  <p className="text-gray-400">We&apos;ll confirm your reservation shortly. See you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700/50">
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
                    style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />
                  <h3 className="text-2xl font-bold mb-6">Reserve a Table</h3>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your Name" className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="Phone Number" className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <input type="date" name="date" required value={form.date} onChange={handleChange}
                    className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <select name="guests" required value={form.guests} onChange={handleChange}
                    className="w-full bg-stone-700/50 rounded-xl px-4 py-3 mb-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="">Number of Guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3-4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                  {error && (
                    <p className="text-sm text-red-400 bg-red-900/20 rounded-xl px-4 py-3 mb-4">{error}</p>
                  )}
                  <button type="submit" disabled={loading}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Reserve Now'
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
