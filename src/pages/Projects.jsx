import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Our Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Work That Speaks for{' '}
            <span className="text-blue-500">Itself.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            A look at some of the installations and systems we've delivered across Lucknow.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <Reveal
              key={proj.title}
              delay={(i % 3) * 100}
              className="bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 rounded-3xl overflow-hidden card-hover group transition-colors duration-300"
            >
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
