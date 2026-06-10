import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data/projects'

const featured = projects.slice(0, 3)

export default function ProjectsTeaser() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              Our Projects
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Work That Speaks for{' '}
              <span className="text-blue-500">Itself.</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 border border-blue-500/20 px-6 py-3 rounded-full text-sm font-semibold transition-colors group self-start md:self-auto"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="relative flex overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee py-4">
            {[featured, featured].map((set, setIdx) => (
              <div className="flex gap-6 px-3" key={setIdx} aria-hidden={setIdx === 1}>
                {set.map((proj) => (
                  <div
                    key={`${setIdx}-${proj.title}`}
                    className="w-[320px] sm:w-[380px] shrink-0 bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 rounded-3xl overflow-hidden card-hover group transition-colors duration-300"
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
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0%, 15% { transform: translateX(0); }
            20%, 35% { transform: translateX(-10%); }
            40%, 55% { transform: translateX(-20%); }
            60%, 75% { transform: translateX(-30%); }
            80%, 95% { transform: translateX(-40%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 16s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  )
}
