import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SeekhowithRua | Master Rua — Learn AI, Coding & More",
    template: "%s | SeekhowithRua",
  },

  description:
    "SeekhowithRua by Master Rua (Sachin Kumar) — India's unique learning platform. Learn AI, Data Science, Full Stack, Game Dev, Mobile Apps, Robotics through visual cortex, mnemonics, gaming & animation. Who is Master Rua? The all-rounder title for those who master tech, arts & life skills.",

  keywords: [
    // Brand keywords
    "seekhowithrua",
    "seekho with rua",
    "seekhowithrua.com",
    "seekho withrua",
    "seekhowithrua courses",

    // Master Rua keywords
    "master rua",
    "who is master rua",
    "master rua coding",
    "master rua india",
    "master rua sachin kumar",
    "rua title",
    "mr rua",
    "master rua learning",
    "rua learning platform",
    "master rua edtech",

    // Name keywords
    "sachin kumar master rua",
    "sachin kumar developer india",
    "sachin kumar ai trainer",

    // Learning system keywords
    "ueep model learning",
    "visual cortex learning india",
    "mnemonic learning platform",
    "learn through gaming india",
    "subconscious learning platform",

    // Course keywords
    "data science course india",
    "AI course india hindi",
    "full stack development india",
    "mobile app development course india",
    "game development course india",
    "robotics IoT course india",
    "machine learning course hindi",
    "python course india",
    "web development course india",
    "coding course india free",
    "learn programming india 2026",
  ],

  metadataBase: new URL("https://seekhowithrua.com"),

  authors: [{ name: "Master Rua", url: "https://seekhowithrua.com" }],
  creator: "Master Rua — Sachin Kumar",
  publisher: "SeekhowithRua",

  openGraph: {
    title: "SeekhowithRua | Master Rua — India's Unique Learning Platform",
    description:
      "Learn AI, Coding, Game Dev, Mobile Apps through visual cortex & mnemonic systems. Founded by Master Rua (Sachin Kumar). SeekhowithRua — where learning meets mastery.",
    url: "https://seekhowithrua.com",
    siteName: "SeekhowithRua",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "SeekhowithRua | Master Rua",
    description:
      "India's unique learning platform by Master Rua. AI, Coding, Game Dev, Mobile Apps — learned through visual cortex & mnemonic systems.",
    creator: "@seekhowithrua",
  },

  alternates: {
    canonical: "https://seekhowithrua.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}