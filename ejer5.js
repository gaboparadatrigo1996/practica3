import React, { useState } from 'react';
import { User, Calendar, Edit } from 'lucide-react';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [nota, setNota] = useState(0);
  const [errorNota, setErrorNota] = useState(false);
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorFechaNac, setErrorFechaNac] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const edad = calcularEdad(fechaNac);
    if (nombre.trim() === '') {
      setErrorNombre(true);
    } else {
      setErrorNombre(false);
    }
    if (edad < 18) {
      setErrorFechaNac(true);
    } else {
      setErrorFechaNac(false);
    }
    if (nota <= 0 || nota > 100) {
      setErrorNota(true);
    } else {
      setErrorNota(false);
    }
    if (nombre.trim() !== '' && edad >= 18 && nota > 0 && nota <= 100) {
      console.log('Formulario válido');
    }
  };

  const calcularEdad = (fechaNac) => {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(fechaNac);
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    return edad;
  };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)' }}>
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-50 rounded-lg shadow-lg p-8 w-1/2">
          <h2 className="text-3xl font-bold mb-4">REGISTRO</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                NOMBRE
              </label>
              <div className="flex items-center">
                <User className="mr-2" />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              {errorNombre && <p className="text-red-500 text-xs italic">El nombre no puede estar vacío</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaNac">
                FECHA NAC
              </label>
              <div className="flex items-center">
                <Calendar className="mr-2" />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fechaNac"
                  type="date"
                  value={fechaNac}
                  onChange={(e) => setFechaNac(e.target.value)}
                />
              </div>
              {errorFechaNac && <p className="text-red-500 text-xs italic">Debes ser mayor de edad</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nota">
                NOTA
              </label>
              <div className="flex items-center">
                <Edit className="mr-2" />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nota"
                  type="number"
                  value={nota}
                  onChange={(e) => setNota(e.target.valueAsNumber)}
                />
              </div>
              {errorNota && <p className="text-red-500 text-xs italic">La nota debe ser máximo 100</p>}
              <p className="text-red-500 text-xs italic">La nota debe ser máximo 100</p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroForm;