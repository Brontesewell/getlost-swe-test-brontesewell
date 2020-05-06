import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  deleteMovie
} from '../actions/movieActions';
import { connect } from 'react-redux';

export class Movie extends Component {


  deleteClick = (event)=> {
    event.preventDefault();
    this.props.deleteMovie(this.props.movie)
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-4">
        <div id="movie-card" className="card card-body text-center h-100 border-secondary">
          <img className="mb-1 w-100" src={movie.Poster} alt="Movie Image" />
          <h5 className="text-dark card-title">
            {movie.Title} ({movie.Year})
          </h5>
          <button className="btn btn-secondary" onClick={this.deleteClick}>
              Delete
            </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: (movie) => dispatch(deleteMovie(movie))
  }
}

export default connect(null, mapDispatchToProps)(Movie);