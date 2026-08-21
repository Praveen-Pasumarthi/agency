import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ArrowRight, Loader2 } from 'lucide-react'

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'General Medicine', 'Ophthalmology', 'General Surgery', 'Emergency']

// Replace with client's email — submissions go straight to their inbox
// No signup needed: https://formsubmit.co
const FORM_ENDPOINT = 'https://formsubmit.co/yourgmail@gmail.com'

export default function Appointment() {
  const [ref, isInView] = useInView(0.05)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', department: '', date: '', time: '', message: '' })

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
      // Honeypot field — bots fill this, humans don't see it
      formData.append('_gotcha', '')

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Submission failed')

      setSubmitted(true)
      setForm({ name: '', phone: '', email: '', department: '', date: '', time: '', message: '' })
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="appointment" className="relative py-24 sm:py-32 bg-white">
      {/* Full-bleed accent stripe */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100">
          {/* Left — info panel with dark bg */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy p-10 sm:p-12 text-white flex flex-col justify-between"
          >
            <div>
              <span className="text-brand-light text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
                Book a Visit
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Your health
                <br />
                journey starts <span className="italic text-brand-light">here</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                Schedule your visit in minutes. Our team will confirm your appointment
                within 2 hours via phone or email.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-brand-light" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-brand-light" />
                <span className="text-gray-300">info@medcare.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-brand-light" />
                <span className="text-gray-300">Mon-Sat: 8AM - 10PM</span>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-emergency rounded-full animate-pulse" />
                  Emergency? Call 1800-XXX-XXX (24/7)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-10 sm:p-12"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-500">We'll confirm your appointment within 2 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 text-brand font-medium hover:underline"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from humans, bots fill it */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
                  className="absolute opacity-0 pointer-events-none" style={{ position: 'absolute', left: '-9999px' }}
                  aria-hidden="true" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm"
                        placeholder="John Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm"
                        placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm"
                      placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Department *</label>
                  <select name="department" required value={form.department} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm">
                    <option value="">Select department</option>
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Date *</label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="date" name="date" required value={form.date} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Time *</label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="time" name="time" required value={form.time} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message (Optional)</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-gray-400" />
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none text-sm"
                      placeholder="Describe your symptoms or concerns..." />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-emergency bg-emergency/5 rounded-xl px-4 py-3">{error}</p>
                )}

                <button type="submit" disabled={loading}
                  className="group w-full flex items-center justify-center gap-2 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Appointment
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
