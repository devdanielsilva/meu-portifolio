import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <nav className="text-2xl mt-6">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Home{" "}
        </Link>
        <Link href="/about" className="ml-4 text-blue-500 hover:text-blue-700">
          Sobre
        </Link>
        <Link
          href="/projetos"
          className="ml-4 text-blue-500 hover:text-blue-700"
        >
          Projetos
        </Link>
        <Link
          href="/hard-skills"
          className="ml-4 text-blue-500 hover:text-blue-700"
        >
          Habilidades
        </Link>
      </nav>

      <h1 className="text-4xl font-bold mt-8">Contato</h1>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Redes Sociais</h2>
        <div className="flex mt-4">
          <a
            href="https://www.linkedin.com/in/devdanielsilva/"
            className="text-blue-500 hover:text-blue-700 mr-4"
            target="blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/devdanielsilva"
            className="text-blue-500 hover:text-blue-700 mr-4"
            target="blank"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/danielsilva130916/"
            className="text-blue-500 hover:text-blue-700 mr-4"
            target="blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
