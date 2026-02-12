import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/ui/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joinwewingames.com"),
  title: "WeWin Games | The Side Gig That Pays You to Go Out",
  description:
    "Free training: learn how people are promoting the most popular gaming and entertainment apps at local venues and events. No experience needed. Must be 21+.",
  openGraph: {
    title: "WeWin Games | Free Live Activation Training",
    description:
      "Learn how people are promoting the most popular gaming and entertainment apps at local venues and events. No experience needed.",
    images: [
      {
        url: "/images/social-image.jpg",
        width: 1200,
        height: 630,
        alt: "WeWin Games | Free Live Activation Training",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeWin Games | Free Live Activation Training",
    description:
      "Learn how people are promoting the most popular gaming and entertainment apps at local venues and events. No experience needed.",
    images: ["/images/social-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0A0A0A] text-white font-sans antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
