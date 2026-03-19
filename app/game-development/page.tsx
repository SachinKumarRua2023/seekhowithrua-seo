import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Development Course | Build 2D and 3D Games",
  description:
    "Learn game development and create 2D and 3D games using modern game engines and programming techniques.",
  keywords: [
    "game development course",
    "unity game development",
    "3d game development",
    "learn game programming"
  ],
  alternates: {
    canonical: "https://seekhowithrua.com/courses/game-development",
  },
  openGraph: {
    title: "Game Development Course | Seekho With Rua",
    description:
      "Learn how to build real video games with game engines and programming.",
    url: "https://seekhowithrua.com/courses/game-development",
    type: "website",
  },
};

export default function GameDevelopmentCourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Game Development Course</h1>

      <p className="mt-4 text-lg">
        Learn how to create interactive games including 2D and 3D game environments.
      </p>

      <h2 className="text-2xl font-semibold mt-10">What You Will Learn</h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Game Design Principles</li>
        <li>2D Game Development</li>
        <li>3D Game Development</li>
        <li>Game Physics and Animation</li>
        <li>Game Programming Logic</li>
        <li>Publishing Games</li>
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