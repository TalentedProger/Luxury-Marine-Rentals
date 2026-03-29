import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Users, Clock, Shield, ChevronDown, Play, Anchor, Wind, Compass } from "lucide-react";
import { fleet } from "../data/fleet";

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);

  const chars = "АРЕНДА НА НЕВЕ".split("");

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image always present */}
        <img
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=90"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-boat-speeding-through-the-sea-2296/1080p.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2022/10/16/135231-761867093_large.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/50 via-[#050d1a]/20 to-[#050d1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-300 text-sm font-semibold tracking-widest uppercase">
              Санкт-Петербург · С 2015 года
            </span>
          </motion.div>

          {/* Main Title with video fill effect */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              ref={titleRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="relative font-display leading-[0.9] select-none"
              style={{ fontSize: "clamp(72px, 12vw, 160px)" }}
            >
              {/* Video-fill text layer */}
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #38bdf8 70%, #0ea5e9 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {chars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.5 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: char === " " ? "inline-block" : "inline-block", minWidth: char === " " ? "0.3em" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="block text-white"
              >
                ЯХТ И КАТЕРОВ
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="text-slate-300 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 font-medium"
          >
            Откройте красоту Финского залива и Невской акватории с нашим премиальным флотом из 20+ судов.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/fleet">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(14,165,233,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-base tracking-wide shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all"
              >
                Выбрать яхту
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl glass text-white font-bold text-base border border-white/10 hover:border-sky-500/30 transition-all"
            >
              <Play className="w-5 h-5 text-sky-400" />
              Смотреть видео
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="flex flex-wrap gap-8 mt-16"
          >
            {[
              { value: "20+", label: "Судов в флоте" },
              { value: "2000+", label: "Довольных клиентов" },
              { value: "10 лет", label: "На рынке" },
              { value: "4.9★", label: "Средний рейтинг" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-display text-sky-400">{stat.value}</span>
                <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase font-semibold">Листай вниз</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown className="w-5 h-5 text-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Anchor,
      title: "Роскошные яхты",
      desc: "Яхты премиум-класса с полным экипажем. Высочайший уровень сервиса и комфорта.",
      color: "from-sky-400 to-blue-600",
    },
    {
      icon: Wind,
      title: "Вечеринки",
      desc: "Незабываемые мероприятия на воде. Плавучий ресторан, DJ, фейерверки.",
      color: "from-violet-400 to-purple-600",
    },
    {
      icon: Compass,
      title: "Морские маршруты",
      desc: "Форты Кронштадта, острова залива, Петергоф — открывайте Петербург с воды.",
      color: "from-emerald-400 to-teal-600",
    },
    {
      icon: Shield,
      title: "Безопасность",
      desc: "Профессиональные капитаны, полная страховка, современное спас. оборудование.",
      color: "from-amber-400 to-orange-600",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07111f]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4"
            >
              <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Наши услуги</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display text-white leading-tight"
            >
              ВСЁ ДЛЯ
              <br />
              <span className="text-gradient-blue">ИДЕАЛЬНОГО</span>
              <br />
              ОТДЫХА
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-sm text-slate-400 text-base leading-relaxed"
          >
            Мы предоставляем полный спектр услуг водного туризма в Санкт-Петербурге. От романтической прогулки до корпоративного ивента.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative glass rounded-2xl p-6 lg:p-8 group overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl`} />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 right-6"
              >
                <ArrowRight className="w-5 h-5 text-sky-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Fleet Preview ────────────────────────────────────────────────────────────
function FleetPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = fleet.filter(v => v.popular).slice(0, 3);

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-[#07111f] to-[#050d1a]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-4"
            >
              Наш флот
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display text-white"
            >
              КАКОЙ ТИП СУДНА
              <br />
              <span className="text-gradient-blue">ПОДОЙДЁТ ВАМ?</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Link href="/fleet">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl glass border border-white/10 hover:border-sky-500/40 text-white font-bold text-sm tracking-wide flex items-center gap-2 group transition-all"
              >
                Весь флот
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Featured Vessel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((vessel, i) => (
            <motion.div
              key={vessel.id}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link href={`/vessel/${vessel.slug}`}>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={vessel.heroImage}
                      alt={vessel.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <div className="glass rounded-full px-3 py-1 text-xs font-bold text-sky-300 tracking-wider">
                        {vessel.categoryLabel}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div className="glass rounded-full px-3 py-1 text-xs font-bold text-amber-400 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {vessel.rating}
                      </div>
                    </div>

                    {/* Arrow button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)]"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="bg-[#0a1628] p-6 rounded-b-2xl border border-white/5 border-t-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-bold text-xl group-hover:text-sky-400 transition-colors">
                        {vessel.name}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{vessel.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {vessel.specs.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        от {vessel.minHours} часов
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-slate-500 text-xs">от</span>
                        <span className="text-white font-bold text-xl ml-1">
                          {vessel.pricePerHour.toLocaleString("ru-RU")} ₽
                        </span>
                        <span className="text-slate-500 text-xs ml-1">/ час</span>
                      </div>
                      <span className="text-sky-400 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                        Подробнее →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Split Feature Section ────────────────────────────────────────────────────
function SplitSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050d1a]" />
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl h-48">
                <img
                  src="https://images.unsplash.com/photo-1566847438217-76e82d3f7ae9?w=600&q=80"
                  alt="Яхта"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&q=80"
                  alt="Катер"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative overflow-hidden rounded-2xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80"
                  alt="Катамаран"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-5xl font-display text-sky-400 mb-1">300+</div>
                <div className="text-slate-400 text-sm font-semibold">Суперяхт в нашей сети</div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-4"
            >
              О нас
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-display text-white mb-6 leading-tight"
            >
              ПОДБЕРЁМ
              <br />
              <span className="text-gradient-blue">ИДЕАЛЬНУЮ</span>
              <br />
              ЯХТУ ДЛЯ ВАС
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              Мы предлагаем аренду роскошных яхт для отдыха и развлечений, обеспечивая вам незабываемые морские приключения и высокий уровень сервиса. Каждая прогулка — это событие, которое вы запомните навсегда.
            </motion.p>

            {/* Checkmarks */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 mb-10"
            >
              {[
                "Потрясающие круизы по акватории Санкт-Петербурга",
                "Лодки и яхты премиум-класса с профессиональным экипажем",
                "Гарантированное качество обслуживания и безопасность",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(14,165,233,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold tracking-wide flex items-center gap-2 group"
                >
                  Узнать больше
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Routes / Experiences Section ─────────────────────────────────────────────
function RoutesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const routes = [
    {
      title: "Форты Кронштадта",
      duration: "4–6 часов",
      price: "от 25 000 ₽",
      img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
      tag: "Популярный",
    },
    {
      title: "Петергоф с моря",
      duration: "3 часа",
      price: "от 18 000 ₽",
      img: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
      tag: "Исторический",
    },
    {
      title: "Острова Финского залива",
      duration: "6–8 часов",
      price: "от 45 000 ₽",
      img: "https://images.unsplash.com/photo-1508553823590-1c68ebeaaea5?w=800&q=80",
      tag: "Приключение",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden bg-[#07111f]">
      <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-4"
          >
            Маршруты
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display text-white"
          >
            ОТКРОЙТЕ
            <br />
            <span className="text-gradient-blue">ПЕТЕРБУРГ С ВОДЫ</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {routes.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <div className="relative h-80">
                <motion.img
                  src={route.img}
                  alt={route.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-bold text-sky-300">
                  {route.tag}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-display text-2xl mb-2">{route.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {route.duration}
                    </div>
                    <span className="text-sky-400 font-bold">{route.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/routes">
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-8 py-4 rounded-2xl glass border border-white/10 hover:border-sky-500/30 text-white font-bold text-sm inline-flex items-center gap-2 group transition-all"
            >
              Все маршруты
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Александр К.",
      role: "Постоянный клиент",
      text: "Арендовали Princess V40 на корпоратив. Всё было на высшем уровне — от встречи до самой прогулки. Экипаж профессиональный, яхта роскошная. Обязательно вернёмся!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    {
      name: "Мария В.",
      role: "День рождения",
      text: "Заказывали романтическую прогулку для мужа. Команда NevaYacht создала волшебную атмосферу. Шампанское, закаты над заливом, форты Кронштадта — незабываемо!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&q=80",
    },
    {
      name: "Дмитрий Р.",
      role: "Свадебная прогулка",
      text: "Провели часть свадьбы на Sunseeker Predator. Гости были в восторге! Всё организовано идеально, оформление, фотозона, шеф-повар. Это был лучший день в жизни.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden bg-[#050d1a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-4"
          >
            Отзывы клиентов
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display text-white"
          >
            ЧТО ГОВОРЯТ
            <br />
            <span className="text-gradient-blue">НАШИ КЛИЕНТЫ</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 lg:p-8 group"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1600&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/90 via-[#050d1a]/70 to-[#050d1a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/80 via-transparent to-[#050d1a]/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-6">
            Готовы к приключению?
          </span>
          <h2 className="text-5xl lg:text-7xl font-display text-white mb-6 leading-tight">
            ВЫЙДЕМ В МОРЕ
            <br />
            <span className="text-gradient-blue">ВМЕСТЕ</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Забронируйте судно прямо сейчас и получите незабываемые впечатления от Санкт-Петербурга с воды.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fleet">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(14,165,233,0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg tracking-wide shadow-[0_0_40px_rgba(14,165,233,0.3)]"
              >
                Выбрать яхту
              </motion.button>
            </Link>
            <Link href="/contacts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 rounded-2xl glass border border-white/10 hover:border-sky-500/30 text-white font-bold text-lg"
              >
                Связаться с нами
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <FleetPreview />
      <SplitSection />
      <RoutesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
