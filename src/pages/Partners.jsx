import { ExternalLink } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const partners = [
 {
 name: 'Hikvision',
 category: 'CCTV & Surveillance',
 logo: '/brands/hikvision.svg',
 website: 'https://www.hikvision.com',
 desc: 'A global leader in video surveillance, supplying the IP and HD cameras, NVRs, and AI-powered analytics behind most of our CCTV installations.',
 },
 {
 name: 'CP Plus',
 category: 'Security Cameras',
 logo: '/brands/cpplus.png',
 website: 'https://www.cpplusworld.com',
 desc: "India's most popular surveillance brand, offering reliable and affordable camera systems ideal for homes, shops, and small offices.",
 },
 {
 name: 'Dahua',
 category: 'Video Surveillance',
 logo: '/brands/dahua.svg',
 website: 'https://www.dahuasecurity.com',
 desc: 'A leading manufacturer of video surveillance products and smart IoT solutions, used in our larger commercial and industrial deployments.',
 },
 {
 name: 'Honeywell',
 category: 'Fire & Security',
 logo: '/brands/honeywell.svg',
 website: 'https://www.honeywell.com',
 desc: 'A trusted name in fire alarm panels, smoke detectors, and emergency safety systems for institutional and commercial properties.',
 },
 {
 name: 'Godrej',
 category: 'Access Control',
 logo: '/brands/godrej.svg',
 website: 'https://www.godrej.com',
 desc: "India's most recognised name in locks and security, supplying our biometric attendance systems and door access control solutions.",
 },
 {
 name: 'TP-Link',
 category: 'Networking',
 logo: '/brands/tplink.svg',
 website: 'https://www.tp-link.com',
 desc: 'Reliable routers, switches, and WiFi infrastructure that power the office networking and connectivity projects we deliver.',
 },
 {
 name: 'Uniview',
 category: 'IP Cameras',
 logo: '/brands/uniview.png',
 website: 'https://www.uniview.com',
 desc: 'A fast-growing global IP video surveillance brand offering excellent image quality and smart features at competitive pricing.',
 },
 {
 name: 'Bosch',
 category: 'Security Systems',
 logo: '/brands/bosch.svg',
 website: 'https://www.boschsecurity.com',
 desc: 'A premium German engineering brand for security and communication systems, used in our high-end enterprise and banking projects.',
 },
]

export default function Partners() {
 const container = useRef(null)
 const { scrollYProgress } = useScroll({
 target: container,
 offset: ['start start', 'end end']
 })

 return (
 <section className="bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 pb-32">
 <div className="pt-44 pb-12 text-center px-6">
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4"
 >
 Our Partners
 </motion.p>
 <motion.h1 
 initial={{ opacity: 0, y: 50 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black leading-[0.85] tracking-tighter text-black dark:text-white uppercase mb-8"
 >
 BRANDS WE<br/>
 <span className="text-zinc-400 dark:text-zinc-600">TRUST.</span>
 </motion.h1>
 </div>

 <div ref={container} className="relative mt-[10vh]" style={{ height: `${partners.length * 100}vh` }}>
 {partners.map((partner, i) => {
 const targetScale = 1 - ( (partners.length - i) * 0.05 );
 return (
 <Card 
 key={i} 
 i={i} 
 {...partner} 
 progress={scrollYProgress} 
 range={[i * 0.125, 1]} 
 targetScale={targetScale} 
 />
 )
 })}
 </div>
 </section>
 )
}

const Card = ({ i, name, category, logo, website, desc, progress, range, targetScale }) => {
 const container = useRef(null)
 
 const scale = useTransform(progress, range, [1, targetScale])
 
 return (
 <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-6">
 <motion.div 
 style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
 className="flex flex-col relative w-full max-w-[1200px] bg-white dark:bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-24 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-none border border-black/5 dark:border-white/5 origin-top"
 >
 <div className="flex flex-col-reverse md:flex-row gap-12 sm:gap-16 lg:gap-24 items-center h-full w-full">
 <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
 <div className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{category}</div>
 <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter m-0">{name}</h2>
 <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{desc}</p>
 <a
 href={website}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-black dark:text-white text-lg font-bold tracking-tight hover:text-blue-600 dark:hover:text-blue-500 transition-colors mt-4 w-max group"
 >
 Visit Website
 <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
 </a>
 </div>

 <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F0F2F5] dark:bg-white rounded-[2rem] p-8 md:p-16 aspect-[4/3] md:aspect-square group transition-colors duration-500 border border-black/5 dark:border-white/5">
 <img src={logo} alt={name} className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" />
 </div>
 </div>
 </motion.div>
 </div>
 )
}
