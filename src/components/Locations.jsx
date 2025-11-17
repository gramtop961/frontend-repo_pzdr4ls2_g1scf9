import { useEffect, useState } from 'react'
import { MapPin, Calendar } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Locations({ onPick }) {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/locations`).then(r => r.json()).then(setLocations).finally(() => setLoading(false))
  }, [])

  return (
    <section id="lokalizacje" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold">Gdzie jesteśmy?</h2>
            <p className="mt-3 text-white/70">Wybierz lokalizację i zarezerwuj termin.</p>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-3 text-white/60">Ładowanie…</div>
          ) : locations.map((l) => (
            <button key={l.name} onClick={() => onPick && onPick(l)} className="text-left rounded-2xl border border-white/10 bg-white/5 hover:border-[#39FF14]/40 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)] transition p-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#39FF14]" />
                <div>
                  <div className="font-semibold">{l.name}</div>
                  <div className="text-sm text-white/60">{l.address}, {l.city}</div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
                <Calendar className="w-4 h-4" />
                Najbliższe terminy dostępne
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
