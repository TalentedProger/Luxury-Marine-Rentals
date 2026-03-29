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
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/vessel/${vessel.slug}`}>
        <div className="card-light-hover rounded-2xl overflow-hidden cursor-pointer">
          {/* Image */}
          <div className="relative h-60 overflow-hidden">
            <motion.img
              src={vessel.heroImage}
              alt={vessel.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.7 }}
              crossOrigin="anonymous"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-blue-600">
                {vessel.categoryLabel}
              </div>
              {vessel.popular && (
                <div className="bg-amber-500 rounded-full px-3 py-1 text-xs font-bold text-white">
                  Популярный
                </div>
              )}
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-amber-600 flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-500" />
              {vessel.rating}
              <span className="text-slate-400 ml-1">({vessel.reviews})</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-slate-900 font-bold text-xl mb-1.5 group-hover:text-blue-600 transition-colors">
              {vessel.name}
            </h3>
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{vessel.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-slate-50 rounded-xl p-2.5 text-center border border-slate-100">
                <div className="text-slate-800 font-bold text-sm">{vessel.specs.length}</div>
                <div className="text-slate-400 text-xs">Длина</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-2.5 text-center border border-slate-100">
                <div className="text-slate-800 font-bold text-sm">{vessel.specs.capacity}</div>
                <div className="text-slate-400 text-xs">Вместим.</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-2.5 text-center border border-slate-100">
                <div className="text-slate-800 font-bold text-sm">{vessel.specs.speed}</div>
                <div className="text-slate-400 text-xs">Скорость</div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <span className="text-slate-400 text-xs">от</span>
                <span className="text-slate-900 font-bold text-2xl ml-1">
                  {vessel.pricePerHour.toLocaleString("ru-RU")}
                </span>
                <span className="text-slate-400 text-sm ml-1">₽/час</span>
              </div>
              <span className="text-blue-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-25"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>

        <div ref={headerRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-6 h-px bg-blue-400" />
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Флот NevaYacht</span>
            <div className="w-6 h-px bg-blue-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display text-white mb-5"
          >
            НАШ <span className="text-gradient-blue">ФЛОТ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg max-w-xl mx-auto"
          >
            {fleet.length} судов на любой вкус и бюджет. От скоростных катеров до роскошных суперяхт.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-30 py-3 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-sm mb-8"
          >
            Найдено: <span className="text-slate-900 font-bold">{filtered.length}</span> судов
          </motion.p>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
