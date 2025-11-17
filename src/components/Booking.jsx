import { useEffect, useMemo, useState } from 'react'
import { CalendarDays, Clock, Mail, Phone, User } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Booking({ picked }) {
  const [form, setForm] = useState({
    location_id: '',
    full_name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    test_package: 'Full + AI Report'
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (picked) {
      setForm((f) => ({ ...f, location_id: picked.name }))
    }
  }, [picked])

  const canSend = useMemo(() => {
    return form.location_id && form.full_name && form.email && form.date && form.time
  }, [form])

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch(`${API}/book`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Błąd wysyłki')
      setSent(true)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section id="rezerwacje" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold">Zarezerwuj termin</h2>
            <p className="mt-3 text-white/70">Wybierz klub, termin i pakiet. Zajmie to minutę.</p>
            {picked && (
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/60">Wybrana lokalizacja</div>
                <div className="font-semibold">{picked.name}</div>
                <div className="text-white/60 text-sm">{picked.address}, {picked.city}</div>
              </div>
            )}
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-2xl font-bold text-[#39FF14]">Dziękujemy! Rezerwacja przyjęta.</div>
                <p className="text-white/70 mt-2">Wyślemy potwierdzenie na e‑mail.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Input icon={User} label="Imię i nazwisko" value={form.full_name} onChange={(v)=>setForm({...form, full_name: v})} placeholder="Jan Kowalski" />
                <Input icon={Mail} label="E-mail" value={form.email} onChange={(v)=>setForm({...form, email: v})} placeholder="jan@example.com" />
                <Input icon={Phone} label="Telefon" value={form.phone} onChange={(v)=>setForm({...form, phone: v})} placeholder="600123123" />
                <div className="grid grid-cols-2 gap-4">
                  <Input icon={CalendarDays} type="date" label="Data" value={form.date} onChange={(v)=>setForm({...form, date: v})} />
                  <Input icon={Clock} type="time" label="Godzina" value={form.time} onChange={(v)=>setForm({...form, time: v})} />
                </div>
                <div>
                  <label className="text-sm text-white/70">Pakiet</label>
                  <select value={form.test_package} onChange={(e)=>setForm({...form, test_package: e.target.value})} className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#39FF14]/60">
                    <option>InBody</option>
                    <option>Performance x4</option>
                    <option>Full + AI Report</option>
                  </select>
                </div>
                {error && <div className="text-red-400 text-sm">{error}</div>}
                <button disabled={!canSend} className="w-full px-6 py-3 rounded-xl bg-[#39FF14] text-black font-semibold shadow-[0_0_40px_#39FF14] disabled:opacity-50">
                  Potwierdź rezerwację
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Input({ label, icon: Icon, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <div className="mt-1 flex items-center gap-3 rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus-within:border-[#39FF14]/60">
        {Icon && <Icon className="w-5 h-5 text-white/60" />}
        <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="flex-1 bg-transparent outline-none placeholder:text-white/30" />
      </div>
    </div>
  )
}
