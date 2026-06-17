import { projects } from '../data/projects'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectsTeaser() {
 const featured = projects.slice(0, 3)

 return (
 <section className="relative bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 pb-[20vh]">
 <div className="max-w-[1400px] mx-auto px-6 sm:px-12 pt-32 mb-[10vh] flex flex-col md:flex-row md:items-end justify-between gap-8">
 <div>
 <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
 Case Studies
 </p>
 <h2 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter leading-none">
 WORK THAT <span className="text-zinc-600">SPEAKS</span><br/>
 FOR ITSELF.
 </h2>
 </div>
 <Link
 to="/projects"
 className="btn-outline px-8 py-4 text-sm group shrink-0"
 >
 View All Projects
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col gap-0 pb-[10vh]">
 {featured.map((proj, i) => {
 // Stacking logic: each card sticks slightly lower than the previous
 const topOffset = 100 + i * 40

 return (
 <div 
 key={proj.title}
 className="sticky w-full h-[60vh] sm:h-[70vh] bg-white dark:bg-[#080808] rounded-t-3xl border-t border-x border-black/10 dark:border-white/10 overflow-hidden flex flex-col md:flex-row shadow-[0_-20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-all"
 style={{ top: `${topOffset}px`, zIndex: i + 10, marginTop: i === 0 ? '0' : '10vh' }}
 >
 {/* Project Info */}
 <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/10 dark:border-white/5">
 <span className="inline-block self-start bg-black/5 dark:bg-white/10 text-black dark:text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6 sm:mb-8">
 {proj.tag}
 </span>
 <h3 className="text-black dark:text-white font-black text-3xl sm:text-4xl mb-4 tracking-tighter">{proj.title}</h3>
 <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">{proj.desc}</p>
 </div>

 {/* Project Image */}
 <div className="w-full md:w-2/3 h-full relative overflow-hidden bg-[#F0F2F5] dark:bg-black flex flex-col items-center justify-center border-l border-black/10 dark:border-white/5">
 <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-all duration-500" />
 </div>
 </div>
 )
 })}
 </div>
 </section>
 )
}
