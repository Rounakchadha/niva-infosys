import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img 
              src="/logo_transparent.png" 
              alt="NIVA Logo" 
              className="h-10 lg:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#lead-form"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors inline-block"
            >
              Get Free Survey
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-zinc-400 hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/5 h-screen">
          <nav className="px-6 py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-white text-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#lead-form"
              onClick={() => setOpen(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              Get Free Survey
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
