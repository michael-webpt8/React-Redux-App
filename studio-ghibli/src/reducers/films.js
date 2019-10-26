import {
  FETCH_FILMS_START,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR
} from '../actions/films';

const initialState = {
  films: [],
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        isLoading: false
      };
    case FETCH_FILMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
