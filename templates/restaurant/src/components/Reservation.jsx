import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from 'lucide-react'
import { useInView } from './useInView'

export default function Reservation() {
  const [ref, isInView] = useInView(0.1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservations" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.3em] uppercase">
            Reservations
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            Book Your Table
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Reserve your spot for an unforgettable dining experience
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
            <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold dark:text-white mb-3">
              Reservation Confirmed!
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We&apos;ll send a confirmation to your email shortly. See you soon!
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-xl shadow-black/5 dark:shadow-black/20"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                  >
                    {[1,2,3,4,5,6,7,8,10,12].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                  >
                    <option value="">Select a time</option>
                    {['12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Special Occasion (optional)</label>
                <input
                  type="text"
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  placeholder="Birthday, Anniversary, etc."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Special Requests (optional)</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Dietary restrictions, seating preference, etc."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white resize-none"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-brand text-white font-semibold tracking-wide uppercase text-sm rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand/20"
              >
                Confirm Reservation
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
