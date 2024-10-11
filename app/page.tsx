import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Sistema de Controle de Revisão de Veículos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href='/proprietarios' className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out">
            Proprietários
          </Link>
          <Link href='/veiculos' className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 ease-in-out">
            Veículos
          </Link>
          <Link href='/revisoes' className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 ease-in-out">
            Revisões
          </Link>
          <Link href='/servicos' className="flex items-center justify-center px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 ease-in-out">
            Serviços
          </Link>
          <Link href='/mecanicos' className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-200 ease-in-out">
            Mecânicos
          </Link>
          <Link href='/servicos-mecanicos' className="flex items-center justify-center px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-200 ease-in-out">
            Serviços Mecânicos
          </Link>
        </div>
      </div>
    </div>
  );
}
