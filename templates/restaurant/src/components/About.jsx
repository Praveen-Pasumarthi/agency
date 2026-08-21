import { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 sm:py-40 bg-surface relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="about-image relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
                alt="Chef preparing dish"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:right-8 bg-surface-elevated border border-white/5 p-6 sm:p-8">
              <p className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold text-brand">7+</p>
              <p className="text-white/40 text-sm tracking-wider uppercase mt-1">Years of Excellence</p>
            </div>
          </div>

          <div className="about-content">
            <span className="text-brand text-xs font-medium tracking-[0.4em] uppercase block mb-6">
              Our Story
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              A Culinary{' '}
              <span className="italic text-brand">Journey</span>
            </h2>
            <div className="space-y-6 text-white/40 leading-relaxed">
              <p>
                Founded in 2018, La Maison was born from a passion for creating
                extraordinary dining experiences. Our chef brings decades of
                international expertise to every plate.
              </p>
              <p>
                We source the finest ingredients from local farms and global
                markets, ensuring each dish tells a story of quality and
                craftsmanship.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="font-[family-name:var(--font-heading)] text-2xl italic text-brand/80">Chef Arjun</p>
              <p className="text-white/30 text-sm tracking-wider uppercase mt-1">Executive Chef</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
