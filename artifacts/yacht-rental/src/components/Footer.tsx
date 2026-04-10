import { Link } from "wouter";
import { motion } from "framer-motion";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";

// Brand-coloured social icons
const socialLinks = [
  {
    label: "ВКонтакте",
    href: "https://vk.com",
    color: "#0077FF",
    bg: "rgba(0,119,255,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.764 3.654c-.453 1.237-.695 1.692-.954 1.692-.258 0-.387-.238-.387-.73V7.5a.5.5 0 0 0-.5-.5h-2.964a.5.5 0 0 0-.5.5v.362c0 .27.22.49.49.49h.51c.27 0 .49.22.49.49V13.5c0 .27-.22.49-.49.49-.37 0-.65-.166-.812-.494L8.578 7.498A.743.743 0 0 0 7.923 7H4.633A.5.5 0 0 0 4.133 7.7l3.49 9.8a.5.5 0 0 0 .47.5h2.96a.5.5 0 0 0 .47-.68l-.87-2.4c-.12-.32-.06-.69.17-.94l.87-.93a.5.5 0 0 1 .74.02l2.88 4.77a.5.5 0 0 0 .43.16h3.01a.5.5 0 0 0 .43-.76l-3.44-5.42a.5.5 0 0 1 .04-.58l3.2-4.03a.5.5 0 0 0-.39-.8z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    color: "#E4405F",
    bg: "rgba(228,64,95,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me",
    color: "#2CA5E0",
    bg: "rgba(44,165,224,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.43 13.835l-2.985-.934c-.648-.203-.66-.648.136-.961l11.66-4.498c.54-.194 1.014.131.653 1.779z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/78123334455",
    color: "#25D366",
    bg: "rgba(37,211,102,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050d1a] border-t border-white/5 overflow-hidden">
      {/* Gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-6 lg:px-8 py-16 lg:py-20">
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
            <div className="flex gap-2.5">
              {socialLinks.map((soc) => (
                <motion.a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: soc.bg, color: soc.color }}
                >
                  {soc.icon}
                </motion.a>
              ))}
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
