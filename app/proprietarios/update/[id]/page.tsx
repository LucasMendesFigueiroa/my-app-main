"use client";
import Update from '@/app/components/Update';
interface IUpdateProprietarioParams {
    params: {
        id: string
    }
}

export default function ProprietarioUpdate({ params }: IUpdateProprietarioParams) {
    const nome = 'proprietarios'
    const ob = {
        nome: '',
        endereco: '',
        telefone: '',
        email: ''
    };

    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

