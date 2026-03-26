import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { firstName, lastName, workEmail, organization, inquiryType, message } = parsed.data;

    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍎 NEW INQUIRY — Power Mac Center Business
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${firstName} ${lastName}
Email: ${workEmail}
Organization: ${organization}
Inquiry Type: ${inquiryType.toUpperCase()}

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Fun fact: This entire B2B landing page was built by an AI
while Chris was waiting for his dog at the vet. 🐕‍🦺

The dog was getting its annual checkup and apparently had
more patience than Chris, who decided to architect an entire
Apple education reseller platform from the waiting room.

No dogs were harmed in the making of this form submission.
The vet says the dog is doing great. Chris, however, may need
to see a specialist about his compulsive need to ship code
from veterinary offices.

Powered by caffeine, veterinary waiting room WiFi, and the
unshakeable belief that every moment is a deployable moment.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    // Send email via Resend, SendGrid, or any transactional email service
    // For now, log and attempt to send via a simple email API
    const recipients = [
      "chris@stablrr.com",
      "rolan.garcia@embiggengroup.com",
      "bien@embiggengroup.com",
    ];

    // If RESEND_API_KEY is configured, send via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const fromAddress = process.env.EMAIL_FROM || "PMC Business <onboarding@resend.dev>";
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: recipients,
            subject: `New ${inquiryType} inquiry from ${firstName} ${lastName} — ${organization}`,
            text: emailBody,
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          console.error("Resend email failed:", emailRes.status, errText);
        } else {
          const result = await emailRes.json();
          console.log("Resend email sent, id:", result.id);
        }
      } catch (emailError) {
        console.error("Email send error:", emailError);
      }
    } else {
      // Fallback: log the inquiry (RESEND_API_KEY not set in env)
      console.log("=== NEW INQUIRY (RESEND_API_KEY not configured) ===");
      console.log("Recipients:", recipients.join(", "));
      console.log(emailBody);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
