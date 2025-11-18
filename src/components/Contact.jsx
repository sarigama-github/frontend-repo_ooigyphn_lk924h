import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'General', message: '' })
  const [status, setStatus] = useState(null)

  const topics = ['General', 'Reservation', 'Catering']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('Thanks! We\'ll be in touch soon.')
        setForm({ name: '', email: '', phone: '', topic: 'General', message: '' })
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (e) {
      setStatus('Unable to send right now, please try later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Visit Us</h2>
            <p className="text-slate-600 mt-2">123 Ocean Drive, Bayside • Open daily 7am – 6pm</p>
            <div className="mt-6 p-5 rounded-xl bg-sky-50 border border-sky-100">
              <p className="text-sky-900 font-semibold">Seaside Specials</p>
              <p className="text-sky-800/80 mt-1">Happy Hour 3–5pm • Live acoustic on weekends • Pet-friendly patio</p>
            </div>
            <div className="mt-6">
              <iframe title="map" className="w-full h-64 rounded-xl border" src="https://maps.google.com/maps?q=Bondi%20Beach&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Say Hello</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="border rounded-lg p-2" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
              <input required type="email" placeholder="Email" className="border rounded-lg p-2" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <input placeholder="Phone" className="border rounded-lg p-2" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
              <select className="border rounded-lg p-2" value={form.topic} onChange={e=>setForm({ ...form, topic: e.target.value })}>
                {topics.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <textarea required rows={5} placeholder="Message" className="border rounded-lg p-2 w-full mt-4" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />

            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700">Send</button>
              {status && <span className="text-slate-600">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
