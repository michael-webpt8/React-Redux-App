import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { fetchFilms } from './actions/films';
import FilmCard from './FilmCard';

function App(props) {
  const { fetchFilms } = props;
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <>
      <CssBaseline />
      <div className='App bg-sky'>
        <h1>Studio Ghibli</h1>

        {props.error && <p>Error: {props.error}</p>}

        {props.isLoading ? (
          <CircularProgress color='secondary' />
        ) : (
          props.films.map(film => <FilmCard film={film} key={film.id} />)
        )}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.films.isLoading,
    films: state.films.films,
    error: state.films.error
  };
};

const mapDispatchToProps = {
  fetchFilms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
