import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DatosPersonales from '../pages/DatosPersonales';
import Contactabilidad from '../pages/Contactabilidad';
import CambiarClave from '../pages/CambiarClave';
import Direccion from '../pages/Direccion';
import Beneficiarios from '../pages/Beneficiarios';
import Datos from '../pages/Datos';
import MisDispositivos from '../pages/MisDispositivos';

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/datos-personales',
        element: <DatosPersonales />,
    },
    {
        path: '/contactabilidad',
        element: <Contactabilidad />,
    },
    {
        path: '/cambiar-clave',
        element: <CambiarClave />,
    },
    {
        path: '/direccion',
        element: <Direccion />,
    },
    {
        path: '/beneficiarios',
        element: <Beneficiarios />,
    },
    {
        path: '/datos',
        element: <Datos />,
    },

    {
        path: '/mis-dispositivos',
        element: <MisDispositivos />,
    },
];

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};

