"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Заявка",
    description: "Вы описываете задачу в Telegram или через форму. Мы отвечаем в течение 2 часов.",
    accent: "var(--color-accent-cyan)",
  },
  {
    number: "02",
    title: "Обсуждение",
    description: "Бесплатная консультация: разбираем задачу, предлагаем решение, называем сроки и стоимость.",
    accent: "var(--color-accent-blue)",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Работаем спринтами. Показываем промежуточные результаты, вносим правки на ходу.",
    accent: "var(--color-accent-purple)",
  },
  {
    number: "04",
    title: "Запуск и поддержка",
    description: "Деплоим продукт, обучаем вашу команду. Поддерживаем и развиваем после запуска.",
    accent: "var(--color-accent-cyan)",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--color-accent-cyan)]/5 rounded-full blur-3xl -translate-y-1/2" />
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
            Процесс
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Как мы <span className="gradient-text">работаем</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Прозрачный процесс от первого сообщения до запуска продукта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}

              <div className="glass-card p-8 relative z-10 h-full">
                <div
                  className="text-5xl font-black mb-4 opacity-20"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
