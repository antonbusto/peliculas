// El punto de entrada principal de la aplicación
import React from 'react';  
import ReactDOM from 'react-dom/client';  
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Creación del root y renderizado de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medición de rendimiento opcional
reportWebVitals();