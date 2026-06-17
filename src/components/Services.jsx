import { Camera, Flame, Fingerprint, Wifi, Wrench } from 'lucide-react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const services = [
 {
 icon: Camera,
 title: 'Eye In The Sky',
 desc: 'We don\'t just install cameras. We install an omniscient, night-vision equipped, AI-powered spy network so you never miss a blink.',
 image: '/services/cctv.jpg',
 },
 {
 icon: Flame,
 title: 'Inferno Prevention',
 desc: 'Before the first wisp of smoke even thinks about ruining your day, our detection systems are already screaming for help.',
 image: '/services/fire.jpg',
 },
 {
 icon: Fingerprint,
 title: 'Biometric Fort Knox',
 desc: 'Turn your front door into a sci-fi movie. If their face or fingerprint isn\'t on the VIP list, they aren\'t getting in. Period.',
 image: '/services/access.jpg',
 },
 {
 icon: Wifi,
 title: 'God-Tier Networking',
 desc: 'No more dead zones. No more buffering. We wire up your infrastructure so fast and clean, your ISP will be jealous.',
 image: '/services/networking.jpg',
 },
 {
 icon: Wrench,
 title: 'The Fixers',
 desc: 'When tech throws a tantrum, we’re the squad that kicks the door down and fixes it. 24/7 AMC support. We got your back.',
 image: '/services/amc.jpg',
 },
]

export default function Services() {
 const targetRef = useRef(null)
 const { scrollYProgress } = useScroll({
 target: targetRef,
 })

 // Move horizontally as we scroll down the 300vh section
 const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

 return (
 <section ref={targetRef} className="relative h-[300vh] bg-[#F0F2F5] dark:bg-[#050505] transition-colors duration-500">
 <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
 
 {/* Header */}
 <div className="px-6 md:px-16 mb-16 w-full max-w-7xl">
 <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
 Our Arsenal
 </p>
 <h2 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter leading-none">
 WE BUILD IT.<br/>
 <span className="text-zinc-600">THEY CAN'T BREAK IT.</span>
 </h2>
 </div>

 {/* Horizontal scroll container */}
 <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16 w-max">
 {services.map((svc, i) => (
 <div
 key={svc.title}
 className="w-[300px] sm:w-[450px] shrink-0 bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden group hover:border-black/20 dark:hover:border-white/20 transition-colors shadow-sm dark:shadow-none"
 >
 <div className="aspect-[4/3] bg-[#EAEAEC] dark:bg-black relative overflow-hidden">
 <img 
 src={svc.image} 
 alt={svc.title} 
 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
 />
 <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
 </div>
 <div className="p-8">
 <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-black dark:text-white group-hover:scale-110 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all">
 <svc.icon className="w-5 h-5" />
 </div>
 <h3 className="text-black dark:text-white font-bold text-2xl mb-3 tracking-tight">{svc.title}</h3>
 <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{svc.desc}</p>
 </div>
 </div>
 ))}
 </motion.div>
 </div>
 </section>
 )
}
