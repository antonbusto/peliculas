// Este componente muestra los detalles de la película seleccionada a través de la ruta
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../assets/movies.json';
import { Button, Container, Typography } from '@mui/material';

const DetallesPelicula = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pelicula = movies.find((movie) => movie.id === parseInt(id));

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

  if (!pelicula) {
    return <Typography variant="h5">Película no encontrada</Typography>;
  }

  return (
    <Container style={{ marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        {pelicula.title}
      </Typography>
      
      {/* Imagen de la carátula */}
      <img 
        src={`${imageBaseUrl}${pelicula.poster_path}`} 
        alt={`Carátula de ${pelicula.title}`} 
        style={{ width: '220px', height: '330px', borderRadius: '10px' }}
      />
      
      <Typography variant="body1" paragraph style={{ marginTop: '20px' }}>
        {pelicula.overview}
      </Typography>
      
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        style={{ marginTop: '20px' }}
      >
        Volver a la página principal
      </Button>
    </Container>
  );
};

export default DetallesPelicula;
