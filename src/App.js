// El archivo principal de la aplicación, donde definimos las rutas y mostramos las diferentes páginas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './rutas'; // Importamos las rutas

function App() {
  return (
    <Router>
      {/* Aquí renderizamos las rutas definidas en el archivo rutas.js */}
      <Rutas />
    </Router>
  );
}

export default App;
