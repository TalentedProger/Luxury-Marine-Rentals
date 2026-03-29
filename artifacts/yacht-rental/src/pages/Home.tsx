import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Star, Users, Clock, Shield, ChevronDown, Anchor, Wind, Compass, CheckCircle2 } from "lucide-react";
import { fleet } from "../data/fleet";

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);

  const titleChars1 = "АРЕНДА".split("");
  const titleChars2 = "КАТЕРОВ".split("");
  const titleChars3 = "И ЯХТ".split("");

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex items-center"
      style={{ height: "100svh", minHeight: "600px", maxHeight: "900px" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=90&auto=format&fit=crop"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
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
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/55 via-[#050d1a]/25 to-[#050d1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/65 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-300 text-sm font-semibold tracking-widest uppercase">
              Санкт-Петербург · С 2015 года
            </span>
          </motion.div>

          {/* Title */}
          <div className="mb-5 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="relative font-display leading-[0.88] select-none"
              style={{ fontSize: "clamp(56px, 9vw, 118px)", opacity: 0.82 }}
            >
              <span
                className="block"
                style={{
                  backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(147,197,253,0.85) 50%, rgba(56,189,248,0.8) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {titleChars1.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.5 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block" style={{ color: "rgba(255,255,255,0.82)" }}>
                {titleChars2.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.85 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block" style={{ color: "rgba(255,255,255,0.82)" }}>
                {titleChars3.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 1.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-md mb-8 font-medium"
          >
            Откройте красоту Финского залива и Невской акватории с нашим премиальным флотом из 20+ судов.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/fleet">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(37,99,235,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all"
              >
                Выбрать яхту
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/contacts">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-white font-bold text-sm border border-white/15 hover:border-white/30 transition-all"
              >
                Связаться с нами
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
            className="flex flex-wrap gap-x-8 gap-y-4 mt-12"
          >
            {[
              { value: "20+", label: "Судов в флоте" },
              { value: "2 000+", label: "Довольных клиентов" },
              { value: "10 лет", label: "На рынке" },
              { value: "4.9★", label: "Средний рейтинг" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5" style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.15)" : undefined, paddingLeft: i > 0 ? "2rem" : undefined }}>
                <span className="text-4xl font-display text-white" style={{ letterSpacing: "-0.01em" }}>
                  {stat.value}
                </span>
                <span className="text-slate-400 text-xs font-semibold tracking-wide uppercase">{stat.label}</span>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-slate-400 text-[10px] tracking-widest uppercase font-semibold">Листай вниз</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="w-4 h-4 text-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Services Section — Editorial Layout ──────────────────────────────────────
function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    {
      num: "01",
      icon: Anchor,
      title: "Роскошные яхты",
      desc: "Яхты премиум-класса с полным экипажем. Высочайший уровень сервиса и комфорта на воде.",
      tag: "Premium",
    },
    {
      num: "02",
      icon: Wind,
      title: "Вечеринки на воде",
      desc: "Незабываемые мероприятия на воде. Плавучий ресторан, DJ, фейерверки над акваторией.",
      tag: "Events",
    },
    {
      num: "03",
      icon: Compass,
      title: "Морские маршруты",
      desc: "Форты Кронштадта, острова залива, Петергоф — открывайте Петербург с воды.",
      tag: "Routes",
    },
    {
      num: "04",
      icon: Shield,
      title: "Безопасность",
      desc: "Профессиональные капитаны, полная страховка, современное спасательное оборудование.",
      tag: "Safety",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-6 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Наши услуги</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-[3.5rem] font-display text-slate-900 leading-[0.92]"
            >
              ВСЁ ДЛЯ
              <br />
              <span className="text-gradient-blue">ИДЕАЛЬНОГО</span>
              <br />
              ОТДЫХА
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-500 text-base leading-relaxed lg:pt-12"
          >
            Мы предоставляем полный спектр услуг водного туризма в Санкт-Петербурге. От романтической прогулки до корпоративного мероприятия — каждая деталь продумана до мелочей.
          </motion.p>
        </div>

        {/* Services list — editorial style */}
        <div className="divide-y divide-slate-100">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[auto_1fr_auto] lg:grid-cols-[80px_1fr_200px_180px] items-center gap-6 lg:gap-10 py-7 lg:py-8 cursor-default hover:bg-blue-50/40 transition-colors duration-300 px-4 -mx-4 rounded-xl"
            >
              {/* Number */}
              <span className="font-display text-3xl lg:text-4xl text-blue-100 group-hover:text-blue-200 transition-colors duration-300 select-none leading-none">
                {s.num}
              </span>

              {/* Title + Icon */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg lg:text-xl leading-tight">{s.title}</h3>
              </div>

              {/* Desc — hidden on mobile col, shown in wider layout */}
              <p className="hidden lg:block text-slate-500 text-sm leading-relaxed">
                {s.desc}
              </p>

              {/* Tag + arrow */}
              <div className="flex items-center justify-end gap-3">
                <span className="hidden lg:inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide border border-blue-100">
                  {s.tag}
                </span>
                <motion.div
                  initial={{ x: -4, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </div>

              {/* Mobile desc */}
              <p className="lg:hidden col-span-3 text-slate-500 text-sm leading-relaxed -mt-2">
                {s.desc}
              </p>
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
    <section ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-6 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Наш флот</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-display text-slate-900"
            >
              КАКОЙ ТИП СУДНА
              <br />
              <span className="text-gradient-blue">ПОДОЙДЁТ ВАМ?</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
            <Link href="/fleet">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide flex items-center gap-2 group transition-all shadow-sm"
              >
                Весь флот
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((vessel, i) => (
            <motion.div
              key={vessel.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link href={`/vessel/${vessel.slug}`}>
                <div className="card-light-hover rounded-2xl overflow-hidden cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={vessel.heroImage}
                      alt={vessel.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6 }}
                      crossOrigin="anonymous"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-blue-600 tracking-wide">
                        {vessel.categoryLabel}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-amber-600 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500" />
                        {vessel.rating}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-slate-900 font-bold text-xl mb-1.5 group-hover:text-blue-600 transition-colors">
                      {vessel.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{vessel.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {vessel.specs.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        от {vessel.minHours} часов
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 text-xs">от</span>
                        <span className="text-slate-900 font-bold text-xl ml-1">
                          {vessel.pricePerHour.toLocaleString("ru-RU")} ₽
                        </span>
                        <span className="text-slate-400 text-xs ml-1">/ час</span>
                      </div>
                      <span className="text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform inline-block">
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
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl h-44">
                <img
                  src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80&auto=format&fit=crop"
                  alt="Яхта"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img
                  src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80&auto=format&fit=crop"
                  alt="Катер"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img
                  src="https://images.unsplash.com/photo-1508553823590-1c68ebeaaea5?w=600&q=80&auto=format&fit=crop"
                  alt="Катамаран"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="rounded-2xl bg-blue-600 p-6 text-center">
                <div className="text-5xl font-display text-white mb-1">300+</div>
                <div className="text-blue-200 text-sm font-semibold">Суперяхт в нашей сети</div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-6 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">О нас</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-display text-slate-900 mb-6 leading-tight"
            >
              ПОДБЕРЁМ
              <br />
              <span className="text-gradient-blue">ИДЕАЛЬНУЮ</span>
              <br />
              ЯХТУ ДЛЯ ВАС
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-slate-500 text-base leading-relaxed mb-8"
            >
              Мы предлагаем аренду роскошных яхт для отдыха и развлечений, обеспечивая вам незабываемые морские приключения и высокий уровень сервиса. Каждая прогулка — это событие, которое вы запомните навсегда.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="space-y-3.5 mb-10"
            >
              {[
                "Потрясающие круизы по акватории Санкт-Петербурга",
                "Яхты и катера премиум-класса с профессиональным экипажем",
                "Гарантированное качество обслуживания и безопасность",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(37,99,235,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold tracking-wide flex items-center gap-2 group shadow-lg"
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

// ─── Routes Section ─────────────────────────────────────────────────────────
function RoutesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const routes = [
    {
      title: "Форты Кронштадта",
      duration: "4–6 часов",
      price: "от 25 000 ₽",
      img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80&auto=format&fit=crop",
      tag: "Популярный",
    },
    {
      title: "Петергоф с моря",
      duration: "3 часа",
      price: "от 18 000 ₽",
      img: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80&auto=format&fit=crop",
      tag: "Исторический",
    },
    {
      title: "Острова Финского залива",
      duration: "6–8 часов",
      price: "от 45 000 ₽",
      img: "https://images.unsplash.com/photo-1508553823590-1c68ebeaaea5?w=800&q=80&auto=format&fit=crop",
      tag: "Приключение",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-6 h-px bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Маршруты</span>
            <div className="w-6 h-px bg-blue-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display text-slate-900"
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
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 * i }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-80">
                <motion.img
                  src={route.img}
                  alt={route.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.8 }}
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-blue-600">
                  {route.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-display text-2xl mb-2">{route.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Clock className="w-4 h-4" />
                      {route.duration}
                    </div>
                    <span className="text-white font-bold bg-blue-600 px-3 py-1 rounded-full text-sm">{route.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/routes">
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-8 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-bold text-sm inline-flex items-center gap-2 group transition-all shadow-sm"
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
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop&crop=face",
    },
    {
      name: "Мария В.",
      role: "День рождения",
      text: "Заказывали романтическую прогулку для мужа. Команда NevaYacht создала волшебную атмосферу. Шампанское, закаты над заливом, форты Кронштадта — незабываемо!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&q=80&auto=format&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Р.",
      role: "Свадебная прогулка",
      text: "Провели часть свадьбы на Sunseeker Predator. Гости были в восторге! Всё организовано идеально, оформление, фотозона, шеф-повар. Это был лучший день в жизни.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-6 h-px bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Отзывы клиентов</span>
            <div className="w-6 h-px bg-blue-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display text-slate-900"
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
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 * i }}
              whileHover={{ y: -4 }}
              className="card-light-hover rounded-2xl p-6 lg:p-8"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                  crossOrigin="anonymous"
                />
                <div>
                  <div className="text-slate-900 font-bold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
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
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1600&q=80&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/88 via-slate-900/70 to-slate-900/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/70" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-blue-300 text-xs font-bold tracking-widest uppercase block mb-5">
            Готовы к приключению?
          </span>
          <h2 className="text-5xl lg:text-7xl font-display text-white mb-5 leading-tight">
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(37,99,235,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-base tracking-wide shadow-xl"
              >
                Выбрать яхту
              </motion.button>
            </Link>
            <Link href="/contacts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-2xl glass border border-white/15 hover:border-white/30 text-white font-bold text-base"
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
