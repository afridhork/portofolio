import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("MESSAGES:", messages);

    console.log(
      "API KEY EXISTS:",
      !!process.env.OPENROUTER_API_KEY
    );
    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages" },
        { status: 400 }
      );
    }

    const res = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Next AI Chatbot",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct",
          temperature: 0.7,
          max_tokens: 400,
          messages: [
            {
              role: "system",
              content:
                "Kamu adalah asisten profesional yang   mah dan membantu.",
            },
            ...messages,
          ],
        }),
      }
    );

    const raw = await res.text();
    console.log("RAW", raw);

    if (!res.ok) {
      return NextResponse.json(
        { error: raw },
        { status: res.status }
      );
    }

    const data = await res.json();

    const content =
      data?.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return NextResponse.json(
        { error: "AI returned empty response" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      reply: content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
