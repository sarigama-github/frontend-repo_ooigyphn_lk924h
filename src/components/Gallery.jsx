function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1800&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">By the Sea</h2>
          <p className="text-slate-600 mt-1">A glimpse of our space, our plates, and our view</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img src={src} alt="Beachside Cafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
