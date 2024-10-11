"use client";

import Create from '@/app/components/Create';

const RevisoesForm: React.FC = () => {
    const nome = 'revisoes'
    const ob = {
        veiculoId: 0,
        data: Date,
        km: 0,
        observacoes: ''
    };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default RevisoesForm;