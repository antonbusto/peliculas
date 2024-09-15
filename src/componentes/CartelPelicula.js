// Este componente renderiza el cartel (carátula) de una película con el botón de +Info que redirige a la página de detalles
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CartelPelicula = ({ pelicula }) => {
  const { title, poster_path, overview, id } = pelicula;
  const imageUrl = `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`;

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="330"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview.slice(0, 100)}...
        </Typography>
      </CardContent>
      <Link to={`/pelicula/${id}`}>
        <Button variant="contained" color="primary">
          +Info
        </Button>
      </Link>
    </Card>
  );
};

export default CartelPelicula;
