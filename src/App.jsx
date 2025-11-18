import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Menu />
        <Gallery />
        <Contact />
        <footer className="py-10 bg-sky-900 text-sky-50">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Beachside Café — All rights reserved.</p>
            <p className="text-sky-200">Open daily 7am – 6pm • 123 Ocean Drive, Bayside</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
