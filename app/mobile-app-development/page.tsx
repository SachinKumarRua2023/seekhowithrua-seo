import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Course | Android and Cross Platform",
  description:
    "Learn mobile app development and build Android and cross-platform applications using modern technologies.",
  keywords: [
    "mobile app development course",
    "android development course",
    "learn app development",
    "build mobile apps"
  ],
  alternates: {
    canonical: "https://seekhowithrua.com/courses/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Course | Seekho With Rua",
    description:
      "Build Android and cross-platform mobile apps with real projects.",
    url: "https://seekhowithrua.com/courses/mobile-app-development",
    type: "website",
  },
};

export default function MobileAppCourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Mobile App Development Course</h1>

      <p className="mt-4 text-lg">
        Learn how to build modern Android and cross-platform mobile applications.
      </p>

      <h2 className="text-2xl font-semibold mt-10">What You Will Learn</h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Android App Development</li>
        <li>Mobile UI Design</li>
        <li>Cross Platform Development</li>
        <li>API Integration</li>
        <li>Mobile Database</li>
        <li>Publishing Apps on Stores</li>
      </ul>

      <a
        href="https://app.seekhowithrua.com"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Enroll Now
      </a>
    </main>
  );
}