export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 shadow">

      <a href="/" className="font-bold text-xl">
        Seekho With Rua
      </a>

      <div className="space-x-6">

        <a href="/data-science-course">Data Science</a>
        <a href="/ai-course">AI</a>
        <a href="/full-stack-development">Full Stack</a>
        <a href="/mobile-app-development">Mobile Apps</a>
        <a href="/game-development">Game Dev</a>
        <a href="/iot-robotics">Robotics</a>

      </div>
    </nav>
  );
}