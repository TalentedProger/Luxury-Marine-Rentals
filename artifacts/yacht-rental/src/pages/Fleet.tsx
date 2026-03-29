import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Users, Clock, Filter } from "lucide-react";
import { fleet, type Vessel } from "../data/fleet";

const categories = [
  { value: "all", label: "Все суда" },
  { value: "speedboat", label: "Катера" },
  { value: "yacht", label: "Яхты" },
  { value: "sailboat", label: "Парусники" },
  { value: "catamaran", label: "Катамараны" },
];

function VesselCard({ vessel, index }: { vessel: Vessel; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4), ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/vessel/${vessel.slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-[#0a1628] border border-white/5 hover:border-sky-500/20 transition-all duration-500 cursor-pointer">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={vessel.heroImage}
              alt={vessel.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="glass rounded-full px-3 py-1 text-xs font-bold text-sky-300">
                {vessel.categoryLabel}
              </div>
              {vessel.popular && (
                <div className="bg-amber-500/90 rounded-full px-3 py-1 text-xs font-bold text-white">
                  Популярный
                </div>
              )}
            </div>

            <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-bold text-amber-400 flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400" />
              {vessel.rating}
              <span className="text-slate-400 ml-1">({vessel.reviews})</span>
            </div>

            {/* Hover arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)]"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-white font-bold text-xl mb-1 group-hover:text-sky-400 transition-colors">
              {vessel.name}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{vessel.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="glass rounded-lg p-2 text-center">
                <div className="text-white font-bold text-sm">{vessel.specs.length}</div>
                <div className="text-slate-500 text-xs">Длина</div>
              </div>
              <div className="glass rounded-lg p-2 text-center">
                <div className="text-white font-bold text-sm">{vessel.specs.capacity}</div>
                <div className="text-slate-500 text-xs">Вместимость</div>
              </div>
              <div className="glass rounded-lg p-2 text-center">
                <div className="text-white font-bold text-sm">{vessel.specs.speed}</div>
                <div className="text-slate-500 text-xs">Скорость</div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-slate-500 text-xs">от</span>
                <span className="text-white font-bold text-2xl ml-1">
                  {vessel.pricePerHour.toLocaleString("ru-RU")}
                </span>
                <span className="text-slate-500 text-sm ml-1">₽/час</span>
              </div>
              <span className="text-sky-400 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Подробнее <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState("all");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeCategory === "all"
    ? fleet
    : fleet.filter(v => v.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#050d1a]">
      {/* Page Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/80 via-[#050d1a]/60 to-[#050d1a]" />
        </div>

        <div ref={headerRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-4"
          >
            Флот NevaYacht
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display text-white mb-6"
          >
            НАШ <span className="text-gradient-blue">ФЛОТ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            {fleet.length} судов на любой вкус и бюджет. От скоростных катеров до роскошных суперяхт.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-18 z-30 py-4 bg-[#050d1a]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                      : "glass text-slate-400 hover:text-white"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-500 text-sm mb-8"
          >
            Найдено: <span className="text-white font-bold">{filtered.length}</span> судов
          </motion.p>

          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((vessel, i) => (
                <VesselCard key={vessel.id} vessel={vessel} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
