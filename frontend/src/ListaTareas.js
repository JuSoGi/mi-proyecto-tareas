import React, { useContext } from 'react';
import { TareasContext } from './TareasContext';

const ListaTareas = () => {
  const { tareas } = useContext(TareasContext);

  return (
    <ul>
      {tareas.map(tarea => (
        <li key={tarea.id}>{tarea.texto}</li>
      ))}
    </ul>
  );
};

export default ListaTareas;
