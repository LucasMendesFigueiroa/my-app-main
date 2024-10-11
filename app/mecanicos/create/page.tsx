"use client";
import Create from '@/app/components/Create';

const MecanicoForm: React.FC = () => {
    const nome = 'mecanicos'
    const ob = {
        nome: '',
        especialidade: '',
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

export default MecanicoForm;