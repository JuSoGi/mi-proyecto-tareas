import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// 1. Crear el contexto
export const TareasContext = createContext();

// 2. Crear el proveedor (Provider)
export const TareasProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tareas')
      .then(res => setTareas(res.data))
      .catch(err => console.error(err));
  }, []);

  const agregarTarea = (texto) => {
    if (!texto.trim()) return;

    axios.post('http://localhost:3001/tareas', { texto })
      .then(res => setTareas([...tareas, res.data]))
      .catch(err => console.error(err));
  };

  // 3. El valor que queremos compartir: tareas y agregarTarea
  return (
    <TareasContext.Provider value={{ tareas, agregarTarea }}>
      {children}
    </TareasContext.Provider>
  );
};
