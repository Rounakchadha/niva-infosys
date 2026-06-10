import { Link } from 'react-router-dom'
import { Phone, ClipboardList, ShieldCheck, Wifi, Camera } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* React Bits style animated aurora/grid background */}
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <ShieldCheck className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-300 text-xs font-semibold tracking-wide uppercase">
              Trusted Security Partner Since 2007
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
            Securing Homes, Businesses
            <br />
            <span className="text-zinc-500">& Institutions.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto px-2 sm:px-0">
            CCTV, Fire Safety, Access Control, Networking & Surveillance Solutions in Lucknow.
            End-to-end installation, genuine products, reliable support.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full sm:w-[240px] py-4 rounded-full transition-colors"
            >
              <ClipboardList className="w-5 h-5" />
              Get Free Site Survey
            </Link>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold w-full sm:w-[240px] py-4 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" />
              Free Call
            </a>
          </div>

          {/* Floating feature pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
            {[
              { icon: Camera, label: 'CCTV Solutions' },
              { icon: ShieldCheck, label: 'Fire Safety' },
              { icon: Wifi, label: 'Networking' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-zinc-900/50 border border-white/5 rounded-full px-4 py-2 sm:px-5"
              >
                <Icon className="w-4 h-4 text-white" />
                <span className="text-zinc-300 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
