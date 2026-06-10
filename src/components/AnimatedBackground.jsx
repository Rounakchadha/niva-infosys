import { useState, useEffect } from 'react'

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to range -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Calculate subtle shift (e.g., max 30px movement)
  const shiftX = mousePos.x * -30
  const shiftY = mousePos.y * -30

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep dark background base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Parallax Wrapper */}
      <div 
        className="absolute inset-0 transition-transform duration-[400ms] ease-out"
        style={{ transform: `translate(${shiftX}px, ${shiftY}px)` }}
      >
        {/* Animated Aurora Orbs (Increased brightness) */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/30 rounded-full blur-[120px] mix-blend-screen" 
          style={{ animation: 'aurora 15s ease-in-out infinite alternate' }} 
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-500/25 rounded-full blur-[150px] mix-blend-screen" 
          style={{ animation: 'aurora 20s ease-in-out infinite alternate-reverse', animationDelay: '2s' }} 
        />
        <div 
          className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen" 
          style={{ animation: 'aurora 12s ease-in-out infinite alternate', animationDelay: '4s' }} 
        />
      </div>

      {/* Subtle overlay grid to give it texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Add global keyframes for smooth aurora movement */}
      <style>{`
        @keyframes aurora {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33% { transform: translate(5%, -5%) scale(1.1); opacity: 0.9; }
          66% { transform: translate(-5%, 5%) scale(0.9); opacity: 0.7; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
