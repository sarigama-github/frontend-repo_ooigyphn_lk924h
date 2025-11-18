import { useEffect, useState } from 'react'

function Menu() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  const categories = ['All', 'Coffee', 'Smoothie', 'Brunch', 'Pastry']

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true)
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = []
        if (filter !== 'All') params.push(`category=${encodeURIComponent(filter)}`)
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Menu</h2>
            <p className="text-slate-600 mt-1">Crafted with love, inspired by the coast</p>
          </div>
          <div className="hidden sm:flex gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===c?'bg-sky-600 text-white border-sky-600':'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:hidden mb-6">
          <select value={filter} onChange={e=>setFilter(e.target.value)} className="w-full border rounded-lg p-2">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {loading ? (
          <div className="text-center py-10 text-slate-600">Loading menu...</div>
        ) : items.length === 0 ? (
          <div className="text-center py-10 text-slate-600">Menu will be published soon. Visit us for daily specials!</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    {item.description && <p className="text-slate-600 mt-1 text-sm">{item.description}</p>}
                  </div>
                  <span className="text-sky-700 font-semibold">${item.price.toFixed(2)}</span>
                </div>
                <div className="mt-3">
                  <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">{item.category}</span>
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
