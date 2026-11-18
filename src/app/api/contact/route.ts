import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please submit the form using valid data." },
      { status: 400 },
    );
  }

  if (!isRecord(payload)) {
    return NextResponse.json(
      { error: "Please submit the form using valid data." },
      { status: 400 },
    );
  }

  const firstName =
    typeof payload.firstName === "string" ? payload.firstName.trim() : "";
  const lastName =
    typeof payload.lastName === "string" ? payload.lastName.trim() : "";
  const legacyName = typeof payload.name === "string" ? payload.name.trim() : "";
  const name =
    firstName && lastName ? `${firstName} ${lastName}` : legacyName;
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const submittedSubject =
    typeof payload.subject === "string" ? payload.subject.trim() : "";
  const subject = submittedSubject || "Consultation request";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    !name ||
    name.length > 150 ||
    /[\r\n]/.test(name) ||
    (firstName.length > 75 || lastName.length > 75) ||
    (Boolean(firstName) !== Boolean(lastName)) ||
    !isValidEmail(email) ||
    email.length > 254 ||
    phone.length > 50 ||
    !subject ||
    subject.length > 200 ||
    /[\r\n]/.test(subject) ||
    !message ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Check the form fields and try again." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM_EMAIL;
  const recipient = process.env.CONTACT_EMAIL;

  if (
    !host ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !user ||
    !password ||
    !from ||
    !isValidEmail(from) ||
    !recipient ||
    !isValidEmail(recipient)
  ) {
    return NextResponse.json(
      { error: "Consultation requests are temporarily unavailable." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });

  try {
    await transporter.sendMail({
      from: { name: "Barone Legacy Group", address: from },
      to: recipient,
      replyTo: email,
      subject: `Website contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error(
      "Contact form email delivery failed:",
      error instanceof Error ? error.message : "Unknown SMTP error",
    );
    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again." },
      { status: 503 },
    );
  }

  return NextResponse.json({ message: "Your request was sent." });
}
