import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-[rgb(243_241_249_/_var(--tw-bg-opacity,1))] py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Effective Date: May 2025</p>
        <p className="mb-4">
          With Love Cleaning Services ("we", "our", "us") respects your privacy
          and is committed to protecting it through our compliance with this
          policy.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside marker:text-primary space-y-2 mb-4">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Message or Cleaning Details</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use the information you provide to:</p>
        <ul className="list-disc list-inside marker:text-primary space-y-2 mb-4">
          <li>Respond to your quote requests and inquiries</li>
          <li>Provide the services you request</li>
          <li>Improve our website and customer service</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Retention</h2>
        <p className="mb-4">
          We keep your personal information only as long as necessary to fulfill
          the purposes outlined in this policy, or as required by law.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information. We may share it with
          service providers who help us deliver our services, under strict
          confidentiality agreements.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal data.
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:wlcottawa@gmail.com"
            className="text-[#b285ea] underline"
          >
            wlcottawa@gmail.com
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact
          us at{" "}
          <a
            href="mailto:wlcottawa@gmail.com"
            className="text-[#b285ea] underline"
          >
            wlcottawa@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
