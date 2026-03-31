import { posts } from "@/lib/blog-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог — Neirologic Team | Статьи о разработке, AI и автоматизации",
  description:
    "Полезные статьи о создании сайтов, Telegram-ботов, внедрении ИИ и автоматизации бизнеса. Практические советы от команды Neirologic.",
  alternates: {
    canonical: "https://xn--c1adkchdlkbr.xn--p1ai/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
            Блог
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Полезные <span className="gradient-text">статьи</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-lg">
            Разработка, автоматизация, AI — делимся опытом и помогаем
            разобраться
          </p>
        </div>

        {/* Posts grid */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card p-6 md:p-8 block group hover:border-[var(--color-accent-blue)]/30 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                {post.title}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
                <span>
                  {new Date(post.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span className="ml-auto text-[var(--color-accent-cyan)] font-medium group-hover:translate-x-1 transition-transform">
                  Читать →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to main */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
