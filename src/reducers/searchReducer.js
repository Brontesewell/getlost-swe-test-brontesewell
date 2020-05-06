import {
  MOVIE_SEARCH,
  FETCH_ALL_MOVIES,
  LOADING,
  DELETE_MOVIE
} from '../actions/types';

const initialState = {
  subject: '',
  movies: [],
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {

    case MOVIE_SEARCH:
      return { ...state, subject: action.data, loading: false };

    case FETCH_ALL_MOVIES:
      return { ...state, movies: action.data, loading: false };

    case LOADING:
      return { ...state, loading: true };

    case DELETE_MOVIE:
      const deletedArray = state.movies.Search.filter(m => m !== action.data)
      return {...state, movies: {...state.movies, Search: deletedArray}}

    default:
      return state;
  }
}
