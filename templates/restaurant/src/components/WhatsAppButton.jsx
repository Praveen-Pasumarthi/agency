import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '919876543210'
const DEFAULT_MESSAGE = 'Hi! I would like to make a reservation.'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
    </motion.a>
  )
}
