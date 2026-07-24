import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

const categories = ['Starters', 'Mains', 'Desserts', 'Drinks']

const menuItems = {
  Starters: [
    { name: 'Bruschetta Trio', desc: 'Tomato basil, mushroom, roasted pepper', price: '₹550' },
    { name: 'Caesar Salad', desc: 'Romaine, parmesan, croutons, house dressing', price: '₹480' },
    { name: 'Soup of the Day', desc: 'Ask your server for today\'s selection', price: '₹380' },
    { name: 'Crispy Calamari', desc: 'Lightly fried, served with aioli', price: '₹620' },
  ],
  Mains: [
    { name: 'Truffle Risotto', desc: 'Arborio rice, black truffle, aged parmesan', price: '₹1,200' },
    { name: 'Grilled Salmon', desc: 'Wild-caught, lemon butter, seasonal veg', price: '₹1,800' },
    { name: 'Wagyu Tenderloin', desc: 'A5 wagyu, red wine jus, truffle mash', price: '₹3,500' },
    { name: 'Mushroom Ravioli', desc: 'Handmade pasta, sage butter, pine nuts', price: '₹980' },
  ],
  Desserts: [
    { name: 'Crème Brûlée', desc: 'Madagascar vanilla, caramelized sugar', price: '₹480' },
    { name: 'Chocolate Fondant', desc: 'Dark chocolate, molten center, vanilla ice cream', price: '₹580' },
    { name: 'Tiramisu', desc: 'Classic Italian, mascarpone, espresso', price: '₹520' },
  ],
  Drinks: [
    { name: 'Signature Cocktail', desc: 'Ask about our seasonal creation', price: '₹650' },
    { name: 'Wine Selection', desc: 'Red, white, or sparkling — ask your sommelier', price: '₹800' },
    { name: 'Fresh Pressed Juice', desc: 'Orange, apple, or mixed berry', price: '₹320' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('Starters')
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="menu" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.3em] uppercase">
            Our Menu
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            Crafted with Passion
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                active === cat
                  ? 'bg-brand text-white shadow-lg shadow-brand/20'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-brand border border-gray-200 dark:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {menuItems[active].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="flex items-start justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800 last:border-0"
            >
              <div>
                <h3 className="text-lg font-semibold dark:text-white">{item.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
              <span className="text-brand font-bold text-lg whitespace-nowrap">{item.price}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
