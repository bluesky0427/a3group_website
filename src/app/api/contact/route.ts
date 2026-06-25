import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactReasons } from "@/lib/site";

/**
 * Contact form API route.
 * -----------------------------------------------------------------------------
 * POST /api/contact
 *
 * Responsibilities:
 *   1. Validate required fields and email format on the server (never trust the
 *      client alone).
 *   2. Reject obvious spam (honeypot field + minimum-length checks).
 *   3. Send an internal notification email to support@a3technologygroup.com.
 *   4. Send an automatic thank-you email to the visitor.
 *
 * Email is sent through Resend (https://resend.com). The API key is read from
 * the RESEND_API_KEY environment variable — it is NEVER hard-coded here.
 *
 *   >>> WHERE TO ADD YOUR EMAIL API KEY <<<
 *   Add RESEND_API_KEY (and the *_EMAIL variables) to:
 *     • Local dev:  .env.local   (copy from .env.example)
 *     • Production:  Vercel → Project → Settings → Environment Variables
 *   Do not commit real keys. See README.md and .env.example for details.
 * -----------------------------------------------------------------------------
 */

// Run on the Node.js runtime (the Resend SDK is not Edge-compatible).
export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
  message?: string;
  website?: string; // honeypot — must be empty
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const reason = (body.reason ?? "").trim();
  const message = (body.message ?? "").trim();
  const honeypot = (body.website ?? "").trim();

  // 1. Spam trap: if the hidden honeypot field is filled, silently accept
  //    (pretend success) so bots don't learn they were caught.
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 2. Required-field validation.
  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  if (!email) {
    errors.push("Email is required.");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("A valid email address is required.");
  }
  if (!reason) {
    errors.push("Reason for contact is required.");
  } else if (!contactReasons.includes(reason as (typeof contactReasons)[number])) {
    errors.push("Reason for contact is invalid.");
  }
  if (!message) {
    errors.push("Message is required.");
  } else if (message.length < 10) {
    // 3. Basic anti-spam: reject suspiciously short / empty-ish messages.
    errors.push("Message is too short.");
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { error: errors.join(" ") },
      { status: 422 }
    );
  }

  // Read configuration from environment variables.
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "support@a3technologygroup.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "no-reply@a3technologygroup.com";
  const thankYouFrom =
    process.env.CONTACT_THANK_YOU_FROM_EMAIL ??
    "no-reply@a3technologygroup.com";

  // If the email service is not yet configured, do not fail the user's
  // submission. Log the message server-side so nothing is lost, and return
  // success. Once RESEND_API_KEY is set, real emails will be sent instead.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set — skipping email send. " +
        "Add it in .env.local or Vercel project settings to enable email.\n" +
        "Submission received:",
      { name, email, company, reason, message }
    );
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const resend = new Resend(apiKey);

  try {
    // ---- 3a. Internal notification email (to the company inbox) ----
    await resend.emails.send({
      from: `A3 Technology Group <${fromEmail}>`,
      to: [toEmail],
      reply_to: email, // replying goes straight to the visitor
      subject: `New contact inquiry: ${reason} — ${name}`,
      text: buildNotificationText({ name, email, company, reason, message }),
      html: buildNotificationHtml({ name, email, company, reason, message }),
    });

    // ---- 3b. Automatic thank-you email (to the visitor) ----
    await resend.emails.send({
      from: `A3 Technology Group <${thankYouFrom}>`,
      to: [email],
      subject: "Thank you for contacting A3 Technology Group",
      text: THANK_YOU_TEXT,
      html: THANK_YOU_HTML,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Failed to send email via Resend:", error);
    return NextResponse.json(
      {
        error:
          "We could not send your message right now. Please try again or email us directly at support@a3technologygroup.com.",
      },
      { status: 502 }
    );
  }
}

/* -------------------------------------------------------------------------- */
/*  Email templates                                                           */
/* -------------------------------------------------------------------------- */

function buildNotificationText(data: {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
}): string {
  return [
    "New contact form submission — A3 Technology Group",
    "",
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Company: ${data.company || "—"}`,
    `Reason:  ${data.reason}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function buildNotificationHtml(data: {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
}): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;color:#1F2933;max-width:600px;margin:0 auto;">
    <h2 style="color:#0B2545;">New contact inquiry</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:6px 0;color:#7B8794;width:120px;">Name</td><td style="padding:6px 0;font-weight:bold;">${esc(data.name)}</td></tr>
      <tr><td style="padding:6px 0;color:#7B8794;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
      <tr><td style="padding:6px 0;color:#7B8794;">Company</td><td style="padding:6px 0;">${esc(data.company || "—")}</td></tr>
      <tr><td style="padding:6px 0;color:#7B8794;">Reason</td><td style="padding:6px 0;">${esc(data.reason)}</td></tr>
    </table>
    <h3 style="color:#0B2545;margin-top:24px;">Message</h3>
    <p style="white-space:pre-wrap;line-height:1.6;">${esc(data.message)}</p>
  </div>`;
}

const THANK_YOU_TEXT = `Hello,

Thank you for contacting A3 Technology Group.

We have received your message and appreciate your interest in connecting with us. Our team will review your inquiry and get back to you as soon as possible.

A3 Technology Group connects technology, human skill, and opportunity to create new value. We look forward to learning more about how we may work together.

Best regards,
A3 Technology Group

This is an automated message from no-reply@a3technologygroup.com. Please do not reply directly to this email. To reach us, email support@a3technologygroup.com.`;

const THANK_YOU_HTML = `
<div style="font-family:Arial,Helvetica,sans-serif;color:#1F2933;max-width:600px;margin:0 auto;line-height:1.6;">
  <div style="background:#0B2545;padding:28px 24px;border-radius:12px 12px 0 0;">
    <h1 style="color:#ffffff;margin:0;font-size:20px;">A3 Technology Group</h1>
    <p style="color:#C8A04D;margin:6px 0 0;font-size:13px;">Connecting Technology, Human Skill, and Opportunity</p>
  </div>
  <div style="padding:28px 24px;border:1px solid #E5E9F0;border-top:none;border-radius:0 0 12px 12px;">
    <p>Hello,</p>
    <p>Thank you for contacting A3 Technology Group.</p>
    <p>We have received your message and appreciate your interest in connecting with us. Our team will review your inquiry and get back to you as soon as possible.</p>
    <p>A3 Technology Group connects technology, human skill, and opportunity to create new value. We look forward to learning more about how we may work together.</p>
    <p style="margin-top:24px;">Best regards,<br/><strong>A3 Technology Group</strong></p>
    <hr style="border:none;border-top:1px solid #E5E9F0;margin:24px 0;" />
    <p style="font-size:12px;color:#7B8794;">This is an automated message from no-reply@a3technologygroup.com. Please do not reply directly to this email. To reach us, email <a href="mailto:support@a3technologygroup.com" style="color:#A9863A;">support@a3technologygroup.com</a>.</p>
  </div>
</div>`;
