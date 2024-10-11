"use client";

import Create from '@/app/components/Create';

const ProprietarioForm: React.FC = () => {
    const nome = 'proprietarios'
    const ob = {
        nome: '',
        endereco: '',
        telefone: '',
        email: ''
    };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default ProprietarioForm;