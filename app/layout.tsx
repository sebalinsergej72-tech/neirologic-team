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
  title: "Neirologic Team — Создаём сайты, ботов и веб-приложения под ключ",
  description:
    "Разработка сайтов, веб-приложений, Telegram-ботов, автоматизация бизнеса и внедрение ИИ. От заявки до запуска — от 2 недель. Бесплатная консультация.",
  keywords: [
    "разработка сайтов",
    "веб-приложения",
    "Telegram боты",
    "автоматизация бизнеса",
    "внедрение ИИ",
    "Mini Apps",
    "разработка под ключ",
    "neirologic",
  ],
  authors: [{ name: "Neirologic Team" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://нейрологик.рф",
    siteName: "Neirologic Team",
    title: "Neirologic Team — Создаём сайты, ботов и веб-приложения под ключ",
    description:
      "Разработка сайтов, веб-приложений, Telegram-ботов, автоматизация бизнеса и внедрение ИИ. От заявки до запуска — от 2 недель.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neirologic Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neirologic Team — Создаём сайты, ботов и веб-приложения под ключ",
    description:
      "Разработка сайтов, веб-приложений, Telegram-ботов, автоматизация бизнеса и внедрение ИИ.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className="bg-grid" style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
