"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Алексей К.",
    role: "Основатель стартапа",
    text: "Заказывали веб-приложение для аналитики. Ребята сделали MVP за 3 недели — быстрее, чем обещали. Общение без воды, всё по делу.",
    rating: 5,
  },
  {
    name: "Мария С.",
    role: "Владелица интернет-магазина",
    text: "Сделали Telegram-бота для приёма заказов. Клиенты в восторге — заказы теперь идут прямо в бот, без звонков. Окупился за первый месяц.",
    rating: 5,
  },
  {
    name: "Дмитрий В.",
    role: "Руководитель отдела продаж",
    text: "Автоматизировали рутину: CRM, рассылки, отчёты. Сэкономили команде 20 часов в неделю. Фиксированная цена — без сюрпризов.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[var(--color-accent-cyan)]/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
            Отзывы
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-8 flex flex-col"
            >
              <Stars count={t.rating} />
              <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4 mb-6 flex-1 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
