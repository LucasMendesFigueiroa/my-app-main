"use client";
import Update from '@/app/components/Update';
interface IUpdateMecanicoParams {
    params: {
        id: string
    }
}

export default function MecanicoUpdate({ params }: IUpdateMecanicoParams) {

    const nome = 'mecanicos'
    const ob = {
        nome: '',
        especialidade: '',
        telefone: '',
        email: ''
    };

    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

