function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop" alt="Beach background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sky-900/40 mix-blend-multiply" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-28 text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow leading-tight">
          Sun-kissed mornings, ocean breeze afternoons
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl text-sky-100">
          Welcome to Beachside Café — freshly brewed coffee, seasonal bites, and stunning seaside views. Open daily from 7am.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#menu" className="bg-white text-sky-700 px-5 py-3 rounded-lg font-semibold shadow hover:shadow-md">Explore Menu</a>
          <a href="#contact" className="bg-sky-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-sky-700">Book a Table</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
