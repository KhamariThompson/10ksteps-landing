import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10k Steps - Hit your 10,000 steps. Every single day.",
  description:
    "Track your daily steps, compete with friends, and build lasting fitness habits. Download the 10k Steps app for iOS and start your journey to better health.",
  keywords: ["fitness", "steps", "health", "10k steps", "walking", "fitness tracker", "iOS app"],
  authors: [{ name: "10k Steps" }],
  openGraph: {
    title: "10k Steps - Hit your 10,000 steps. Every single day.",
    description: "Track your daily steps, compete with friends, and build lasting fitness habits.",
    type: "website",
    siteName: "10k Steps",
  },
  twitter: {
    card: "summary_large_image",
    title: "10k Steps - Hit your 10,000 steps. Every single day.",
    description: "Track your daily steps, compete with friends, and build lasting fitness habits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-navy-dark text-text-primary`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
