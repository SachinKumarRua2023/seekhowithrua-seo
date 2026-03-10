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
    default: "Seekho With Rua | AI, Data Science & Development Courses",
    template: "%s | Seekho With Rua",
  },

  description:
    "Learn AI, Data Science, Full Stack Development, Game Development, Robotics and Mobile App Development with practical projects.",

  keywords: [
    "data science course",
    "AI course",
    "full stack development",
    "mobile app development",
    "game development course",
    "robotics and IoT course",
    "machine learning course",
  ],

  metadataBase: new URL("https://seekhowithrua.com"),

  openGraph: {
    title: "Seekho With Rua",
    description:
      "Learn AI, Data Science, Game Development, Robotics and Programming.",
    url: "https://seekhowithrua.com",
    siteName: "Seekho With Rua",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Seekho With Rua",
    description:
      "Learn AI, Data Science, Full Stack Development and Game Development.",
  },

  alternates: {
    canonical: "https://seekhowithrua.com",
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