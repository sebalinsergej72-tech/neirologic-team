"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#hero"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image
              src="/logo-icon.png"
              alt="Neirologic"
              width={52}
              height={52}
              style={{ objectFit: "contain" }}
            />
            <span className="text-xl font-bold gradient-text">
              neirologic
            </span>
          </motion.a>

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
