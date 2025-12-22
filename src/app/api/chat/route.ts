import { NextResponse } from "next/server";

const SYSTEM_PROMPT = {
  role: "system",
  content: `
You are a helpful and friendly AI assistant.
Reply in the same language as the user.
Never reply with empty or whitespace-only text.
If the user greets you, greet them back politely.
`,
};

export async function POST(req: Request) {
    const { messages } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "xiaomi/mimo-v2-flash:free",
        stream: true, // 🔥 STREAM ON
        messages: [SYSTEM_PROMPT, ...messages],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
        async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
            controller.close();
            return;
        }

        const decoder = new TextDecoder();

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);

            // OpenRouter streaming format → split by line
            const lines = chunk.split("\n");
            for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            if (line.includes("[DONE]")) continue;

            try {
                const json = JSON.parse(line.replace("data:", ""));
                const token = json.choices?.[0]?.delta?.content;
                if (token) {
                controller.enqueue(encoder.encode(token));
                }
            } catch {}
            }
        }

        controller.close();
        },
    });

    return new Response(stream, {
        headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        },
    });
}
