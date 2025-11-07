import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@consalud/consalud-ui';

const Direccion: React.FC = () => {
    return (
        <main className="max-w-container mx-auto">

            <nav className='breadcrumb'>
                <ul>
                    <li>
                        <Link to="/">Mi Perfil</Link>
                    </li>
                    <li>
                        <p>Mi Direccion</p>
                    </li>
                </ul>
            </nav>
            <section className='max-w-lg mx-auto'>

                <h2 className='heading '>Mi Direccion</h2>
                <div className="card ">

                    <label className='label'>
                        Región
                        <select className='input' data-test-id='region-select'>
                            <option value="1">Región Metropolitana</option>
                            <option value="2">Región de Antofagasta</option>
                            <option value="3">Región de Atacama</option>
                            <option value="4">Región de Coquimbo</option>
                            <option value="5">Región de Valparaíso</option>
                            <option value="6">Región de O'Higgins</option>
                            <option value="7">Región de Maule</option>
                            <option value="8">Región de Biobío</option>
                            <option value="9">Región de Araucanía</option>
                            <option value="10">Región de Los Lagos</option>
                        </select>
                    </label>

                    <div className='grid grid-2 '>
                        <label className='label'>
                            Comuna
                            <input className='input' type="text" placeholder='Las Condes' data-test-id='comuna-input' />
                        </label> <label className='label'>
                            Ciudad
                            <input className='input' type="text" placeholder='Santiago' data-test-id='ciudad-input' />
                        </label> <label className='label'>
                            Calle
                            <input className='input' type="text" placeholder='Alsaica' data-test-id='calle-input' />
                        </label> <label className='label'>
                            Número
                            <input className='input' type="text" placeholder='1456' data-test-id='numero-input' />
                        </label>
                        <label className='label'>
                            Depto
                            <input className='input' type="text" placeholder='7' data-test-id='depto-input' />
                        </label>
                        <label className='label'>
                            Block
                            <input className='input' type="text" placeholder='A' data-test-id='block-input' />
                        </label>
                        <label className='label'>
                            Villa (Opcional)
                            <input className='input' type="text" placeholder='Las Condes' data-test-id='villa-input' />
                        </label>
                        <label className='label'>
                            Casilla de Correo (Opcional)
                            <input className='input' type="text" placeholder='info@consalud.cl' data-test-id='casilla-input' />
                        </label>
                    </div>
                    <Button className='mt-lg mx-auto' data-test-id='direccion-guardar-button'>Guardar</Button>
                </div>
            </section>

        </main>
    );
};

export default Direccion;

