import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { useInView } from './useInView'

const plans = [
  {
    name: 'Starter',
    price: '999',
    period: '/month',
    desc: 'Perfect for beginners starting their fitness journey',
    features: ['Access to gym floor', 'Basic equipment usage', 'Locker room access', 'Free WiFi', '1 group class/week'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '1,999',
    period: '/month',
    desc: 'Most popular choice for serious fitness enthusiasts',
    features: ['Full gym access', 'All equipment + sauna', 'Unlimited group classes', '1 PT session/week', 'Nutrition guidance', 'Body assessment monthly'],
    popular: true,
  },
  {
    name: 'Elite',
    price: '3,999',
    period: '/month',
    desc: 'Premium experience with personalized training',
    features: ['Everything in Pro', '4 PT sessions/week', 'Custom diet plan', 'Recovery zone access', 'Priority booking', 'Guest passes (2/month)', 'Merchandise kit'],
    popular: false,
  },
]

export default function Membership() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="membership" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Membership
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            CHOOSE YOUR PLAN
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gray-900 dark:bg-brand text-white ring-2 ring-brand shadow-xl shadow-brand/10 scale-105'
                  : 'bg-gray-50 dark:bg-gray-800 dark:text-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Zap size={12} /> Most Popular
                </div>
              )}

              <h3 className={`font-[family-name:var(--font-heading)] text-2xl tracking-wider mb-2 ${
                plan.popular ? '' : 'dark:text-white'
              }`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                {plan.desc}
              </p>

              <div className="mb-8">
                <span className="text-sm">₹</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={plan.popular ? 'text-brand' : 'text-green-500'} />
                    <span className={plan.popular ? '' : 'dark:text-gray-300'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#trial"
                className={`block text-center py-3 rounded-full font-semibold text-sm tracking-wider uppercase transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-brand hover:bg-gray-100 shadow-lg'
                    : 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
