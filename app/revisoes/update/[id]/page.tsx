"use client";
import Update from '@/app/components/Update';
interface IUpdateRevisoesParams {
    params: {
        id: string
    }
}

export default function RevisoesUpdate({ params }: IUpdateRevisoesParams) {

    const nome = 'revisoes'
    const ob = {
        veiculoId: 0,
        data: Date,
        km: 0,
        observacoes: ''
    };


    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

