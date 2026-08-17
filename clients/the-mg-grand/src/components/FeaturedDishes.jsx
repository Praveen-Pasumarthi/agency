import { motion } from 'framer-motion'
import { useInView } from './useInView'

const dishes = [
  {
    name: 'MG Grand Special Chicken Biryani',
    description: 'Chef\'s signature biryani with aromatic rice and tender chicken — our most popular dish',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
  },
  {
    name: 'Tandoori Chicken',
    description: 'Classic marinated chicken roasted in clay oven, smoky and succulent',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80',
  },
  {
    name: 'Chicken Majestic',
    description: 'Spicy deep-fried chicken with aromatic herbs, a house specialty',
    price: '₹240',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80',
  },
]

export default function FeaturedDishes() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="featured" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.3em] uppercase">
            Our Specialties
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            Featured Dishes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-brand font-bold text-xl">{dish.price}</span>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold dark:text-white mb-2">
                {dish.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {dish.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
