import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useInView } from './useInView'

const images = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Gourmet dish' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', alt: 'Grilled steak' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Pizza fresh from oven' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80', alt: 'Plated dessert' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', alt: 'Cocktail drinks' },
  { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80', alt: 'Premium steak' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80', alt: 'Fresh salad' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80', alt: 'Breakfast spread' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [ref, isInView] = useInView(0.05)

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.3em] uppercase">
            Gallery
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mt-3 dark:text-white">
            A Feast for the Eyes
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide uppercase">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
