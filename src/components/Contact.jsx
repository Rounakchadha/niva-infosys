import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

const details = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 XXXXX XXXXX',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+919999999999',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@nivainfosys.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@nivainfosys.com',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Lucknow, Uttar Pradesh',
    sub: '226001 — Replace with full address',
    href: '#map',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9 AM – 7 PM',
    sub: 'Emergency support available',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Let's Talk About Your{' '}
            <span className="text-zinc-500">Security Needs.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Our team is ready to help. Reach out by phone, email, or walk in to our office in Lucknow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] pointer-events-none" />
            {details.map(({ icon: Icon, label, value, sub, href }) => {
              const Inner = (
                <div className="relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 rounded-3xl p-8 card-hover h-full transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">{label}</div>
                  <div className="text-white font-semibold text-base tracking-tight mb-1">{value}</div>
                  <div className="text-zinc-600 text-xs">{sub}</div>
                </div>
              )
              return href ? (
                <a key={label} href={href} className="block">{Inner}</a>
              ) : (
                <div key={label}>{Inner}</div>
              )
            })}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] font-bold rounded-2xl py-5 transition-colors mt-2"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Map placeholder */}
          <div
            id="map"
            className="bg-zinc-900/30 border border-white/5 rounded-3xl h-full min-h-[400px] flex flex-col items-center justify-center text-zinc-500"
          >
            <MapPin className="w-12 h-12 mb-4 opacity-30" />
            <span className="text-sm tracking-wide">Replace with Google Maps embed</span>
            <span className="text-xs mt-2 text-zinc-700">
              {'<iframe src="https://maps.google.com/..." />'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
