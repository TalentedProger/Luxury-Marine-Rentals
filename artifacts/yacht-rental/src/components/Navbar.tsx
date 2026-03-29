import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Anchor } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Флот", href: "/fleet" },
  { label: "Маршруты", href: "/routes" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const scrolled = isScrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-3">
            {/* Logo */}
            <Link href="/">
              <motion.div className="flex items-center gap-3 cursor-pointer group" whileHover={{ scale: 1.02 }}>
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                  <Anchor className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className={`font-display text-lg leading-none transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
                    NEVA<span className="text-blue-500">YACHT</span>
                  </div>
                  <div className={`text-[9px] tracking-[0.18em] uppercase leading-none mt-0.5 transition-colors duration-300 ${scrolled ? "text-slate-500" : "text-slate-400"}`}>
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
                        ? "text-blue-600"
                        : scrolled
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-slate-300 hover:text-white"
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {link.label}
                    {location === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+78123334455"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-300 hover:text-white"}`}
              >
                <Phone className="w-4 h-4 text-blue-500" />
                +7 (812) 333-44-55
              </a>
              <Link href="/contacts">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(37,99,235,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-bold tracking-wide shadow-md transition-all"
                >
                  Забронировать
                </motion.button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-slate-700" : "text-white"}`}
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
            className="fixed inset-0 z-40 bg-white pt-20 px-6"
          >
            <nav className="flex flex-col gap-1 mt-4">
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <a href="tel:+78123334455" className="flex items-center gap-2 py-3 text-slate-600 font-semibold mb-4">
                  <Phone className="w-4 h-4 text-blue-500" />
                  +7 (812) 333-44-55
                </a>
                <Link href="/contacts">
                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-bold shadow-lg">
                    Забронировать
                  </button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
