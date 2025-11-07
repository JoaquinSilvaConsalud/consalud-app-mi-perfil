import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@consalud/consalud-ui';


const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <main className="w-full ">
            <header className='hero'>
                <h1>Hola Claudia!</h1>
                <p>Nos encanta que seas parte de Consalud.</p>
            </header>

            <section className='grid grid-3 max-w-container mx-auto mt-lg'>
                <div>
                    <h3 className='hidden md:block'>Mis datos personales</h3>
                    <Card>
                        <h4>Claudia Belén Torres Vidal</h4>
                        <p>Compartir datos de salud al titular : Si</p>
                        <hr />
                        <h5><Icon />Datos Personales</h5>
                        <p>RUT: 20.907.687-1 </p>
                        <p>24 años </p>
                        <p>Mujer / Carga Legal</p>
                        <Button variant='secondary' size='medium' className='ml-auto' onClick={() => navigate('/datos-personales')} data-test-id='datos-personales-editar-button'>Editar</Button>
                    </Card>
                    <Card type='button' className='text-secondary' data-test-id='conoce-plan-card'>
                        <Icon />
                        <p>Conoce tu plan</p>
                    </Card>
                </div>
                <div>
                    <h3>Mis datos personales</h3>
                    <Card>
                        <h4><Icon /> Dirección</h4>
                        <p>Avenida Condell 707, Dep. 72,
                            Providencia, Región Metropolitana</p>
                        <hr />
                        <h5><Icon />Contacto</h5>
                        <p>clauditabelen.torres@gmail.com
                        </p>
                        <p>9 93892416 </p>
                        <Button variant='secondary' size='medium' className='ml-auto' onClick={() => navigate('/direccion')} data-test-id='direccion-editar-button'>Editar</Button>
                    </Card>
                </div>
                <div>
                    <h3>Más información</h3>
                    <Card type='button' onClick={() => navigate('/cuentas-bancarias')} data-test-id='cuentas-bancarias-card'>
                        <Icon />
                        <p>Cuentas bancarias</p>
                    </Card>
                    <Card type='button' onClick={() => navigate('/cambiar-clave')} data-test-id='cambiar-clave-card'>
                        <Icon />
                        <p>Cambiar clave</p>
                    </Card>
                    <Card type='button' onClick={() => navigate('/visualizacion-de-datos-personales')} data-test-id='visualizacion-datos-card'>
                        <Icon />
                        <p>Visualización de datos personales</p>
                    </Card>
                    <h3>Mis dispositivos</h3>
                    <Card type='button' onClick={() => navigate('/mis-dispositivos')} data-test-id='mis-dispositivos-card'>
                        <Icon />
                        <p>Dispositivos vinculados</p>
                    </Card>
                </div>

            </section>
        </main>
    );
};


const Icon = () => {
    return <span className='icon' />
}
export default Home;
