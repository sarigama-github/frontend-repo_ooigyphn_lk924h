function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop" alt="Θάλασσα στη μαρίνα" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A3D62]/60 mix-blend-multiply" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-28 text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow leading-tight">
          Μαρινοπαρέα – Καφενείο στη Μαρίνα Ζυγίου
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl text-sky-100">
          Καφές, μεζεδάκια και γλυκά μπροστά στη θάλασσα. Στάση για χαλάρωση, κουβέντα και θέα στα καΐκια της Μαρίνας Ζυγίου.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#menu" className="bg-white text-[#0A3D62] px-5 py-3 rounded-lg font-semibold shadow hover:shadow-md">Δες το Μενού</a>
          <a href="tel:+35799579423" className="bg-[#1ABC9C] text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-[#159c86]">Κάνε Κράτηση Τηλεφωνικά (+357 99 579423)</a>
        </div>
        <p className="mt-3 text-sky-100/90 text-sm sm:text-base">
          Από πρωινό κυπριακό καφέ μέχρι απογευματινό παγωτό με θέα το ηλιοβασίλεμα.
        </p>
      </div>
    </section>
  )
}

export default Hero
