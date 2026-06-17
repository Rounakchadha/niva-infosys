import { motion } from 'framer-motion'

export default function Contact() {
 return (
 <section className="bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 overflow-hidden min-h-screen pb-32">
 <div className="pt-44 pb-12 px-6 max-w-[1400px] mx-auto">
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4"
 >
 Get in Touch
 </motion.p>
 <motion.h1 
 initial={{ opacity: 0, y: 50 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black leading-[0.85] tracking-tighter text-black dark:text-white uppercase mb-20 md:mb-32"
 >
 SAY <span className="text-zinc-400 dark:text-zinc-600">HELLO.</span>
 </motion.h1>

 <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
 {/* Info Side */}
 <div className="flex flex-col gap-12 sm:gap-16">
 <div className="flex flex-col">
 <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Email</span>
 <a href="mailto:info@nivainfosys.com" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors">info@nivainfosys.com</a>
 </div>
 <div className="flex flex-col">
 <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Call / WhatsApp</span>
 <a href="tel:+918043865962" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white hover:text-[#25D366] transition-colors">+91 80438 65962</a>
 </div>
 <div className="flex flex-col">
 <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Location</span>
 <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight tracking-tight">
 2/200, Vishwas Khand,<br/>
 Gomti Nagar, Lucknow<br/>
 226010
 </p>
 </div>
 </div>

 {/* Map Side */}
 <div className="w-full bg-white dark:bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl relative aspect-square sm:aspect-auto sm:h-full min-h-[400px] lg:min-h-[600px] group">
 <iframe
 src="https://maps.google.com/maps?q=Niva%20Infosys%20Gomti%20Nagar%20Lucknow&t=&z=16&ie=UTF8&iwloc=&output=embed"
 width="100%"
 height="100%"
 style={{ border: 0 }}
 allowFullScreen=""
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 title="Niva Infosys Location Map"
 className="absolute inset-0 transition-all duration-700"
 />
 </div>
 </div>
 </div>
 </section>
 )
}
