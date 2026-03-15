"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-accent-blue)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
            Контакты
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Готовы <span className="gradient-text">начать</span>?
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-lg">
            Напишите нам — обсудим задачу и предложим решение. Бесплатно.
          </p>
        </motion.div>

        {/* Main CTA — Telegram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-10 text-center mb-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2AABEE]/20 to-[#229ED9]/20 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-[#2AABEE]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Самый быстрый способ — Telegram</h3>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
            Напишите нам в Telegram — ответим в течение 2 часов. Обсудим задачу, предложим решение и назовём стоимость.
          </p>
          <a
            href="https://t.me/neirologic_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#2AABEE] to-[#229ED9] text-white font-semibold hover:opacity-90 transition-all hover:scale-105 text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Написать в Telegram
          </a>
        </motion.div>

        {/* Alternative contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.a
            href="mailto:hello@neirologic.team"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card p-5 text-center hover:border-[var(--color-accent-blue)]/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-blue)]/20 flex items-center justify-center text-[var(--color-accent-blue)] mx-auto mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mb-1">Email</p>
            <p className="text-sm font-medium group-hover:text-white transition-colors">hello@neirologic.team</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-card p-5 text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-purple)]/20 flex items-center justify-center text-[var(--color-accent-purple)] mx-auto mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mb-1">Формат</p>
            <p className="text-sm font-medium">Удалённая команда</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass-card p-5 text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-cyan)]/20 flex items-center justify-center text-[var(--color-accent-cyan)] mx-auto mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mb-1">Ответ</p>
            <p className="text-sm font-medium">В течение 2 часов</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
