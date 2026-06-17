import { CheckCircle2, Zap, ShieldAlert, EyeOff, Wrench } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const highlights = [
  '15+ Years of zero-compromise security',
  '500+ Strongholds built across the country',
  'Real human support when things go beep',
  'From single homes to massive retail chains',
]

const gallery = [
  { src: 'https://picsum.photos/1000/1200?random=30', alt: 'Niva Infosys field team on site' },
  { src: 'https://picsum.photos/1200/800?random=31', alt: 'Niva Infosys office and operations' },
  { src: 'https://picsum.photos/1000/1200?random=32', alt: 'Niva Infosys technicians at work' },
]

const coreValues = [
  {
    icon: Zap,
    title: 'Zero Cable Spaghetti',
    desc: "We wire things so beautifully, you'll want to frame your server rack. No messy loops, no duct tape, just pure engineering elegance."
  },
  {
    icon: ShieldAlert,
    title: 'We Hate False Alarms',
    desc: "If our system wakes you up at 3 AM, it better be a real threat, not a moth on the lens. We tune our AI to ignore the noise."
  },
  {
    icon: EyeOff,
    title: 'Ghost-Level Discretion',
    desc: "We install stealthily and respect your privacy. You won't even know we're there, until you need to check the tapes."
  },
  {
    icon: Wrench,
    title: 'Obsessive Support',
    desc: "We don't ghost you after installation. Our AMC team treats your hardware like their own children. We are just one call away."
  }
]

const timeline = [
  { year: '2007', title: 'The Toolbox & The Dream', desc: 'Mr. Naveen Lulla started with a single toolbox and a vision to rid Lucknow of terrible, pixelated security cameras.' },
  { year: '2012', title: 'Corporate Trust', desc: 'We signed our first major corporate clients, realizing that big businesses were desperate for security companies that actually picked up the phone.' },
  { year: '2018', title: 'The AI Revolution', desc: 'Integrated deep-learning cameras and smart facial recognition into our standard arsenal long before it was an industry buzzword.' },
  { year: '2024', title: '500+ Fortresses', desc: 'Today, we manage massive retail chain rollouts, industrial plants, and luxury homes with military-grade precision.' }
]

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  
  // Parallax effects for the gallery images
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <div className="bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="pt-44 pb-20 text-center px-6 relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          The Origin Story
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-black dark:text-white uppercase mb-12"
        >
          WE BUILD<br/>
          <span className="text-zinc-400 dark:text-zinc-600">FORTRESSES.</span>
        </motion.h1>

        {/* Marquee */}
        <div className="w-full overflow-hidden flex border-y border-black/10 dark:border-white/10 py-6 mt-12 bg-black dark:bg-white text-white dark:text-black">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-2xl sm:text-4xl font-black uppercase tracking-tighter px-8">
                NO BLIND SPOTS // MILITARY GRADE // ANTI-TAMPER // 24/7 WATCH // 
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Editorial Content / No Boring Boxes */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-12 py-24 sm:py-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white leading-none mb-12 tracking-tighter uppercase">
            No boring boxes.<br/>
            <span className="text-zinc-500 dark:text-zinc-600">Just peace of mind.</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 font-medium">
            Back in 2007, <strong className="text-black dark:text-white">Mr. Naveen Lulla</strong> realized most security systems were just expensive toys. He started Niva Infosys with one goal: make security that actually works.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
            We're not your typical corporate IT squad. We're the nerds who obsess over wire management, camera angles, and AI motion sensing so that you never have to. Whether it's your cozy living room or a massive 50-store retail chain, we treat every project like it's protecting our own.
          </p>
          <ul className="space-y-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-black dark:text-white font-bold text-lg tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Parallax Gallery (Desktop) */}
        <div ref={containerRef} className="relative h-[800px] hidden lg:block">
          <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-[55%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 z-20 group">
            <img src={gallery[0].src} alt={gallery[0].alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="absolute top-[25%] right-0 w-[50%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 z-10 group">
            <img src={gallery[1].src} alt={gallery[1].alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
          </motion.div>
          
          <motion.div style={{ y: y3 }} className="absolute bottom-10 left-[20%] w-[45%] aspect-[1/1] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 z-30 group">
            <img src={gallery[2].src} alt={gallery[2].alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
          </motion.div>
        </div>

        {/* Mobile Gallery Fallback */}
        <div className="lg:hidden grid gap-6">
          {gallery.map((g, i) => (
            <div key={i} className="rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 aspect-[4/3]">
              <img src={g.src} alt={g.alt} className="w-full h-full object-cover " />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-white dark:bg-[#0a0a0a] py-32 border-y border-black/5 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter uppercase">
              Our Unapologetic <br className="sm:hidden"/> <span className="text-blue-600">Core Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {coreValues.map((val) => (
              <div key={val.title} className="p-10 sm:p-12 rounded-[2rem] bg-[#F0F2F5] dark:bg-[#111] border border-black/5 dark:border-white/5 group hover:border-blue-500/30 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:text-blue-600 transition-all">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight mb-4">{val.title}</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline / The Journey */}
      <section className="py-32 bg-[#EAEAEC] dark:bg-[#050505]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter uppercase mb-6">
              The Journey So Far
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Rome wasn't built in a day. Neither was our security empire.</p>
          </div>
          
          <div className="space-y-12 sm:space-y-0 relative">
            {/* Vertical Line */}
            <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-1 bg-black/10 dark:bg-white/10 -translate-x-1/2 rounded-full"></div>

            {timeline.map((item, i) => (
              <div key={item.year} className={`flex flex-col sm:flex-row items-center justify-between w-full relative ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="hidden sm:flex absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-[#EAEAEC] dark:border-[#050505] z-10"></div>
                
                {/* Content Box */}
                <div className={`w-full sm:w-[45%] bg-white dark:bg-[#0a0a0a] p-8 sm:p-10 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-xl sm:-mt-10 ${i % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                  <span className="text-blue-600 font-black text-2xl sm:text-3xl tracking-tighter mb-2 block">{item.year}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Guarantee Section */}
      <section className="bg-black dark:bg-white text-white dark:text-black py-32 px-6 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
            Stop gambling with <span className="text-blue-500">cheap cameras.</span>
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-white/70 dark:text-black/70 mb-12">
            Let's lock your premises down the right way. No cutting corners.
          </p>
          <Link
            to="/contact"
            className="btn-blue px-10 py-5 text-lg sm:text-xl rounded-full"
          >
            Get A Free Security Audit
          </Link>
        </div>
      </section>

    </div>
  )
}
