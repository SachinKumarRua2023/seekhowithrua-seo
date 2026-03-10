import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Learning Course | Learn ML with Python",
  description:
    "Learn Machine Learning using Python. Build models using Scikit-learn, TensorFlow and real-world datasets with Seekho With Rua.",

  keywords: [
    "machine learning course",
    "machine learning with python",
    "ml course",
    "learn machine learning",
    "machine learning training"
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/machine-learning-course",
  },

  openGraph: {
    title: "Machine Learning Course | Seekho With Rua",
    description:
      "Master Machine Learning with Python, Scikit-learn and real-world projects.",
    url: "https://seekhowithrua.com/machine-learning-course",
    type: "website",
  },
};

export default function MachineLearningCourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Machine Learning Course
      </h1>

      <p className="mt-4 text-lg">
        This Machine Learning program teaches how computers learn
        from data using algorithms and statistical models.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        What You Will Learn
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Introduction to Machine Learning</li>
        <li>Supervised Learning Algorithms</li>
        <li>Unsupervised Learning Techniques</li>
        <li>Feature Engineering</li>
        <li>Model Evaluation</li>
        <li>Scikit-learn Implementation</li>
        <li>Machine Learning Projects</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        Career Opportunities
      </h2>

      <p className="mt-4">
        Machine Learning Engineers are required in industries
        like fintech, healthcare, autonomous systems and AI research.
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