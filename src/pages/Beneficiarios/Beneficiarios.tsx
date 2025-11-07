import { Card, Button } from '@consalud/consalud-ui';
import React from 'react';
import { Link } from 'react-router-dom';

const MisDispositivos: React.FC = () => {
    return (
        <main >
            <header className='hero'>
                <h1>Mis Beneficiarios</h1>
                <p>Subtitulo</p>

            </header>
            <nav className='breadcrumb'>
                <ul>
                    <li>
                        <Link to="/">Mi Perfil</Link>
                    </li>
                    <li>
                        <p>Mis Beneficiarios</p>
                    </li>
                </ul>
            </nav>
            <section className='grid max-w-container mx-auto'>
                <h3>Mis Beneficiarios</h3>

                <Card className='text-center justify-center items-center'>
                    <h4>No tienes beneficiarios</h4>
                    <p>Actualmente tu plan no contempla cargas. <br /> Si lo necesitas, puedes agregar beneficiarios a tu plan de salud.</p>
                    <Button size='small' variant='primary' data-test-id='beneficiarios-add-button'>Agregar beneficiario</Button>
                </Card>
            </section>
        </main>
    );
};

export default MisDispositivos;

