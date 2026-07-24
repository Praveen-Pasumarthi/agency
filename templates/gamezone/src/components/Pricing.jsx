import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Basic', price: '₹200', desc: 'Per person', features: ['10 Game Tokens', '30 Minutes Play', 'Access to Arcade'], popular: false },
  { name: 'Pro', price: '₹500', desc: 'Per person', features: ['25 Game Tokens', '1 Hour Play', 'All Arcade Games', '1 VR Session', 'Free Snack'], popular: true },
  { name: 'Party', price: '₹2000', desc: 'Up to 8 people', features: ['100 Game Tokens', '2 Hours Play', 'All Games Access', '4 VR Sessions', 'Pizza + Drinks', 'Private Area'], popular: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            PICK YOUR <span className="text-purple-500">POWER-UP</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Affordable pricing for endless fun. No hidden charges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-purple-600 border-2 border-purple-400 scale-105' : 'bg-gray-800/50 border border-gray-700/50'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.desc}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className={`h-5 w-5 ${plan.popular ? 'text-yellow-400' : 'text-purple-400'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-bold transition-all ${plan.popular ? 'bg-white text-purple-600 hover:bg-gray-100' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
