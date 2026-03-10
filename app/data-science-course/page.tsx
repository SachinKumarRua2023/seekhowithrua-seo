import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Course with AI and Machine Learning",
  description:
    "Learn Data Science with Python, Machine Learning, Deep Learning, NLP and Computer Vision. Build real-world AI projects with Seekho With Rua.",

  keywords: [
    "data science course",
    "machine learning course",
    "AI course",
    "python data science",
    "deep learning course",
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/data-science-course",
  },

  openGraph: {
    title: "Data Science Course | Seekho With Rua",
    description:
      "Learn Python, Machine Learning, Deep Learning and AI with practical projects.",
    url: "https://seekhowithrua.com/data-science-course",
    type: "website",
  },
};

export default function DataScienceCourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Data Science Course
      </h1>

      <p className="mt-4 text-lg">
        Our Data Science program teaches Python, Machine Learning,
        Deep Learning and Artificial Intelligence through real-world projects.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        What You Will Learn
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">

        <li>Python Programming for Data Science</li>
        <li>Data Analysis using Pandas and NumPy</li>
        <li>Data Visualization using Matplotlib</li>
        <li>Machine Learning Algorithms</li>
        <li>Deep Learning using Neural Networks</li>
        <li>Natural Language Processing</li>
        <li>Computer Vision Projects</li>

      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        Career Opportunities
      </h2>

      <p className="mt-4">
        Data Scientists are highly demanded in industries like finance,
        healthcare, e-commerce and technology companies.
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