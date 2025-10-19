import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-2">{p.tagline}</p>
            <p className="text-sm text-gray-500">{p.techStack}</p>
            <a href={p.github} target="_blank" className="text-blue-600 underline mt-2 inline-block">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
