"use client";
import Update from '@/app/components/Update';
interface IUpdateServicosMecanicosParams {
    params: {
        id: string
    }
}

export default function ServicosMecanicosUpdate({ params }: IUpdateServicosMecanicosParams) {

    const nome = 'servicos-mecanicos'
    const ob = {
        servicoId: 0,
        mecanicoId: 0
    };
    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

