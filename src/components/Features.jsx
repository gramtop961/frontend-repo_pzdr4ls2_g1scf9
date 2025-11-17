import { motion } from 'framer-motion'
import { Activity, Gauge, Brain, BarChart3, FileText, Zap } from 'lucide-react'

const items = [
  {
    icon: Activity,
    title: 'Analiza składu ciała (InBody)',
    desc: 'Dokładny skład ciała: masa mięśniowa, tkanka tłuszczowa, woda, segmenty.'
  },
  {
    icon: Gauge,
    title: '4 testy performance',
    desc: 'Siła chwytu, moc dolnych kończyn, próba wydolnościowa, szybkość reakcji.'
  },
  {
    icon: FileText,
    title: 'Raport AI',
    desc: 'Personalizowane rekomendacje treningu i diety, generowane w kilka sekund.'
  },
  {
    icon: Brain,
    title: 'Coaching i plan',
    desc: 'Przekładalne na wynik plan działania i wskazówki „co dalej”.'
  },
  {
    icon: BarChart3,
    title: 'Monitoring postępów',
    desc: 'Automatyczne porównania wyników i wykresy zmian w czasie.'
  },
  {
    icon: Zap,
    title: 'Gotowe w 15 minut',
    desc: 'Od pomiaru po raport — zrobione szybko i bezboleśnie.'
  }
]

export default function Features() {
  return (
    <section id="usluga" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            Twój wynik — w pełnym spektrum
          </h2>
          <p className="mt-4 text-white/70">
            Połączone dane z kilku źródeł dają pełen obraz Twojej wydolności.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#39FF14]/40"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-24 bg-[#39FF14]/10 blur-2xl" />
              </div>
              <div className="flex items-center gap-4">
                <it.icon className="w-6 h-6 text-[#39FF14]" />
                <h3 className="text-xl font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
