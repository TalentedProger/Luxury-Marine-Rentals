import { useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Star, Users, Zap, Ruler, Calendar, Fuel,
  CheckCircle2, Clock, MapPin, Phone, ChevronLeft, ChevronRight, Shield
} from "lucide-react";
import { getVesselBySlug, fleet } from "../data/fleet";

export default function VesselDetail() {
  const params = useParams<{ slug: string }>();
  const vessel = getVesselBySlug(params.slug || "");
  const [activeImage, setActiveImage] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const infoRef = useRef(null);
  const inView = useInView(infoRef, { once: true });

  if (!vessel) {
    return (
      <div className="min-h-screen bg-[#050d1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">СУДНО НЕ НАЙДЕНО</h1>
          <Link href="/fleet">
            <button className="px-6 py-3 bg-sky-500 text-white rounded-xl font-bold">
              Вернуться во флот
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [vessel.heroImage, ...vessel.images];
  const related = fleet.filter(v => v.id !== vessel.id && v.category === vessel.category).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050d1a] overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={allImages[activeImage]}
            alt={vessel.name}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/60 via-transparent to-[#050d1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/60 to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-6 lg:left-8 z-10">
          <Link href="/fleet">
            <motion.button
              whileHover={{ scale: 1.05, x: -2 }}
              className="flex items-center gap-2 glass rounded-full px-4 py-2 text-white text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад к флоту
            </motion.button>
          </Link>
        </div>

        {/* Image nav */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={() => setActiveImage(i => (i - 1 + allImages.length) % allImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveImage(i => (i + 1) % allImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {allImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeImage ? "bg-sky-400 w-6" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-16 left-6 lg:left-8 right-6 lg:right-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="glass rounded-full px-3 py-1 text-xs font-bold text-sky-300">
                {vessel.categoryLabel}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                {vessel.rating}
                <span className="text-slate-400 font-normal">({vessel.reviews} отзывов)</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display text-white">{vessel.name}</h1>
            <p className="text-sky-300 text-lg font-semibold mt-2">{vessel.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Thumbnail Strip */}
      <div className="relative z-10 flex gap-3 px-6 lg:px-8 -mt-4 pb-6 overflow-x-auto scrollbar-none max-w-[88rem] mx-auto">
        {allImages.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveImage(i)}
            whileHover={{ scale: 1.05 }}
            className={`relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
              i === activeImage ? "border-sky-400" : "border-transparent opacity-60"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </motion.button>
        ))}
      </div>

      {/* Main Content */}
      <section ref={infoRef} className="py-8 lg:py-12">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Left column: Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl p-6 lg:p-8"
              >
                <h2 className="text-white font-display text-2xl mb-4">О СУДНЕ</h2>
                <p className="text-slate-300 text-base leading-relaxed">{vessel.longDescription}</p>
              </motion.div>

              {/* Specs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="glass rounded-2xl p-6 lg:p-8"
              >
                <h2 className="text-white font-display text-2xl mb-6">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: Ruler, label: "Длина", value: vessel.specs.length },
                    { icon: Users, label: "Вместимость", value: vessel.specs.capacity },
                    { icon: Zap, label: "Скорость", value: vessel.specs.speed },
                    { icon: Fuel, label: "Двигатель", value: vessel.specs.engine },
                    { icon: Calendar, label: "Год", value: vessel.specs.year },
                    { icon: Fuel, label: "Топливо", value: vessel.specs.fuel },
                  ].map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="bg-white/3 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <spec.icon className="w-4 h-4 text-sky-400" />
                        <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{spec.label}</span>
                      </div>
                      <div className="text-white font-bold text-base">{spec.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-2xl p-6 lg:p-8"
              >
                <h2 className="text-white font-display text-2xl mb-6">НА БОРТУ</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vessel.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-300 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Included */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="bg-gradient-to-br from-sky-500/10 to-blue-600/5 border border-sky-500/20 rounded-2xl p-6 lg:p-8"
              >
                <h2 className="text-white font-display text-2xl mb-4">ВКЛЮЧЕНО В АРЕНДУ</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vessel.included.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-200 text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column: Booking */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="sticky top-24 space-y-4"
              >
                {/* Price Card */}
                <div className="glass rounded-2xl p-6 border border-sky-500/20">
                  <div className="mb-6">
                    <div className="text-slate-400 text-sm mb-1">Аренда от</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-display text-white">
                        {vessel.pricePerHour.toLocaleString("ru-RU")}
                      </span>
                      <span className="text-slate-400 text-lg">₽/час</span>
                    </div>
                    <div className="mt-1 text-slate-400 text-sm">
                      или от {vessel.pricePerDay.toLocaleString("ru-RU")} ₽/день
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Минимальный срок
                      </span>
                      <span className="text-white font-bold">{vessel.minHours} часа</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Вместимость
                      </span>
                      <span className="text-white font-bold">{vessel.specs.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Порт
                      </span>
                      <span className="text-white font-bold text-right text-xs">{vessel.location}</span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setIsBooking(true)}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(14,165,233,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-base tracking-wide shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                  >
                    Забронировать
                  </motion.button>

                  <a href="tel:+78123334455" className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl glass text-slate-300 text-sm font-semibold hover:text-white transition-colors w-full">
                    <Phone className="w-4 h-4 text-sky-400" />
                    Позвонить нам
                  </a>
                </div>

                {/* Trust badges */}
                <div className="glass rounded-2xl p-4">
                  <div className="space-y-3">
                    {[
                      { icon: Shield, text: "Полная страховка включена" },
                      { icon: Star, text: "Профессиональный экипаж" },
                      { icon: CheckCircle2, text: "Мгновенное подтверждение" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-sky-400 shrink-0" />
                        <span className="text-slate-400 text-xs font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsBooking(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md bg-[#0a1628] border border-sky-500/20 rounded-2xl p-6 lg:p-8"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-white font-display text-3xl mb-2">ЗАБРОНИРОВАТЬ</h3>
              <p className="text-slate-400 text-sm mb-6">{vessel.name}</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsBooking(false); }}>
                <div>
                  <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Александр Иванов"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                      Дата
                    </label>
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-sky-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                      Часов
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-sky-500/50 transition-colors">
                      {Array.from({ length: 12 }, (_, i) => i + vessel.minHours).map(h => (
                        <option key={h} value={h} className="bg-[#0a1628]">{h} ч.</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-base mt-2"
                >
                  Отправить заявку
                </button>
              </form>

              <button
                onClick={() => setIsBooking(false)}
                className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 border-t border-white/5">
          <div className="max-w-[88rem] mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-display text-white mb-10">
              ПОХОЖИЕ <span className="text-gradient-blue">СУДА</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((v) => (
                <Link key={v.id} href={`/vessel/${v.slug}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#0a1628] border border-white/5 hover:border-sky-500/20 transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={v.heroImage}
                        alt={v.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-1 group-hover:text-sky-400 transition-colors">{v.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sky-400 font-bold">{v.pricePerHour.toLocaleString("ru-RU")} ₽/ч</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
