import React from 'react';
import './Home.css';

import { Card } from '../../../../consalud-ui/src/components/Card/Card';
import { Button } from '../../../../consalud-ui/src/components/Button/Button';


const Home: React.FC = () => {
    return (
        <main className="home__container">
            <header>
                <h1>Hola Claudia!</h1>
                <p>Nos encanta que seas parte de Consalud.</p>
            </header>
            <section className='grid-3'>
                <div>
                    <h3>Mis datos personales</h3>
                    <Card>
                        <h4>Claudia Belén Torres Vidal</h4>
                        <p>Compartir datos de salud al titular : Si</p>
                        <hr />
                        <h5><Icon />Datos Personales</h5>
                        <p>RUT: 20.907.687-1 </p>
                        <p>24 años </p>
                        <p>Mujer / Carga Legal</p>
                        <Button variant='secondary'>Editar</Button>
                    </Card>
                    <Card type='button'>
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
                        <Button variant='secondary'>Editar</Button>
                    </Card>
                </div>
                <div>
                    <h3>Más información</h3>
                    <Card type='button'>
                        <Icon />
                        <p>Cuentas bancarias</p>
                    </Card>
                    <Card type='button'>
                        <Icon />
                        <p>Cambiar clave</p>
                    </Card>
                    <Card type='button'>
                        <Icon />
                        <p>Visualización de datos personales</p>
                    </Card>
                    <h3>Mis dispositivos</h3>
                    <Card type='button'>
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
