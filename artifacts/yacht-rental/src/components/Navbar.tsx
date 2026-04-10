import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Anchor } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Флот", href: "/fleet" },
  { label: "Маршруты", href: "/routes" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location === "/";
  const transparent = isHome && !scrolled && !isMobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent shadow-none"
            : "bg-white/95 backdrop-blur-lg shadow-sm"
        }`}
      >
        <div className="max-w-[88rem] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-3">
            {/* Logo */}
            <Link href="/">
              <motion.div className="flex items-center gap-3 cursor-pointer group" whileHover={{ scale: 1.02 }}>
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                  <Anchor className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className={`font-display text-lg leading-none transition-colors duration-300 ${
                    transparent ? "text-white" : "text-slate-900"
                  }`}>
                    NEVA<span className="text-blue-400">YACHT</span>
                  </div>
                  <div className={`text-[9px] tracking-[0.18em] uppercase leading-none mt-0.5 transition-colors duration-300 ${
                    transparent ? "text-white/70" : "text-slate-500"
                  }`}>
                    Санкт-Петербург
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    className={`relative px-4 py-2 text-sm font-semibold tracking-wide cursor-pointer transition-colors duration-200 ${
                      location === link.href
                        ? transparent ? "text-white" : "text-blue-600"
                        : transparent
                          ? "text-white/80 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {link.label}
                    {location === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4/5 rounded-full ${
                          transparent ? "bg-white" : "bg-blue-600"
                        }`}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contacts">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(37,99,235,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wide shadow-md transition-all ${
                    transparent
                      ? "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                      : "bg-gradient-to-r from-blue-700 to-blue-500 text-white"
                  }`}
                >
                  Забронировать
                </motion.button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden p-2 transition-colors ${transparent ? "text-white" : "text-slate-700"}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col overflow-hidden"
            style={{ height: "100dvh" }}
          >
            {/* Top: same height as navbar header so links start right below it */}
            <div className="h-16 shrink-0" />

            {/* Nav links */}
            <nav className="flex flex-col gap-1 px-6 pt-4 shrink-0">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link href={link.href}>
                    <div className={`py-4 text-xl font-bold border-b border-slate-100 cursor-pointer transition-colors ${
                      location === link.href ? "text-blue-600" : "text-slate-800"
                    }`}>
                      {link.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Phone + socials — grows to fill remaining space, centered vertically */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="flex-1 flex flex-col justify-center px-6"
            >
              <a
                href="tel:+78001234567"
                className="flex items-center gap-3 text-slate-900 font-bold text-lg mb-5 hover:text-blue-600 transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.97-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                +7 (800) 123-45-67
              </a>

              <div className="flex items-center gap-3">
                {[
                  {
                    label: "ВКонтакте",
                    href: "https://vk.com",
                    color: "#0077FF",
                    bg: "#EBF3FF",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.764 3.654c-.453 1.237-.695 1.692-.954 1.692-.258 0-.387-.238-.387-.73V7.5a.5.5 0 0 0-.5-.5h-2.964a.5.5 0 0 0-.5.5v.362c0 .27.22.49.49.49h.51c.27 0 .49.22.49.49V13.5c0 .27-.22.49-.49.49-.37 0-.65-.166-.812-.494L8.578 7.498A.743.743 0 0 0 7.923 7H4.633A.5.5 0 0 0 4.133 7.7l3.49 9.8a.5.5 0 0 0 .47.5h2.96a.5.5 0 0 0 .47-.68l-.87-2.4c-.12-.32-.06-.69.17-.94l.87-.93a.5.5 0 0 1 .74.02l2.88 4.77a.5.5 0 0 0 .43.16h3.01a.5.5 0 0 0 .43-.76l-3.44-5.42a.5.5 0 0 1 .04-.58l3.2-4.03a.5.5 0 0 0-.39-.8z"/></svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "https://instagram.com",
                    color: "#E4405F",
                    bg: "#FDEEF1",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    ),
                  },
                  {
                    label: "Telegram",
                    href: "https://t.me",
                    color: "#2CA5E0",
                    bg: "#E8F5FB",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.43 13.835l-2.985-.934c-.648-.203-.66-.648.136-.961l11.66-4.498c.54-.194 1.014.131.653 1.779z"/></svg>
                    ),
                  },
                  {
                    label: "WhatsApp",
                    href: "https://wa.me/78123334455",
                    color: "#25D366",
                    bg: "#E9FAF0",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    ),
                  },
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    aria-label={soc.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full transition-all flex items-center justify-center"
                    style={{ background: soc.bg, color: soc.color }}
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Book button — pinned to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 pb-8 pt-4 shrink-0"
            >
              <Link href="/contacts">
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-bold shadow-lg">
                  Забронировать
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
