const brands = [
  {
    name: 'Hikvision',
    category: 'CCTV & Surveillance',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300">
        <text x="50%" y="28" textAnchor="middle" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">HIKVISION</text>
      </svg>
    )
  },
  {
    name: 'CP Plus',
    category: 'Security Cameras',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300">
        <text x="40%" y="28" textAnchor="middle" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">CP PLUS</text>
        <rect x="150" y="12" width="16" height="4" rx="1" className="fill-blue-500" />
        <rect x="156" y="6" width="4" height="16" rx="1" className="fill-blue-500" />
      </svg>
    )
  },
  {
    name: 'Dahua',
    category: 'Video Surveillance',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300">
        <text x="50%" y="28" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">dahua</text>
      </svg>
    )
  },
  {
    name: 'Honeywell',
    category: 'Fire & Security',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300">
        <text x="50%" y="28" textAnchor="middle" fontSize="22" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0">Honeywell</text>
      </svg>
    )
  },
  {
    name: 'Godrej',
    category: 'Access Control',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300">
        <text x="50%" y="28" textAnchor="middle" fontSize="24" fontWeight="700" fontFamily="'Georgia', serif" fontStyle="italic" letterSpacing="0.5">Godrej</text>
      </svg>
    )
  },
  {
    name: 'TP-Link',
    category: 'Networking',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="20" r="10" stroke="currentColor" strokeWidth="3" fill="none" className="stroke-blue-500 group-hover:stroke-blue-400 transition-colors duration-300" />
        <circle cx="45" cy="20" r="4" fill="currentColor" className="fill-blue-500 group-hover:fill-blue-400 transition-colors duration-300" />
        <text x="120" y="27" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="system-ui, sans-serif">tp-link</text>
      </svg>
    )
  },
  {
    name: 'Uniview',
    category: 'IP Cameras',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300">
        <text x="45%" y="28" textAnchor="middle" fontSize="24" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">UNV</text>
        <rect x="130" y="12" width="12" height="12" rx="2" className="fill-blue-500 group-hover:fill-blue-400 transition-colors duration-300" />
      </svg>
    )
  },
  {
    name: 'Bosch',
    category: 'Security Systems',
    logo: (
      <svg viewBox="0 0 200 40" className="w-36 h-8 fill-current text-zinc-500 group-hover:text-white transition-colors duration-300">
        <circle cx="35" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="35" y1="10" x2="35" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="20" x2="45" y2="20" stroke="currentColor" strokeWidth="2" />
        <text x="120" y="28" textAnchor="middle" fontSize="22" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1">BOSCH</text>
      </svg>
    )
  },
]

export default function Brands() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Brands We Work With
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Only <span className="text-zinc-500">Genuine Products.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            We partner with globally trusted manufacturers to ensure quality and long-term reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {brands.map(({ name, category, logo }) => (
            <div
              key={name}
              className="group bg-zinc-900/30 border border-white/5 hover:border-blue-500/20 hover:bg-zinc-900/50 rounded-3xl px-6 py-8 flex flex-col items-center text-center transition-all duration-300 card-hover h-full"
            >
              {/* Logo Area */}
              <div className="w-full h-16 flex items-center justify-center mb-6">
                {logo}
              </div>
              <div className="text-white font-semibold text-base mb-1">{name}</div>
              <div className="text-zinc-500 text-xs">{category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
