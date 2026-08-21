import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.from('.hero-line', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power4.inOut'
      })
      .from('.hero-title-char', {
        opacity: 0,
        y: 120,
        rotateX: -90,
        stagger: 0.04,
        duration: 1.4,
        ease: 'power4.out'
      }, '-=0.6')
      .from('.hero-sub', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.hero-scroll', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.3')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const titleWords = ['Taste', 'the', 'Extraordinary']

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-surface/80" />
      </motion.div>

      <div className="absolute top-20 left-8 lg:left-20 w-px h-32 bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
      <div className="absolute bottom-32 right-8 lg:right-20 w-px h-32 bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
      <div className="absolute top-1/2 left-8 lg:left-20 -translate-y-1/2 hidden lg:block">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 [writing-mode:vertical-lr] rotate-180">
          Est. 2018 — Fine Dining
        </p>
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-[1200px] mx-auto"
      >
        <div className="hero-line w-16 h-px bg-brand mx-auto mb-8 origin-center" />

        <h1 ref={textRef} className="mb-8 perspective-[1000px]">
          {titleWords.map((word, wi) => (
            <span key={wi} className="inline-block overflow-hidden">
              <span className="hero-title-word inline-block">
                {word.split('').map((char, ci) => (
                  <span
                    key={ci}
                    className="hero-title-char inline-block font-[family-name:var(--font-heading)] text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight"
                    style={{ color: wi === 2 ? 'var(--color-brand)' : 'white' }}
                  >
                    {char}
                  </span>
                ))}
                {wi < titleWords.length - 1 && (
                  <span className="hero-title-char inline-block font-[family-name:var(--font-heading)] text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] text-white/30 mx-3 sm:mx-5">
                    &nbsp;
                  </span>
                )}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-sub text-lg sm:text-xl text-white/40 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Where culinary artistry meets timeless elegance.
          Every dish tells a story.
        </p>

        <div className="hero-cta">
          <a
            href="#reservation"
            className="group inline-flex items-center gap-4 px-10 py-5 border border-brand/30 text-brand text-sm font-medium tracking-[0.2em] uppercase hover:bg-brand hover:text-surface transition-all duration-700"
          >
            Reserve a Table
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
          </a>
        </div>
      </motion.div>

      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-brand/60 to-transparent"
        />
      </div>
    </section>
  )
}
