import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Anchor } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050d1a] flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-[200px] font-display text-sky-500/10 leading-none select-none mb-4">
            404
          </div>
          <Anchor className="w-16 h-16 text-sky-400 mx-auto mb-6 -mt-20" />
          <h1 className="text-4xl lg:text-5xl font-display text-white mb-4">
            СТРАНИЦА НЕ НАЙДЕНА
          </h1>
          <p className="text-slate-400 text-lg mb-10">
            Кажется, вы попали в открытое море без карты
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              На главную
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
