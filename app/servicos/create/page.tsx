"use client";

import Create from '@/app/components/Create';

const ServicosForm: React.FC = () => {
    const nome = 'servicos'
    const ob = {
        revisaoId: 0,
        descricao: '',
        custo: 0
    };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default ServicosForm;