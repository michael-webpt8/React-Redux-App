import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';

import { connect } from 'react-redux';
import { fetchFilms } from './actions/films';

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
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    films: state.films,
    error: state.error
  };
};

const mapDispatchToProps = {
  fetchFilms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
