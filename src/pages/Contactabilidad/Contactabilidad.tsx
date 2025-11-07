import React from 'react';
import { Link } from 'react-router-dom';

const Contactabilidad: React.FC = () => {
    return (
        <main className="contactabilidad__container">
            <header>
                <h1>Contactabilidad</h1>
                <p>Subtitulo</p>

            </header>
            <nav className='breadcrumb'>
                <ul>
                    <li>
                        <Link to="/">Mi Perfil</Link>
                    </li>
                    <li>
                        <p>Contactabilidad</p>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Contactabilidad;

