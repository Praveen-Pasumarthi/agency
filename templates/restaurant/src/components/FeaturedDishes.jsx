import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const dishes = [
  {
    name: 'Truffle Risotto',
    description: 'Arborio rice, black truffle, aged parmesan, white wine reduction',
    price: '₹1,200',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80',
    tag: "Chef's Pick",
  },
  {
    name: 'Grilled Atlantic Salmon',
    description: 'Wild-caught salmon, lemon butter sauce, seasonal vegetables',
    price: '₹1,800',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    tag: 'Popular',
  },
  {
    name: 'Wagyu Beef Tenderloin',
    description: 'A5 wagyu, red wine jus, truffle mashed potatoes, asparagus',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a19388?w=800&q=80',
    tag: 'Premium',
  },
]

export default function FeaturedDishes() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dish-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 sm:py-40 bg-surface relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-20">
          <span className="text-brand text-xs font-medium tracking-[0.4em] uppercase block mb-4">
            Chef&apos;s Selection
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
            Featured{' '}
            <span className="italic text-brand">Dishes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          {dishes.map((dish, i) => {
            const layouts = [
              'lg:col-span-7 lg:row-span-2',
              'lg:col-span-5',
              'lg:col-span-5',
            ]
            const heights = [
              'aspect-[4/5] sm:aspect-[3/4]',
              'aspect-square',
              'aspect-square',
            ]
            return (
              <motion.div
                key={dish.name}
                className={`dish-item group relative overflow-hidden cursor-pointer ${layouts[i]}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`relative ${heights[i]} overflow-hidden`}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase bg-brand/20 text-brand border border-brand/30 backdrop-blur-sm">
                      {dish.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white mb-2">
                          {dish.name}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                          {dish.description}
                        </p>
                      </div>
                      <span className="text-brand font-bold text-xl sm:text-2xl shrink-0">
                        {dish.price}
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-brand/0 group-hover:border-brand/20 transition-colors duration-700" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
