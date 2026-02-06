import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WeWin Games — The Side Gig That Pays You to Go Out",
  description:
    "Free training: learn how people are promoting the most popular gaming and entertainment apps at local venues and events. No experience needed. Must be 21+.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* TODO: Meta Pixel ID — waiting on BM admin access */}
      </head>
      <body className="bg-[#0A0A0A] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
