import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Clock, Users, ArrowRight, MapPin, Star } from "lucide-react";

const routes = [
  {
    id: 1,
    title: "Форты Кронштадта",
    subtitle: "Исторические крепости в открытом море",
    duration: "4–6 часов",
    distance: "45 км",
    capacity: "до 20 чел.",
    price: "от 25 000 ₽",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80",
    tags: ["Исторический", "Популярный"],
    description:
      "Уникальное путешествие к легендарным фортам Финского залива. Вы увидите форт Александр I, Константин, Зверев и другие грандиозные морские крепости. Профессиональный гид расскажет историю оборонительных сооружений.",
    highlights: [
      "8 фортов по маршруту",
      "Возможность высадки",
      "Профессиональный экскурсовод",
      "Обед на борту",
    ],
    gradient: "from-sky-600 to-blue-800",
  },
  {
    id: 2,
    title: "Петергоф с моря",
    subtitle: "Дворцово-парковый комплекс с воды",
    duration: "3 часа",
    distance: "30 км",
    capacity: "до 10 чел.",
    price: "от 18 000 ₽",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80",
    tags: ["Культурный", "Семейный"],
    description:
      "Подплывите к Петергофу так, как это делали гости Петра Великого. Вид на дворцовый комплекс и фонтаны с моря — зрелище, которое невозможно забыть. Гармоничное сочетание истории и природы.",
    highlights: [
      "Морской путь Петра I",
      "Вид на большой каскад",
      "Фотосессия на борту",
      "Гид в подарок",
    ],
    gradient: "from-emerald-600 to-teal-800",
  },
  {
    id: 3,
    title: "Острова Финского залива",
    subtitle: "Дикая природа балтийских островов",
    duration: "6–8 часов",
    distance: "80 км",
    capacity: "до 12 чел.",
    price: "от 45 000 ₽",
    rating: 4.9,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1508553823590-1c68ebeaaea5?w=1200&q=80",
    tags: ["Приключение", "Природа"],
    description:
      "Исследуйте нетронутые острова Финского залива: Мощный, Сескар, Малый и Большой Тютерс. Купание в открытом море, рыбалка, пикник на дикой природе — лучшее лето в вашей жизни.",
    highlights: [
      "Несколько островов",
      "Купание в заливе",
      "Рыбалка с борта",
      "Барбекю на острове",
    ],
    gradient: "from-violet-600 to-purple-800",
  },
  {
    id: 4,
    title: "Рассветный рейс",
    subtitle: "Встреча рассвета над Невской губой",
    duration: "2–3 часа",
    distance: "20 км",
    capacity: "до 8 чел.",
    price: "от 12 000 ₽",
    rating: 5.0,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1586942593568-9892b41d20d3?w=1200&q=80",
    tags: ["Романтика", "Эксклюзив"],
    description:
      "Ранний выход в 5:00. Встреча белой ночи или рассвета над акваторией. Чай, кофе и лёгкий завтрак на борту. Разводные мосты, пустой город, тишина воды — абсолютная романтика.",
    highlights: [
      "Выход в 5:00 утра",
      "Завтрак на борту",
      "Белые ночи",
      "Разводные мосты",
    ],
    gradient: "from-amber-500 to-orange-700",
  },
  {
    id: 5,
    title: "Вечерний Петербург",
    subtitle: "Ночной круиз по каналам и рекам",
    duration: "3 часа",
    distance: "15 км",
    capacity: "до 10 чел.",
    price: "от 20 000 ₽",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    tags: ["Вечерний", "Городской"],
    description:
      "Вечерний круиз по Неве и каналам Санкт-Петербурга. Подсвеченные дворцы, мосты и набережные создают сказочную атмосферу. Разводка мостов в исполнении природы — зрелище на всю жизнь.",
    highlights: [
      "Разводка мостов",
      "Подсвеченный Эрмитаж",
      "Шампанское на борту",
      "Канал Грибоедова",
    ],
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    id: 6,
    title: "Рыбалка в заливе",
    subtitle: "Профессиональная морская рыбалка",
    duration: "5–8 часов",
    distance: "50 км",
    capacity: "до 6 чел.",
    price: "от 35 000 ₽",
    rating: 4.7,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
    tags: ["Рыбалка", "Актив"],
    description:
      "Морская рыбалка с профессиональным рыбным инструктором. Снасти, приманки и оборудование предоставляются. Треска, камбала, угорь — богатые уловы Финского залива. Улов можно приготовить на борту.",
    highlights: [
      "Снасти в комплекте",
      "Инструктор по рыбалке",
      "Приготовление улова",
      "Лицензия включена",
    ],
    gradient: "from-green-600 to-emerald-800",
  },
];

function RouteCard({ route, index }: { route: typeof routes[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-3xl h-72 lg:h-96 ${!isEven ? "lg:order-last" : ""}`}>
        <motion.img
          src={route.image}
          alt={route.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {route.tags.map(tag => (
            <span key={tag} className="glass rounded-full px-3 py-1 text-xs font-bold text-sky-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-bold text-amber-400 flex items-center gap-1">
          <Star className="w-3 h-3 fill-amber-400" />
          {route.rating}
          <span className="text-slate-400">({route.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">
            Маршрут {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-3xl lg:text-4xl font-display text-white mb-2">{route.title}</h3>
        <p className="text-sky-300 text-base font-semibold mb-4">{route.subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{route.description}</p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {route.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              <span className="text-slate-300 text-xs font-medium">{h}</span>
            </div>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-6 mb-6 text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 text-sky-400" />
            {route.duration}
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Users className="w-4 h-4 text-sky-400" />
            {route.capacity}
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-sky-400" />
            {route.distance}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-4 flex-wrap">
          <div>
            <span className="text-3xl font-display text-white">{route.price}</span>
          </div>
          <Link href="/contacts">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(14,165,233,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm flex items-center gap-2 group"
            >
              Забронировать
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Routes() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-[#050d1a]">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508553823590-1c68ebeaaea5?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/80 via-[#050d1a]/50 to-[#050d1a]" />
        </div>

        <div ref={headerRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-4"
          >
            Морские маршруты
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display text-white mb-6"
          >
            МАРШРУТЫ
            <br />
            <span className="text-gradient-blue">ВАШЕЙ МЕЧТЫ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            6 уникальных маршрутов по акватории Санкт-Петербурга и Финского залива. Каждый рейс — это незабываемое приключение.
          </motion.p>
        </div>
      </section>

      {/* Routes List */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 lg:space-y-32">
          {routes.map((route, i) => (
            <RouteCard key={route.id} route={route} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
