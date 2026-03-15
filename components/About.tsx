"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Быстрый старт",
    description: "Начинаем работу в день обращения. MVP за 2-4 недели. Не тратим время на лишнюю бюрократию.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Фиксированная цена",
    description: "Называем стоимость до начала работ. Никаких скрытых платежей и доплат после запуска.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Прямая связь",
    description: "Общаетесь напрямую с разработчиками в Telegram. Без менеджеров-прослоек и бесконечных созвонов.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    title: "Гарантия результата",
    description: "Доводим проект до рабочего состояния. Бесплатные правки в течение 30 дней после запуска.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-purple)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
            Почему мы
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Работать с нами{" "}
            <span className="gradient-text">выгодно</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            Мы — небольшая команда, которая работает быстро и по делу.
            Без корпоративной волокиты и завышенных ценников.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent-blue)]/20 to-[var(--color-accent-purple)]/20 flex items-center justify-center text-[var(--color-accent-blue)] shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "2 часа", label: "среднее время ответа" },
            { value: "2-4 нед.", label: "до первой версии" },
            { value: "30 дней", label: "гарантия после запуска" },
            { value: "24/7", label: "поддержка в Telegram" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-[var(--color-text-secondary)] text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
