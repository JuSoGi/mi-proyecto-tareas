import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TareasProvider } from './TareasContext';
import Inicio from './Inicio';
import Acerca from './Acerca';
import Contacto from './Contacto';

function App() {
  return (
    <TareasProvider>
      <Router>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 10 }}>Inicio</Link>
          <Link to="/acerca" style={{ marginRight: 10 }}>Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </TareasProvider>
  );
}

export default App;
