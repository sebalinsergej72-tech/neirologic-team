import { getPost, getAllSlugs, posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Neirologic Team`,
    description: post.description,
    alternates: {
      canonical: `https://xn--c1adkchdlkbr.xn--p1ai/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listItems: string[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="list-disc list-inside space-y-1 text-[var(--color-text-secondary)] leading-relaxed mb-6 ml-2"
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  function flushTable() {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <div
          key={`table-${elements.length}`}
          className="overflow-x-auto mb-6"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border-glass)]">
                {header.map((cell, idx) => (
                  <th
                    key={idx}
                    className="text-left py-2 px-3 text-[var(--color-text-primary)] font-semibold"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="border-b border-[var(--color-border-glass)]/50"
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="py-2 px-3 text-[var(--color-text-secondary)]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  }

  function renderInline(text: string): React.ReactNode {
    // Bold
    const parts = text.split(/\*\*(.+?)\*\*/g);
    if (parts.length > 1) {
      return parts.map((part, idx) =>
        idx % 2 === 1 ? (
          <strong key={idx} className="text-[var(--color-text-primary)] font-semibold">
            {part}
          </strong>
        ) : (
          renderLinks(part)
        )
      );
    }
    return renderLinks(text);
  }

  function renderLinks(text: string): React.ReactNode {
    const parts = text.split(/\[(.+?)\]\((.+?)\)/g);
    if (parts.length > 1) {
      const nodes: React.ReactNode[] = [];
      for (let j = 0; j < parts.length; j += 3) {
        if (parts[j]) nodes.push(parts[j]);
        if (parts[j + 1]) {
          nodes.push(
            <a
              key={j}
              href={parts[j + 2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-cyan)] hover:underline"
            >
              {parts[j + 1]}
            </a>
          );
        }
      }
      return nodes;
    }
    return text;
  }

  while (i < lines.length) {
    const line = lines[i];

    // Table row
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      flushList();
      const cells = line
        .trim()
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());
      // Skip separator row
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        i++;
        continue;
      }
      tableRows.push(cells);
      inTable = true;
      i++;
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Empty line
    if (line.trim() === "") {
      flushList();
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl font-bold text-[var(--color-text-primary)] mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // List item
    if (line.trim().startsWith("- ")) {
      listItems.push(line.trim().slice(2));
      i++;
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line.trim())) {
      listItems.push(line.trim().replace(/^\d+\.\s/, ""));
      i++;
      continue;
    }

    // Paragraph
    flushList();
    elements.push(
      <p
        key={`p-${i}`}
        className="text-[var(--color-text-secondary)] leading-relaxed mb-4"
      >
        {renderInline(line)}
      </p>
    );
    i++;
  }

  flushList();
  flushTable();
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  // Find related posts
  const related = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Главная
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            Блог
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)] truncate">
            {post.title}
          </span>
        </nav>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-10 pb-8 border-b border-[var(--color-border-glass)]">
          <span>
            {new Date(post.date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>Neirologic Team</span>
        </div>

        {/* Content */}
        <div className="prose-custom">{renderMarkdown(post.content)}</div>

        {/* CTA */}
        <div className="glass-card p-8 mt-12 text-center">
          <h3 className="text-xl font-bold mb-3">
            Нужна помощь с проектом?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Обсудим вашу задачу бесплатно и предложим решение
          </p>
          <a
            href="https://t.me/neirologic_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Написать в Telegram
          </a>
        </div>

        {/* Related posts */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Читайте также</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="glass-card p-5 group hover:border-[var(--color-accent-blue)]/30 transition-all"
              >
                <h4 className="font-semibold mb-2 group-hover:text-white transition-colors line-clamp-2">
                  {p.title}
                </h4>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {p.readTime}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors"
          >
            ← Все статьи
          </Link>
        </div>
      </article>
    </main>
  );
}
