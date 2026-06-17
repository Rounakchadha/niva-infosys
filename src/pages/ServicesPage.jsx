import { Smartphone, Cloud, Brain, Globe, Moon, ScanFace, ArrowRight, ShieldCheck, Lock, Camera } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: Smartphone,
    title: 'Mobile Access',
    desc: 'Zero-latency mobile feeds. Manage your security infrastructure from anywhere in the world.',
    colSpan: 'md:col-span-2 lg:col-span-8'
  },
  {
    icon: Cloud,
    title: 'Cloud Vault',
    desc: 'Encrypted, off-site footage storage ensuring data survival even during hardware tampering.',
    colSpan: 'md:col-span-2 lg:col-span-4'
  },
  {
    icon: Brain,
    title: 'AI Intelligence',
    desc: 'Deep-learning motion detection that completely eliminates false alarms from non-threats.',
    colSpan: 'md:col-span-1 lg:col-span-4'
  },
  {
    icon: ScanFace,
    title: 'Facial Recognition',
    desc: 'Frictionless access control. System instantly flags unrecognized individuals at any perimeter.',
    colSpan: 'md:col-span-1 lg:col-span-4'
  },
  {
    icon: Globe,
    title: 'Global Control',
    desc: 'A unified dashboard to monitor cameras, access logs, and system health across multiple properties simultaneously.',
    colSpan: 'md:col-span-2 lg:col-span-4'
  },
]

const process = [
  { num: '01', title: 'Audit', desc: 'We inspect the premises to identify blind spots and critical vulnerabilities.' },
  { num: '02', title: 'Design', desc: 'We architect a custom surveillance layout tailored precisely to your infrastructure.' },
  { num: '03', title: 'Deploy', desc: 'Our technicians execute the installation cleanly, with zero exposed wiring.' },
  { num: '04', title: 'Maintain', desc: 'We provide continuous AMC support to ensure the system never goes down.' }
]

export default function ServicesPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div className="bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      
      {/* 1. Minimalist Hero Section */}
      <section ref={heroRef} className="pt-44 pb-32 px-6 sm:px-12 border-b border-black/5 dark:border-white/5 relative">
        
        {/* Subtle Floating Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08] dark:opacity-[0.05]">
          <ScanFace className="absolute top-[15%] left-[10%] w-32 h-32 animate-pulse text-black dark:text-white" style={{ animationDuration: '4s' }} />
          <Cloud className="absolute bottom-[20%] right-[15%] w-40 h-40 animate-bounce text-black dark:text-white" style={{ animationDuration: '8s' }} />
          <Globe className="absolute top-[60%] left-[80%] w-24 h-24 animate-spin text-black dark:text-white" style={{ animationDuration: '30s' }} />
          <ShieldCheck className="absolute top-[40%] left-[25%] w-20 h-20 animate-pulse text-black dark:text-white" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <Lock className="absolute bottom-[30%] left-[40%] w-16 h-16 animate-bounce text-black dark:text-white" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <Camera className="absolute top-[20%] right-[30%] w-28 h-28 animate-pulse text-black dark:text-white" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div style={{ y: yText, opacity: opacityText }}>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              Capabilities
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
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-3xl text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed"
            >
              Advanced hardware seamlessly integrated with intelligent software to provide absolute peace of mind.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Clean Bento Grid */}
      <section className="py-32 px-6 sm:px-12 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter uppercase mb-6">
              Core Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {features.map((feat, i) => (
              <div 
                key={feat.title} 
                className={`${feat.colSpan} bg-[#F0F2F5] dark:bg-[#111] p-10 sm:p-14 rounded-[2rem] border border-black/5 dark:border-white/5 flex flex-col justify-between group hover:bg-[#EAEAEC] dark:hover:bg-[#1a1a1a] transition-colors duration-500`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black shadow-sm flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500">
                  <feat.icon className="w-8 h-8 text-black dark:text-white" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tighter mb-4 leading-none">
                    {feat.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Marquee Separator */}
      <div className="py-8 bg-black dark:bg-white overflow-hidden flex border-y border-white/10 dark:border-black/10">
        <motion.div 
          animate={{ x: [0, -1036] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center text-white dark:text-black">
              <span className="text-xl font-black uppercase tracking-widest mx-8">// ZERO DOWNTIME</span>
              <span className="text-xl font-black uppercase tracking-widest mx-8 text-zinc-500">// END-TO-END ENCRYPTION</span>
              <span className="text-xl font-black uppercase tracking-widest mx-8">// AI-POWERED SURVEILLANCE</span>
              <span className="text-xl font-black uppercase tracking-widest mx-8 text-zinc-500">// ABSOLUTE CONTROL</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. Minimalist Process List */}
      <section className="py-32 px-6 sm:px-12 bg-[#EAEAEC] dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter uppercase">
              The Protocol
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-6">
            {process.map((step) => (
              <div key={step.num} className="group border-t-2 border-black/10 dark:border-white/10 pt-8 cursor-pointer overflow-hidden relative">
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-6xl sm:text-8xl font-black text-black/5 dark:text-white/5 block mb-8 leading-none group-hover:text-black/10 dark:group-hover:text-white/10 transition-colors duration-300">{step.num}</span>
                  <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
                {/* Clean hover line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500 -mt-[2px]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stark CTA */}
      <section className="py-44 px-6 sm:px-12 bg-black dark:bg-white text-white dark:text-black text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-5xl sm:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
            SECURE YOUR<br/>
            <span className="text-zinc-500">INFRASTRUCTURE.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-4 bg-white dark:bg-black text-black dark:text-white px-10 py-5 text-xl font-bold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-300"
          >
            Start A Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}
