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
        <section id="about" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Για τη Μαρινοπαρέα</h2>
            <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
              <p>
                Η Μαρινοπαρέα είναι το καφενείο της γειτονιάς της Μαρίνας Ζυγίου – ακριβώς εκεί που δένουν τα καΐκια και ξεκινά η θάλασσα.
              </p>
              <p>
                Με άρωμα κυπριακού καφέ, χαλαρή μουσική και παρέες που γεμίζουν τα τραπέζια από το πρωί μέχρι το σούρουπο, το καφενείο μας είναι σημείο συνάντησης για ντόπιους και επισκέπτες.
              </p>
              <p>
                Εδώ θα βρεις: κλασικούς καφέδες (ελληνικό, κυπριακό, φραπέ, freddo), δροσερά ροφήματα και σπιτικές λεμονάδες, μικρά μεζεδάκια και σνακ για τη θάλασσα, παγωτά και γλυκά για κάθε ηλικία.
              </p>
              <p>
                Πέρα από τον καφέ, αυτό που μένει είναι η παρέα. Γι’ αυτό και το όνομα: Μαρίνα + Παρέα = Μαρινοπαρέα. Έλα να γίνεις κι εσύ μέρος της!
              </p>
            </div>
          </div>
        </section>
        <Menu />
        <Gallery />
        <Contact />
        <footer className="py-10" style={{background:'#0A3D62', color:'#E6F3F8'}}>
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Καφενείο «Μαρινοπαρέα» — Zygi Marina, Larnaca</p>
            <p className="opacity-80">Καθημερινά 08:00 – 20:00 • Τηλ. +357 99 579423</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
