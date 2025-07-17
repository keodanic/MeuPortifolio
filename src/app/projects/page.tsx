// app/projects/page.tsx
import ProjectCard from "@/components/projectCard";
import projectsData from "@/data/projects.json";

export const metadata = {
  title: 'Victor Daniel | Projetos',
  description: 'Portfólio profissional com meus projetos.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meus Projetos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto representa um desafio único e soluções criativas
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}