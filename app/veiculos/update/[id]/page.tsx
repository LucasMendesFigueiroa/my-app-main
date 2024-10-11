"use client";
import Update from '@/app/components/Update';
interface IUpdateProprietarioParams {
    params: {
        id: string
    }
}

export default function ProprietarioUpdate({ params }: IUpdateProprietarioParams) {

    const nome = 'veiculos'
    const ob = { placa: '', marca: '', modelo: '', ano: 0, proprietarioId: 0 };

    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

