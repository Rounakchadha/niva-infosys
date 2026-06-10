import { Smartphone, Cloud, Brain, Globe, Moon, ScanFace } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Mobile Monitoring',
    desc: 'Watch live feeds from anywhere using your smartphone — 24/7 remote access.',
  },
  {
    icon: Cloud,
    title: 'Cloud Recording',
    desc: 'Secure off-site footage storage so recordings are safe even if hardware is tampered with.',
  },
  {
    icon: Brain,
    title: 'AI Motion Detection',
    desc: 'Smart alerts triggered only by genuine movement, reducing false alarms significantly.',
  },
  {
    icon: Globe,
    title: 'Remote Access',
    desc: 'Manage cameras, access logs, and system health from any browser or app.',
  },
  {
    icon: Moon,
    title: 'Night Vision',
    desc: 'Crystal-clear footage in complete darkness with advanced IR technology.',
  },
  {
    icon: ScanFace,
    title: 'Face Recognition-Ready',
    desc: "Systems pre-configured for AI face recognition integration when you're ready.",
  },
]

export default function SmartFeatures() {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Smart Technology
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Security That's{' '}
            <span className="text-zinc-500">Intelligent.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Modern surveillance goes beyond cameras. Our systems bring AI and cloud power to keep you
            always informed and protected.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 card-hover"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                <feat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3 tracking-tight">{feat.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
