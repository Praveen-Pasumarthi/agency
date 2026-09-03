import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'dots-mascot',
    number: '01',
    title: 'Dots — Mascot Design',
    category: 'BRANDING',
    services: ['Character Design', 'Visual Identity', 'Graphic Design'],
    about: 'Mascot character design for dotnekt — creating expressive, playful brand identity with multiple poses and color variations. This project involved developing a cute, approachable character that could represent the brand across various media platforms.',
    image: 'https://images.unsplash.com/photo-1633355444132-695d5876cd00?w=1200&q=80',
  },
  {
    id: 'nks-gaming-1',
    number: '02',
    title: 'NKS Gaming — Thumbnail',
    category: 'YOUTUBE',
    services: ['Thumbnail Design', 'Typography', 'Visual Storytelling'],
    about: 'High-energy GTA gaming thumbnail design featuring bold typography and dynamic character compositions. Created to maximize click-through rates with eye-catching visuals and gaming culture aesthetics.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
  },
  {
    id: 'kethu-chaos-live',
    number: '03',
    title: 'Kethu\'s Chaos — GTA 5 Live',
    category: 'STREAM OVERLAY',
    services: ['Overlay Design', 'Brand Identity', 'Stream Graphics'],
    about: 'Live stream thumbnail design with GTA V themed artwork and engagement-focused layout. Designed to stand out in crowded gaming content feeds with bold colors and dramatic imagery.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=1200&q=80',
  },
  {
    id: 'nks-gaming-2',
    number: '04',
    title: 'NKS Gaming — Thumbnail V2',
    category: 'YOUTUBE',
    services: ['Thumbnail Design', 'Color Grading', 'Composition'],
    about: 'Alternative gaming thumbnail design with vibrant colors and action-packed visual storytelling. Each thumbnail is crafted to convey the energy and excitement of the gaming content.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
  },
  {
    id: 'kethu-brand',
    number: '05',
    title: 'Kethu\'s Chaos — Brand',
    category: 'BRAND IDENTITY',
    services: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
    about: 'Gaming brand logo and identity design with dark, edgy aesthetic featuring hooded character motif. The brand identity captures the rebellious, high-energy spirit of gaming culture.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
  },
  {
    id: 'kethu-character',
    number: '06',
    title: 'Kethu\'s Chaos — Character',
    category: 'CHARACTER ART',
    services: ['Digital Illustration', 'Character Design', 'Art Direction'],
    about: 'Stylized character illustration with low-poly aesthetic, featuring tech-savvy gamer persona. This artwork combines modern digital art techniques with gaming culture iconography.',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=1200&q=80',
  },
]

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const currentIndex = projects.findIndex(p => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#ff6b35] hover:underline">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white transition-colors duration-300">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">
          DOT<span className="text-[#ff6b35]">NEKT</span>
        </Link>
        <Link
          to="/"
          className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <span className="text-lg leading-none">&mdash;</span> Back to Work
        </Link>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-16 pt-24 pb-12">
        {/* Left Side — Project Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:w-[40%] lg:pr-12 mb-10 lg:mb-0"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
            {project.number} / {project.category}
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mt-6 mb-8 tracking-tight">
            {project.title.split(' — ')[0]}
            {project.title.includes(' — ') && (
              <>
                <br />
                <span className="text-gray-500">{project.title.split(' — ')[1]}</span>
              </>
            )}
          </h1>

          <span className="text-xs tracking-[0.15em] uppercase text-gray-500 block mb-10">
            {project.services.join(' / ')}
          </span>

          <div className="mb-8">
            <h3 className="text-[#ff6b35] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              About
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm max-w-md">
              {project.about}
            </p>
          </div>

          <div>
            <h3 className="text-[#ff6b35] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Services
            </h3>
            <ul className="space-y-1">
              {project.services.map((service, i) => (
                <li key={i} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Side — Project Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="lg:w-[60%] flex justify-center"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/40 max-w-2xl w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Nav */}
      <div className="px-6 sm:px-10 lg:px-16 pb-10 flex justify-between items-center">
        <Link
          to={`/project/${prevProject.id}`}
          className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <span className="text-lg leading-none">&mdash;</span> Back to Work
        </Link>
        <Link
          to={`/project/${nextProject.id}`}
          className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          Next Project <span className="text-lg leading-none">/</span>
        </Link>
      </div>
    </div>
  )
}
