import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence Course | Learn AI with Projects",
  description:
    "Learn Artificial Intelligence, Machine Learning, Deep Learning, NLP and Computer Vision with practical projects at Seekho With Rua.",

  keywords: [
    "AI course",
    "artificial intelligence course",
    "learn AI",
    "machine learning AI course",
    "deep learning course",
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/ai-course",
  },

  openGraph: {
    title: "Artificial Intelligence Course | Seekho With Rua",
    description:
      "Master Artificial Intelligence with Machine Learning, Deep Learning and real-world AI projects.",
    url: "https://seekhowithrua.com/ai-course",
    type: "website",
  },
};

export default function AICourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Artificial Intelligence Course
      </h1>

      <p className="mt-4 text-lg">
        This Artificial Intelligence program teaches how machines learn,
        analyze data and make intelligent decisions using modern AI techniques.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        What You Will Learn
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Introduction to Artificial Intelligence</li>
        <li>Machine Learning Fundamentals</li>
        <li>Deep Learning and Neural Networks</li>
        <li>Natural Language Processing</li>
        <li>Computer Vision</li>
        <li>AI Model Deployment</li>
        <li>Real-world AI Projects</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        Career Opportunities
      </h2>

      <p className="mt-4">
        AI engineers are in high demand across industries such as technology,
        healthcare, finance and robotics.
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