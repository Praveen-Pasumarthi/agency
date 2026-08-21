import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Gourmet dish' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', alt: 'Grilled steak' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Pizza fresh from oven' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80', alt: 'Plated dessert' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', alt: 'Cocktail drinks' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.to('.gallery-track', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        x: -200,
        ease: 'none'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const openLightbox = (img, index) => {
    setSelected(img)
    setSelectedIndex(index)
  }

  const navigate = (dir) => {
    const newIndex = (selectedIndex + dir + images.length) % images.length
    setSelected(images[newIndex])
    setSelectedIndex(newIndex)
  }

  return (
    <section ref={sectionRef} className="py-32 sm:py-40 bg-surface relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="gallery-header flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <span className="text-brand text-xs font-medium tracking-[0.4em] uppercase block mb-4">
              Gallery
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
              A Feast for the{' '}
              <span className="italic text-brand">Eyes</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
              className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/40 hover:border-brand hover:text-brand transition-all duration-500"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
              className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/40 hover:border-brand hover:text-brand transition-all duration-500"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 sm:px-8 lg:px-12 pb-8 snap-x snap-mandatory"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="gallery-track flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[500px] snap-center cursor-pointer group"
            whileHover={{ y: -10 }}
            onClick={() => openLightbox(img, i)}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-white font-medium">{img.alt}</p>
              </div>
              <div className="absolute inset-0 border border-brand/0 group-hover:border-brand/20 transition-colors duration-700" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-surface/98 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:border-brand hover:text-brand transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:border-brand hover:text-brand transition-all z-10"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            <motion.img
              key={selected.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm tracking-wider">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
