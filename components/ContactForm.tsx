"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("manojqzo");
  if (state.succeeded) {
    return (
      <p className="text-center text-primary font-semibold">
        Thank you for your message!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your cleaning needs"
          className="flex min-h-[100px] w-full rounded-md border border-input px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-primary text-white py-2 px-4 rounded-md disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
