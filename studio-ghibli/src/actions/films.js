import axios from 'axios';

export const FETCH_FILMS_START = 'FETCH_FILMS_START';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';

const BASE_URL = 'https://ghibliapi.herokuapp.com';

export function fetchFilms() {
  return dispatch => {
    dispatch({ type: FETCH_FILMS_START });

    axios
      .get(BASE_URL + '/films')
      .then(res => {
        dispatch({ type: FETCH_FILMS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FILMS_ERROR, payload: err });
      });
  };
}
