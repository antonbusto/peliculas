// Archivo de rutas
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListaPeliculas from './componentes/ListaPeliculas';
import DetallesPelicula from './componentes/DetallesPelicula';

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaPeliculas />} />
      <Route path="/pelicula/:id" element={<DetallesPelicula />} />
    </Routes>
  );
};

export default Rutas;
