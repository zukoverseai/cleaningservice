"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import PhoneInput from "react-phone-input-2";

export function ContactForm() {
  const [state, handleSubmit] = useForm("manojqzo");
  const [phone, setPhone] = useState("");

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
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone Number
        </label>
        <PhoneInput
          country="ca"
          value={phone}
          onChange={setPhone}
          inputProps={{
            name: "phone",
            required: true,
            id: "phone",
            placeholder: "Enter your phone number",
          }}
          containerClass="w-full border border-input rounded-md"
          containerStyle={{ width: "100%" }}
          inputClass="h-10 w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          inputStyle={{ width: "100%", borderWidth: 0 }}
          buttonStyle={{ borderWidth: 0 }}
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

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
