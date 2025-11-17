import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Locations from './components/Locations'
import Booking from './components/Booking'

function App() {
  const [picked, setPicked] = useState(null)

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Features />
      <Locations onPick={setPicked} />
      <Booking picked={picked} />
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-white/60">
          <div>© {new Date().getFullYear()} BodyScan.pl — Wszystkie prawa zastrzeżone</div>
          <div className="inline-flex gap-4">
            <a href="#usluga" className="hover:text-white">Usługa</a>
            <a href="#lokalizacje" className="hover:text-white">Lokalizacje</a>
            <a href="#rezerwacje" className="hover:text-white">Rezerwacje</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
