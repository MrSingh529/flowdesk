import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowdeskio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: {
    default: "FlowDesk — AI Workflow Automation for Indian Ops Teams",
    template: "%s | FlowDesk",
  },
  
  description: "FlowDesk turns plain English (or Hindi) instructions into automated workflows. Built for Indian ops and admin teams. No coding, no complexity.",
  
  keywords: ["workflow automation", "India", "ops teams", "WhatsApp automation", "no-code", "business automation", "Indian startups"],
  
  authors: [{ name: "FlowDesk Team" }],
  creator: "FlowDesk",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  openGraph: {
    title: "FlowDesk — Automate your ops with plain English",
    description: "Built for Indian ops teams. Describe it. We automate it.",
    url: siteUrl,
    siteName: "FlowDesk",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlowDesk - Workflow Automation for India",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "FlowDesk — AI Workflow Automation for Indian Ops Teams",
    description: "Plain English → automated workflows. No coding needed.",
    images: ["/og-image.jpg"],
  },
  
  alternates: {
    canonical: siteUrl,
  },
  
  category: "technology",

  verification: {
    google: "_GJCHpGqskeRrhzmLuTd1LZxppPnAc7rMIobPjO6Gvk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}