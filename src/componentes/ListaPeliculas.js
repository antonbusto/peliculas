// Este componente carga las películas desde el archivo movies.json y las muestra en la página principal
import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Pagination, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import movies from '../assets/movies.json';

const ListaPeliculas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;
  const navigate = useNavigate();

  // Calcular el número total de páginas
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Obtener las películas que se deben mostrar en la página actual
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        {currentMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 220 }}>
              <CardMedia
                component="img"
                image={`${imageBaseUrl}${movie.poster_path}`}
                alt={movie.title}
                sx={{ height: 330 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {movie.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/pelicula/${movie.id}`)}
                >
                  +Info
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Paginación */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ListaPeliculas;

