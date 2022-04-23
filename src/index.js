import React from 'react';
import { createRoot } from 'react-dom/client';
import { ClinicApp } from './ClinicApp';
import { Login } from './pages/login/Login';



//let componente;
//localStorage.getItem('jwt') ? componente = <ClinicApp/> : componente = <Login />;



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ClinicApp/>);