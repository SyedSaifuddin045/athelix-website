import type { Metadata } from "next";
import { Barlow_Condensed, Outfit, Titillium_Web } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Athelix — Your training, elevated.",
  description:
    "Athelix is a premium fitness tracking app for iOS and Android. Track workouts, personal records, progressive overload, and muscle balance — all in one beautifully designed app.",
  keywords: [
    "fitness tracker",
    "workout app",
    "personal trainer",
    "progressive overload",
    "gym tracking",
    "iOS",
    "Android",
    "Athelix",
  ],
  openGraph: {
    title: "Athelix — Your training, elevated.",
    description:
      "Track workouts, personal records, progressive overload, and muscle balance — all in one beautifully designed app.",
    type: "website",
    siteName: "Athelix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athelix — Your training, elevated.",
    description:
      "Track workouts, personal records, progressive overload, and muscle balance — all in one beautifully designed app.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${outfit.variable} ${titilliumWeb.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
