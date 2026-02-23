import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sendLeadToWebhook, type WebhookLeadPayload } from "@/lib/webhook";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // ── Validation ────────────────────────────────────────────────────────────
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // ── Send Email (nodemailer) ───────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
            <p>This message was sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ── Fire Webhook (Awaited) ────────────────────────────────────────────────
    // We await this to ensure the serverless function doesn't shut down before 
    // the request is actually sent to n8n.
    const leadPayload: WebhookLeadPayload = {
      name,
      email,
      subject,
      message,
      source: "portfolio-contact-form",
      submittedAt: new Date().toISOString(),
    };

    try {
      await sendLeadToWebhook(leadPayload);
    } catch (err) {
      // Log the error server-side but don't let it crash the whole request if the email already sent
      console.error("[Webhook] Failed to deliver lead:", err);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}