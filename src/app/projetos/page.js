import Image from "next/image";
import Link from "next/link";

export default function Projetos() {
  return (
    <div className="tudo">
      <div className="min-h-screen p-8 bg-gray-100">
        <nav className="text-2xl mt-6">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Home{" "}
          </Link>
          <Link
            href="/about"
            className="ml-4 text-blue-500 hover:text-blue-700"
          >
            {" "}
            Sobre
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

        <h1 className="text-center mt-6 text-4xl font-bold">Meus Projetos</h1>

        <a
          href="https://github.com/devdanielsilva/galeria-fotografica"
          target="blank"
        >
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6 w-full h-100 object-cover flex flex-col items-center justify-center">
            <div>
              <Image
                src="/Galeriadefotográfia.png"
                alt="Projeto 1"
                width="500"
                height="200"
              />
              <h2 className="text-2xl font-bold text-center mt-2">
                Galeria Responsiva
              </h2>
              <p className="font-bold text-center mt-6">HTML5 & CSS3</p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/devdanielsilva/Formulario-de-Checkout-para-Pagamentos"
          target="blank"
        >
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6 w-full h-100 object-cover flex flex-col items-center justify-center">
            <div>
              <Image
                src="/FormulariodeCheckoutparaPagamentos.png"
                alt="Projeto 1"
                width="500"
                height="200"
              />
              <h2 className="text-2xl font-bold text-center mt-2">
                Formulario de Checkout para Pagamentos
              </h2>
              <p className="font-bold text-center mt-6">HTML5 & CSS3</p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/devdanielsilva/Pizzaria-Novais"
          target="blank"
        >
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6 w-full h-100 object-cover flex flex-col items-center justify-center">
            <div>
              <Image
                src="/Website.png"
                alt="Projeto 1"
                width="500"
                height="200"
              />
              <h2 className="text-2xl font-bold text-center mt-2">
                Web Site para E-commerce
              </h2>
              <p className="font-bold text-center mt-6">HTML5 & CSS3</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
