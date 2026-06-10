import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Residential CCTV Setup',
    desc: '8-camera HD surveillance system with night vision for a housing society in Lucknow.',
    tag: 'Residential',
  },
  {
    title: 'Office Surveillance System',
    desc: '32-camera IP network covering all floors, parking, and server rooms for a corporate campus.',
    tag: 'Commercial',
  },
  {
    title: 'School Security Installation',
    desc: 'Perimeter cameras, biometric attendance, and video door phones for a 5-block school campus.',
    tag: 'Education',
  },
  {
    title: 'Industrial CCTV Network',
    desc: 'Heavy-duty PTZ cameras with central monitoring room setup for a manufacturing plant.',
    tag: 'Industrial',
  },
]

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              Our Projects
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Work That Speaks for{' '}
              <span className="text-blue-500">Itself.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 border border-blue-500/20 px-6 py-3 rounded-full text-sm font-semibold transition-colors group self-start md:self-auto">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 rounded-3xl overflow-hidden card-hover group transition-colors duration-300"
            >
              {/* Placeholder image */}
              <div className="bg-zinc-800/50 aspect-[16/9] flex flex-col items-center justify-center text-zinc-500 border-b border-white/5 relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />
                <span className="text-4xl mb-3 opacity-50 relative z-10">📷</span>
                <span className="text-xs tracking-wide relative z-10">Project Photo</span>
              </div>

              <div className="p-8">
                <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {proj.tag}
                </span>
                <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{proj.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
