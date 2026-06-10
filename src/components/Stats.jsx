import { Trophy, Camera, Users, Zap } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const stats = [
  { icon: Trophy, end: 19, suffix: '+', label: 'Years Experience', desc: 'Serving Lucknow since 2007' },
  { icon: Camera, end: 1000, suffix: '+', label: 'Cameras Installed', desc: 'Across homes & businesses' },
  { icon: Users, end: 500, suffix: '+', label: 'Clients Served', desc: 'Trusted across industries' },
  { icon: Zap, end: 24, suffix: '/7', label: 'Fast Support', desc: 'Emergency response ready' },
]

function AnimatedCounter({ end, suffix }) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // Only trigger once
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    let startTimestamp = null
    const duration = 2000 // 2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      // easeOutExpo easing function for smooth deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(step)
  }, [inView, end])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ icon: Icon, end, suffix, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:bg-white/10">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <AnimatedCounter end={end} suffix={suffix} />
              </div>
              <div className="text-zinc-300 font-semibold text-base mb-1">{label}</div>
              <div className="text-zinc-500 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
