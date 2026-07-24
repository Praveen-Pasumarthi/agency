import { motion } from 'framer-motion'

const images = [
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
  '/gallery-4.jpg',
  '/gallery-5.jpg',
  '/gallery-6.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            THE <span className="text-purple-500">EXPERIENCE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A sneak peek into the fun that awaits you.
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
