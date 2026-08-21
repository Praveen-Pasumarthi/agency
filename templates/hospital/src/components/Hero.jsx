import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, HeartPulse, ShieldCheck, Award } from 'lucide-react'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

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

  const titleWords = ['Your', 'Health,', 'Our', 'Priority']

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-white/60" />
      </motion.div>

      <div className="absolute top-20 left-8 lg:left-20 w-px h-32 bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
      <div className="absolute bottom-32 right-8 lg:right-20 w-px h-32 bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
      <div className="absolute top-1/2 left-8 lg:left-20 -translate-y-1/2 hidden lg:block">
        <p className="text-[10px] tracking-[0.4em] uppercase text-navy/30 [writing-mode:vertical-lr] rotate-180">
          Est. 2009 — Medical Excellence
        </p>
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-[1200px] mx-auto"
      >
        <div className="hero-line w-16 h-px bg-brand mx-auto mb-8 origin-center" />

        <h1 className="mb-8 perspective-[1000px] pb-4">
          {titleWords.map((word, wi) => (
            <span key={wi} className="inline-block">
              <span className="hero-title-word inline-block">
                {word.split('').map((char, ci) => (
                  <span
                    key={ci}
                    className="hero-title-char inline-block font-[family-name:var(--font-heading)] text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight"
                    style={{ color: wi === 3 ? 'var(--color-brand)' : 'var(--color-navy)' }}
                  >
                    {char}
                  </span>
                ))}
                {wi < titleWords.length - 1 && (
                  <span className="hero-title-char inline-block font-[family-name:var(--font-heading)] text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] text-navy/30 mx-3 sm:mx-5">
                    &nbsp;
                  </span>
                )}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-sub text-lg sm:text-xl text-gray-600 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          A team of 50+ specialists delivering advanced medical care
          with compassion. From routine checkups to complex surgeries.
        </p>

        <div className="hero-cta flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="#appointment"
            className="group inline-flex items-center gap-4 px-10 py-5 border border-brand/30 text-brand text-sm font-medium tracking-[0.2em] uppercase hover:bg-brand hover:text-white transition-all duration-700"
          >
            Book Appointment
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#departments"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-brand hover:text-brand transition-all duration-300"
          >
            Explore Departments
          </a>
        </div>

        <div className="hero-cta flex flex-wrap justify-center gap-6">
          {[
            { icon: HeartPulse, text: '10,000+ Patients Treated' },
            { icon: ShieldCheck, text: 'NABH Accredited' },
            { icon: Award, text: '15+ Years of Care' },
          ].map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-600">
                <Icon size={16} className="text-brand" />
                <span>{badge.text}</span>
              </div>
            )
          })}
        </div>
      </motion.div>

      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.3em] uppercase text-navy/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-brand/60 to-transparent"
        />
      </div>
    </section>
  )
}
