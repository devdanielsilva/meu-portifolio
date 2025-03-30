import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <nav className="text-2xl mt-6">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Home
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
      <h1 className="text-3xl font-bold text-center mt-8">
        Olá, eu sou Daniel Silva Santos!
      </h1>
      <p className="mt-4 text-lg">
        Eu sou apaixonado por tecnologia desde pequeno. Gosto de adquirir
        conhecimentos novos, sou muito determinado para realizar minhas tarefas,
        sou muito esforçado em tudo o que eu faço, tenho criatividade para
        realizar tarefas complexas. Sou muito observador e tenho facilidade no
        relacionamento interpessoal.
      </p>

      <h2 className="text-2xl font-bold text-center mt-6">Experiência</h2>
      <p className="mt-4 text-lg">
        Na faculdade eu desenvolvi 2 projeto de e-commerce, 1 com Laravel para
        web e 1 com Android Studio com Kotlin, para dispoitivos móveis.
      </p>
    </div>
  );
}
