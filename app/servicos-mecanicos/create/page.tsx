"use client";
import { useState } from 'react';
import apiClient from '../../lib/axios';
import Link from 'next/link';
import Create from '@/app/components/Create';

const ServicosMecanicosForm: React.FC = () => {
    const nome = 'servicos-mecanicos'
    const ob = {
        servicoId: 0,
        mecanicoId: 0
    };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default ServicosMecanicosForm;