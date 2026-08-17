import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

const categories = ['Starters', 'Main Course', 'Biryani', 'Breads', 'Desserts']

const menuItems = {
  Starters: [
    { name: 'Chicken Tangdi Kebab', desc: 'Succulent chicken legs marinated in spices, tandoor-grilled', price: '₹260' },
    { name: 'Tandoori Chicken', desc: 'Classic marinated chicken roasted in clay oven', price: '₹280' },
    { name: 'Chicken Lollipop', desc: 'Crispy fried chicken wings with Indo-Chinese flavors', price: '₹220' },
    { name: 'Chicken Majestic', desc: 'Spicy deep-fried chicken with aromatic herbs', price: '₹240' },
    { name: 'Gobi 65', desc: 'Crispy cauliflower florets in spicy batter', price: '₹160' },
    { name: 'Chilli Chicken', desc: 'Stir-fried chicken with bell peppers and sauces', price: '₹220' },
    { name: 'Chicken Manchurian', desc: 'Indo-Chinese chicken in tangy sauce', price: '₹220' },
    { name: 'Fish Tikka', desc: 'Marinated fish pieces grilled in tandoor', price: '₹300' },
    { name: 'Mutton Fry', desc: 'Spicy dry-fried mutton with curry leaves', price: '₹320' },
    { name: 'Paneer 65', desc: 'Crispy paneer in spicy yogurt batter', price: '₹200' },
  ],
  'Main Course': [
    { name: 'Butter Chicken', desc: 'Creamy tomato-based curry with tender chicken', price: '₹300' },
    { name: 'Chicken Curry', desc: 'Homestyle chicken curry with traditional spices', price: '₹260' },
    { name: 'Kadai Chicken', desc: 'Chicken cooked in kadai with bell peppers', price: '₹280' },
    { name: 'Andhra Chicken Curry', desc: 'Spicy Andhra-style chicken curry', price: '₹270' },
    { name: 'Mutton Rogan Josh', desc: 'Aromatic Kashmiri-style mutton curry', price: '₹360' },
    { name: 'Mutton Curry', desc: 'Classic mutton curry with rich gravy', price: '₹340' },
    { name: 'Paneer Butter Masala', desc: 'Rich and creamy paneer in tomato gravy', price: '₹240' },
    { name: 'Dal Tadka', desc: 'Yellow lentils tempered with cumin and garlic', price: '₹160' },
    { name: 'Egg Curry', desc: 'Boiled eggs in spiced onion-tomato gravy', price: '₹180' },
    { name: 'Fish Curry', desc: 'Fresh fish in tangy Andhra-style gravy', price: '₹300' },
  ],
  Biryani: [
    { name: 'MG Grand Special Chicken Biryani', desc: 'Chef\'s signature biryani with aromatic rice and tender chicken', price: '₹280' },
    { name: 'Chicken Fry Biryani', desc: 'Flavorful biryani topped with spicy chicken fry', price: '₹260' },
    { name: 'Chicken Lollipop Biryani', desc: 'Biryani served with crispy chicken lollipop', price: '₹300' },
    { name: 'MLA Biryani', desc: 'Rich biryani with boiled egg, raita, and salan', price: '₹280' },
    { name: 'Natukodi Biryani', desc: 'Traditional country chicken biryani', price: '₹300' },
    { name: 'MG Grand Special Mutton Biryani', desc: 'Premium mutton biryani with succulent pieces', price: '₹350' },
    { name: 'Mutton Fry Biryani', desc: 'Biryani layered with spicy mutton fry', price: '₹340' },
    { name: 'Vegetable Biryani', desc: 'Fragrant rice with garden-fresh vegetables', price: '₹200' },
    { name: 'Kadai Veg Biryani', desc: 'Veg biryani with kadai-style vegetables', price: '₹210' },
  ],
  Breads: [
    { name: 'Butter Naan', desc: 'Soft leavened bread brushed with butter', price: '₹60' },
    { name: 'Plain Naan', desc: 'Classic tandoori flatbread', price: '₹50' },
    { name: 'Phulka', desc: 'Soft whole wheat roti cooked on open flame', price: '₹30' },
    { name: 'Tandoori Roti', desc: 'Whole wheat bread baked in tandoor', price: '₹40' },
    { name: 'Butter Roti', desc: 'Tandoori roti topped with butter', price: '₹50' },
    { name: 'Kulcha', desc: 'Stuffed leavened bread from tandoor', price: '₹60' },
  ],
  Desserts: [
    { name: 'Vanilla Ice Cream', desc: 'Classic creamy vanilla ice cream', price: '₹80' },
    { name: 'Chocolate Ice Cream', desc: 'Rich chocolate flavored ice cream', price: '₹80' },
    { name: 'Butterscotch Ice Cream', desc: 'Creamy butterscotch with crunchy praline', price: '₹80' },
    { name: 'Pista Ice Cream', desc: 'Refreshing pistachio-flavored ice cream', price: '₹90' },
    { name: 'Vanilla Milkshake', desc: 'Thick and creamy vanilla milkshake', price: '₹100' },
    { name: 'Chocolate Milkshake', desc: 'Indulgent chocolate milkshake', price: '₹100' },
    { name: 'Mango Lassi', desc: 'Creamy yogurt blended with ripe mangoes', price: '₹90' },
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
