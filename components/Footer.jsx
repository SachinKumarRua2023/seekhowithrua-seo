export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 p-10 text-center">

      <h3 className="font-bold text-lg">
        Seekho With Rua
      </h3>

      <p className="mt-2">
        Learn AI, Data Science, Full Stack Development and Game Development.
      </p>

      <div className="mt-6 space-x-4">

        <a href="/data-science-course">Data Science</a>
        <a href="/ai-course">AI Course</a>
        <a href="/game-development">Game Dev</a>
        <a href="/full-stack-development">Full Stack</a>

      </div>

      <p className="mt-6 text-sm">
        © 2026 Seekho With Rua
      </p>

    </footer>
  );
}