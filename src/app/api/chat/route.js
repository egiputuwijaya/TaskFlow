import { NextResponse } from "next/server";

export async function POST(req) {
  const { messages } = await req.json();

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "x-ai/grok-4-fast:free",
        messages,
        reasoning: { enabled: true }, // opsional, kalau kamu ingin mode reasoning
      }),
    });

    const data = await res.json();
    console.log("OpenRouter Grok Response:", JSON.stringify(data, null, 2));

    let reply = "No reply";
    if (data.choices && data.choices.length > 0) {
      reply = data.choices[0].message?.content || "Empty content";
    } else if (data.error) {
      reply = data.error.message;
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ reply: "Fetch error" }, { status: 500 });
  }
}
