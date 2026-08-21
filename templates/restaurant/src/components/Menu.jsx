import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = ['Starters', 'Mains', 'Desserts', 'Drinks']

const menuItems = {
  Starters: [
    { name: 'Bruschetta Trio', desc: 'Tomato basil, mushroom, roasted pepper', price: '₹550', tag: "Chef's Pick" },
    { name: 'Caesar Salad', desc: 'Romaine, parmesan, croutons, house dressing', price: '₹480' },
    { name: 'Soup of the Day', desc: "Ask your server for today's selection", price: '₹380' },
    { name: 'Crispy Calamari', desc: 'Lightly fried, served with aioli', price: '₹620' },
  ],
  Mains: [
    { name: 'Truffle Risotto', desc: 'Arborio rice, black truffle, aged parmesan', price: '₹1,200', tag: 'Signature' },
    { name: 'Grilled Salmon', desc: 'Wild-caught, lemon butter, seasonal veg', price: '₹1,800' },
    { name: 'Wagyu Tenderloin', desc: 'A5 wagyu, red wine jus, truffle mash', price: '₹3,500', tag: 'Premium' },
    { name: 'Mushroom Ravioli', desc: 'Handmade pasta, sage butter, pine nuts', price: '₹980' },
  ],
  Desserts: [
    { name: 'Crème Brûlée', desc: 'Madagascar vanilla, caramelized sugar', price: '₹480', tag: 'Classic' },
    { name: 'Chocolate Fondant', desc: 'Dark chocolate, molten center, vanilla ice cream', price: '₹580' },
    { name: 'Tiramisu', desc: 'Classic Italian, mascarpone, espresso', price: '₹520' },
  ],
  Drinks: [
    { name: 'Signature Cocktail', desc: 'Ask about our seasonal creation', price: '₹650', tag: 'New' },
    { name: 'Wine Selection', desc: 'Red, white, or sparkling — ask your sommelier', price: '₹800' },
    { name: 'Fresh Pressed Juice', desc: 'Orange, apple, or mixed berry', price: '₹320' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('Starters')
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      gsap.from('.menu-tabs', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-32 sm:py-40 bg-surface-elevated relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/[0.02] -skew-x-12 origin-top-right" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="menu-header mb-16">
          <span className="text-brand text-xs font-medium tracking-[0.4em] uppercase block mb-4">
            Our Menu
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
            Crafted with{' '}
            <span className="italic text-brand">Passion</span>
          </h2>
        </div>

        <div className="menu-tabs flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 border ${
                active === cat
                  ? 'bg-brand text-surface border-brand'
                  : 'bg-transparent text-white/40 border-white/10 hover:border-brand/30 hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {menuItems[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative mb-px ${i % 2 === 0 ? 'lg:mr-24' : 'lg:ml-24'}`}
              >
                <div className="flex items-start justify-between gap-6 p-8 sm:p-10 bg-surface hover:bg-surface-hover border border-white/5 hover:border-brand/10 transition-all duration-700">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-brand transition-colors duration-500">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase bg-brand/10 text-brand border border-brand/20">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-white/30 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-brand font-bold text-2xl">{item.price}</span>
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-brand group-hover:bg-brand transition-all duration-500">
                      <span className="text-white group-hover:text-surface transition-colors text-lg">+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 text-center">
          <p className="text-white/20 text-sm italic mb-6">
            Menu prices are inclusive of all taxes. Prices subject to change.
          </p>
          <a
            href="#reservation"
            className="inline-flex items-center gap-3 text-brand text-sm font-medium tracking-[0.15em] uppercase hover:gap-5 transition-all duration-500"
          >
            Reserve your table
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
