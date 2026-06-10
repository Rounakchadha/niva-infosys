import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const highlights = [
  'End-to-end design, supply & installation',
  'Genuine products from top global brands',
  'Dedicated AMC & after-sales support',
  'Serving homes, offices, schools & more',
]

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Visual side */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[100px] pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 aspect-[4/3] border border-white/5">
              <img
                src="/owner.png"
                alt="Mr. Naveen Lulla, Owner of Niva Infosys"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-5 rounded-2xl shadow-2xl">
              <div className="text-3xl font-extrabold tracking-tight">19+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mt-1">Years Built</div>
            </div>
          </Reveal>

          {/* Content side */}
          <Reveal delay={150} className="order-1 lg:order-2">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              About Niva Infosys
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Lucknow's Trusted Security &{' '}
              <span className="text-zinc-500">IT Partner.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-5">
              Founded by <strong className="text-white">Mr. Naveen Lulla</strong>, Niva Infosys has been
              delivering professional-grade security and IT infrastructure solutions across Lucknow since
              2007. We combine deep technical expertise with local knowledge.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
              From single-camera home setups to large-scale enterprise surveillance networks, our team
              handles every project with precision and reliability.
            </p>

            <ul className="space-y-4 mb-10 relative">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-zinc-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 sm:py-3 rounded-full transition-colors group w-full sm:w-auto"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-4 sm:py-3 rounded-full transition-colors group w-full sm:w-auto"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
