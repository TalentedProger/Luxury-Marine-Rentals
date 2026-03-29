import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const fieldClass =
  "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400";

const labelClass =
  "text-slate-500 text-xs font-bold uppercase tracking-wider block mb-2";

export default function Contacts() {
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1600&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>

        <div ref={headerRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-6 h-px bg-blue-400" />
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Связаться с нами</span>
            <div className="w-6 h-px bg-blue-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display text-white mb-5"
          >
            ДАВАЙТЕ
            <br />
            <span className="text-gradient-blue">ПОГОВОРИМ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Готовы помочь с выбором судна, маршрута и организацией любого мероприятия на воде.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Yacht image + Contact Info */}
      <section ref={infoRef} className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Yacht image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl min-h-[400px] lg:min-h-0 shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=85&auto=format&fit=crop"
                alt="Элегантная яхта"
                className="absolute inset-0 w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-display text-2xl mb-1">NEVAYACHT</div>
                <div className="text-slate-300 text-sm">Премиальная аренда яхт · Санкт-Петербург</div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col justify-center space-y-4"
            >
              <h2 className="text-3xl font-display text-slate-900 mb-4">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>

              {[
                {
                  icon: Phone,
                  title: "Телефон",
                  content: "+7 (812) 333-44-55",
                  sub: "Ежедневно с 9:00 до 21:00",
                  href: "tel:+78123334455",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@nevayacht.ru",
                  sub: "Ответим в течение 1 часа",
                  href: "mailto:info@nevayacht.ru",
                },
                {
                  icon: MapPin,
                  title: "Главный офис",
                  content: "Яхтенный порт Геркулес",
                  sub: "ул. Яхтенная, 24А, Санкт-Петербург",
                  href: "#",
                },
                {
                  icon: Clock,
                  title: "Часы работы",
                  content: "Пн–Вс: 9:00 – 21:00",
                  sub: "Флот работает круглосуточно",
                  href: "#",
                },
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={infoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 * i + 0.2 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 card-light-hover rounded-2xl p-5 block"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      {contact.title}
                    </div>
                    <div className="text-slate-900 font-bold text-base">{contact.content}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{contact.sub}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Split Form */}
      <section ref={formRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="card-light rounded-2xl p-6 lg:p-10"
                >
                  <h2 className="text-3xl font-display text-slate-900 mb-2">ОТПРАВИТЬ ЗАЯВКУ</h2>
                  <p className="text-slate-500 text-sm mb-8">
                    Заполните форму и мы свяжемся с вами в течение 30 минут
                  </p>

                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Имя *</label>
                        <input
                          required
                          type="text"
                          placeholder="Александр"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Фамилия</label>
                        <input
                          type="text"
                          placeholder="Иванов"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Телефон *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Email</label>
                      <input
                        type="email"
                        placeholder="example@mail.ru"
                        className={fieldClass}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="card-light rounded-2xl p-6 lg:p-10"
                >
                  <h2 className="text-3xl font-display text-slate-900 mb-2 opacity-0 select-none pointer-events-none">
                    &nbsp;
                  </h2>
                  <p className="text-slate-500 text-sm mb-8 opacity-0 select-none pointer-events-none">
                    &nbsp;
                  </p>

                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Тип судна</label>
                      <select className={fieldClass}>
                        <option value="">Не выбрано</option>
                        <option value="speedboat">Скоростной катер</option>
                        <option value="yacht">Моторная яхта</option>
                        <option value="sailboat">Парусная яхта</option>
                        <option value="catamaran">Катамаран</option>
                        <option value="superyacht">Суперяхта</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Дата</label>
                        <input
                          type="date"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Гостей</label>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          placeholder="4"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Пожелания</label>
                      <textarea
                        rows={4}
                        placeholder="Расскажите о вашем мероприятии, пожеланиях по маршруту, дополнительных услугах..."
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(37,99,235,0.35)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      Отправить заявку
                    </motion.button>

                    <p className="text-slate-400 text-xs text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </div>
                </motion.div>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                <CheckCircle2 className="w-20 h-20 text-blue-600 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-3xl font-display text-slate-900 mb-4">ЗАЯВКА ОТПРАВЛЕНА!</h3>
              <p className="text-slate-500">Мы свяжемся с вами в течение 30 минут. Спасибо!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-3 rounded-xl bg-slate-100 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
              >
                Отправить ещё одну заявку
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
