import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
 const containerRef = useRef(null)
 
 // The container is 200vh tall to allow scrolling while the sticky div stays pinned
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end start"]
 })

 // The huge text scales down and fades out
 const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7])
 const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
 const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

 return (
 <section ref={containerRef} className="relative h-[150vh] bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500">
 {/* Sticky wrapper */}
 <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
 
 {/* Subtle grid bg that fades out early */}
 <motion.div 
 style={{ opacity: bgOpacity }}
 className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),dark:linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none transition-colors duration-500"
 />

 <motion.div
 style={{ scale, opacity }}
 className="relative z-10 w-full max-w-[1400px] px-6 sm:px-12 flex flex-col items-center text-center pt-10"
 >
 <div className="overflow-hidden pb-4">
 <motion.h1 
 initial={{ y: "100%", opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-black dark:text-white"
 >
 WE SECURE<br/>WHAT MATTERS.
 </motion.h1>
 </div>
 
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-2xl max-w-2xl mt-8 tracking-tight font-medium"
 >
 End-to-end security and IT infrastructure. Built for modern enterprises.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
 className="mt-12 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none mx-auto"
 >
 <Link
 to="/contact"
 className="btn-blue w-full sm:w-[240px] py-4 text-sm"
 >
 Get Free Site Survey
 </Link>
 <a
 href="tel:+919999999999"
 className="btn-white w-full sm:w-[240px] py-4 text-sm"
 >
 Free Call
 </a>
 </motion.div>

 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 1, delay: 1 }}
 className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600"
 >
 <ArrowDown className="w-4 h-4 animate-bounce" />
 Scroll
 </motion.div>
 </motion.div>

 </div>
 </section>
 )
}
