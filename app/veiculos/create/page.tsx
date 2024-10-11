"use client";
import { useState } from 'react';
import apiClient from '../../lib/axios';
import Link from 'next/link';
import Create from '@/app/components/Create';

const ProprietarioForm: React.FC = () => {
    const nome = 'veiculos'
    const ob = { placa: '', marca: '', modelo: '', ano: 0, proprietarioId: 0 };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default ProprietarioForm;