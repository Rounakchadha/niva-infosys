import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-white/5' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo_transparent.png"
              alt="NIVA Logo"
              className="h-10 lg:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors inline-block"
            >
              Get Free Survey
            </Link>
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
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-medium tracking-tight transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              Get Free Survey
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
