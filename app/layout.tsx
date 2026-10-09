import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL in .env.local / hosting settings once you have a domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Nour Mistrah — Software Developer";
const description =
  "Portfolio of Nour Mistrah, a software developer with a Computer Science and Physics background. Full-stack web projects built with JavaScript, TypeScript, Node.js and MySQL.";

export const metadata = {
  title: "Nour Mistrah | Software Developer",
  description:
    "Portfolio of Nour Mistrah, a Computer Science and Physics graduate passionate about software development, problem-solving, and building modern web applications.",
  keywords: [
    "Nour Mistrah",
    "Software Developer",
    "Computer Science",
    "React",
    "Next.js",
    "Full Stack Development",
  ],
};

export const viewport: Viewport = {
  themeColor: "#142019",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
