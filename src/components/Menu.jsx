import { useEffect, useState } from 'react'

function Menu() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('Όλα')
  const [loading, setLoading] = useState(true)

  const categories = ['Όλα', 'Coffee', 'Smoothie', 'Brunch', 'Pastry']

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true)
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = []
        if (filter !== 'Όλα') params.push(`category=${encodeURIComponent(filter)}`)
        const url = `${base}/api/menu${params.length ? `?${params.join('&')}` : ''}`
        const res = await fetch(url)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
  }, [filter])

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Μενού</h2>
            <p className="text-slate-600 mt-1">Εμπνευσμένο από τη θάλασσα της Μαρίνας Ζυγίου</p>
          </div>
          <div className="hidden sm:flex gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===c?'text-white border-transparent':'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`} style={filter===c?{background:'#1ABC9C'}:{}}>
                {c === 'Coffee' ? 'Καφές' : c === 'Smoothie' ? 'Smoothie' : c === 'Brunch' ? 'Brunch' : c === 'Pastry' ? 'Γλυκά' : 'Όλα'}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:hidden mb-6">
          <select value={filter} onChange={e=>setFilter(e.target.value)} className="w-full border rounded-lg p-2">
            {categories.map(c => <option key={c} value={c}>{c === 'Coffee' ? 'Καφές' : c === 'Smoothie' ? 'Smoothie' : c === 'Brunch' ? 'Brunch' : c === 'Pastry' ? 'Γλυκά' : 'Όλα'}</option>)}
          </select>
        </div>

        {loading ? (
          <div className="text-center py-10 text-slate-600">Φόρτωση μενού...</div>
        ) : items.length === 0 ? (
          <div className="text-center py-10 text-slate-600">Το μενού θα δημοσιευτεί σύντομα. Περάστε από κοντά για καθημερινές προτάσεις!</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    {item.description && <p className="text-slate-600 mt-1 text-sm">{item.description}</p>}
                  </div>
                  <span className="font-semibold" style={{color:'#0A3D62'}}>{typeof item.price === 'number' ? `€${item.price.toFixed(2)}` : item.price}</span>
                </div>
                <div className="mt-3">
                  <span className="inline-block text-xs px-2 py-0.5 rounded-full border" style={{background:'#E6FFFA', color:'#0A3D62', borderColor:'#B2F5EA'}}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
