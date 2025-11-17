import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14]" />
            <span className="text-sm text-white/80">Mobilne testy wydajności — w Twoim klubie</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
            BodyScan.pl
            <span className="block text-[#39FF14] drop-shadow-[0_0_30px_#39FF14]">Futurystyczny pomiar. Realne wyniki.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Kompleksowy pomiar InBody, cztery testy performance i natychmiastowy raport AI. Wszystko w mobilnym punkcie, który przyjeżdża do Twojego klubu fitness.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#rezerwacje" className="px-6 py-3 rounded-xl bg-[#39FF14] text-black font-semibold shadow-[0_0_40px_#39FF14] hover:brightness-110 transition">
              Zarezerwuj termin
            </a>
            <a href="#usluga" className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
              Zobacz jak to działa
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -right-32 top-40 w-[600px] h-[600px] rounded-full bg-[#39FF14]/10 blur-3xl" />
      <div className="absolute -left-32 -bottom-20 w-[500px] h-[500px] rounded-full bg-[#39FF14]/10 blur-3xl" />
    </section>
  )
}
