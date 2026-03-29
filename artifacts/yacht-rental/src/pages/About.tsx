import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, Users, Ship, Heart } from "lucide-react";

const team = [
  {
    name: "Максим Петров",
    role: "Генеральный директор & Капитан",
    years: "15 лет опыта",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&crop=face",
    bio: "Опытный мореплаватель, основавший NevaYacht в 2015 году. Прошёл путь от простого матроса до капитана класса А.",
  },
  {
    name: "Анна Соколова",
    role: "Директор по сервису",
    years: "10 лет опыта",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&q=80&auto=format&fit=crop&crop=face",
    bio: "Отвечает за безупречный сервис и счастье каждого клиента. Создала систему стандартов качества NevaYacht.",
  },
  {
    name: "Игорь Волков",
    role: "Главный механик",
    years: "20 лет опыта",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&crop=face",
    bio: "Поддерживает весь флот в идеальном техническом состоянии. Сертифицированный инженер Volvo Marine и Mercury.",
  },
  {
    name: "Дарья Новикова",
    role: "Event Manager",
    years: "8 лет опыта",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop&crop=face",
    bio: "Организует корпоративные мероприятия, свадьбы и праздники на воде. Каждое событие — произведение искусства.",
  },
];

const values = [
  { icon: Award, title: "Качество", desc: "Только суда в идеальном состоянии. Техосмотр каждую неделю." },
  { icon: Users, title: "Команда", desc: "Профессиональные капитаны с лицензиями и богатым опытом." },
  { icon: Ship, title: "Флот", desc: "20+ судов разных классов для любых задач и бюджетов." },
  { icon: Heart, title: "Забота", desc: "Ваш комфорт и безопасность — наш главный приоритет." },
];

export default function About() {
  const headerRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566847438217-76e82d3f7ae9?w=1600&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900" />
        </div>

        <div ref={headerRef} className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-6 h-px bg-blue-400" />
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">О компании</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display text-white mb-6"
            >
              МЫ СОЗДАЁМ
              <br />
              <span className="text-gradient-blue">НЕЗАБЫВАЕМЫЕ</span>
              <br />
              МОМЕНТЫ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-300 text-lg leading-relaxed max-w-xl"
            >
              NevaYacht — ведущая компания по аренде яхт и катеров в Санкт-Петербурге с 2015 года. За 10 лет работы мы создали тысячи незабываемых историй на воде.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "2015", label: "Год основания" },
              { value: "20+", label: "Судов в флоте" },
              { value: "2000+", label: "Счастливых клиентов" },
              { value: "10 лет", label: "На рынке СПб" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-display text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl h-96 lg:h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80&auto=format&fit=crop"
                  alt="История компании"
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-blue-600 rounded-2xl p-6 max-w-xs shadow-xl"
              >
                <div className="text-4xl font-display text-white mb-1">10 лет</div>
                <div className="text-white font-bold mb-1">На рынке аренды яхт</div>
                <div className="text-blue-200 text-sm">С 2015 по 2025</div>
              </motion.div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-5"
              >
                <div className="w-6 h-px bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Наша история</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-display text-slate-900 mb-6"
              >
                ИСТОРИЯ
                <br />
                <span className="text-gradient-blue">NEVAYACHT</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-slate-500 text-base leading-relaxed"
              >
                <p>
                  Компания NevaYacht была основана в 2015 году капитаном Максимом Петровым с одной небольшой яхтой и огромной мечтой — сделать морские прогулки по Санкт-Петербургу доступными и незабываемыми.
                </p>
                <p>
                  За 10 лет мы выросли от одного судна до полноценного флота из более чем 20 единиц различных классов. Сегодня NevaYacht — признанный лидер рынка аренды яхт в Северо-Западном регионе.
                </p>
                <p>
                  Каждый год мы расширяем флот, улучшаем сервис и открываем новые маршруты. Наша цель — чтобы каждый клиент возвращался к нам снова и приводил друзей.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link href="/fleet">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(37,99,235,0.3)" }}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold flex items-center gap-2 group shadow-lg"
                  >
                    Наш флот
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <div className="w-6 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Принципы</span>
              <div className="w-6 h-px bg-blue-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl lg:text-5xl font-display text-slate-900"
            >
              НАШИ <span className="text-gradient-blue">ЦЕННОСТИ</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-light-hover rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mx-auto mb-5 shadow-md">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0 }}
              animate={teamInView ? { opacity: 1 } : {}}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <div className="w-6 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Экипаж</span>
              <div className="w-6 h-px bg-blue-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-display text-slate-900"
            >
              НАША <span className="text-gradient-blue">КОМАНДА</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="card-light rounded-2xl p-4">
                  <div className="text-slate-900 font-bold mb-0.5">{member.name}</div>
                  <div className="text-blue-600 text-xs font-semibold mb-2">{member.role}</div>
                  <div className="text-slate-400 text-xs">{member.years}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
