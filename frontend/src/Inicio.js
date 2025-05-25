import React from 'react';
import FormularioTarea from './FormularioTarea';
import ListaTareas from './ListaTareas';

const Inicio = () => {
  return (
    <div>
      <h2>Página principal</h2>
      <FormularioTarea />
      <ListaTareas />
    </div>
  );
};

export default Inicio;
