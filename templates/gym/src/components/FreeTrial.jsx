import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, CheckCircle } from 'lucide-react'
import { useInView } from './useInView'

export default function FreeTrial() {
  const [ref, isInView] = useInView(0.1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="trial" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Free Trial
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            TRY US FOR FREE
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Experience IronForge with a complimentary 7-day pass. No commitment required.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
            <h3 className="font-[family-name:var(--font-heading)] text-4xl font-bold dark:text-white mb-3 tracking-wider">
              YOU'RE IN!
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Check your email for your free trial pass. See you at the gym!
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 sm:p-12"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                  />
                </div>
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
                    placeholder="you@email.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
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
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">Fitness Goal</label>
                <select
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
                >
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="fitness">General Fitness</option>
                  <option value="flexibility">Flexibility</option>
                </select>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-brand text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand/20"
              >
                Claim Free Trial
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
