import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Αρχική' },
    { href: '#menu', label: 'Μενού' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'Σχετικά' },
    { href: '#contact', label: 'Επικοινωνία' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur bg-white/70 border-b border-white/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-extrabold" style={{color:'#0A3D62'}}>Καφενείο «Μαρινοπαρέα»</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-[#0A3D62] transition-colors">
                {item.label}
              </a>
            ))}
            <a href="tel:+35799579423" className="px-4 py-2 rounded-lg shadow text-white transition-colors" style={{background:'#1ABC9C'}}>Κάλεσε μας</a>
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
            <a href="tel:+35799579423" className="block p-2 rounded text-center text-white" style={{background:'#1ABC9C'}} onClick={() => setOpen(false)}>Κάλεσε μας</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
