import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Python Developer Course | Django + React",
  description:
    "Learn Full Stack Development using Python, Django, React and Next.js. Build modern web applications with APIs, authentication and databases.",

  keywords: [
    "full stack python developer course",
    "django react course",
    "django next js course",
    "python full stack course",
    "django web development"
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/full-stack-development",
  },

  openGraph: {
    title: "Full Stack Python Developer Course | Seekho With Rua",
    description:
      "Master Full Stack Web Development using Django, React, Next.js and PostgreSQL.",
    url: "https://seekhowithrua.com/full-stack-development",
    type: "website",
  },
};

export default function FullStackDevelopment() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Full Stack Python Developer Course
      </h1>

      <p className="mt-4 text-lg">
        This course teaches how to build modern web applications using
        Python and JavaScript frameworks. You will learn backend
        development with Django and frontend development with React
        and Next.js.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        Technologies You Will Learn
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Python Programming</li>
        <li>Django Backend Development</li>
        <li>REST API Development</li>
        <li>React Frontend Development</li>
        <li>Next.js for Production Applications</li>
        <li>PostgreSQL Database</li>
        <li>Authentication and Deployment</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        Real Projects
      </h2>

      <p className="mt-4">
        Students will build real-world applications such as job portals,
        AI dashboards and SaaS platforms using Django and React.
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