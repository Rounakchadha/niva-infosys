import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
]
const services = ['CCTV Solutions', 'Fire Safety', 'Access Control', 'Networking & IT', 'AMC & Maintenance']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/logo_transparent.png" 
                alt="NIVA Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Lucknow's trusted partner for Security, Surveillance & IT Infrastructure since 2007.
            </p>
            <div className="space-y-3">
              <a href="tel:+918043865962" className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                +91 80438 65962
              </a>
              <a href="mailto:info@nivainfosys.com" className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                info@nivainfosys.com
              </a>
              <div className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                2/200, Vishwas Khand, Gomti Nagar, Lucknow - 226010
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-widest">Get Started</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Book a free site survey and get a custom quote for your property.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black text-sm font-semibold px-6 py-4 sm:py-3 rounded-full transition-colors w-full sm:w-auto"
            >
              Free Site Survey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {year} Niva Infosys. All rights reserved. Lucknow, UP.
          </p>
          <p className="text-zinc-700 text-sm font-medium">
            Owned by Mr. Naveen Lulla
          </p>
        </div>
      </div>
    </footer>
  )
}
