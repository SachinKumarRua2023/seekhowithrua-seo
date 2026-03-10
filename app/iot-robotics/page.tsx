import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT and Robotics Course | Build Smart Devices",
  description:
    "Learn Internet of Things and Robotics. Build smart devices, automation systems and robotics projects.",
  keywords: [
    "iot course",
    "robotics course",
    "internet of things training",
    "learn robotics"
  ],
  alternates: {
    canonical: "https://seekhowithrua.com/courses/iot-robotics",
  },
  openGraph: {
    title: "IoT and Robotics Course | Seekho With Rua",
    description:
      "Build smart devices, automation systems and robotics projects.",
    url: "https://seekhowithrua.com/courses/iot-robotics",
    type: "website",
  },
};

export default function IotRoboticsCourse() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">IoT and Robotics Course</h1>

      <p className="mt-4 text-lg">
        Learn how to build smart devices, automation systems and robotics applications.
      </p>

      <h2 className="text-2xl font-semibold mt-10">What You Will Learn</h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Introduction to IoT</li>
        <li>Robotics Fundamentals</li>
        <li>Sensors and Microcontrollers</li>
        <li>Smart Automation Projects</li>
        <li>IoT Cloud Integration</li>
        <li>Robotics Programming</li>
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