import { CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import WhyChooseUs from '../components/WhyChooseUs'

const highlights = [
  'End-to-end design, supply & installation',
  'Genuine products from top global brands',
  'Dedicated AMC & after-sales support',
  'Serving homes, offices, schools & more',
]

const gallery = [
  { src: '/about/team1.jpg', alt: 'Niva Infosys field team on site' },
  { src: '/about/office1.jpg', alt: 'Niva Infosys office and operations' },
  { src: '/about/team2.jpg', alt: 'Niva Infosys technicians at work' },
]

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-44 pb-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-blue-600/5 blur-[150px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Securing Lucknow{' '}
              <span className="text-zinc-500">Since 2007.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Niva Infosys is a Lucknow-based Security, Surveillance & IT Infrastructure Solutions
              company built on trust, technical expertise, and local commitment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story + Owner */}
      <section className="py-32 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal className="relative order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[100px] pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden bg-zinc-900 aspect-[4/3] border border-white/5">
                <img
                  src="/owner.png"
                  alt="Mr. Naveen Lulla, Owner of Niva Infosys"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-5 rounded-2xl shadow-2xl">
                <div className="text-3xl font-extrabold tracking-tight">19+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mt-1">Years Built</div>
              </div>
            </Reveal>

            <Reveal delay={150} className="order-1 lg:order-2">
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Lucknow's Trusted Security &{' '}
                <span className="text-zinc-500">IT Partner.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-5">
                Founded by <strong className="text-white">Mr. Naveen Lulla</strong>, Niva Infosys has been
                delivering professional-grade security and IT infrastructure solutions across Lucknow since
                2007. What started as a small CCTV installation outfit has grown into a full-fledged
                security, fire safety, access control, and networking solutions provider trusted by
                homes, businesses, and institutions across the city.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-5">
                Mr. Lulla's hands-on approach and deep technical knowledge have shaped Niva Infosys into
                a company that values honest advice, genuine products, and long-term relationships over
                quick sales. Every project — whether a single home camera or a multi-floor enterprise
                network — receives the same attention to detail.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Today, our team of trained engineers and technicians handles design, supply, installation,
                and after-sales support end-to-end, backed by partnerships with leading global brands.
              </p>

              <ul className="space-y-4 relative">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              Behind the Scenes
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Our Team at <span className="text-blue-500">Work.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              A glimpse of the people and processes behind every Niva Infosys installation.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 3) * 100}
                className="rounded-3xl overflow-hidden border border-white/5 aspect-[4/3]"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  )
}
