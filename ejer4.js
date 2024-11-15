import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Componente = ({ nombre, descripcion, calificacion, setCalificacion }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-1/3 mx-4">
      <h2 className="text-lg font-bold">{nombre}</h2>
      <p className="text-gray-600">{descripcion}</p>
      <div className="flex items-center mt-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`text-yellow-400 ${i <= calificacion ? '' : 'text-gray-200'}`}
          />
        ))}
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setCalificacion(calificacion + 1)}
      >
        Califica
      </button>
    </div>
  );
};

const App = () => {
  const [calificacion1, setCalificacion1] = useState(1);
  const [calificacion2, setCalificacion2] = useState(1);
  const [calificacion3, setCalificacion3] = useState(1);

  useEffect(() => {
    if (calificacion1 > 5) {
      setCalificacion1(1);
    }
    if (calificacion2 > 5) {
      setCalificacion2(1);
    }
    if (calificacion3 > 5) {
      setCalificacion3(1);
    }
  }, [calificacion1, calificacion2, calificacion3]);

  return (
    <div className="h-screen">
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Contactos
        </a>
        <a href="#" className="hover:text-gray-300">
          Nosotros
        </a>
      </nav>
      <h1 className="text-3xl font-bold text-center mt-4">Inicio</h1>
      <div className="flex justify-center mt-4">
        <Componente
          nombre="Componente 1"
          descripcion="Ofrecemos productos de calidad al mejor precio y ofrecemos asistencia al cliente."
          calificacion={calificacion1}
          setCalificacion={setCalificacion1}
        />
        <Componente
          nombre="Componente 2"
          descripcion="Ofrecemos productos de calidad al mejor precio y ofrecemos asistencia al cliente."
          calificacion={calificacion2}
          setCalificacion={setCalificacion2}
        />
        <Componente
          nombre="Componente 3"
          descripcion="Ofrecemos productos de calidad al mejor precio y ofrecemos asistencia al cliente."
          calificacion={calificacion3}
          setCalificacion={setCalificacion3}
        />
      </div>
    </div>
  );
};

export default App;