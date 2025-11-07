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
                        <p>Cambiar Clave</p>
                    </li>
                </ul>
            </nav>
            <section className='max-w-lg mx-auto'>
                <h2 className='heading'>Cambiar Clave</h2>

                <div className='card'>
                    <label className='label'>
                        Clave actual
                        <input className='input' type="password" placeholder='Ingrese su clave actual' data-test-id='clave-actual-input' />
                    </label>
                    <label className='label'>
                        Nueva clave
                        <input className='input' type="password" placeholder='Ingrese su nueva clave' data-test-id='nueva-clave-input' />
                    </label>
                    <label className='label'>
                        Confirmar nueva clave
                        <input className='input' type="password" placeholder='Confirmar nueva clave' data-test-id='confirmar-nueva-clave-input' />
                    </label>
                    <p className='text-muted p-md'>
                        <span>Debe contener 8 caracteres.</span><br />
                        <span>Debe contener letras y números..</span><br />
                    </p>
                    <Button size='medium' className='mx-auto mt-lg' variant='primary' data-test-id='cambiar-clave-guardar-button'>Guardar</Button>
                </div>
            </section>
        </div>
    );
};

export default MisDispositivos;

