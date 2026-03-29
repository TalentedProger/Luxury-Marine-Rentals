import { Link } from "wouter";
import { motion } from "framer-motion";
import { Anchor, Phone, Mail, MapPin, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050d1a] border-t border-white/5 overflow-hidden">
      {/* Gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display text-2xl text-white leading-none">
                  NEVA<span className="text-sky-400">YACHT</span>
                </div>
                <div className="text-xs text-slate-500 tracking-[0.2em] uppercase">Санкт-Петербург</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Премиальная аренда яхт, катеров и катамаранов в Санкт-Петербурге. Незабываемые морские приключения с 2015 года.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Наш флот
            </h4>
            <ul className="space-y-3">
              {["Скоростные катера", "Моторные яхты", "Парусные яхты", "Катамараны", "RIB-катера", "Суперяхты"].map((item) => (
                <li key={item}>
                  <Link href="/fleet">
                    <span className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Услуги
            </h4>
            <ul className="space-y-3">
              {[
                "Аренда с капитаном",
                "Корпоративные мероприятия",
                "Романтические прогулки",
                "Дни рождения на воде",
                "Рыбалка",
                "Морские маршруты",
              ].map((item) => (
                <li key={item}>
                  <Link href="/routes">
                    <span className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Контакты
            </h4>
            <div className="space-y-4">
              <a href="tel:+78123334455" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold group-hover:text-sky-400 transition-colors">
                    +7 (812) 333-44-55
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">Ежедневно 9:00–21:00</div>
                </div>
              </a>
              <a href="mailto:info@nevayacht.ru" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold group-hover:text-sky-400 transition-colors">
                    info@nevayacht.ru
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">Ответим за 1 час</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">
                    Яхтенный порт Геркулес
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">ул. Яхтенная, 24А, СПб</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 NevaYacht. Все права защищены.
          </p>
          <div className="flex gap-6">
            <span className="text-slate-500 hover:text-slate-300 text-sm cursor-pointer transition-colors">
              Политика конфиденциальности
            </span>
            <span className="text-slate-500 hover:text-slate-300 text-sm cursor-pointer transition-colors">
              Договор аренды
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
