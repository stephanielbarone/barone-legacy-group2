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

      if (!isContactResponse(result) || typeof result.message !== "string") {
        throw new Error("Unable to confirm your message was sent.");
      }

      setStatus("success");
      setStatusMessage(result.message);
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
      className="grid gap-5 sm:grid-cols-2"
      aria-describedby="contact-form-status"
    >
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-semibold text-[#142B45]"
          htmlFor="contact-first-name"
        >
          First Name
        </label>
        <input
          id="contact-first-name"
          type="text"
          name="firstName"
          autoComplete="given-name"
          maxLength={75}
          required
          className="w-full rounded-lg border border-[#D8D2C8] bg-white px-4 py-3 text-sm text-[#142B45] placeholder-[#7A8490] focus:border-[#A98A55] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/25"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-semibold text-[#142B45]"
          htmlFor="contact-last-name"
        >
          Last Name
        </label>
        <input
          id="contact-last-name"
          type="text"
          name="lastName"
          autoComplete="family-name"
          maxLength={75}
          required
          className="w-full rounded-lg border border-[#D8D2C8] bg-white px-4 py-3 text-sm text-[#142B45] placeholder-[#7A8490] focus:border-[#A98A55] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/25"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-semibold text-[#142B45]"
          htmlFor="contact-email"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          maxLength={254}
          required
          className="w-full rounded-lg border border-[#D8D2C8] bg-white px-4 py-3 text-sm text-[#142B45] placeholder-[#7A8490] focus:border-[#A98A55] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/25"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-semibold text-[#142B45]"
          htmlFor="contact-phone"
        >
          Phone Number
          <span className="ml-1 font-normal text-[#566170]">(Optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          maxLength={50}
          className="w-full rounded-lg border border-[#D8D2C8] bg-white px-4 py-3 text-sm text-[#142B45] placeholder-[#7A8490] focus:border-[#A98A55] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/25"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          className="mb-2 block text-sm font-semibold text-[#142B45]"
          htmlFor="contact-subject"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          maxLength={200}
          required
          className="w-full rounded-lg border border-[#D8D2C8] bg-white px-4 py-3 text-sm text-[#142B45] placeholder-[#7A8490] focus:border-[#A98A55] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/25"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          className="mb-2 block text-sm font-semibold text-[#142B45]"
          htmlFor="contact-message"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={5000}
          required
          className="w-full resize-y rounded-lg border border-[#D8D2C8] bg-white px-4 py-3 text-sm text-[#142B45] placeholder-[#7A8490] focus:border-[#A98A55] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/25"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="interactive-button rounded-full bg-[#C5A46D] px-6 py-4 font-semibold text-[#142B45] transition hover:bg-[#d7b980] disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
      >
        {status === "sending" ? "Sending..." : "Submit Message"}
      </button>
      <p
        id="contact-form-status"
        className={`text-sm sm:col-span-2 ${
          status === "error" ? "text-red-700" : "text-[#566170]"
        }`}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {statusMessage}
      </p>
    </form>
  );
}
