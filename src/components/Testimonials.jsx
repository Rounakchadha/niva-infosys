import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Gomti Nagar',
    stars: 5,
    text: 'Niva Infosys installed 6 cameras at my house. The work was clean, quick, and the mobile app works perfectly. Very happy with the quality.',
  },
  {
    name: 'Priya Agarwal',
    role: 'Principal, City Public School',
    stars: 5,
    text: 'We needed a complete school-wide surveillance and biometric system. Naveen and his team delivered everything on time, within budget, and with great support afterwards.',
  },
  {
    name: 'Amit Verma',
    role: 'Operations Head, Manufacturing Plant',
    stars: 5,
    text: 'Our factory needed heavy-duty industrial cameras across 3 buildings. Niva Infosys handled the entire project professionally. Highly recommend them.',
  },
  {
    name: 'Sunita Gupta',
    role: 'Clinic Owner, Hazratganj',
    stars: 5,
    text: 'We took an AMC contract with Niva Infosys. They visit regularly, maintain all our cameras, and respond instantly if something breaks. Peace of mind guaranteed.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-white text-white" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Client Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Trusted by{' '}
            <span className="text-zinc-500">500+ Clients.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Don't take our word for it — here's what our clients across Lucknow say.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 100}
              className="bg-zinc-900/30 border border-white/5 rounded-3xl p-10 relative card-hover"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-8 right-8" />
              <Stars count={t.stars} />
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-base tracking-tight">{t.name}</div>
                  <div className="text-zinc-500 text-sm">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
