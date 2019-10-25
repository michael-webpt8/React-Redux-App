import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { fetchFilms } from './actions/films';
import FilmDisplay from './FilmDisplay';

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
          <FilmDisplay films={props.films} />
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
