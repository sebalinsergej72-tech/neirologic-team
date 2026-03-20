"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = ["#4f46e5", "#9333ea", "#06b6d4", "#6366f1"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 70, 229, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.4, 0,
        canvas.width * 0.3, canvas.height * 0.4, 300
      );
      gradient1.addColorStop(0, "rgba(79, 70, 229, 0.15)");
      gradient1.addColorStop(1, "rgba(79, 70, 229, 0)");
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.6, 0,
        canvas.width * 0.7, canvas.height * 0.6, 250
      );
      gradient2.addColorStop(0, "rgba(147, 51, 234, 0.12)");
      gradient2.addColorStop(1, "rgba(147, 51, 234, 0)");
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
      });

      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();
    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

const clients = [
  "Сайты и лендинги",
  "Веб-приложения",
  "Telegram-боты",
  "AI-автоматизация",
  "Mini Apps",
  "Кастомные инструменты",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      <AnimatedBackground />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium glass-card text-[var(--color-accent-cyan)]">
            Разработка IT-решений под ключ
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          Превращаем ваши идеи в{" "}
          <span className="gradient-text">работающий продукт</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Создаём сайты, веб-приложения, Telegram-ботов и внедряем ИИ в бизнес.
          <br className="hidden md:block" />
          <span className="text-white font-medium">От заявки до запуска — от 3 дней.</span>
        </motion.p>

        {/* Service tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto"
        >
          {clients.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[var(--color-text-secondary)]"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://t.me/neirologic_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-semibold hover:opacity-90 transition-all hover:scale-105 text-lg flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Обсудить проект
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-all text-lg"
          >
            Смотреть работы
          </a>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 text-sm text-[var(--color-text-secondary)]/60"
        >
          Бесплатная консультация &bull; Ответ в течение 2 часов
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
