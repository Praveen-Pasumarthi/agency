import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, Users, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react'

const FORM_ENDPOINT = 'https://formsubmit.co/yourgmail@gmail.com'

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: '',
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: '' })
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', icon: Mail, required: true },
    { name: 'phone', label: 'Phone', type: 'tel', icon: Phone, required: true },
    { name: 'guests', label: 'Guests', type: 'select', icon: Users, required: true, options: [1,2,3,4,5,6,7,8,10,12] },
    { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
    { name: 'time', label: 'Time', type: 'select', icon: Clock, required: true, options: ['12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM'] },
    { name: 'occasion', label: 'Special Occasion', type: 'text', placeholder: 'Birthday, Anniversary...' },
    { name: 'notes', label: 'Special Requests', type: 'textarea', placeholder: 'Dietary restrictions, seating preference...' },
  ]

  return (
    <section id="reservation" className="py-32 sm:py-40 dark:bg-surface-elevated bg-surface-elevated-light relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Info */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand text-xs font-medium tracking-[0.4em] uppercase block mb-4">
                Reservations
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-bold dark:text-white text-black leading-[1.1] mb-6">
                Book Your{' '}
                <span className="italic text-brand">Table</span>
              </h2>
              <p className="dark:text-white/30 text-black/30 text-lg leading-relaxed mb-12">
                Reserve your spot for an unforgettable dining experience.
                We'll create a perfect evening for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 border border-brand/20 flex items-center justify-center shrink-0">
                  <Calendar className="text-brand" size={20} />
                </div>
                <div>
                  <p className="font-medium dark:text-white text-black">Open Every Day</p>
                  <p className="text-sm dark:text-white/30 text-black/30">Lunch: 12PM - 3PM | Dinner: 6PM - 11PM</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 border border-brand/20 flex items-center justify-center shrink-0">
                  <Phone className="text-brand" size={20} />
                </div>
                <div>
                  <p className="font-medium dark:text-white text-black">Call Us</p>
                  <p className="text-sm dark:text-white/30 text-black/30">+91 98765 43210</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
              <h3 className="font-[family-name:var(--font-heading)] text-4xl font-bold dark:text-white text-black mb-3">
                Reservation Confirmed!
              </h3>
              <p className="dark:text-white/30 text-black/30">
                We'll send a confirmation to your email shortly. See you soon!
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="dark:bg-surface bg-white dark:border-white/5 border-black/5 border p-8 sm:p-10"
            >
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
                style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />

              <div className="grid sm:grid-cols-2 gap-4">
                {fields.map((field, i) => {
                  const Icon = field.icon
                  const isFocused = focusedField === field.name
                  const hasValue = form[field.name]

                  const baseClasses = `w-full px-4 py-4 bg-transparent border dark:text-white text-black focus:outline-none transition-all duration-500 ${
                    isFocused
                      ? 'border-brand shadow-[0_0_20px_rgba(200,169,126,0.1)]'
                      : 'dark:border-white/10 border-black/10 hover:dark:border-white/20 hover:border-black/20'
                  }`

                  if (field.type === 'textarea') {
                    return (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        className="sm:col-span-2"
                      >
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          isFocused || hasValue ? 'top-2 text-xs text-brand' : 'top-4 text-sm dark:text-white/30 text-black/30'
                        }`}>
                          {field.label}
                        </label>
                        <textarea
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          rows={3}
                          placeholder=" "
                          className={`${baseClasses} resize-none pt-7`}
                        />
                      </motion.div>
                    )
                  }

                  if (field.type === 'select') {
                    return (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        className="relative"
                      >
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                          isFocused || hasValue ? 'top-2 text-xs text-brand' : 'top-4 text-sm dark:text-white/30 text-black/30'
                        }`}>
                          {Icon && <Icon size={14} className="inline mr-1.5" />}
                          {field.label}
                        </label>
                        <select
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          required={field.required}
                          className={`${baseClasses} appearance-none cursor-pointer pt-7`}
                        >
                          {field.options.map((opt) => (
                            <option key={opt} value={opt} className="dark:bg-surface bg-white">
                              {field.name === 'guests' ? `${opt} ${opt === 1 ? 'Guest' : 'Guests'}` : opt}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    )
                  }

                  return (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className="relative"
                    >
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                        isFocused || hasValue ? 'top-2 text-xs text-brand' : 'top-4 text-sm dark:text-white/30 text-black/30'
                      }`}>
                        {Icon && <Icon size={14} className="inline mr-1.5" />}
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required={field.required}
                        placeholder=" "
                        className={`${baseClasses} pt-7`}
                      />
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-8 text-center">
                {error && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 mb-4">{error}</p>
                )}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-5 bg-brand text-surface font-bold tracking-[0.15em] uppercase text-sm hover:bg-brand-dark transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Confirm Reservation'
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
