import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@consalud/consalud-ui';

const DatosPersonales: React.FC = () => {
  return (
    <main className="max-w-container mx-auto">

      <nav className="breadcrumb">
        <ul>
          <li>
            <Link to="/">Mi Perfil</Link>
          </li>
          <li>
            <p>Datos Personales</p>
          </li>
        </ul>
      </nav>
      <div className='max-w-lg mx-auto'>

        <h2 className='heading'>Mis datos personales</h2>
        <div className="card">
          <div className="alert alert-info">
            <div className="icon">
              !
            </div>
            Solo puedes editar tu estado civil. Para editar otros datos, realiza
            el cambio por el formulario de contacto. Los cambios tomaran 48hrs.
          </div>

          <label className="label">
            Nombres
            <input
              className="input"
              type="text"
              placeholder="Ingrese sus nombres"
              data-test-id="nombres-input"
            />
          </label>

          <div className="grid grid-2">
            <label className="label">
              Apellido Paterno
              <input
                className="input"
                type="text"
                placeholder="Ingrese sus nombres"
                data-test-id="apellido-paterno-input"
              />
            </label>{' '}
            <label className="label">
              Apellido Materno
              <input
                className="input"
                type="text"
                placeholder="Ingrese sus nombres"
                data-test-id="apellido-materno-input"
              />
            </label>{' '}
            <label className="label">
              Rut
              <input
                className="input"
                type="text"
                placeholder="Ingrese sus nombres"
                data-test-id="rut-input"
              />
            </label>{' '}
            <label className="label">
              Fecha de Nacimiento
              <input
                className="input"
                type="text"
                placeholder="Ingrese sus nombres"
                data-test-id="fecha-nacimiento-input"
              />
            </label>
            <label className="label">
              Sexo
              <input
                className="input"
                type="text"
                placeholder="Ingrese sus nombres"
                data-test-id="sexo-input"
              />
            </label>
            <label className="label">
              Estado Civil
              <input
                className="input"
                type="text"
                placeholder="Ingrese sus nombres"
                data-test-id="estado-civil-input"
              />
            </label>
          </div>
          <Button className="mt-lg mx-auto" data-test-id="datos-personales-guardar-button">Guardar</Button>
        </div>
      </div>

    </main>
  );
};

export default DatosPersonales;
