import { NextResponse } from "next/server";

// POST /api/contact
export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID; // numeric ID or @channelusername

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Server is not configured. Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    const { name, phone, email, subject, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Validation failed: name, phone and message are required" },
        { status: 400 }
      );
    }

    const text = [
      "🆕 Новая заявка на консультацию",
      "",
      `<b>Имя:</b> ${escapeHtml(name)}`,
      `<b>Телефон:</b> ${escapeHtml(phone)}`,
      email ? `<b>Email:</b> ${escapeHtml(email)}` : undefined,
      subject ? `<b>Тема:</b> ${escapeHtml(subject)}` : undefined,
      "",
      `<b>Сообщение:</b>\n${escapeHtml(message)}`,
      "",
      `<i>Источник:</i> ${getOriginFromHeaders(req.headers)}`,
    ]
      .filter(Boolean)
      .join("\n");

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const data = await tgRes.json().catch(() => ({}));

    if (!tgRes.ok || data?.ok === false) {
      return NextResponse.json(
        { error: "Failed to send to Telegram", details: data },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unexpected error" }, { status: 500 });
  }
}

function getOriginFromHeaders(headers: Headers) {
  const referer = headers.get("referer") || headers.get("origin") || "";
  try {
    return referer ? new URL(referer).origin : "unknown";
  } catch {
    return referer || "unknown";
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}