"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Сколько стоит разработка?",
    answer:
      "Зависит от сложности. Лендинг — от 30 000 руб., Telegram-бот — от 15 000 руб., веб-приложение — от 80 000 руб. Точную стоимость назовём после обсуждения задачи. Консультация бесплатная.",
  },
  {
    question: "Какие сроки разработки?",
    answer:
      "Telegram-бот — от 3 дней. Лендинг — от 3 дней. Веб-приложение — от 2 недель. Сложный SaaS — от 2 месяцев. Точные сроки зависят от объёма задач и фиксируются в договоре.",
  },
  {
    question: "Работаете по договору?",
    answer:
      "Да. Оформляем договор с ТЗ, сроками и фиксированной стоимостью. Оплата поэтапная: обычно 50% предоплата и 50% после сдачи проекта.",
  },
  {
    question: "Что если мне не понравится результат?",
    answer:
      "Мы показываем промежуточные результаты на каждом этапе — вы можете вносить правки по ходу. После запуска — 30 дней бесплатных правок. Если результат кардинально не устроит, возвращаем предоплату.",
  },
  {
    question: "Помогаете с дизайном или нужен свой макет?",
    answer:
      "Делаем всё под ключ: от проектирования интерфейса до финального дизайна. Свой макет — плюс, но не обязателен. Можем работать по референсу или создать дизайн с нуля.",
  },
  {
    question: "Поддерживаете проект после запуска?",
    answer:
      "Да. Предлагаем ежемесячную поддержку: хостинг, обновления, мелкие доработки, мониторинг. Стоимость зависит от объёма — обсуждаем индивидуально.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left gap-4"
      >
        <span className="font-semibold text-white">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-accent-blue)]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed text-sm border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
