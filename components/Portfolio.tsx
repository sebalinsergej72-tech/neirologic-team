"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Всё сошлось!",
    type: "Веб-сервис",
    description:
      "Сервис автоматического формирования КУДиР для ИП на УСН. Загрузка банковских выписок, классификация операций и генерация отчётности в PDF и Excel.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    color: "from-emerald-500/20 to-green-500/20",
    accentColor: "text-emerald-400",
    url: "https://www.всесошлось.рф",
    image: "/vsesoshlos.png",
  },
  {
    title: "Polymarket Smart Copy Bot",
    type: "Веб-сервис",
    description:
      "Платформа для автоматического копитрейдинга на Polymarket. Дашборд с аналитикой, отслеживание стратегий топ-трейдеров и автоматическое копирование сделок.",
    tags: ["React", "Python", "Polymarket API", "Analytics"],
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "text-violet-400",
    beta: true,
    image: "/polymarket-bot.png",
  },
  {
    title: "VitessBot",
    type: "Telegram-бот",
    description:
      "Telegram-бот для скачивания видео и аудио из Instagram и YouTube. Быстрая конвертация и отправка файлов прямо в чат.",
    tags: ["Telegram Bot", "Python", "yt-dlp", "FFmpeg"],
    color: "from-sky-500/20 to-blue-500/20",
    accentColor: "text-sky-400",
    url: "https://t.me/vitessbot_bot",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-blue)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent-purple)]/5 rounded-full blur-3xl" />
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
            Портфолио
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Наши <span className="gradient-text">работы</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Реальные проекты, которые работают и приносят результат
          </p>
        </motion.div>

        {/* Projects — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`glass-card overflow-hidden group block ${"url" in project && project.url ? "cursor-pointer" : "cursor-default"}`}
              onClick={() => {
                if ("url" in project && project.url) {
                  window.open(project.url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {/* Project image */}
              <div
                className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.type} разработка от Neirologic Team`}
                      loading="lazy"
                      width={600}
                      height={224}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className={`text-4xl font-black ${project.accentColor} opacity-30`}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </>
                )}
                {/* Type badge + beta */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-sm text-white">
                    {project.type}
                  </span>
                  {"beta" in project && project.beta && (
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/80 backdrop-blur-sm text-black">
                      Beta
                    </span>
                  )}
                </div>
                {/* External link icon — only for projects with URL */}
                {"url" in project && project.url && (
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-medium ${project.accentColor}`}>
                    {project.type}
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-[var(--color-text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA under portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 glass-card p-10"
        >
          <h3 className="text-2xl font-bold mb-3">
            Хотите такой же результат?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
            Расскажите о вашей задаче — предложим решение и назовём сроки уже на первом созвоне
          </p>
          <a
            href="https://t.me/neirologic_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Обсудить проект
          </a>
        </motion.div>
      </div>
    </section>
  );
}
