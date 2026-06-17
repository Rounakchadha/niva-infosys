import { motion } from 'framer-motion'
import Reveal from './Reveal'

const brands = [
 { name: 'Hikvision', category: 'CCTV & Surveillance', logo: '/brands/hikvision.svg' },
 { name: 'CP Plus', category: 'Security Cameras', logo: '/brands/cpplus.png' },
 { name: 'Dahua', category: 'Video Surveillance', logo: '/brands/dahua.svg' },
 { name: 'Honeywell', category: 'Fire & Security', logo: '/brands/honeywell.svg' },
 { name: 'Godrej', category: 'Access Control', logo: '/brands/godrej.svg' },
 { name: 'TP-Link', category: 'Networking', logo: '/brands/tplink.svg' },
 { name: 'Uniview', category: 'IP Cameras', logo: '/brands/uniview.png' },
 { name: 'Bosch', category: 'Security Systems', logo: '/brands/bosch.svg' },
]

export default function Brands() {
 const row1 = [...brands, ...brands]
 const row2 = [...[...brands].reverse(), ...[...brands].reverse()]

 return (
 <section className="py-32 bg-[#F0F2F5] dark:bg-[#050505] transition-colors duration-500 relative z-20 border-t border-black/5 dark:border-white/5 overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
 <Reveal className="text-center max-w-2xl mx-auto">
 <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
 Brands We Work With
 </p>
 <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white mb-6 tracking-tighter">
 ONLY GENUINE <span className="text-zinc-500 dark:text-zinc-600">PRODUCTS.</span>
 </h2>
 </Reveal>
 </div>

 <div className="flex flex-col gap-6 sm:gap-8 pause-marquee relative">
 <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#F0F2F5] dark:from-[#050505] to-transparent z-10 pointer-events-none transition-colors duration-500" />
 <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#F0F2F5] dark:from-[#050505] to-transparent z-10 pointer-events-none transition-colors duration-500" />

 {/* Row 1 */}
 <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
 <div className="flex gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
 {row1.map((b, i) => (
 <div key={`r1a-${i}`} className="w-[200px] h-[100px] sm:w-[300px] sm:h-[150px] bg-white dark:bg-[#0a0a0a] rounded-2xl sm:rounded-[2rem] border border-black/5 dark:border-white/5 flex items-center justify-center p-6 sm:p-8 group shadow-sm dark:shadow-none transition-all duration-300 hover:scale-105 cursor-pointer hover:z-20 relative">
 <img src={b.logo} alt={b.name} className="max-w-full max-h-full object-contain transition-transform duration-500" />
 </div>
 ))}
 </div>
 <div className="flex gap-6 sm:gap-8 px-3 sm:px-4 shrink-0" aria-hidden="true">
 {row1.map((b, i) => (
 <div key={`r1b-${i}`} className="w-[200px] h-[100px] sm:w-[300px] sm:h-[150px] bg-white dark:bg-[#0a0a0a] rounded-2xl sm:rounded-[2rem] border border-black/5 dark:border-white/5 flex items-center justify-center p-6 sm:p-8 group shadow-sm dark:shadow-none transition-all duration-300 hover:scale-105 cursor-pointer hover:z-20 relative">
 <img src={b.logo} alt={b.name} className="max-w-full max-h-full object-contain transition-transform duration-500" />
 </div>
 ))}
 </div>
 </div>

 {/* Row 2 (Reverse) */}
 <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
 <div className="flex gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
 {row2.map((b, i) => (
 <div key={`r2a-${i}`} className="w-[200px] h-[100px] sm:w-[300px] sm:h-[150px] bg-white dark:bg-[#0a0a0a] rounded-2xl sm:rounded-[2rem] border border-black/5 dark:border-white/5 flex items-center justify-center p-6 sm:p-8 group shadow-sm dark:shadow-none transition-all duration-300 hover:scale-105 cursor-pointer hover:z-20 relative">
 <img src={b.logo} alt={b.name} className="max-w-full max-h-full object-contain transition-transform duration-500" />
 </div>
 ))}
 </div>
 <div className="flex gap-6 sm:gap-8 px-3 sm:px-4 shrink-0" aria-hidden="true">
 {row2.map((b, i) => (
 <div key={`r2b-${i}`} className="w-[200px] h-[100px] sm:w-[300px] sm:h-[150px] bg-white dark:bg-[#0a0a0a] rounded-2xl sm:rounded-[2rem] border border-black/5 dark:border-white/5 flex items-center justify-center p-6 sm:p-8 group shadow-sm dark:shadow-none transition-all duration-300 hover:scale-105 cursor-pointer hover:z-20 relative">
 <img src={b.logo} alt={b.name} className="max-w-full max-h-full object-contain transition-transform duration-500" />
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 )
}
