import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'Γενικό', message: '' })
  const [status, setStatus] = useState(null)

  const topics = ['Γενικό', 'Κράτηση', 'Catering']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Αποστολή...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = { ...form, topic: form.topic === 'Κράτηση' ? 'Reservation' : form.topic === 'Γενικό' ? 'General' : form.topic }
      const res = await fetch(`${base}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setStatus('Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.')
        setForm({ name: '', email: '', phone: '', topic: 'Γενικό', message: '' })
      } else {
        setStatus('Κάτι πήγε στραβά. Προσπάθησε ξανά.')
      }
    } catch (e) {
      setStatus('Δεν ήταν δυνατή η αποστολή. Δοκίμασε αργότερα.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Επικοινωνία & Πώς θα μας βρεις</h2>
            <p className="text-slate-600 mt-2">Μαρίνα Ζυγίου, 7739, Ζύγι, Λάρνακα, Κύπρος • Καθημερινά 08:00 – 20:00</p>
            <div className="mt-6 p-5 rounded-xl" style={{background:'#F4D6A0'}}>
              <p className="font-semibold" style={{color:'#0A3D62'}}>Τηλέφωνο</p>
              <a href="tel:+35799579423" className="underline" style={{color:'#0A3D62'}}>+357 99 579423</a>
              <p className="mt-3 font-semibold" style={{color:'#0A3D62'}}>Email</p>
              <a href="mailto:info@marinoparea-cafe.com" className="underline" style={{color:'#0A3D62'}}>info@marinoparea-cafe.com</a>
            </div>
            <div className="mt-6">
              <iframe title="map" className="w-full h-64 rounded-xl border" src="https://www.google.com/maps?q=Zygi%20Marina%2C%20Larnaca&output=embed"></iframe>
              <p className="mt-2 text-sm"><a className="underline" href="https://www.google.com/maps/search/?api=1&query=Marinoparea%20Cafe%2C%20Zygi%20Marina%2C%20Larnaca" target="_blank" rel="noreferrer">Άνοιξε στο χάρτη: Μαρινοπαρέα Καφενείο, Zygi Marina, Larnaca</a></p>
          </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Στείλε μήνυμα</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Το όνομά σου" className="border rounded-lg p-2" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
              <input required type="email" placeholder="Το email σου" className="border rounded-lg p-2" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <input placeholder="Τηλέφωνο" className="border rounded-lg p-2" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
              <select className="border rounded-lg p-2" value={form.topic} onChange={e=>setForm({ ...form, topic: e.target.value })}>
                {topics.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <textarea required rows={5} placeholder="Πες μας πότε θέλεις να μας επισκεφτείς ή κάνε την ερώτησή σου…" className="border rounded-lg p-2 w-full mt-4" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />

            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="px-5 py-2 rounded-lg text-white hover:opacity-95" style={{background:'#1ABC9C'}}>Στείλε μήνυμα</button>
              {status && <span className="text-slate-600">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
