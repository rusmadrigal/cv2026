import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { resumeData } from "@/app/resumeData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resumeData.basics.name} · CV`,
  description: `${resumeData.basics.headline}. ${resumeData.basics.summary[0] ?? ""}`.slice(
    0,
    160
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
