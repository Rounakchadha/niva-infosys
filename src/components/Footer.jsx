import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
 const year = new Date().getFullYear()

 return (
 <footer className="bg-[#EAEAEC] dark:bg-[#050505] transition-colors duration-500 border-t border-black/10 dark:border-white/5 pt-32 pb-8 relative z-20">
 <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
 {/* Massive Headline */}
 <div className="mb-24">
 <h2 className="text-[12vw] sm:text-[10vw] font-black leading-none tracking-tighter text-black dark:text-white uppercase">
 Let's Secure<br/>
 <span className="text-zinc-400 dark:text-zinc-700">Your Future.</span>
 </h2>
 </div>

 {/* Grid Info */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
 <div className="flex flex-col">
 <h4 className="text-black dark:text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Contact</h4>
 <a href="mailto:info@nivainfosys.com" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-2 font-medium">info@nivainfosys.com</a>
 <a href="tel:+918043865962" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors font-medium">+91 80438 65962</a>
 </div>

 <div className="flex flex-col">
 <h4 className="text-black dark:text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Location</h4>
 <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[200px] font-medium">
 2/200, Vishwas Khand, Gomti Nagar,<br/>Lucknow - 226010
 </p>
 </div>

 <div className="flex flex-col">
 <h4 className="text-black dark:text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Socials</h4>
 <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-2 font-medium">LinkedIn</a>
 <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors font-medium">Instagram</a>
 </div>

 <div className="flex flex-col">
 <h4 className="text-black dark:text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Ready?</h4>
 <Link to="/contact" className="btn-premium w-max px-8 py-4">
 Get Started
 </Link>
 </div>
 </div>

 {/* Bottom Bar */}
 <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-black/10 dark:border-white/5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
 <p className="mb-4 sm:mb-0">© {year} NIVA INFOSYS</p>
 <div className="flex items-center gap-6">
 <Link to="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms</Link>
 <Link to="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link>
 <p className="hidden sm:block">OWNED BY NAVEEN LULLA</p>
 </div>
 </div>
 </div>
 </footer>
 )
}
