import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Programming Course | Learn Python from Beginner to Advanced",
  description:
    "Learn Python programming from beginner to advanced. Build real projects and start your career in Data Science, AI and Web Development with Seekho With Rua.",

  keywords: [
    "python programming course",
    "learn python",
    "python course for beginners",
    "python developer course",
    "python training"
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/python-programming-course",
  },

  openGraph: {
    title: "Python Programming Course | Seekho With Rua",
    description:
      "Master Python programming with real projects and practical training.",
    url: "https://seekhowithrua.com/python-programming-course",
    type: "website",
  },
};

export default function PythonProgrammingCourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Python Programming Course
      </h1>

      <p className="mt-4 text-lg">
        This Python programming course teaches coding from scratch.
        You will learn programming fundamentals, build applications
        and prepare for careers in AI, Data Science and Web Development.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        What You Will Learn
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Python Basics and Syntax</li>
        <li>Control Flow and Functions</li>
        <li>Object Oriented Programming</li>
        <li>Working with Files and APIs</li>
        <li>Data Structures in Python</li>
        <li>Python for Data Analysis</li>
        <li>Real World Python Projects</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        Career Opportunities
      </h2>

      <p className="mt-4">
        Python developers are highly demanded in fields like
        web development, automation, artificial intelligence,
        machine learning and data science.
      </p>

      <a
        href="https://app.seekhowithrua.com"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Enroll Now
      </a>

    </main>
  );
}