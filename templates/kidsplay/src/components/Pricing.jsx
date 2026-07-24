import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Toddler', price: '₹150', desc: 'Ages 1-3', features: ['1 Hour Play', 'Soft Play Area', 'Supervised Zone', 'Parent Access'], popular: false },
  { name: 'Explorer', price: '₹300', desc: 'Ages 4-10', features: ['2 Hours Play', 'All Play Zones', 'Arcade Games (5 tokens)', 'Free Snack'], popular: true },
  { name: 'Party Pack', price: '₹1500', desc: 'Up to 10 kids', features: ['3 Hours Play', 'All Zones Access', 'Private Party Room', 'Pizza + Juice', 'Cake Cutting', 'Return Gifts'], popular: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            AFFORDABLE <span className="text-orange-500">FUN</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Budget-friendly pricing for endless smiles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-orange-500 text-white scale-105 shadow-xl' : 'bg-white border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>{plan.desc}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className={`h-5 w-5 ${plan.popular ? 'text-yellow-300' : 'text-orange-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-bold transition-all ${plan.popular ? 'bg-white text-orange-500 hover:bg-gray-100' : 'bg-orange-500 text-white hover:bg-orange-600'}`}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
