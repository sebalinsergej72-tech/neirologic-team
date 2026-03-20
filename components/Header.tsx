"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Работы" },
  { href: "#about", label: "Почему мы" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? "rgba(15, 15, 35, 0.6)"
            : "rgba(255, 255, 255, 0.03)",
          borderColor: scrolled
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(255, 255, 255, 0.06)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
            : "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl rounded-2xl border px-6 py-3 flex items-center justify-between"
        style={{
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2.5 group"
        >
          <Image
            src="/logo-icon.png"
            alt="Neirologic"
            width={52}
            height={52}
            style={{ objectFit: "contain" }}
          />
          <span className="hidden sm:block text-lg font-bold gradient-text">
            neirologic
          </span>
        </button>

        {/* Desktop nav */}
        <nav aria-label="Основная навигация" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-xl text-sm font-medium text-white transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(79, 70, 229, 0.7), rgba(147, 51, 234, 0.7))",
              boxShadow:
                "0 2px 12px rgba(79, 70, 229, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            Связаться
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white/70 rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-white/70 rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white/70 rounded-full"
          />
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-4 right-4 md:hidden rounded-2xl border border-white/10 overflow-hidden"
            style={{
              background: "rgba(15, 15, 35, 0.75)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              boxShadow:
                "0 16px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
            }}
          >
            <div className="flex flex-col items-center gap-1 py-4 px-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full py-2.5 text-white/60 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="w-full h-px bg-white/5 my-1" />
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full py-2.5 text-sm font-medium text-white rounded-xl transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79, 70, 229, 0.5), rgba(147, 51, 234, 0.5))",
                }}
              >
                Связаться
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
