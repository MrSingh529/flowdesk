import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowDesk — Automate your ops with plain English",
  description:
    "FlowDesk turns plain English (or Hindi) instructions into automated workflows. Built for Indian ops and admin teams. No coding, no complexity.",
  keywords: "workflow automation, India, ops teams, WhatsApp automation, no-code",
  openGraph: {
    title: "FlowDesk — Automate your ops with plain English",
    description: "Built for Indian ops teams. Describe it. We automate it.",
    url: "https://flowdesk.in",
    siteName: "FlowDesk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowDesk — AI Workflow Automation for Indian Ops Teams",
    description: "Plain English → automated workflows. No coding needed.",
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
