import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import Reveal from '../components/Reveal'
import LeadForm from '../components/LeadForm'

const details = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 80438 65962',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+918043865962',
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
    value: '2/200, Vishwas Khand',
    sub: 'Gomti Nagar, Lucknow - 226010',
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
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-blue-600/5 blur-[150px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Let's Talk About Your{' '}
              <span className="text-zinc-500">Security Needs.</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
              Whether it's a single home camera or a full enterprise security network, our Lucknow-based
              team is ready to help. Reach out by phone, email, WhatsApp, or visit our office.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact details + Big Map */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact cards */}
            <Reveal className="grid sm:grid-cols-2 gap-6 relative content-start">
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
                href="https://wa.me/918043865962"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] font-bold rounded-2xl py-5 transition-colors mt-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>

              {/* Extra info */}
              <div className="sm:col-span-2 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 relative">
                <h3 className="text-white font-bold text-lg mb-4 tracking-tight">How to Reach Us</h3>
                <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                  <li>
                    <span className="text-white font-semibold">By Phone / WhatsApp:</span>{' '}
                    +91 80438 65962 — for quick queries, AMC support & emergency repairs.
                  </li>
                  <li>
                    <span className="text-white font-semibold">By Email:</span>{' '}
                    info@nivainfosys.com — for quotations, AMC contracts & business enquiries.
                  </li>
                  <li>
                    <span className="text-white font-semibold">In Person:</span>{' '}
                    Visit our office at 2/200, Vishwas Khand, Gomti Nagar, Lucknow - 226010, between
                    9 AM – 7 PM, Monday to Saturday.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Bigger Google Map */}
            <Reveal
              delay={150}
              id="map"
              className="bg-zinc-900/30 border border-white/5 rounded-3xl h-full min-h-[300px] lg:min-h-full overflow-hidden"
            >
              <iframe
                src="https://maps.google.com/maps?q=Niva%20Infosys%20Gomti%20Nagar%20Lucknow&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Niva Infosys Location Map"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <LeadForm />
    </>
  )
}
