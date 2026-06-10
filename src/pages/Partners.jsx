import { ExternalLink } from 'lucide-react'
import Reveal from '../components/Reveal'

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
  return (
    <section className="py-32 pt-44 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Our Partners
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Brands We <span className="text-blue-500">Trust.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            We partner with globally trusted manufacturers to ensure every installation is reliable,
            genuine, and built to last.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(({ name, category, logo, website, desc }, i) => (
            <Reveal
              key={name}
              delay={(i % 3) * 100}
              className="bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 rounded-3xl p-8 card-hover transition-colors duration-300 flex flex-col"
            >
              <div className="w-full h-20 flex items-center justify-center mb-6 bg-white rounded-xl p-4">
                <img src={logo} alt={`${name} logo`} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-white font-bold text-lg mb-1">{name}</div>
              <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">{category}</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white text-sm font-semibold transition-colors group"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
