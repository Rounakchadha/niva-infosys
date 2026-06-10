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
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Brands We Work With
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Only <span className="text-zinc-500">Genuine Products.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            We partner with globally trusted manufacturers to ensure quality and long-term reliability.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {brands.map(({ name, category, logo }, i) => (
            <Reveal
              key={name}
              delay={(i % 4) * 75}
              className="group bg-zinc-900/30 border border-white/5 hover:border-blue-500/20 hover:bg-zinc-900/50 rounded-3xl px-6 py-8 flex flex-col items-center text-center transition-all duration-300 card-hover h-full"
            >
              {/* Logo Area */}
              <div className="w-full h-20 flex items-center justify-center mb-6 bg-white rounded-xl p-4">
                <img src={logo} alt={`${name} logo`} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-white font-semibold text-base mb-1">{name}</div>
              <div className="text-zinc-500 text-xs">{category}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
