import { motion } from 'framer-motion'
import { Coffee, Cake, Sandwich, IceCream } from 'lucide-react'

const categories = [
  { icon: Coffee, name: 'Coffee', items: [
    { name: 'Espresso', price: '₹120' },
    { name: 'Cappuccino', price: '₹150' },
    { name: 'Latte', price: '₹160' },
    { name: 'Cold Brew', price: '₹180' },
    { name: 'Filter Coffee', price: '₹100' },
  ]},
  { icon: Cake, name: 'Bakes', items: [
    { name: 'Croissant', price: '₹80' },
    { name: 'Chocolate Brownie', price: '₹120' },
    { name: 'Cheesecake', price: '₹150' },
    { name: 'Muffin', price: '₹60' },
    { name: 'Cinnamon Roll', price: '₹90' },
  ]},
  { icon: Sandwich, name: 'Snacks', items: [
    { name: 'Club Sandwich', price: '₹140' },
    { name: 'Paneer Tikka Wrap', price: '₹120' },
    { name: 'French Fries', price: '₹80' },
    { name: 'Garlic Bread', price: '₹90' },
    { name: 'Pizza Slice', price: '₹100' },
  ]},
  { icon: IceCream, name: 'Desserts', items: [
    { name: 'Waffle', price: '₹130' },
    { name: 'Ice Cream Sundae', price: '₹150' },
    { name: 'Tiramisu', price: '₹160' },
    { name: 'Chocolate Mousse', price: '₹140' },
    { name: 'Fruit Parfait', price: '₹120' },
  ]},
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-4 bg-stone-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 italic">
            OUR <span className="text-amber-400">MENU</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handcrafted drinks and freshly baked delights to brighten your day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <cat.icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold">{cat.name}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center justify-between">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-amber-400 font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
