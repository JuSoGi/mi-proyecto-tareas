import React, { useState, useContext } from 'react';
import { TareasContext } from './TareasContext';

const FormularioTarea = () => {
  const [texto, setTexto] = useState('');
  const { agregarTarea } = useContext(TareasContext);

  const manejarSubmit = (e) => {
    e.preventDefault();
    agregarTarea(texto);
    setTexto('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        style={{ padding: 8, width: 300 }}
      />
      <button type="submit" style={{ marginLeft: 10, padding: 8 }}>
        Agregar
      </button>
    </form>
  );
};

export default FormularioTarea;
