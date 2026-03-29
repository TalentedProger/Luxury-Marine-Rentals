import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contacts() {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#050d1a] overflow-hidden">
      {/* Header */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/80 to-[#050d1a]" />
        </div>

        <div ref={headerRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            className="text-sky-400 text-xs font-bold tracking-widest uppercase block mb-4"
          >
            Связаться с нами
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display text-white mb-6"
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

      {/* Content */}
      <section ref={formRef} className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display text-white mb-8">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>

              {/* Cards */}
              {[
                {
                  icon: Phone,
                  title: "Телефон",
                  content: "+7 (812) 333-44-55",
                  sub: "Ежедневно с 9:00 до 21:00",
                  href: "tel:+78123334455",
                  color: "from-sky-400 to-blue-600",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@nevayacht.ru",
                  sub: "Ответим в течение 1 часа",
                  href: "mailto:info@nevayacht.ru",
                  color: "from-violet-400 to-purple-600",
                },
                {
                  icon: MapPin,
                  title: "Главный офис",
                  content: "Яхтенный порт Геркулес",
                  sub: "ул. Яхтенная, 24А, Санкт-Петербург",
                  href: "#",
                  color: "from-emerald-400 to-teal-600",
                },
                {
                  icon: Clock,
                  title: "Часы работы",
                  content: "Пн–Вс: 9:00 – 21:00",
                  sub: "Флот работает круглосуточно",
                  href: "#",
                  color: "from-amber-400 to-orange-600",
                },
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={formInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex items-start gap-4 glass rounded-2xl p-5 block"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center shrink-0`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      {contact.title}
                    </div>
                    <div className="text-white font-bold text-base">{contact.content}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{contact.sub}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-6 lg:p-10 border border-sky-500/10">
                {!submitted ? (
                  <>
                    <h2 className="text-3xl font-display text-white mb-2">ОТПРАВИТЬ ЗАЯВКУ</h2>
                    <p className="text-slate-400 text-sm mb-8">Заполните форму и мы свяжемся с вами в течение 30 минут</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                            Имя *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Александр"
                            className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-slate-600"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                            Фамилия
                          </label>
                          <input
                            type="text"
                            placeholder="Иванов"
                            className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-slate-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                          Телефон *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-slate-600"
                        />
                      </div>

                      <div>
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="example@mail.ru"
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-slate-600"
                        />
                      </div>

                      <div>
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                          Тип судна
                        </label>
                        <select className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all">
                          <option value="" className="bg-[#0a1628]">Не выбрано</option>
                          <option value="speedboat" className="bg-[#0a1628]">Скоростной катер</option>
                          <option value="yacht" className="bg-[#0a1628]">Моторная яхта</option>
                          <option value="sailboat" className="bg-[#0a1628]">Парусная яхта</option>
                          <option value="catamaran" className="bg-[#0a1628]">Катамаран</option>
                          <option value="superyacht" className="bg-[#0a1628]">Суперяхта</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                            Дата
                          </label>
                          <input
                            type="date"
                            className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                            Количество гостей
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="20"
                            placeholder="4"
                            className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-slate-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">
                          Пожелания
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Расскажите о вашем мероприятии, пожеланиях по маршруту, дополнительных услугах..."
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-sky-500/50 transition-all resize-none placeholder:text-slate-600"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(14,165,233,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-base flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                      >
                        <Send className="w-5 h-5" />
                        Отправить заявку
                      </motion.button>

                      <p className="text-slate-600 text-xs text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-display text-white mb-4">ЗАЯВКА ОТПРАВЛЕНА!</h3>
                    <p className="text-slate-400">
                      Мы свяжемся с вами в течение 30 минут. Спасибо!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-3 rounded-xl glass text-sky-400 font-semibold hover:text-white transition-colors"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
