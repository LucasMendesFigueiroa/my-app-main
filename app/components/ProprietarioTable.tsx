"use client";
import React, { useEffect, useState } from 'react';
import apiClient from '../lib/axios';
import Link from 'next/link';
import { format } from 'date-fns';
const ProprietarioList: React.FC = ({ entidade }) => {
    const [entidades, setEntidades] = useState([]);

    useEffect(() => {
        apiClient.get(`/${entidade}`)
            .then(response => setEntidades(response.data))
            .catch(error => console.error(error));
    }, []);
    function formatarData(dataString) {
        return format(new Date(dataString), 'dd/MM/yyyy HH:mm:ss');
    }
    function isStringADate(data: string): boolean {
        const parsedDate = Date.parse(data);
        return !isNaN(parsedDate);
    }
    const handleDelete = (id) => {
        apiClient.delete(`/${entidade}/${id}`)
            .then(() => {
                setEntidades(entidades.filter(entity => entity.id !== id));
            })
            .catch(error => console.error(error));
    };

    const colunas = entidades.length > 0 ? [...Object.keys(entidades[0]), 'Ações'] : [];

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-semibold my-4">Lista de {entidade}</h1>
            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        {colunas.map((coluna) => (
                            <th key={coluna} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {coluna}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {entidades.map((entity) => (
                        <tr key={entity.id}>
                            {Object.keys(entity).map((coluna) => (
                                <td key={`${entity.id}-${coluna}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {coluna !== 'id' && typeof entity[coluna] !== 'number' && isStringADate(entity[coluna]) ? formatarData(entity[coluna]) : entity[coluna]}
                                </td>
                            ))}
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex items-center justify-center space-x-2">
                                    <Link href={`/${entidade}/update/${entity.id}`} className="text-blue-600 hover:text-blue-900">

                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L12 21H7v-5L16.732 3.732z" /></svg>
                                    </Link>
                                    <button onClick={() => handleDelete(entity.id)} className="text-red-600 hover:text-red-900">

                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProprietarioList;