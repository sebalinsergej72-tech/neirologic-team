"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Сайты и лендинги",
    description: "Продающие сайты, которые привлекают клиентов. Адаптивный дизайн, быстрая загрузка, SEO-оптимизация из коробки.",
    benefits: ["Дизайн под ключ", "Мобильная версия", "SEO", "Аналитика"],
    result: "Конверсия от 3%",
    price: "от 30 000 ₽",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Веб-приложения",
    description: "Сложные веб-сервисы и SaaS-платформы: личные кабинеты, CRM, внутренние инструменты, дашборды с real-time данными.",
    benefits: ["React / Next.js", "REST & GraphQL", "Real-time", "Масштабируемость"],
    result: "Запуск от 4 недель",
    price: "от 80 000 ₽",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Telegram-боты и Mini Apps",
    description: "Боты для автоматизации продаж, поддержки клиентов, приёма заявок. Mini Apps с полноценным интерфейсом внутри Telegram.",
    benefits: ["Автоответы", "Платежи", "Mini Apps", "CRM-интеграция"],
    result: "Готово от 1 недели",
    price: "от 15 000 ₽",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Автоматизация бизнеса",
    description: "Связываем сервисы между собой, автоматизируем рутину. CRM, рассылки, документооборот, обработка заказов — без ручного труда.",
    benefits: ["Интеграции API", "Автоворонки", "Документы", "Отчётность"],
    result: "Экономия до 80% времени",
    price: "от 25 000 ₽",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Инструменты под запрос",
    description: "Нестандартная задача? Создаём уникальные инструменты: парсеры, калькуляторы, генераторы, конвертеры — под любой бизнес-процесс.",
    benefits: ["Индивидуальный подход", "Любой стек", "Скрипты", "Плагины"],
    result: "Решение за 3-5 дней",
    price: "от 20 000 ₽",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Внедрение ИИ в бизнес",
    description: "Подключаем AI к вашим процессам: умные чат-боты, генерация контента, анализ данных, классификация и прогнозирование.",
    benefits: ["ChatGPT / Claude", "Обработка данных", "Генерация", "Аналитика"],
    result: "ROI от 300%",
    price: "от 50 000 ₽",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
            Услуги
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Что мы <span className="gradient-text">делаем</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            Полный цикл разработки: от идеи до рабочего продукта. Выберите нужное направление или опишите задачу — подберём решение.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-8 group hover:border-[var(--color-accent-blue)]/30 transition-colors duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent-blue)]/20 to-[var(--color-accent-purple)]/20 flex items-center justify-center text-[var(--color-accent-blue)] mb-5 group-hover:from-[var(--color-accent-blue)]/30 group-hover:to-[var(--color-accent-purple)]/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed text-sm flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {service.benefits.map((b) => (
                  <span
                    key={b}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-[var(--color-text-secondary)] border border-white/5"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-sm font-semibold gradient-text">{service.result}</span>
                <span className="text-sm font-bold text-white">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA after services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--color-text-secondary)] mb-6">
            Не нашли свою задачу? Напишите — подберём решение
          </p>
          <a
            href="https://t.me/neirologic_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-white font-medium hover:bg-white/10 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Написать в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
