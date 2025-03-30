import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="tudo">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center min-h-screen flex flex-col items-center justify-center">
          <a href="https://www.instagram.com/danielsilva130916/" target="blank">
            <Image
              src="/eu.jpg"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full"
            />
          </a>
          <h1 className="text-5xl font-bold mt-4">Daniel Silva Santos</h1>
          <p className="text-3xl mt-2">Desenvolvedor Web</p>
          <nav className="text-2xl mt-6">
            <Link href="/about" className="text-blue-500 hover:text-blue-700">
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
            <Link
              href="/contact"
              className="ml-4 text-blue-500 hover:text-blue-700"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
