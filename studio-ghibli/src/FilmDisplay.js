import React from 'react';
import FilmCard from './FilmCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

function FilmDisplay(props) {
  const { films } = props;
  return (
    <Grid spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing='spacing'>
          {films.map(film => (
            <Grid key={film.id}>
              <FilmPaperCard key={film.id} film={film} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default FilmDisplay;

const FilmCards = styled(FilmCard)`
  min-width: 320px;
`;

const FilmPaperCard = styled(FilmCards)`
  max-width: 650px;
`;
