import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidEmail(value: string) {
  return (
    value.length <= 254 &&
    /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value)
  );
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

  if (
    typeof payload.firstName !== "string" ||
    typeof payload.lastName !== "string" ||
    typeof payload.email !== "string" ||
    typeof payload.phone !== "string" ||
    typeof payload.subject !== "string" ||
    typeof payload.message !== "string" ||
    typeof payload.website !== "string"
  ) {
    return NextResponse.json(
      { error: "Check the form fields and try again." },
      { status: 400 },
    );
  }

  const firstName =
    payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const name = `${firstName} ${lastName}`.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();
  const subject = payload.subject.trim();
  const message = payload.message.trim();
  const website = payload.website;

  if (website) {
    return NextResponse.json(
      { error: "Unable to submit this request." },
      { status: 400 },
    );
  }

  if (
    !firstName ||
    !lastName ||
    firstName.length > 75 ||
    lastName.length > 75 ||
    name.length > 150 ||
    /[\u0000-\u001f\u007f]/.test(name) ||
    !isValidEmail(email) ||
    phone.length > 50 ||
    (phone !== "" && !/^[0-9+().\-\s]*$/.test(phone)) ||
    !subject ||
    subject.length > 200 ||
    /[\u0000-\u001f\u007f]/.test(subject) ||
    !message ||
    message.length > 5000 ||
    /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(message)
  ) {
    return NextResponse.json(
      { error: "Check the form fields and try again." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const portValue = process.env.SMTP_PORT;
  const port = Number(portValue);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;
  const recipient = process.env.CONTACT_TO;

  if (
    host !== "smtp.gmail.com" ||
    portValue !== "465" ||
    port !== 465 ||
    !user ||
    !isValidEmail(user) ||
    !password ||
    !from ||
    !isValidEmail(from) ||
    !recipient ||
    !isValidEmail(recipient)
  ) {
    const invalidConfiguration = [
      ...(host !== "smtp.gmail.com" ? ["SMTP_HOST"] : []),
      ...(portValue !== "465" || port !== 465 ? ["SMTP_PORT"] : []),
      ...(!user || !isValidEmail(user) ? ["SMTP_USER"] : []),
      ...(!password ? ["SMTP_PASSWORD"] : []),
      ...(!from || !isValidEmail(from) ? ["SMTP_FROM"] : []),
      ...(!recipient || !isValidEmail(recipient) ? ["CONTACT_TO"] : []),
    ];
    console.error("Contact form SMTP configuration is incomplete or invalid.", {
      variables: invalidConfiguration,
    });
    return NextResponse.json(
      { error: "Consultation requests are temporarily unavailable." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: true,
    auth: { user, pass: password },
  });

  try {
    const delivery = await transporter.sendMail({
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

    if (delivery.accepted.length === 0 || delivery.rejected.length > 0) {
      throw new Error("SMTP server did not accept the recipient.");
    }
  } catch (error) {
    console.error(
      "Contact form email delivery failed:",
      error instanceof Error
        ? {
            name: error.name,
            code:
              "code" in error && typeof error.code === "string"
                ? error.code
                : undefined,
            responseCode:
              "responseCode" in error &&
              typeof error.responseCode === "number"
                ? error.responseCode
                : undefined,
            command:
              "command" in error && typeof error.command === "string"
                ? error.command
                : undefined,
          }
        : { name: "UnknownSMTPError" },
    );
    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again." },
      { status: 503 },
    );
  }

  return NextResponse.json({ message: "Your request was sent." });
}
