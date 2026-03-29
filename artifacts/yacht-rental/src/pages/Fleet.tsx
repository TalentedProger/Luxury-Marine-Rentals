import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Users, Clock, Filter, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { fleet, type Vessel } from "../data/fleet";

const categories = [
  { value: "all", label: "Все суда" },
  { value: "speedboat", label: "Катера" },
  { value: "yacht", label: "Яхты" },
  { value: "sailboat", label: "Парусники" },
  { value: "catamaran", label: "Катамараны" },
];

const parseCapacity = (s: string) => parseInt(s);
const parseSpeed = (s: string) => parseInt(s);

const maxPriceOptions = [
  { label: "Любая цена", value: Infinity },
  { label: "до 10 000 ₽/ч", value: 10000 },
  { label: "до 20 000 ₽/ч", value: 20000 },
  { label: "до 30 000 ₽/ч", value: 30000 },
];

const capacityOptions = [
  { label: "Любое", value: 0 },
  { label: "4+ чел.", value: 4 },
  { label: "8+ чел.", value: 8 },
  { label: "10+ чел.", value: 10 },
  { label: "12+ чел.", value: 12 },
];

const speedOptions = [
  { label: "Любая скорость", value: 0 },
  { label: "Тихоходные (до 20 уз.)", value: 0, max: 20 },
  { label: "Средние (20–40 уз.)", value: 20, max: 40 },
  { label: "Быстроходные (40+ уз.)", value: 40, max: Infinity },
];

const sortOptions = [
  { label: "По умолчанию", value: "default" },
  { label: "Цена: дешевле", value: "price_asc" },
  { label: "Цена: дороже", value: "price_desc" },
  { label: "Рейтинг", value: "rating" },
  { label: "Вместимость", value: "capacity" },
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

          <div className="p-5">
            <h3 className="text-slate-900 font-bold text-xl mb-1.5 group-hover:text-blue-600 transition-colors">
              {vessel.name}
            </h3>
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{vessel.description}</p>

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
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minCapacity, setMinCapacity] = useState(0);
  const [speedRange, setSpeedRange] = useState<{ value: number; max?: number }>({ value: 0, max: undefined });
  const [sortBy, setSortBy] = useState("default");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  let filtered = fleet.filter((v) => {
    if (activeCategory !== "all" && v.category !== activeCategory) return false;
    if (v.pricePerHour > maxPrice) return false;
    if (parseCapacity(v.specs.capacity) < minCapacity) return false;
    if (speedRange.value > 0) {
      const spd = parseSpeed(v.specs.speed);
      if (spd < speedRange.value) return false;
    }
    if (speedRange.max !== undefined && speedRange.max !== Infinity) {
      const spd = parseSpeed(v.specs.speed);
      if (spd > speedRange.max) return false;
    }
    return true;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "price_asc") return a.pricePerHour - b.pricePerHour;
    if (sortBy === "price_desc") return b.pricePerHour - a.pricePerHour;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "capacity") return parseCapacity(b.specs.capacity) - parseCapacity(a.specs.capacity);
    return 0;
  });

  const activeFiltersCount = [
    activeCategory !== "all",
    maxPrice !== Infinity,
    minCapacity > 0,
    speedRange.value > 0 || speedRange.max !== undefined,
    sortBy !== "default",
  ].filter(Boolean).length;

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900" />
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

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        {/* Category row */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3 overflow-x-auto">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="flex gap-2 flex-1">
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
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border shrink-0 ${
                showAdvanced || activeFiltersCount > 1
                  ? "bg-blue-50 text-blue-600 border-blue-200"
                  : "bg-slate-100 text-slate-600 border-transparent hover:bg-slate-200"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Фильтры
              {activeFiltersCount > 1 && (
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                  {activeFiltersCount - (activeCategory !== "all" ? 1 : 0)}
                </span>
              )}
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Advanced filters */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-100 pt-4">
                  {/* Max price */}
                  <div>
                    <label className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-2">
                      Цена за час
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {maxPriceOptions.map((opt) => (
                        <button
                          key={String(opt.value)}
                          onClick={() => setMaxPrice(opt.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            maxPrice === opt.value
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Min capacity */}
                  <div>
                    <label className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-2">
                      Вместимость
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {capacityOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setMinCapacity(opt.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            minCapacity === opt.value
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Speed */}
                  <div>
                    <label className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-2">
                      Скорость
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {speedOptions.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => setSpeedRange({ value: opt.value, max: opt.max })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            speedRange.value === opt.value && speedRange.max === opt.max
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-2">
                      Сортировка
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 text-sm outline-none focus:border-blue-400 transition-all"
                    >
                      {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {activeFiltersCount > 1 && (
                      <button
                        onClick={() => {
                          setActiveCategory("all");
                          setMaxPrice(Infinity);
                          setMinCapacity(0);
                          setSpeedRange({ value: 0, max: undefined });
                          setSortBy("default");
                        }}
                        className="mt-2 text-xs text-blue-600 font-semibold hover:underline"
                      >
                        Сбросить все фильтры
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            key={`${activeCategory}-${maxPrice}-${minCapacity}-${sortBy}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-sm mb-8"
          >
            Найдено: <span className="text-slate-900 font-bold">{filtered.length}</span> судов
          </motion.p>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((vessel, i) => (
                  <VesselCard key={vessel.id} vessel={vessel} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-slate-400 text-lg font-semibold mb-3">Суда не найдены</div>
                <p className="text-slate-400 text-sm mb-6">Попробуйте изменить условия фильтрации</p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setMaxPrice(Infinity);
                    setMinCapacity(0);
                    setSpeedRange({ value: 0, max: undefined });
                    setSortBy("default");
                  }}
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm"
                >
                  Сбросить фильтры
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
