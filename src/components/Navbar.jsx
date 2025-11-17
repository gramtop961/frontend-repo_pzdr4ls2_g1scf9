import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Usługa', href: '#usluga' },
    { label: 'Lokalizacje', href: '#lokalizacje' },
    { label: 'Rezerwacje', href: '#rezerwacje' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl/50 bg-black/30 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(57,255,20,0.15)]">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#39FF14] shadow-[0_0_20px_#39FF14]" />
            <span className="text-white font-semibold tracking-wide">BodyScan<span className="text-[#39FF14]">.pl</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-white/80 hover:text-white transition">
                {n.label}
              </a>
            ))}
            <a href="#rezerwacje" className="inline-flex items-center px-4 py-2 rounded-xl bg-[#39FF14] text-black font-semibold shadow-[0_0_30px_#39FF14] hover:brightness-110 transition">
              Zarezerwuj
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl px-6 py-4 flex flex-col gap-4">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition">
                {n.label}
              </a>
            ))}
            <a href="#rezerwacje" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#39FF14] text-black font-semibold shadow-[0_0_30px_#39FF14]">
              Zarezerwuj
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
