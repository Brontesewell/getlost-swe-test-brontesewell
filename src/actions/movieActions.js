import { MOVIE_SEARCH, FETCH_ALL_MOVIES, LOADING, DELETE_MOVIE } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';


export const turnLoading = () => {
  return {
    type: LOADING
  };
};

export const fetchAllMovies = (subject) => dispatch => {
  axios
  .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${subject}`)
  .then(response =>
    dispatch({ type: FETCH_ALL_MOVIES, data: response.data })
    )
    .catch(err => console.log(err));
};
  

export const movieSearch = (subject) => dispatch => {
  dispatch({ type: MOVIE_SEARCH, data: subject });
};


export const deleteMovie = (movie) => dispatch => {
  dispatch({ type: DELETE_MOVIE, data: movie});
};
  


