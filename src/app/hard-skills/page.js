import Link from "next/link";

export default function hardskills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Visual Studio Code",
    "Laravel",
    "Figma",
  ];

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
          href="/contact"
          className="ml-4 text-blue-500 hover:text-blue-700"
        >
          Contato
        </Link>
      </nav>

      <h1 className="text-4xl font-bold mt-6">Habilidades</h1>
      <ul className="mt-6">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg mt-2">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
