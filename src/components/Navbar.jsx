import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur bg-white/60 border-b border-white/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-bold text-sky-800">Beachside Café</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-sky-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700 transition-colors">Reserve</a>
          </nav>

          <button className="md:hidden p-2 rounded hover:bg-white/70" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block p-2 rounded hover:bg-white/70" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block p-2 rounded bg-sky-600 text-white text-center" onClick={() => setOpen(false)}>Reserve</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
