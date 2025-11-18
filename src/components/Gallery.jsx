function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1800&auto=format&fit=crop',
  ]

  const captions = [
    'Πρωινός καφές με θέα τα καΐκια στη Μαρίνα Ζυγίου.',
    'Η ταράτσα της Μαρινοπαρέας στο ηλιοβασίλεμα.',
    'Παρέες που γελάνε, τραπέζια γεμάτα μεζέδες και παγωτά.',
    'Ο παραλιακός πεζόδρομος δίπλα στο καφενείο, ιδανικός για βόλτα μετά τον καφέ.',
    'Καλοκαιρινό αεράκι και δροσερά ροφήματα.',
    'Θέα θάλασσα όλη μέρα.'
  ]

  return (
    <section id="gallery" className="py-20 bg-[#F4D6A0]/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Στιγμές δίπλα στη Θάλασσα</h2>
          <p className="text-slate-600 mt-1">Μια ματιά στον χώρο, τα πιάτα και τη θέα μας</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <figure key={i} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img src={src} alt={captions[i]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs sm:text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">{captions[i]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
