import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, phone, email, service, timeline, budget, message } = data;

    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Заполните обязательные поля" }, { status: 400 });
    }

    const text = [
      "📩 *Новая заявка с сайта*",
      "",
      `👤 *Имя:* ${name}`,
      company ? `🏢 *Компания:* ${company}` : null,
      `📱 *Телефон:* ${phone}`,
      email ? `📧 *Email:* ${email}` : null,
      "",
      `🔧 *Услуга:* ${service}`,
      `⏱ *Сроки:* ${timeline || "Не указано"}`,
      `💰 *Бюджет:* ${budget || "Не указан"}`,
      "",
      message ? `💬 *Описание проекта:*\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return NextResponse.json({ error: "Сервер не настроен" }, { status: 500 });
    }

    const tgResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!tgResponse.ok) {
      const err = await tgResponse.text();
      console.error("Telegram API error:", err);
      return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
