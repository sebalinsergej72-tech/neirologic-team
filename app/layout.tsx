import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--c1adkchdlkbr.xn--p1ai"),
  title: {
    default:
      "Neirologic Team — Разработка сайтов, ботов и веб-приложений под ключ",
    template: "%s | Neirologic Team",
  },
  description:
    "Разработка сайтов, веб-приложений, Telegram-ботов, Mini Apps, автоматизация бизнеса и внедрение ИИ. Команда разработчиков. От заявки до запуска — от 2 недель. Бесплатная консультация.",
  keywords: [
    "разработка сайтов",
    "создание сайтов под ключ",
    "заказать сайт",
    "веб-приложения",
    "разработка веб-приложений",
    "Telegram боты",
    "разработка Telegram ботов",
    "Mini Apps Telegram",
    "автоматизация бизнеса",
    "автоматизация бизнес-процессов",
    "внедрение ИИ",
    "искусственный интеллект для бизнеса",
    "разработка под ключ",
    "IT аутсорсинг",
    "заказать разработку",
    "веб-студия",
    "neirologic",
    "нейрологик",
  ],
  authors: [{ name: "Neirologic Team" }],
  creator: "Neirologic Team",
  publisher: "Neirologic Team",
  category: "technology",
  alternates: {
    canonical: "https://xn--c1adkchdlkbr.xn--p1ai",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://xn--c1adkchdlkbr.xn--p1ai",
    siteName: "Neirologic Team",
    title:
      "Neirologic Team — Разработка сайтов, ботов и веб-приложений под ключ",
    description:
      "Разработка сайтов, веб-приложений, Telegram-ботов, автоматизация бизнеса и внедрение ИИ. От заявки до запуска — от 2 недель.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neirologic Team — IT-разработка под ключ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neirologic Team — Разработка сайтов, ботов и веб-приложений под ключ",
    description:
      "Разработка сайтов, веб-приложений, Telegram-ботов, автоматизация бизнеса и внедрение ИИ.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "yandex-verification": "",
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="canonical"
          href="https://xn--c1adkchdlkbr.xn--p1ai"
        />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className="bg-grid"
        style={{
          fontFamily:
            "var(--font-inter), system-ui, -apple-system, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
