import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoftware Development Services",
  description: "Cleaning with care and compassion.",
  generator: "v0.dev",
  icons: {
    icon: "/wlc-house.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
