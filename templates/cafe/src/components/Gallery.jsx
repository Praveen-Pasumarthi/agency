import { motion } from 'framer-motion'

const images = [
  '/gallery-coffee-1.jpg',
  '/gallery-coffee-2.jpg',
  '/gallery-coffee-3.jpg',
  '/gallery-coffee-4.jpg',
  '/gallery-coffee-5.jpg',
  '/gallery-coffee-6.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 italic">
            THE <span className="text-amber-400">VIBE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into our cozy space and handcrafted creations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden aspect-square">
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
