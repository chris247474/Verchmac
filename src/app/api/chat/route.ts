import { NextResponse } from "next/server";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/constants";

const MINIMAX_API_URL =
  "https://api.minimax.io/v1/text/chatcompletion_v2";
const MINIMAX_MODEL = process.env.MINIMAX_MODEL || "MiniMax-M2.5";

const EDUCATION_RESPONSES: Record<string, string> = {
  ipad: "iPad is the perfect device for education! We offer 1:1 iPad programs with Apple School Manager for easy deployment. Our team can help with device configuration, app distribution, and ongoing management. Would you like to speak with an Education Specialist about iPad deployment for your school?",
  mac: "Mac is ideal for creative learning, coding, and advanced education workflows. We support Mac deployments for higher education, faculty, and administrative teams. Want to discuss Mac solutions for your institution?",
  mdm: "Mobile Device Management (MDM) is essential for any Apple education deployment. We help schools set up Apple School Manager, configure MDM profiles, and manage devices at scale. This includes zero-touch deployment, app management, and content filtering.",
  training: "We offer Apple Teacher certification support and Apple Professional Learning programs. These help educators integrate Apple technology into their curriculum effectively. Our certified trainers can conduct on-site or virtual sessions.",
  pricing: "For detailed pricing on education volumes, leasing options, and institutional discounts, I'd recommend connecting with our Education Specialists who can provide a customized quote. Would you like to request a consultation?",
  financing: "We offer flexible financing and leasing options for education institutions, including multi-year device refresh programs. Contact our specialists for tailored payment plans that work with your school's budget cycle.",
  applecare: "AppleCare for Education provides extended warranty coverage, accidental damage protection, and priority support for your institution's Apple devices. We can bundle this with your device procurement.",
  classroom: "Apple Classroom is a powerful teaching assistant app that helps educators guide learning, share work, and manage student devices. We provide setup, training, and ongoing support for Classroom and Schoolwork apps.",
  default: "Thanks for your interest in our Apple education solutions! I can help with information about iPad and Mac deployments, MDM setup, teacher training, device financing, and more. For detailed pricing or custom solutions, I'd recommend speaking with one of our Education Specialists. Would you like to request a consultation at /contact?",
};

function getKeywordResponse(messages: { role: string; content: string }[]): string {
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

  if (/^(hi|hello|hey|good\s*(morning|afternoon|evening))/i.test(lastMessage)) {
    return "Hi there! Welcome to Power Mac Center Business. I can help with iPad and Mac deployments, MDM setup, teacher training, device financing, and more. What would you like to know?";
  }

  if (lastMessage.includes("consult") || lastMessage.includes("contact") || lastMessage.includes("talk to") || lastMessage.includes("speak")) {
    return "You can request a consultation with our specialists at the Contact page. They can provide personalized recommendations, detailed pricing, and deployment planning for your institution.";
  }

  for (const [keyword, reply] of Object.entries(EDUCATION_RESPONSES)) {
    if (keyword !== "default" && lastMessage.includes(keyword)) return reply;
  }

  return EDUCATION_RESPONSES.default;
}

async function callMiniMax(
  messages: { role: string; content: string }[]
): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const res = await fetch(MINIMAX_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MINIMAX_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MINIMAX_MODEL,
        messages: [
          { role: "system", content: CHATBOT_SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("MiniMax API error:", res.status, errorBody);
      throw new Error(`MiniMax API returned ${res.status}`);
    }

    const data = await res.json();
    const raw: string =
      data.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response. Please try again.";
    // Strip <think>...</think> blocks that some models include in responses
    return raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Use MiniMax if API key is configured, fall back to keyword responses on error/timeout
    if (process.env.MINIMAX_API_KEY) {
      try {
        const reply = await callMiniMax(messages);
        return NextResponse.json({ message: reply });
      } catch (err) {
        console.error("MiniMax failed, using keyword fallback:", err);
        return NextResponse.json({ message: getKeywordResponse(messages) });
      }
    }

    return NextResponse.json({ message: getKeywordResponse(messages) });
  } catch {
    return NextResponse.json(
      { message: "Sorry, I encountered an error. Please try again." },
      { status: 500 }
    );
  }
}
