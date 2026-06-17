import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'

export default function AboutPreview() {
 const container = useRef(null)
 const { scrollYProgress } = useScroll({
 target: container,
 offset: ['start end', 'end start']
 })

 const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
 const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

 return (
 <section id="about" ref={container} className="py-32 sm:py-44 bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 relative z-20 border-t border-black/5 dark:border-white/5 overflow-hidden">
 <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
 <div className="grid lg:grid-cols-12 gap-16 items-center">
 
 {/* Typographic Left Side */}
 <div className="lg:col-span-7 flex flex-col justify-center">
 <Reveal>
 <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">
 About Niva Infosys
 </p>
 <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-black text-black dark:text-white leading-[0.85] tracking-tighter uppercase mb-12 sm:mb-20">
 WE<br/>
 DON'T<br/>
 PLAY<br/>
 <span className="text-zinc-400 dark:text-zinc-600">GAMES.</span>
 </h2>
 </Reveal>

 <Reveal delay={150}>
 <div className="pl-0 sm:pl-10 border-l-0 sm:border-l-4 border-black dark:border-white">
 <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black dark:text-white leading-tight tracking-tight mb-8 max-w-3xl">
 Listen, anyone can screw a camera into a wall. But what happens at 3 AM when the power cuts and someone is trying to bypass your server room? Yeah, exactly.
 </p>
 <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6">
 Since 2007, <strong className="text-black dark:text-white">Mr. Naveen Lulla</strong> and the Niva Infosys crew have been the obsessive nerds calculating blind spots in our sleep. We wire up systems that look like modern art and deploy AI that spots threats faster than you can blink.
 </p>
 <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-12">
 We don't just sell boxes of tech. We sell the absolute certainty that when you lock your doors, they stay locked. From cozy living rooms to massive 50-acre industrial plants, if it exists, we lock it down. No cheap cables, no shortcuts, no excuses. Just pure, unadulterated peace of mind.
 </p>
 <Link
 to="/about"
 className="group inline-flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tighter hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
 >
 Read Our Story
 <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
 <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
 </span>
 </Link>
 </div>
 </Reveal>
 </div>

 {/* Parallax Right Side */}
 <div className="lg:col-span-5 relative h-[500px] sm:h-[800px] mt-12 lg:mt-0">
 {/* Massive Number */}
 <motion.div 
 style={{ y: y1 }}
 className="absolute top-0 lg:top-10 right-0 text-[10rem] sm:text-[15rem] lg:text-[20rem] font-black text-black/5 dark:text-white/5 leading-none tracking-tighter select-none pointer-events-none"
 >
 19
 </motion.div>
 
 {/* Floating Image */}
 <motion.div 
 style={{ y: y2 }}
 className="absolute top-10 lg:top-1/4 left-0 w-full lg:w-[120%] aspect-[4/5] bg-white dark:bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] p-4 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-none border border-black/5 dark:border-white/5"
 >
 <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-black relative group">
 <img src="/owner.png" alt="Mr. Naveen Lulla" className="w-full h-full object-cover transition-all duration-700" />
 <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-white/90 dark:bg-black/90 backdrop-blur-md border border-black/10 dark:border-white/10 p-6 rounded-2xl">
 <h3 className="text-black dark:text-white font-black text-xl sm:text-2xl tracking-tighter">Mr. Naveen Lulla</h3>
 <p className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mt-1">Founder & CEO</p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 )
}
