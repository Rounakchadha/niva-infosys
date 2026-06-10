import { Camera, Flame, Fingerprint, Wifi, Wrench, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Camera,
    title: 'CCTV Solutions',
    desc: 'IP, Dome, Bullet, PTZ & Night Vision cameras with mobile monitoring and cloud recording.',
    items: ['IP Cameras', 'Dome & Bullet Cameras', 'PTZ Cameras', 'Night Vision', 'Mobile Monitoring'],
    image: '/services/cctv.jpg',
  },
  {
    icon: Flame,
    title: 'Fire & Safety Systems',
    desc: 'Comprehensive fire detection and emergency alert infrastructure to protect lives and assets.',
    items: ['Fire Alarm Systems', 'Smoke Detectors', 'Emergency Alerts'],
    image: '/services/fire.jpg',
  },
  {
    icon: Fingerprint,
    title: 'Access Control',
    desc: 'Secure and manage entry to your premises with biometrics and video door solutions.',
    items: ['Biometric Attendance', 'Door Access Control', 'Video Door Phones'],
    image: '/services/access.jpg',
  },
  {
    icon: Wifi,
    title: 'Networking & IT',
    desc: 'Professional LAN, WiFi, and server room infrastructure for seamless connectivity.',
    items: ['LAN Setup', 'WiFi Infrastructure', 'Server Room Setup', 'Office Networking'],
    image: '/services/networking.jpg',
  },
  {
    icon: Wrench,
    title: 'AMC & Maintenance',
    desc: 'Annual contracts, health checks, and emergency repairs to keep your systems running 24/7.',
    items: ['Annual Maintenance', 'CCTV Health Checks', 'Emergency Repairs', 'Installation Support'],
    image: '/services/amc.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Complete Security & IT Solutions.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            From surveillance to networking, we deliver end-to-end solutions tailored to your property
            and budget.
          </p>
        </Reveal>

        {/* Cards Carousel */}
        <div className="relative flex overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Edge fades for smooth scroll disappearance */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee py-4">
            {/* First Set */}
            <div className="flex gap-4 sm:gap-6 px-3">
              {services.map((svc) => (
                <div
                  key={`set1-${svc.title}`}
                  className="w-[280px] sm:w-[380px] shrink-0 group relative bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 rounded-3xl card-hover cursor-default overflow-hidden transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-105 group-hover:bg-blue-600/20">
                      <svc.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    </div>
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 sm:mb-3 tracking-tight">{svc.title}</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{svc.desc}</p>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-zinc-500 text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 flex items-center gap-2 text-blue-500 text-sm font-semibold transition-colors opacity-80 group-hover:opacity-100 group-hover:text-blue-400">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex gap-4 sm:gap-6 px-3" aria-hidden="true">
              {services.map((svc) => (
                <div
                  key={`set2-${svc.title}`}
                  className="w-[280px] sm:w-[380px] shrink-0 group relative bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 rounded-3xl card-hover cursor-default overflow-hidden transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-105 group-hover:bg-blue-600/20">
                      <svc.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    </div>
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 sm:mb-3 tracking-tight">{svc.title}</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{svc.desc}</p>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-zinc-500 text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 flex items-center gap-2 text-blue-500 text-sm font-semibold transition-colors opacity-80 group-hover:opacity-100 group-hover:text-blue-400">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0%, 15% { transform: translateX(0); }
            20%, 35% { transform: translateX(-10%); }
            40%, 55% { transform: translateX(-20%); }
            60%, 75% { transform: translateX(-30%); }
            80%, 95% { transform: translateX(-40%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  )
}
