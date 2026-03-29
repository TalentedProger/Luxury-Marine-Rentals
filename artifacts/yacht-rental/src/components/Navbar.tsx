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
  const [location] = useLocation();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-500"
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
                  <div className="font-display text-lg leading-none text-slate-900 transition-colors duration-300">
                    NEVA<span className="text-blue-500">YACHT</span>
                  </div>
                  <div className="text-[9px] tracking-[0.18em] uppercase leading-none mt-0.5 text-slate-500 transition-colors duration-300">
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
                        : "text-slate-600 hover:text-slate-900"
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
              className="lg:hidden p-2 transition-colors text-slate-700"
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
