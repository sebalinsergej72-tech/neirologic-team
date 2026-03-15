"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="text-lg font-bold gradient-text">neirologic</span>
          </motion.div>

          <p className="text-[var(--color-text-secondary)] text-sm">
            &copy; {new Date().getFullYear()} Neirologic Team. Все права защищены.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://t.me/neirologic_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm"
            >
              Telegram
            </a>
            <a
              href="mailto:hello@neirologic.team"
              className="text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
