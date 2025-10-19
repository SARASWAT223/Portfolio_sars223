export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m [Your Name]</h1>
      <p className="text-xl mb-6">Mechanical Engineer | Web Developer | Innovator</p>
      <a
        href="/resume.pdf"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
