"use client";
import Update from '@/app/components/Update';
interface IUpdateServicosParams {
    params: {
        id: string
    }
}

export default function ServicosUpdate({ params }: IUpdateServicosParams) {

    const nome = 'servicos'
    const ob = {
        revisaoId: 0,
        descricao: '',
        custo: 0
    };
    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

