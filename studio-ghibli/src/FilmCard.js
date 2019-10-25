import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

function FilmCard(props) {
  const { title, release_date, description, rt_score } = props.film;
  console.log('FILMCARD', props.film);
  return (
    <>
      <FilmCards>
        <CardContent>
          <Typography color='secondary' gutterBottom>
            Released: {release_date}
          </Typography>
          <Typography variant='h3' component='h2'>
            {title}
          </Typography>
        </CardContent>
      </FilmCards>
    </>
  );
}
export default FilmCard;

const FilmCards = styled(Card)`
  min-width: 275px;
  max-width: 500px;
`;
