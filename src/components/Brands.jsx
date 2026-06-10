const brands = [
  { name: 'Hikvision', category: 'CCTV & Surveillance' },
  { name: 'CP Plus', category: 'Security Cameras' },
  { name: 'Dahua', category: 'Video Surveillance' },
  { name: 'Honeywell', category: 'Fire & Security' },
  { name: 'Godrej', category: 'Access Control' },
  { name: 'TP-Link', category: 'Networking' },
  { name: 'Uniview', category: 'IP Cameras' },
  { name: 'Bosch', category: 'Security Systems' },
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
          {brands.map(({ name, category }) => (
            <div
              key={name}
              className="bg-zinc-900/30 border border-white/5 hover:border-white/20 rounded-3xl px-6 py-8 flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white/40 text-sm font-bold uppercase tracking-widest">
                  {name.substring(0, 3)}
                </span>
              </div>
              <div className="text-white font-semibold text-base mb-1">{name}</div>
              <div className="text-zinc-500 text-xs">{category}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-600 text-xs mt-12 font-medium tracking-wide">
          * Replace placeholder boxes with actual brand logos
        </p>
      </div>
    </section>
  )
}
