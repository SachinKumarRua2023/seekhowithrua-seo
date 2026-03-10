import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Course | HTML CSS JavaScript React",
  description:
    "Learn Web Development from beginner to advanced. Build modern websites using HTML, CSS, JavaScript, React and backend APIs.",
  keywords: [
    "web development course",
    "learn web development",
    "frontend development course",
    "html css javascript course"
  ],
  alternates: {
    canonical: "https://seekhowithrua.com/courses/web-development-course",
  },
  openGraph: {
    title: "Web Development Course | Seekho With Rua",
    description:
      "Master modern website development with real projects.",
    url: "https://seekhowithrua.com/courses/web-development-course",
    type: "website",
  },
};

export default function WebDevelopmentCourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Web Development Course</h1>

      <p className="mt-4 text-lg">
        Learn how to build modern websites and web applications using modern web technologies.
      </p>

      <h2 className="text-2xl font-semibold mt-10">What You Will Learn</h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>HTML and CSS Fundamentals</li>
        <li>JavaScript Programming</li>
        <li>Responsive Web Design</li>
        <li>React Frontend Development</li>
        <li>API Integration</li>
        <li>Deploying Websites</li>
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