import Link from "next/link";
import ProprietarioTable from "../components/ProprietarioTable";
import Sidebar from "../components/SideBar";

// Definindo o tipo para as props de Inicio, se necessário
interface InicioProps {
    name: string; // Adicione outras props conforme necessário
}

const Inicio: React.FC<InicioProps> = (props) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Conteúdo Principal */}
            <div className="flex-1">
                {/* Certifique-se de que ProprietarioTable aceita uma prop `entidade` e está esperando uma string */}
                <ProprietarioTable entidade={props.name} />
                <div className="mt-4 ml-8"> {/* Ajuste a margem à esquerda aqui */}
                    <Link href={`/${props.name}/create`} className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200">
                        Adicionar
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Inicio;