import { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
 { end: 19, suffix: '+', label: 'Years Experience' },
 { end: 1000, suffix: '+', label: 'Systems Deployed' },
 { end: 500, suffix: '+', label: 'Enterprises Secured' },
]

function AnimatedCounter({ end, suffix }) {
 const ref = useRef(null)
 const inView = useInView(ref, { once: false, margin: "-100px" })

 useEffect(() => {
 if (inView) {
 const controls = animate(0, end, {
 duration: 2,
 ease: [0.16, 1, 0.3, 1],
 onUpdate(value) {
 if (ref.current) {
 ref.current.textContent = Math.floor(value) + suffix
 }
 }
 })
 return () => controls.stop()
 } else {
 if (ref.current) ref.current.textContent = "0" + suffix
 }
 }, [inView, end, suffix])

 return <span ref={ref} className="text-6xl sm:text-8xl md:text-[8rem] font-black tracking-tighter text-black dark:text-white leading-none" />
}

export default function Stats() {
 return (
 <section className="py-20 md:py-32 bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 relative z-20 border-t border-black/5 dark:border-white/5">
 <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
 
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: false, margin: "-100px" }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="mb-20 max-w-3xl"
 >
 <h2 className="text-3xl md:text-5xl font-medium text-zinc-600 dark:text-zinc-300 leading-tight tracking-tight">
 We don't just secure buildings. <br/>
 <span className="text-black dark:text-white font-bold">We secure peace of mind.</span>
 </h2>
 </motion.div>

 <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
 {stats.map((stat, i) => (
 <div key={stat.label} className="flex flex-col border-t border-black/10 dark:border-white/10 pt-8 w-full">
 <AnimatedCounter end={stat.end} suffix={stat.suffix} />
 <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] mt-4 text-xs">{stat.label}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 )
}
