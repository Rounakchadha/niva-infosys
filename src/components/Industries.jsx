const industries = [
  { emoji: '🏠', label: 'Homes & Residences', desc: 'Apartment, villas, housing societies' },
  { emoji: '🏢', label: 'Corporate Offices', desc: 'IT parks, business centres' },
  { emoji: '🎓', label: 'Schools & Colleges', desc: 'Campus safety & attendance' },
  { emoji: '🏥', label: 'Hospitals', desc: 'Wards, corridors, parking lots' },
  { emoji: '🏭', label: 'Factories', desc: 'Industrial zones & warehouses' },
  { emoji: '🛒', label: 'Retail Stores', desc: 'Malls, shops, showrooms' },
  { emoji: '🏦', label: 'Banks & ATMs', desc: 'Secure financial premises' },
  { emoji: '🏨', label: 'Hotels', desc: 'Lobbies, rooms & perimeters' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Industries We Serve
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Protecting Every{' '}
            <span className="text-zinc-500">Kind of Property.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Our solutions are tailored to the specific security needs of every industry we operate in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map(({ emoji, label, desc }) => (
            <div
              key={label}
              className="bg-zinc-900/40 border border-white/5 hover:border-white/20 rounded-3xl p-6 text-center transition-all duration-300 cursor-default"
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <div className="text-white font-semibold text-sm mb-2">{label}</div>
              <div className="text-zinc-500 text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
