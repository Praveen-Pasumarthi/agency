import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    text: "An absolute gem! The truffle risotto was the best I've ever had. The ambiance is perfect for a special evening out.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    name: 'Arjun Mehta',
    role: 'Regular Guest',
    text: 'We celebrate all our milestones here. The staff remembers our names and the wagyu never disappoints.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=68',
  },
  {
    name: 'Neha Kapoor',
    role: 'Event Planner',
    text: "I hosted a corporate dinner for 30 guests. Flawless service, stunning presentation, and guests couldn't stop raving.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=45',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-32 sm:py-40 dark:bg-surface bg-surface-light relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] dark:bg-brand/[0.03] bg-brand/[0.04] rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="testimonial-header text-center mb-20">
          <span className="text-brand text-xs font-medium tracking-[0.4em] uppercase block mb-4">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-bold dark:text-white text-black leading-[1.1]">
            What Our{' '}
            <span className="italic text-brand">Guests</span>{' '}
            Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              style={{ y: i === 1 ? y : 0 }}
              className={`testimonial-card relative group ${i === 1 ? 'md:-mt-12' : ''}`}
            >
              <div className="h-full dark:bg-surface-elevated bg-surface-elevated-light dark:border-white/5 border-black/5 p-8 sm:p-10 relative overflow-hidden hover:dark:border-brand/10 hover:border-brand/10 transition-all duration-700">
                {/* Decorative Quote */}
                <Quote className="absolute top-6 right-6 dark:text-brand/5 text-brand/10 group-hover:dark:text-brand/10 group-hover:text-brand/15 transition-colors duration-700" size={80} />

                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-brand text-brand" />
                  ))}
                </div>

                <p className="dark:text-white/50 text-black/50 leading-relaxed mb-8 text-lg italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand/20"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold dark:text-white text-black">{t.name}</p>
                    <p className="text-sm dark:text-white/30 text-black/30">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
