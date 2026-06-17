import { projects } from '../data/projects'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Simple Counter Hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration])
  
  return count
}

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  
  // Asymmetrical scrolling for Masonry Grid
  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  const leftCol = projects.filter((_, i) => i % 2 === 0)
  const rightCol = projects.filter((_, i) => i % 2 !== 0)
  
  const siteCount = useCounter(542, 2500)
  const cameraCount = useCounter(12500, 3000)

  return (
    <div className="bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      
      {/* 1. Minimalist Hero Section */}
      <section className="pt-44 pb-32 border-b border-black/5 dark:border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-black dark:text-white uppercase mb-16"
          >
            PROVEN<br/>
            <span className="text-zinc-400 dark:text-zinc-600">SCALE.</span>
          </motion.h1>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 mt-16">
            <div className="text-center">
              <p className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-2">{siteCount}+</p>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Sites Secured</p>
            </div>
            <div className="hidden sm:block w-px h-24 bg-black/10 dark:bg-white/10"></div>
            <div className="text-center">
              <p className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-2">{cameraCount.toLocaleString()}+</p>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Cameras Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stark Quote Section */}
      <section className="py-32 px-6 bg-white dark:bg-[#0a0a0a] border-b border-black/5 dark:border-white/5">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-12 text-black dark:text-white">
            "They didn't just install cameras. They installed paranoia-free sleep."
          </h2>
          <p className="font-bold text-xl tracking-widest text-zinc-500">
            Operations Director, MaxMart Retail
          </p>
        </div>
      </section>

      {/* 3. The Masonry Grid */}
      <section className="py-32">
        <div className="text-center mb-24 px-6">
          <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter uppercase">
            Inside The <span className="text-zinc-500">Vault</span>
          </h2>
        </div>
        <div ref={containerRef} className="max-w-[1400px] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <motion.div style={{ y: yLeft }} className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            {leftCol.map(proj => <ProjectCard key={proj.title} proj={proj} />)}
          </motion.div>
          
          <motion.div style={{ y: yRight }} className="flex flex-col gap-8 md:gap-12 lg:gap-16 mt-0 md:mt-32">
            {rightCol.map(proj => <ProjectCard key={proj.title} proj={proj} />)}
          </motion.div>
        </div>
      </section>

      {/* 4. Final CTA Banner */}
      <section className="py-44 px-6 bg-black dark:bg-white text-white dark:text-black text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[800px] mx-auto">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-8">
            YOUR PROJECT<br/>IS NEXT.
          </h2>
          <p className="text-xl sm:text-2xl text-white/70 dark:text-black/70 mb-12 font-medium">
            Join the ranks of the secure. Let's start architecting your fortress.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-4 bg-white dark:bg-black text-black dark:text-white px-10 py-5 text-xl font-bold rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-300"
          >
            Let's Talk
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}

function ProjectCard({ proj }) {
  return (
    <div className="group block w-full overflow-hidden rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 cursor-pointer">
      <div className="w-full aspect-[4/5] sm:aspect-[1/1] overflow-hidden bg-[#F0F2F5] dark:bg-[#111] relative">
        <img 
          src={proj.image} 
          alt={proj.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
      </div>
      <div className="p-8 sm:p-10 bg-white dark:bg-[#0a0a0a]">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 block">{proj.tag}</span>
        <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-black dark:text-white mb-4 leading-none">{proj.title}</h3>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{proj.desc}</p>
      </div>
    </div>
  )
}
