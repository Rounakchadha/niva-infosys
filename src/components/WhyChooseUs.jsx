import { Users, Package, Headphones, Settings, MapPin, Wrench } from 'lucide-react'
import Reveal from './Reveal'

const reasons = [
  {
    icon: Users,
    title: 'Experienced Local Team',
    desc: 'Our engineers have hands-on expertise built over 19 years in the Lucknow region.',
  },
  {
    icon: Package,
    title: 'End-to-End Installation',
    desc: 'We handle everything — consultation, design, supply, installation, and handover.',
  },
  {
    icon: Settings,
    title: 'Genuine Products',
    desc: 'Only authorised hardware from top brands. No grey imports, no compromises.',
  },
  {
    icon: Headphones,
    title: 'Reliable After-Sales Support',
    desc: 'AMC contracts and emergency response so your system never goes unattended.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    desc: 'Every property is different. We design systems that fit your exact layout and budget.',
  },
  {
    icon: MapPin,
    title: 'Fast Service in Lucknow',
    desc: 'Local presence means quick dispatch, faster fixes, and no long wait times.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Why Niva Infosys
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            The Smarter Choice for{' '}
            <span className="text-zinc-500">Lucknow Security.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Here's why over 500 clients across Lucknow trust us with their security infrastructure.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 100} className="flex flex-col gap-5 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 card-hover">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-3 tracking-tight">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
