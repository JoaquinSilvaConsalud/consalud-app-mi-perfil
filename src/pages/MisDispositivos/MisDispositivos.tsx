import { Button } from '@consalud/consalud-ui';
import React from 'react';
import { Link } from 'react-router-dom';

const MisDispositivos: React.FC = () => {
    return (
        <div className='max-w-container mx-auto'>
            <nav className='breadcrumb'>
                <ul>
                    <li>
                        <Link to="/">Mi Perfil</Link>
                    </li>
                    <li>
                        <p>Dispositivos Vinculados</p>
                    </li>
                </ul>
            </nav>
            <section className='max-w-lg mx-auto'>
                <h2 className='heading '>Dispositivos vinculados</h2>

                <div className='card text-center  items-center'>
                    <h4>No registras dispositivos</h4>
                    <p>No hay dispositivos vinculados para iniciar sesión con tu huella</p>
                    <Button size='small' variant='primary' data-test-id='registrar-huella-button'>Registrar huella</Button>
                </div>
            </section>
        </div>
    );
};

export default MisDispositivos;

