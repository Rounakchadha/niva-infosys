import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const propertyTypes = ['Home / Apartment', 'Office / Commercial', 'School / College', 'Hospital / Clinic', 'Factory / Warehouse', 'Retail / Shop', 'Hotel', 'Bank / ATM', 'Other']
const requirements = ['CCTV Installation', 'Fire Safety System', 'Access Control', 'Networking / WiFi', 'AMC / Maintenance', 'Multiple Services']

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', location: '', propertyType: '', requirement: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to backend / email / WhatsApp API
    setSubmitted(true)
  }

  return (
    <section id="lead-form" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-blue-600/5 blur-[150px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Free Consultation
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Request a Free{' '}
            <span className="text-blue-500">Site Survey.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Tell us about your property and we'll get back with a tailored solution and site visit.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h3 className="text-white font-extrabold text-2xl mb-3 tracking-tight">Request Submitted</h3>
            <p className="text-zinc-400 text-base max-w-sm mx-auto">
              Thank you. Our team will call you within 24 hours to schedule your free site survey.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 sm:p-12 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm font-semibold mb-2 ml-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Rajesh Sharma"
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm font-semibold mb-2 ml-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-sm font-semibold mb-2 ml-1">Location / Area in Lucknow *</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                placeholder="e.g. Gomti Nagar, Hazratganj, Aliganj..."
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm font-semibold mb-2 ml-1">Property Type</label>
                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none"
                >
                  <option value="" className="text-zinc-600">Select type...</option>
                  {propertyTypes.map((t) => <option key={t} value={t} className="text-black">{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-sm font-semibold mb-2 ml-1">Requirement</label>
                <select
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none"
                >
                  <option value="" className="text-zinc-600">Select service...</option>
                  {requirements.map((r) => <option key={r} value={r} className="text-black">{r}</option>)}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-600/20"
            >
              <Send className="w-5 h-5" />
              Submit Request
            </button>
            <p className="text-zinc-600 text-xs text-center font-medium mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
