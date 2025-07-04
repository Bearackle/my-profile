import { NextResponse } from "next/server";
import { Resend } from "resend";
export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email, message, who, subject } = await req.json();
    const to = "dinhhuan1357@gmail.com";
    const text = `Message from ${who} with email ${email} with subject ${subject}: ${message}`;
    const html = `<p>Message from ${who} with email ${email} with subject ${subject}: ${message}</p>`;
    const data = await resend.emails.send({
      from: "Connect Profile <onboarding@resend.dev>",
      to,
      subject,
      text,
      html,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
