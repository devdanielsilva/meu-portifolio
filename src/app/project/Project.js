import ProjectCard from "../../components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  // Nome do componente em PascalCase
  const projects = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição do Projeto 1",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Projeto 2",
      description: "Descrição do Projeto 2",
      image: "/images/project2.webp",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <nav className="mb-6">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        <Link href="/about" className="ml-4 text-blue-500 hover:text-blue-700">
          Sobre
        </Link>
        <Link href="/skills" className="ml-4 text-blue-500 hover:text-blue-700">
          Habilidades
        </Link>
        <Link
          href="/contact"
          className="ml-4 text-blue-500 hover:text-blue-700"
        >
          Contato
        </Link>
      </nav>

      <h1 className="text-4xl font-bold">Projetos</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(
          (
            project // Corrigido para projects.map()
          ) => (
            <ProjectCard key={project.id} project={project} />
          )
        )}

        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="rounded-t-lg object-cover"
          priority={index < 2} // Prioriza o carregamento das primeiras imagens
        />

        <Link href={`/projects/${project.id}`}>
          <ProjectCard project={project} />
        </Link>
      </div>
    </div>
  );
}
