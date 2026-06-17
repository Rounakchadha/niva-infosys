import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const testimonials = [
 {
 name: 'Rajesh Sharma',
 role: 'Homeowner',
 image: 'https://i.pravatar.cc/150?img=11',
 text: "Niva Infosys installed 6 cameras at my house. The work was clean, quick, and the mobile app works perfectly. They didn't just sell us cameras, they built a reliable system we trust.",
 },
 {
 name: 'Priya Agarwal',
 role: 'Principal',
 image: 'https://i.pravatar.cc/150?img=5',
 text: "Our previous setup failed to meet our school's standard of safety. After Niva redesigned the site, it feels like we're presenting ourselves at the level we operate. A massive shift in security.",
 },
 {
 name: 'Amit Verma',
 role: 'Operations Head',
 image: 'https://i.pravatar.cc/150?img=8',
 text: "What I can say though is that the new surveillance system gets lots of trust, and our factory workers feel much safer. Niva handled the entire project professionally across 3 buildings.",
 },
 {
 name: 'Sunita Gupta',
 role: 'Clinic Owner',
 image: 'https://i.pravatar.cc/150?img=9',
 text: "We took an AMC contract. They visit regularly, maintain all our cameras, and respond instantly if something breaks. It has shifted the caliber of our daily operations.",
 },
]

export default function Testimonials() {
 const containerRef = useRef(null)
 const [currentIndex, setCurrentIndex] = useState(0)

 // Scroll to index
 const scrollTo = (index) => {
 if (!containerRef.current) return
 const container = containerRef.current
 const cardWidth = container.clientWidth
 container.scrollTo({
 left: index * cardWidth,
 behavior: 'smooth'
 })
 setCurrentIndex(index)
 }

 const scrollLeft = () => {
 if (currentIndex > 0) {
 scrollTo(currentIndex - 1)
 }
 }

 const scrollRight = () => {
 if (currentIndex < testimonials.length - 1) {
 scrollTo(currentIndex + 1)
 }
 }

 // Update index on manual scroll
 const handleScroll = () => {
 if (!containerRef.current) return
 const container = containerRef.current
 const index = Math.round(container.scrollLeft / container.clientWidth)
 setCurrentIndex(index)
 }

 return (
 <section className="py-24 sm:py-32 bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
 <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-16">
 <div className="flex flex-col">
 <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
 Client Feedback
 </p>
 <h2 className="text-4xl sm:text-5xl font-black text-black dark:text-white tracking-tighter uppercase">
 What They <span className="text-zinc-500 dark:text-zinc-600">Say.</span>
 </h2>
 </div>
 
 {/* Arrows */}
 <div className="flex items-center gap-4 shrink-0">
 <button 
 onClick={scrollLeft}
 disabled={currentIndex === 0}
 className="w-14 h-14 rounded-full bg-white dark:bg-[#0a0a0a] flex items-center justify-center text-black dark:text-white shadow-md border border-black/5 dark:border-white/5 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all"
 >
 <ArrowLeft className="w-6 h-6" />
 </button>
 <button 
 onClick={scrollRight}
 disabled={currentIndex === testimonials.length - 1}
 className="w-14 h-14 rounded-full bg-white dark:bg-[#0a0a0a] flex items-center justify-center text-black dark:text-white shadow-md border border-black/5 dark:border-white/5 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all"
 >
 <ArrowRight className="w-6 h-6" />
 </button>
 </div>
 </div>

 {/* Carousel Container */}
 <div 
 ref={containerRef}
 onScroll={handleScroll}
 className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
 >
 {testimonials.map((t, i) => (
 <div 
 key={i} 
 className="w-full shrink-0 snap-center pr-0 sm:pr-8"
 >
 <div className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-12 md:p-16 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-black/5 dark:border-white/5 h-full">
 <p className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-snug sm:leading-relaxed mb-12 sm:mb-20 italic">
 "{t.text}"
 </p>
 
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-6">
 <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover shadow-sm" />
 <div className="flex flex-col">
 <h4 className="text-black dark:text-white text-xl font-bold tracking-tight">{t.name}</h4>
 <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-medium">{t.role}</p>
 </div>
 </div>
 <button className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
 <Linkedin className="w-5 h-5" />
 </button>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Progress Indicators */}
 <div className="flex items-center justify-center gap-3 mt-12">
 {testimonials.map((_, i) => (
 <button
 key={i}
 onClick={() => scrollTo(i)}
 className={`h-2 rounded-full transition-all duration-500 ${
 currentIndex === i 
 ? 'w-12 bg-black dark:bg-white' 
 : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
 }`}
 />
 ))}
 </div>

 </div>
 </section>
 )
}
