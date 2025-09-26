import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Harshith - Software Engineer Portfolio",
  description:
    "Portfolio of Harshith, a Software Engineer based in India. Showcasing experience in full-stack development, React, Node.js, and modern web technologies.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Harshith" }],
  creator: "Harshith",
  openGraph: {
    title: "Harshith - Software Engineer Portfolio",
    description: "Portfolio of Harshith, a Software Engineer based in India.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshith - Software Engineer Portfolio",
    description: "Portfolio of Harshith, a Software Engineer based in India.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
