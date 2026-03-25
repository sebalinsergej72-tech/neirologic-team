"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  "Сайт / лендинг",
  "Веб-приложение",
  "Telegram-бот",
  "Автоматизация бизнеса",
  "AI-интеграция",
  "Другое",
];

const timelines = [
  "Срочно (3-7 дней)",
  "1-2 недели",
  "2-4 недели",
  "1-2 месяца",
  "Не определились",
];

const BUDGET_MIN = 10000;
const BUDGET_MAX = 500000;
const BUDGET_STEP = 5000;

function formatBudget(value: number) {
  if (value >= BUDGET_MAX) return "500 000+ ₽";
  return value.toLocaleString("ru-RU") + " ₽";
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    timeline: "",
    budgetMin: 30000,
    budgetMax: 150000,
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, budget: `${formatBudget(form.budgetMin)} — ${formatBudget(form.budgetMax)}` }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Ошибка отправки");
      }

      setSent(true);
      setTimeout(() => {
        setIsOpen(false);
        setSent(false);
        setForm({ name: "", company: "", phone: "", email: "", service: "", timeline: "", budgetMin: 30000, budgetMax: 150000, message: "" });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка отправки");
    } finally {
      setSending(false);
    }
  };

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
            Расскажите о проекте — мы свяжемся и предложим решение. Бесплатно.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-10 text-center mb-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent-blue)]/20 to-[var(--color-accent-purple)]/20 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-[var(--color-accent-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Оставьте заявку — мы свяжемся</h3>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
            Заполните форму — мы ответим в течение 2 часов. Обсудим задачу, предложим решение и назовём стоимость.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-semibold hover:opacity-90 transition-all hover:scale-105 text-lg cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            Обсудить проект
          </button>
        </motion.div>

        {/* Alternative contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.a
            href="https://t.me/neirologic_bot"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card p-5 text-center hover:border-[var(--color-accent-blue)]/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2AABEE]/20 flex items-center justify-center text-[#2AABEE] mx-auto mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mb-1">Telegram</p>
            <p className="text-sm font-medium group-hover:text-white transition-colors">@neirologic_bot</p>
          </motion.a>

          <motion.a
            href="mailto:hello@neirologic.team"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
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

      {/* Modal Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => !sending && setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card p-6 md:p-8"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-[var(--color-text-secondary)]">Мы свяжемся с вами в течение 2 часов</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-sm font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
                      Оставить заявку
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2">
                      Расскажите о <span className="gradient-text">проекте</span>
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name + Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Ваше имя *"
                          required
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--color-border-glass)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Компания"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--color-border-glass)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          placeholder="Телефон *"
                          required
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--color-border-glass)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--color-border-glass)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 3: Service + Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <select
                          required
                          value={form.service}
                          onChange={(e) => update("service", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--color-border-glass)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors appearance-none cursor-pointer"
                          style={{ colorScheme: "dark" }}
                        >
                          <option value="" disabled>Услуга *</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#1a1a3a]">{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <select
                          value={form.timeline}
                          onChange={(e) => update("timeline", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--color-border-glass)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors appearance-none cursor-pointer"
                          style={{ colorScheme: "dark" }}
                        >
                          <option value="" disabled>Сроки</option>
                          {timelines.map((t) => (
                            <option key={t} value={t} className="bg-[#1a1a3a]">{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Range Slider */}
                    <div className="px-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                          {formatBudget(form.budgetMin)}
                        </span>
                        <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                          {formatBudget(form.budgetMax)}
                        </span>
                      </div>
                      <div className="relative h-2">
                        {/* Track background */}
                        <div className="absolute inset-0 rounded-full bg-white/10" />
                        {/* Active range */}
                        <div
                          className="absolute h-full rounded-full"
                          style={{
                            left: `${((form.budgetMin - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100}%`,
                            right: `${100 - ((form.budgetMax - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100}%`,
                            background: "linear-gradient(to right, var(--color-accent-blue), var(--color-accent-purple))",
                          }}
                        />
                        {/* Min slider */}
                        <input
                          type="range"
                          min={BUDGET_MIN}
                          max={BUDGET_MAX}
                          step={BUDGET_STEP}
                          value={form.budgetMin}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val < form.budgetMax) {
                              setForm((prev) => ({ ...prev, budgetMin: val }));
                            }
                          }}
                          className="absolute inset-0 w-full appearance-none bg-transparent budget-slider-thumb cursor-pointer"
                          style={{ zIndex: form.budgetMin > BUDGET_MAX - BUDGET_STEP * 2 ? 5 : 3 }}
                        />
                        {/* Max slider */}
                        <input
                          type="range"
                          min={BUDGET_MIN}
                          max={BUDGET_MAX}
                          step={BUDGET_STEP}
                          value={form.budgetMax}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val > form.budgetMin) {
                              setForm((prev) => ({ ...prev, budgetMax: val }));
                            }
                          }}
                          className="absolute inset-0 w-full appearance-none bg-transparent budget-slider-thumb cursor-pointer"
                          style={{ zIndex: 4 }}
                        />
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-3">
                        Прозрачный бюджет поможет нам оправдать ожидания. Не уверены? Подберём оптимальное решение под вас!
                      </p>
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        placeholder="Расскажите о проекте"
                        rows={4}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--color-border-glass)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {sending ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Отправляем...
                        </span>
                      ) : (
                        "Отправить заявку"
                      )}
                    </button>

                    <p className="text-xs text-[var(--color-text-secondary)] text-center">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
