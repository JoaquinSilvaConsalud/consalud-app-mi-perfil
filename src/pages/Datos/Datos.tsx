import React from 'react';
import { Link } from 'react-router-dom';

const Datos: React.FC = () => {
    return (
        <main className="datos__container">
            <header>
                <h1>Datos</h1>
                <p>Subtitulo</p>

            </header>
            <nav className='breadcrumb'>
                <ul>
                    <li>
                        <Link to="/">Mi Perfil</Link>
                    </li>
                    <li>
                        <p>Datos</p>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Datos;

