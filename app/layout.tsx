import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
  authors: [{ name: siteConfig.fullName }],
  keywords: [
    "Umar Azam",
    "AI Engineer",
    "Full-Stack Developer",
    "Generative AI",
    "RAG",
    "Agentic AI",
    "FastAPI",
    "Next.js",
    "Lahore",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",
    images: [siteConfig.avatar.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#e6e6e4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
