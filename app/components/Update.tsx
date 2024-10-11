import Link from 'next/link';
import { useEffect, useState } from 'react';
import apiClient from '../lib/axios';
import { getById } from '../repository/Repository';

interface IUpdateUpdateParams {
    params: {
        nome: string,
        value: object,
        id: string
    }
}
const Update = ({ params }: IUpdateUpdateParams) => {
    const nome = params.nome;
    // const titulo = [...Object.typ(params.value)];
    const titulo2 = [...Object.keys(params.value)];
    const [formData, setFormData] = useState<Record<string, string | number | Date>>({}); // Cria a instância de navigate

    useEffect(() => {

        // getAllEstados()
        //     .then(data => setEstados(data))
        //     .catch(error => console.error(error))

        getById(params.id, nome)
            .then(data => {
                const newElement: Record<string, string> = {}
                titulo2.forEach((element) => {
                    newElement[element] = data[element]
                })
                setFormData(newElement)
            });



    }, [params])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const getInputType = (value) => {
        // Verifica se o valor é numérico
        if (!isNaN(value) && value.trim() !== '') {
            return 'number';
        }
        // Verifica se o valor pode ser uma data
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
            return 'date';
        }
        // Verifica se o valor é um e-mail
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return 'email';
        }
        // Verifica se o valor é um telefone (formato muito básico)
        if (/^\+?(\d.*){3,}$/.test(value)) {
            return 'tel';
        }
        // Verifica se o valor é uma URL
        if (/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value)) {
            return 'url';
        }
        // Tipo padrão
        return 'text';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const paramsValueStructure = params.value;

        const formattedData = Object.entries(paramsValueStructure).reduce((acc, [key, value]) => {
            if (typeof value === 'number') {
                acc[key] = formData.hasOwnProperty(key) ? parseFloat(formData[key]) : value;
            } else {
                acc[key] = formData.hasOwnProperty(key) ? formData[key] : value;
            }
            return acc;
        }, {});


        apiClient.patch(`/${nome}/${params.id}`, formattedData)
            .then(response => {
                console.log(response.data);
                // Volta para a tela anterior após a criação
            })
            .catch(error => console.error(error));
    };
    const colunas = [...Object.entries(formData)];
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Criar </h2>
            {colunas.map((coluna) => (
                <div key={coluna[0]}>
                    <label htmlFor={coluna[0]} className="block text-sm font-medium ">{coluna[0]}</label>
                    <input type={getInputType(coluna[1])} className="border-2 border-gray-200  text-black p-2 w-full" name={coluna[0]} placeholder={coluna[0]} onChange={handleChange} value={coluna[1]} />
                </div>
            ))}

            <div className="flex justify-end">
                <Link href={`/${nome}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Voltar
                </Link>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                    Criar

                </button>

            </div>
        </form>
    );
};

export default Update;