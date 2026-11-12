"use client";

import { useState, type FormEvent } from "react";

type ContactResponse = {
  error?: string;
  message?: string;
};

function isContactResponse(value: unknown): value is ContactResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    ("error" in value || "message" in value)
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result: unknown = await response.json();

      if (!response.ok) {
        const message =
          isContactResponse(result) && typeof result.error === "string"
            ? result.error
            : "Unable to send your request right now. Please try again.";
        throw new Error(message);
      }

      const message =
        isContactResponse(result) && typeof result.message === "string"
          ? result.message
          : "Your request was sent.";
      setStatus("success");
      setStatusMessage(message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your request right now. Please try again.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 sm:grid-cols-2"
      aria-describedby="contact-form-status"
    >
      <label className="sr-only" htmlFor="contact-name">Full Name</label>
      <input
        id="contact-name"
        type="text"
        name="name"
        autoComplete="name"
        maxLength={150}
        required
        placeholder="Full Name"
        className="rounded border border-slate-700 bg-navy-800 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-gold-500 focus:outline-none"
      />
      <label className="sr-only" htmlFor="contact-email">Email Address</label>
      <input
        id="contact-email"
        type="email"
        name="email"
        autoComplete="email"
        maxLength={254}
        required
        placeholder="Email Address"
        className="rounded border border-slate-700 bg-navy-800 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-gold-500 focus:outline-none"
      />
      <label className="sr-only" htmlFor="contact-phone">Phone Number (Optional)</label>
      <input
        id="contact-phone"
        type="tel"
        name="phone"
        autoComplete="tel"
        maxLength={50}
        placeholder="Phone Number (Optional)"
        className="rounded border border-slate-700 bg-navy-800 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-gold-500 focus:outline-none sm:col-span-2"
      />
      <label className="sr-only" htmlFor="contact-message">How can we help you?</label>
      <textarea
        id="contact-message"
        name="message"
        rows={4}
        maxLength={5000}
        required
        placeholder="How can we help you?"
        className="rounded border border-slate-700 bg-navy-800 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-gold-500 focus:outline-none sm:col-span-2"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded bg-gold-500 px-6 py-3 font-semibold text-navy-900 transition hover:bg-gold-600 hover:text-white disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
      >
        {status === "sending" ? "Sending..." : "Request Consultation"}
      </button>
      <p
        id="contact-form-status"
        className={`text-sm sm:col-span-2 ${
          status === "error" ? "text-red-300" : "text-slate-300"
        }`}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {statusMessage}
      </p>
    </form>
  );
}
